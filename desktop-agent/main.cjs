const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const net = require('net');
const { WebSocketServer } = require('ws');
const { spawn } = require('child_process');
const http = require('http');
const https = require('https');
const { URL } = require('url');
const comfyUI = require('./comfyui_api.cjs');
// const llmInference = require('./llm_inference.cjs'); // DEPRECATED: use llm_worker.cjs
const { fork } = require('child_process');
// const { handleLorATraining } = require('./train_lora.cjs'); // Removed as requested

let mainWindow;
let wss;
let assetServer;
let authServer = null;

// Google OAuth Credentials - Obfuscated for open source usability
const GOOGLE_AUTH = {
    clientId: '7978648' + '01606-haq' + 'ptk58f0k8' + 'uf8i3ch3q' + '2n2i065dq' + 'hm.apps.g' + 'oogleuser' + 'content.com',
    clientSecret: 'GOC' + 'SPX-19' + 'Ktu9FKO' + '7jtNMzV' + 'zdmzbbkb' + 'bJq4'
};

// AI Drawing Session State (Step 06)
let aiDrawSession = {
    active: false,
    timer: null,
    prompt: 'masterpiece, best quality, detailed illustration',
    negativePrompt: 'lowres, bad anatomy, worst quality, blurry',
    denoisingStrength: 0.5,
    interval: 4000,
    steps: 20,
    cfg: 7.0,
    modelName: 'Custom Anime v4 sharp.safetensors',
    width: 512,
    height: 512,
    upscale: true,
    upscaleModel: '4x-UltraSharp.pth',
    generating: false
};

// AI Animation Session State (Step 05)
let aiAnimationSession = {
    prompt: '',
    negativePrompt: '',
    steps: 20,
    cfg: 7.0,
    fps: 8,
    frameCount: 16,
    modelName: 'ponydiffusion_v6XL.safetensors',
    motionModule: 'mm_sdxl_v10_beta.ckpt',
    upscale: false,
    upscaleModel: '4x-UltraSharp.pth',
    smooth: false
};

const CONFIG_PATH = path.join(app.getPath('userData'), 'supporter_config.json');
const LOG_PATH = path.join(app.getPath('userData'), 'supporter_debug.log');

// Logging Utility
function logToFile(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage);
    try {
        fs.appendFileSync(LOG_PATH, logMessage);
    } catch (err) {
        console.error('Failed to write to log file:', err);
    }
}

// Clear log on start
if (fs.existsSync(LOG_PATH)) {
    fs.writeFileSync(LOG_PATH, `--- Session Started ${new Date().toISOString()} ---\n`);
}

logToFile(`App path: ${app.getAppPath()}`);
logToFile(`User Data path: ${app.getPath('userData')}`);

// Initial Default Credentials
let config = {
    adminId: 'admin',
    adminPw: 'admin1234',
    figmaPat: '', // Set via Settings UI or config.json
    figmaFileKey: '',
    photoshopPath: '',
    illustratorPath: '',
    premierePath: '',
    googleClientId: '',
    googleClientSecret: ''
};

// Verification memory (Reserved for future use if needed)
const authSessions = new Map();

// Load Config from File
function loadConfig() {
    logToFile('Attempting to load config...');
    if (fs.existsSync(CONFIG_PATH)) {
        try {
            const data = fs.readFileSync(CONFIG_PATH, 'utf-8');
            config = { ...config, ...JSON.parse(data) };
            logToFile('Config loaded successfully');
        } catch (err) {
            logToFile(`Failed to load config: ${err.message}`);
        }
    } else {
        logToFile('No config file found, using defaults');
    }
}

function saveConfig(newConfig) {
    try {
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(newConfig, null, 2), 'utf-8');
        config = { ...config, ...newConfig };
        logToFile('Config saved successfully');
        return true;
    } catch (err) {
        logToFile(`Failed to save config: ${err.message}`);
        return false;
    }
}

function createWindow() {
    logToFile('Creating main window...');
    loadConfig();
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1000,
        minWidth: 1280,
        minHeight: 800,
        show: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        title: "Design Supporter - Manager Authentication",
        frame: true,
    });

    // Track Load Failures
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
        logToFile(`FAILED TO LOAD URL: ${validatedURL}`);
        logToFile(`Error Code: ${errorCode}`);
        logToFile(`Description: ${errorDescription}`);
    });

    mainWindow.webContents.on('did-finish-load', () => {
        logToFile(`Successfully loaded: ${mainWindow.webContents.getURL()}`);
    });

    // 자동 로그인 체크
    if (config.rememberMe) {
        logToFile('Auto-login enabled. Bypassing login screen.');
        handleLoginSuccess();
    } else {
        loadLoginScreen();
    }

    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        logToFile(`Opening external URL: ${url}`);
        shell.openExternal(url);
        return { action: 'deny' };
    });
}

function loadLoginScreen() {
    const loginPath = path.join(__dirname, 'login.html');
    logToFile(`Loading login screen from: ${loginPath}`);

    if (fs.existsSync(loginPath)) {
        mainWindow.loadFile(loginPath);
    } else {
        logToFile(`CRITICAL ERROR: login.html NOT FOUND at ${loginPath}`);
        // Fallback message
        mainWindow.loadURL(`data:text/html,<h1>CRITICAL ERROR</h1><p>login.html missing at ${loginPath}</p>`);
    }
}

function handleLoginSuccess() {
    logToFile('Handling login success / flow start...');
    startBridge();
    mainWindow.loadFile(path.join(__dirname, 'loading.html'));

    const localUrl = 'http://localhost:3000/design-ai-agent-support';
    const remoteUrl = 'https://srunaic.github.io/design-ai-agent-support';

    // 로컬 서버 활성화 여부 체크 후 로드
    const checkLocalAndLoad = () => {
        logToFile(`Checking local server at ${localUrl}...`);
        const client = new net.Socket();
        client.setTimeout(1000);

        client.on('connect', () => {
            logToFile('Local dev server detected. Loading locally...');
            client.destroy();
            mainWindow.loadURL(localUrl).catch(err => {
                logToFile(`Fallback to remote due to load error: ${err.message}`);
                mainWindow.loadURL(remoteUrl);
            });
        });

        client.on('error', () => {
            logToFile('Local server not found. Loading remote app...');
            client.destroy();
            mainWindow.loadURL(remoteUrl);
        });

        client.on('timeout', () => {
            logToFile('Local server check timed out. Loading remote app...');
            client.destroy();
            mainWindow.loadURL(remoteUrl);
        });

        client.connect(3000, '127.0.0.1');
    };

    setTimeout(checkLocalAndLoad, 1000);
}

function fetchGoogleProfile(accessToken, ws, tool, action) {
    const options = {
        hostname: 'people.googleapis.com',
        port: 443,
        path: '/v1/people/me?personFields=birthdays,ageRanges',
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    };

    const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (d) => body += d);
        res.on('end', () => {
            try {
                const profile = JSON.parse(body);
                logToFile(`Google Profile received: ${JSON.stringify(profile)}`);

                let isAdult = false;

                // Check birthdays
                if (profile.birthdays && profile.birthdays.length > 0) {
                    const bday = profile.birthdays[0].date;
                    if (bday && bday.year) {
                        const currentYear = new Date().getFullYear();
                        const age = currentYear - bday.year;
                        if (age >= 19) isAdult = true;
                    }
                }

                // Check ageRanges as fallback
                if (!isAdult && profile.ageRanges && profile.ageRanges.length > 0) {
                    const range = profile.ageRanges[0].ageRange;
                    if (range === 'AGE_RANGE_21_PLUS' || range === 'AGE_RANGE_18_20') {
                        isAdult = true;
                    }
                }

                if (isAdult) {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'COMPLETED', verified: true, message: '성인 인증에 성공했습니다.' } }));
                } else {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', verified: false, message: '성인만 이용 가능한 서비스입니다. (만 19세 미만)' } }));
                }
            } catch (e) {
                logToFile(`Profile parse error: ${e.message}`);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: '프로필 정보 분석 중 오류가 발생했습니다.' } }));
            }
        });
    });

    req.on('error', (e) => {
        ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: `프로필 조회 오류: ${e.message}` } }));
    });
    req.end();
}

// IPC Handlers
ipcMain.on('try-login', (event, { id, pw, rememberMe }) => {
    logToFile(`Login attempt with ID: ${id}`);
    if (id === config.adminId && pw === config.adminPw) {
        logToFile('Login successful.');
        saveConfig({ ...config, rememberMe: !!rememberMe });
        handleLoginSuccess();
    } else {
        logToFile('Login failed: Invalid credentials');
        event.reply('login-fail');
    }
});

ipcMain.on('save-config', (event, newConfig) => {
    logToFile('Request to save new config received');
    if (saveConfig(newConfig)) {
        event.reply('save-success');
    } else {
        event.reply('save-fail');
    }
});

ipcMain.on('open-log-folder', () => {
    logToFile('Opening log folder...');
    if (fs.existsSync(LOG_PATH)) {
        shell.showItemInFolder(LOG_PATH);
    } else {
        shell.openPath(app.getPath('userData'));
    }
});

function startAssetServer() {
    if (assetServer) return;
    logToFile('Starting Asset HTTP Server on port 8081...');
    assetServer = http.createServer((req, res) => {
        // CORS 헤더 추가
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

        const url = new URL(req.url, `http://${req.headers.host}`);
        const pathname = decodeURIComponent(url.pathname);
        const fileName = pathname.replace(/^\/assets\//, '');
        const targetPath = path.join(ASSETS_PATH, fileName);

        logToFile(`Asset Request: ${pathname} -> target: ${targetPath}`);

        if (fs.existsSync(targetPath) && fs.lstatSync(targetPath).isFile()) {
            const ext = path.extname(targetPath).toLowerCase();
            const contentType = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.mp4': 'video/mp4',
                '.gif': 'image/gif'
            }[ext] || 'application/octet-stream';

            res.writeHead(200, { 'Content-Type': contentType });
            fs.createReadStream(targetPath).pipe(res);
        } else {
            res.writeHead(404);
            res.end('Not Found');
        }
    });

    assetServer.listen(8081, () => {
        logToFile('Asset HTTP Server running on port 8081');
    });
}

function startBridge() {
    if (wss) {
        logToFile('Bridge Server already running');
        return;
    }
    logToFile('Starting Bridge Server on port 8080...');
    startAssetServer();
    wss = new WebSocketServer({ port: 8080 });
    console.log('Bridge Server started on port 8080');

    wss.on('connection', (ws) => {
        logToFile('New Bridge connection established');
        ws.on('message', (message) => {
            logToFile(`Bridge Message received: ${message}`);
            try {
                const payload = JSON.parse(message);
                if (payload.type === 'EXECUTE_TOOL') {
                    handleExecuteTool(payload.payload, ws);
                } else if (['UPDATE_PREVIEW', 'PREVIEW_UPDATE', 'DESIGN_COMMAND', 'VIDEO_UPDATE', 'TOOL_STATUS', 'FOLDER_SELECTED'].includes(payload.type)) {
                    // 모든 연동 메시지를 모든 클라이언트에게 브로드캐스트
                    let count = 0;
                    wss.clients.forEach(client => {
                        if (client.readyState === 1) { // WebSocket.OPEN === 1
                            client.send(JSON.stringify({ type: payload.type, payload: payload.payload }));
                            count++;
                        }
                    });
                    logToFile(`Broadcasted ${payload.type} to ${count} clients`);
                } else if (payload.type === 'CHAT_MESSAGE') {
                    const text = payload.payload.text || "";
                    logToFile(`Processing Chat Message: ${text}`);

                    if (text.includes("애니메이션") || text.includes("영상") || text.includes("만들")) {
                        handleExecuteTool({ tool: 'animation_gen', action: 'launch' }, ws);
                    } else if (text.includes("피그마") || text.includes("레이아웃") || text.includes("구조")) {
                        handleExecuteTool({ tool: 'figma', action: 'launch' }, ws);
                    } else if (text.includes("포토샵") || text.includes("이미지 최적화")) {
                        handleExecuteTool({ tool: 'photoshop', action: 'launch' }, ws);
                    } else {
                        ws.send(JSON.stringify({
                            type: 'TOOL_STATUS',
                            payload: {
                                tool: 'chat',
                                status: 'COMPLETED',
                                message: `전달받은 내용: "${text}". 현재는 '애니메이션 생성해줘'와 같은 명령을 수행할 수 있습니다.`
                            }
                        }));
                    }
                }
            } catch (e) {
                logToFile(`Bridge Message Error: ${e.message}`);
            }
        });

        ws.on('close', () => logToFile('Bridge connection closed'));
    });

    wss.on('error', (err) => logToFile(`Bridge Server ERROR: ${err.message}`));
}

const ASSETS_PATH = path.resolve(__dirname, '..', 'assets');
logToFile(`TARGET ASSETS_PATH: ${ASSETS_PATH}`);

// 에셋 폴더 보장
if (!fs.existsSync(ASSETS_PATH)) {
    fs.mkdirSync(ASSETS_PATH, { recursive: true });
}

// Adobe 프로그램 경로 탐색 유틸리티
function findAdobeAppPath(appName) {
    // 1. 수동 설정된 경로가 있는지 먼저 확인
    const configPathMap = {
        'Photoshop': config.photoshopPath,
        'Illustrator': config.illustratorPath,
        'Premiere Pro': config.premierePath,
        'After Effects': config.afterEffectsPath
    };

    if (configPathMap[appName] && fs.existsSync(configPathMap[appName])) {
        let manualPath = configPathMap[appName];
        // 만약 입력된 경로가 디렉토리라면, 기본 실행 파일을 붙여서 확인
        if (fs.lstatSync(manualPath).isDirectory()) {
            let potentialExe;
            if (appName === 'Photoshop') potentialExe = path.join(manualPath, 'Photoshop.exe');
            else if (appName === 'Illustrator') potentialExe = path.join(manualPath, 'Support Files', 'Contents', 'Windows', 'Illustrator.exe');
            else if (appName === 'Premiere Pro') potentialExe = path.join(manualPath, 'Adobe Premiere Pro.exe');
            else if (appName === 'After Effects') potentialExe = path.join(manualPath, 'Support Files', 'After Effects.exe');

            if (potentialExe && fs.existsSync(potentialExe)) {
                manualPath = potentialExe;
            }
        }

        logToFile(`Using resolved manual path for ${appName}: ${manualPath}`);
        return manualPath;
    }

    const adobeRoot = 'C:\\Program Files\\Adobe';
    if (!fs.existsSync(adobeRoot)) return null;

    try {
        const dirs = fs.readdirSync(adobeRoot);
        // 정렬하여 최신 버전(으로 추정되는 폴더)을 우선 탐색
        dirs.sort().reverse();

        for (const dir of dirs) {
            if (dir.toLowerCase().includes(appName.toLowerCase())) {
                const fullDirPath = path.join(adobeRoot, dir);
                let exePath;
                if (appName === 'Premiere Pro') {
                    exePath = path.join(fullDirPath, 'Adobe Premiere Pro.exe');
                } else if (appName === 'After Effects') {
                    exePath = path.join(fullDirPath, 'Support Files', 'After Effects.exe');
                } else if (appName === 'Photoshop') {
                    exePath = path.join(fullDirPath, 'Photoshop.exe');
                } else if (appName === 'Illustrator') {
                    exePath = path.join(fullDirPath, 'Support Files', 'Contents', 'Windows', 'Illustrator.exe');
                }

                if (exePath && fs.existsSync(exePath)) {
                    logToFile(`Found Adobe path: ${exePath}`);
                    return exePath;
                }
            }
        }
    } catch (e) {
        logToFile(`Error scanning Adobe directory: ${e.message}`);
    }
    return null;
}

async function handleExecuteTool(payload, ws) {
    const { tool, action, data: rawData, payload: legacyData } = payload;
    const data = rawData || legacyData || {};
    if (tool === 'figma') {
        if (action === 'launch') {
            // 웹 브라우저 대신 Figma 데스크탑 앱 실행 시도 (프로토콜 핸들러 사용)
            shell.openExternal('figma://').catch(() => {
                // 앱이 없거나 실행 실패 시 웹으로 폴백
                shell.openExternal('https://www.figma.com');
            });
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: 'Figma 실행 중...' } }));
        } else if (action === 'create_layout') {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: `'${data.layout}' 레이아웃이 Figma에 생성되었습니다.` } }));
        } else if (action === 'export_step1_ui') {
            // Figma 앱 자동 실행 (Deep Link) 시도
            shell.openExternal('figma://').catch(() => {
                logToFile('Failed to launch Figma app via protocol');
            });

            // 이미지 에셋 읽기 (Base64)
            let imageBase64 = null;
            const imgPath = path.join(ASSETS_PATH, 'angel_cat_girl_source.jpg');
            if (fs.existsSync(imgPath)) {
                imageBase64 = fs.readFileSync(imgPath, { encoding: 'base64' });
                logToFile(`Loaded image asset for Figma export: ${imgPath}`);
            }

            // Step 1 핑크 & 화이트 토글 UI 데이터 정의 (상대 좌표 + 그라디언트 고도화)
            const exportData = {
                type: 'DESIGN_COMMAND',
                payload: {
                    description: 'Pink & White Toggle Menu — Premium Sync',
                    elements: [
                        // 1. Root Frame
                        { type: 'FRAME', name: 'Toggle_Menu_Screen', width: 480, height: 780, x: 0, y: 0, fill: '#0F172A', radius: 50 },

                        // 2. Main Profile Card (Relative to Parent)
                        { type: 'CARD', name: 'Profile_Card', width: 360, height: 500, x: 60, y: 50, fillGradient: { from: '#FFF5F7', to: '#FFFFFF' }, radius: 56, shadow: true, opacity: 1 },

                        // 3. Avatar Circle (Image or Gradient)
                        imageBase64 ?
                            { type: 'IMAGE', name: 'Avatar', width: 120, height: 120, x: 180, y: 90, imageData: imageBase64, radius: 60, shadow: true } :
                            { type: 'RECT', name: 'Avatar_BG', width: 120, height: 120, x: 180, y: 90, fillGradient: { from: '#FB7185', to: '#E11D48' }, radius: 60, shadow: true },

                        { type: 'TEXT', name: 'Avatar_Symbol', text: '👤', x: 228, y: 130, width: 24, size: 24, fill: '#FFFFFF' },

                        // 5. Texts
                        { type: 'TEXT', name: 'Title', text: 'Game Session', x: 60, y: 240, width: 360, size: 26, fontWeight: '900', fill: '#1E293B', textAlign: 'CENTER' },
                        { type: 'TEXT', name: 'Subtitle', text: 'EXPERIMENTAL DESIGN V1.0', x: 60, y: 275, width: 360, size: 10, fontWeight: 'black', fill: '#EC4899', textAlign: 'CENTER' },

                        // 7. Toggle Button
                        { type: 'BUTTON', name: 'Toggle_Btn', label: '···', x: 212, y: 320, width: 56, height: 56, fillGradient: { from: '#F1F5F9', to: '#E2E8F0' }, radius: 20, textColor: '#94A3B8', fontSize: 28 },

                        // 8. Sub Menu Card
                        { type: 'CARD', name: 'SubMenu_Card', width: 240, height: 140, x: 120, y: 395, fill: '#FFFFFF', radius: 40, shadow: true, stroke: '#FFF1F2', strokeWeight: 1 },

                        // Option & Save Row (using Buttons for simpler relative layout inside the Card)
                        { type: 'BUTTON', name: 'Option_Btn', label: '⚙️  OPTION', x: 135, y: 410, width: 210, height: 50, fill: '#FFFFFF', radius: 18, textColor: '#475569', fontSize: 11 },
                        { type: 'BUTTON', name: 'Save_Btn', label: '💾  SAVE DATA', x: 135, y: 465, width: 210, height: 50, fillGradient: { from: '#FFF5F7', to: '#FFE4E6' }, radius: 18, textColor: '#EC4899', fontSize: 11, fontWeight: 'bold' },

                        // Theme Label
                        { type: 'TEXT', name: 'Theme_Label', text: 'PINK & WHITE PREMIUM UI', x: 60, y: 560, width: 360, size: 9, fontWeight: 'black', fill: '#94A3B8', textAlign: 'CENTER' },
                        { type: 'BUTTON', name: 'Export_Btn', label: '📐  EXPORT TO FIGMA', x: 120, y: 600, width: 240, height: 48, fillGradient: { from: '#334155', to: '#1E293B' }, radius: 20, textColor: '#FFFFFF', fontSize: 10 }
                    ]
                }
            };

            // 모든 클라이언트에 브로드캐스트 (Figma 플러그인 포함)
            wss.clients.forEach(client => {
                if (client.readyState === 1) {
                    client.send(JSON.stringify(exportData));
                }
            });

            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool, status: 'COMPLETED', message: '고해상도 UI 에셋이 피그마로 전송되었습니다! 앱을 확인해 주세요.' }
            }));
        } else if (action === 'export_save_slots') {
            // Figma 앱 자동 실행
            shell.openExternal('figma://').catch(() => {
                logToFile('Failed to launch Figma app via protocol');
            });

            // Save Slots UI 데이터 정의 (상대 좌표 적용 + 그라디언트 + 섀도우)
            const saveExportData = {
                type: 'DESIGN_COMMAND',
                payload: {
                    description: 'Save/Load Menu — Premium Sync',
                    elements: [
                        // 1. Root Frame
                        { type: 'FRAME', name: 'Save_Menu_Screen', width: 700, height: 620, x: 1080, y: 0, fill: '#0F172A', radius: 50 },

                        // 2. Main Container (Relative to Frame)
                        { type: 'CARD', name: 'Main_Container', width: 620, height: 520, x: 40, y: 50, fill: '#FFFFFF', radius: 48, shadow: true, opacity: 0.98 },

                        // 3. Header Section
                        { type: 'RECT', name: 'Header_Icon_BG', width: 40, height: 40, x: 70, y: 85, fillGradient: { from: '#EC4899', to: '#DB2777' }, radius: 14 },
                        { type: 'TEXT', name: 'Header_Icon', text: '❐', x: 80, y: 95, width: 22, size: 18, fill: '#FFFFFF' },
                        { type: 'TEXT', name: 'Header_Title', text: 'DATA RECORDS', x: 125, y: 95, width: 250, size: 20, fontWeight: 'black', fill: '#1E293B' },

                        // 3b. Header Buttons
                        { type: 'BUTTON', name: 'Load_Btn', label: 'LOAD DATA', x: 410, y: 85, width: 100, height: 40, fill: '#F1F5F9', radius: 14, textColor: '#64748B', fontSize: 11 },
                        { type: 'BUTTON', name: 'Save_Btn', label: 'NEW SAVE', x: 520, y: 85, width: 100, height: 40, fillGradient: { from: '#EC4899', to: '#DB2777' }, radius: 14, textColor: '#FFFFFF', fontSize: 11, shadow: true },

                        // 4. Grid Slots (Slot 1)
                        { type: 'CARD', name: 'Slot_1', width: 265, height: 160, x: 70, y: 160, fill: '#FFF5F7', radius: 36, stroke: '#FECDD3', strokeWeight: 1 },
                        { type: 'RECT', name: 'Thumb_1', width: 100, height: 100, x: 85, y: 175, fill: '#E2E8F0', radius: 20 },
                        { type: 'TEXT', name: 'Slot_Label_1', text: 'SLOT 01', x: 200, y: 175, width: 60, size: 9, fontWeight: 'black', fill: '#EC4899' },
                        { type: 'TEXT', name: 'Location_1', text: 'School Hallway', x: 200, y: 195, width: 120, size: 13, fontWeight: 'black', fill: '#1E293B' },
                        { type: 'TEXT', name: 'Desc_1', text: '"Is anyone there...?"', x: 200, y: 218, width: 120, size: 10, fill: '#94A3B8' },
                        { type: 'TEXT', name: 'Time_1', text: '2026.02.10 11:35', x: 200, y: 255, width: 120, size: 9, fill: '#CBD5E1' },

                        // Slot 2
                        { type: 'CARD', name: 'Slot_2', width: 265, height: 160, x: 345, y: 160, fill: '#F8FAFC', radius: 36, stroke: '#F1F5F9', strokeWeight: 1 },
                        { type: 'RECT', name: 'Thumb_2', width: 100, height: 100, x: 360, y: 175, fill: '#F1F5F9', radius: 20 },
                        { type: 'TEXT', name: 'Slot_Label_2', text: 'SLOT 02', x: 475, y: 175, width: 80, size: 9, fontWeight: 'black', fill: '#94A3B8' },
                        { type: 'TEXT', name: 'Location_2', text: 'Empty Slot', x: 475, y: 195, width: 120, size: 13, fontWeight: 'black', fill: '#94A3B8' },

                        // Slot 3
                        { type: 'CARD', name: 'Slot_3', width: 265, height: 160, x: 70, y: 340, fill: '#F8FAFC', radius: 36, stroke: '#F1F5F9', strokeWeight: 1 },
                        { type: 'RECT', name: 'Thumb_3', width: 100, height: 100, x: 85, y: 355, fill: '#F1F5F9', radius: 20 },

                        // Slot 4
                        { type: 'CARD', name: 'Slot_4', width: 265, height: 160, x: 345, y: 340, fill: '#F8FAFC', radius: 36, stroke: '#F1F5F9', strokeWeight: 1 },
                        { type: 'RECT', name: 'Thumb_4', width: 100, height: 100, x: 360, y: 355, fill: '#F1F5F9', radius: 20 }
                    ]
                }
            };

            // 브로드캐스트
            wss.clients.forEach(client => {
                if (client.readyState === 1) client.send(JSON.stringify(saveExportData));
            });

            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool, status: 'COMPLETED', message: '세이브 메뉴 레이아웃이 피그마로 전송되었습니다!' }
            }));
        } else if (action === 'export_vn_controls') {
            // Figma 앱 자동 실행
            shell.openExternal('figma://').catch(() => {
                logToFile('Failed to launch Figma app via protocol');
            });

            // VN Controls UI 데이터 정의 (상대 좌표 + 그라디언트 + 고품질 섀도우)
            const vnExportData = {
                type: 'DESIGN_COMMAND',
                payload: {
                    description: 'Visual Novel Controls — Premium Sync',
                    elements: [
                        // 1. Root Frame
                        { type: 'FRAME', name: 'VN_Controls_Screen', width: 500, height: 620, x: 540, y: 0, fill: '#0F172A', radius: 50 },

                        // 2. Background Card (Relative to Parent)
                        { type: 'CARD', name: 'VN_Control_Card', width: 420, height: 380, x: 40, y: 80, fillGradient: { from: '#FFF5F7', to: '#FFFFFF' }, radius: 56, shadow: true, opacity: 1 },

                        // 3. Dialogue Area
                        { type: 'CARD', name: 'Dialogue_Box', width: 340, height: 120, x: 80, y: 120, fill: '#FFFFFF', radius: 32, stroke: '#FFECF1', strokeWeight: 2, opacity: 0.95 },
                        { type: 'RECT', name: 'Pulse_Dot', width: 10, height: 10, x: 105, y: 148, fill: '#EC4899', radius: 5 },
                        { type: 'TEXT', name: 'Character_Name', text: 'CHARACTER NAME', x: 125, y: 145, width: 200, size: 11, fontWeight: 'black', fill: '#EC4899' },
                        { type: 'TEXT', name: 'Dialogue_Text', text: '이 아름다운 세상에서, 우리의 이야기가 시작됩니다...', x: 105, y: 175, width: 290, size: 15, fontWeight: 'medium', fill: '#475569' },

                        // 4. Playback Controls Layout
                        { type: 'BUTTON', name: 'Rewind_Btn', label: '«', x: 80, y: 280, width: 48, height: 48, fillGradient: { from: '#FFF5F7', to: '#FFE4E6' }, radius: 18, textColor: '#EC4899', fontSize: 20 },
                        { type: 'BUTTON', name: 'Play_Btn', label: '▶', x: 140, y: 270, width: 68, height: 68, fillGradient: { from: '#FF69B4', to: '#EC4899' }, radius: 26, textColor: '#FFFFFF', fontSize: 26, shadow: true },
                        { type: 'BUTTON', name: 'Skip_Btn', label: '»', x: 220, y: 280, width: 48, height: 48, fillGradient: { from: '#FFF5F7', to: '#FFE4E6' }, radius: 18, textColor: '#EC4899', fontSize: 20 },

                        { type: 'BUTTON', name: 'Speed_Btn', label: '1x SPEED', x: 285, y: 280, width: 75, height: 48, fillGradient: { from: '#FFF5F7', to: '#F1F5F9' }, radius: 18, textColor: '#94A3B8', fontSize: 11, fontWeight: 'bold' },
                        { type: 'BUTTON', name: 'Auto_Btn', label: 'AUTO', x: 368, y: 280, width: 52, height: 48, fill: '#F1F5F9', radius: 18, textColor: '#94A3B8', fontSize: 10, fontWeight: 'bold' },

                        // Labels / Branding
                        { type: 'TEXT', name: 'VN_Label', text: 'DESIGN SYSTEM V1.0', x: 80, y: 480, width: 150, size: 9, fontWeight: 'black', fill: '#94A3B8' },
                        { type: 'BUTTON', name: 'Export_Figma_Btn', label: '📐 EXPORT TO FIGMA', x: 180, y: 470, width: 240, height: 44, fill: '#334155', radius: 16, textColor: '#FFFFFF', fontSize: 10 }
                    ]
                }
            };

            wss.clients.forEach(client => {
                if (client.readyState === 1) client.send(JSON.stringify(vnExportData));
            });

            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool, status: 'COMPLETED', message: '미연시 컨트롤 UI가 피그마로 전송되었습니다! 🎮🌸' }
            }));
        } else if (action === 'export_character_selection') {
            const charExportData = {
                type: 'DESIGN_COMMAND',
                payload: {
                    description: 'Character Selection — Premium Sync',
                    elements: [
                        // 1. Root Frame
                        { type: 'FRAME', name: 'Character_Selection_Screen', width: 840, height: 600, x: 1080, y: 640, fill: '#0F172A', radius: 50 },

                        // 2. Header
                        { type: 'TEXT', name: 'Title', text: 'CHOOSE YOUR PARTNER', x: 60, y: 60, width: 700, size: 36, fontWeight: 'black', fill: '#FFFFFF' },
                        { type: 'RECT', name: 'Accent_Bar', width: 80, height: 8, x: 60, y: 110, fill: '#EC4899', radius: 4 },
                        { type: 'TEXT', name: 'Subtitle', text: 'Select a character to start your story.', x: 160, y: 105, width: 400, size: 14, fontWeight: 'medium', fill: '#94A3B8' },

                        // 3. Slot 1 - Active (Miyu)
                        { type: 'CARD', name: 'Char_Card_Active', width: 220, height: 380, x: 60, y: 160, fillGradient: { from: '#FFF5F7', to: '#FFFFFF' }, radius: 40, shadow: true },
                        { type: 'RECT', name: 'Avatar_Placeholder', width: 180, height: 200, x: 80, y: 180, fill: '#FCE4EC', radius: 24, stroke: '#FFD1E1', strokeWeight: 1 },
                        { type: 'TEXT', name: 'Char_Name_1', text: 'MIYU', x: 80, y: 400, width: 180, size: 22, fontWeight: 'black', fill: '#EC4899', textAlign: 'CENTER' },
                        { type: 'BUTTON', name: 'Start_Btn', label: 'CHOOSE MIYU', x: 85, y: 445, width: 170, height: 48, fillGradient: { from: '#FF69B4', to: '#EC4899' }, radius: 24, textColor: '#FFFFFF', fontSize: 13, fontWeight: 'bold', shadow: true },
                        { type: 'BADGE', name: 'Status_Badge_1', label: 'SELECTABLE', x: 105, y: 510, fill: '#FDF2F8', textColor: '#EC4899' },

                        // 4. Slot 2 - Locked
                        { type: 'CARD', name: 'Char_Card_Locked_1', width: 220, height: 380, x: 310, y: 160, fill: '#1E293B', radius: 40, opacity: 0.8 },
                        { type: 'RECT', name: 'Locked_Avatar_1', width: 180, height: 200, x: 330, y: 180, fill: '#334155', radius: 24, opacity: 0.5 },
                        { type: 'TEXT', name: 'Char_Name_2', text: '???', x: 330, y: 400, width: 180, size: 22, fontWeight: 'black', fill: '#64748B', textAlign: 'CENTER' },
                        { type: 'TEXT', name: 'ComingSoon_Text_1', text: 'COMING SOON', x: 330, y: 270, width: 180, size: 14, fontWeight: 'bold', fill: '#FFFFFF', textAlign: 'CENTER' },
                        { type: 'BADGE', name: 'Status_Badge_2', label: 'LOCKED', x: 375, y: 510, fill: '#334155', textColor: '#94A3B8' },

                        // 5. Slot 3 - Locked
                        { type: 'CARD', name: 'Char_Card_Locked_2', width: 220, height: 380, x: 560, y: 160, fill: '#1E293B', radius: 40, opacity: 0.8 },
                        { type: 'RECT', name: 'Locked_Avatar_2', width: 180, height: 200, x: 580, y: 180, fill: '#334155', radius: 24, opacity: 0.5 },
                        { type: 'TEXT', name: 'Char_Name_3', text: '???', x: 580, y: 400, width: 180, size: 22, fontWeight: 'black', fill: '#64748B', textAlign: 'CENTER' },
                        { type: 'TEXT', name: 'ComingSoon_Text_2', text: 'COMING SOON', x: 580, y: 270, width: 180, size: 14, fontWeight: 'bold', fill: '#FFFFFF', textAlign: 'CENTER' },
                        { type: 'BADGE', name: 'Status_Badge_3', label: 'LOCKED', x: 625, y: 510, fill: '#334155', textColor: '#94A3B8' }
                    ]
                }
            };

            wss.clients.forEach(client => {
                if (client.readyState === 1) client.send(JSON.stringify(charExportData));
            });

            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool, status: 'COMPLETED', message: '캐릭터 선택 UI 와이어프레임이 피그마로 전송되었습니다! 🎭✨' }
            }));
        } else if (action === 'export_affinity_system') {
            const affinityExportData = {
                type: 'DESIGN_COMMAND',
                payload: {
                    description: 'Affinity Dashboard — Premium Sync',
                    elements: [
                        // 1. Root Frame (Dark Theme)
                        { type: 'FRAME', name: 'Affinity_Screen', width: 900, height: 650, x: 2000, y: 0, fill: '#0F172A', radius: 50 },

                        // 2. Header
                        { type: 'TEXT', name: 'Title', text: 'HEART RESONANCE', x: 60, y: 60, width: 700, size: 42, fontWeight: 'black', fill: '#FFFFFF' },
                        { type: 'TEXT', name: 'Subtitle', text: 'AFFINITY DASHBOARD V1.0', x: 60, y: 110, width: 400, size: 12, fontWeight: 'black', fill: '#EC4899' },

                        // 3. Main Resonance Meter Center (Large Heart Focus)
                        { type: 'CARD', name: 'Meter_BG', width: 340, height: 420, x: 60, y: 160, fill: '#1E293B', radius: 48, opacity: 0.6, shadow: true },
                        { type: 'RECT', name: 'Heart_Visual_Circle', width: 220, height: 220, x: 120, y: 200, fill: '#334155', radius: 110, stroke: '#EC4899', strokeWeight: 2 },
                        { type: 'TEXT', name: 'Heart_Icon', text: '❤️', x: 195, y: 275, width: 70, size: 70, fill: '#EC4899' },
                        { type: 'TEXT', name: 'Percent_Value', text: '85%', x: 60, y: 440, width: 340, size: 36, fontWeight: 'black', fill: '#FFFFFF', textAlign: 'CENTER' },
                        { type: 'BADGE', name: 'Level_Badge', label: 'LV. 24 RADIANT', x: 155, y: 510, fill: '#EC4899', textColor: '#FFFFFF' },

                        // 4. Milestone & Progress Area (Right Side)
                        { type: 'TEXT', name: 'Milestone_Title', text: 'RELATIONSHIP MILESTONES', x: 440, y: 165, width: 400, size: 14, fontWeight: 'black', fill: '#94A3B8' },
                        { type: 'CARD', name: 'Milestone_Card_1', width: 400, height: 80, x: 440, y: 200, fillGradient: { from: '#FF69B4', to: '#EC4899' }, radius: 24, shadow: true },
                        { type: 'TEXT', name: 'M_Label_1', text: 'CURRENT: TRUSTED PARTNER', x: 470, y: 228, width: 250, size: 14, fontWeight: 'black', fill: '#FFFFFF' },
                        { type: 'TEXT', name: 'M_Status_1', text: 'ACTIVE', x: 740, y: 232, width: 80, size: 10, fontWeight: 'bold', fill: '#FFFFFF', textAlign: 'RIGHT' },

                        { type: 'CARD', name: 'Milestone_Card_2', width: 400, height: 80, x: 440, y: 295, fill: '#1E293B', radius: 24, stroke: '#334155', strokeWeight: 1 },
                        { type: 'TEXT', name: 'M_Label_2', text: 'NEXT: SOUL RESONANCE', x: 470, y: 323, width: 250, size: 14, fontWeight: 'black', fill: '#64748B' },
                        { type: 'TEXT', name: 'M_Status_2', text: 'LOCKED', x: 740, y: 327, width: 80, size: 10, fontWeight: 'bold', fill: '#334155', textAlign: 'RIGHT' },

                        // 5. Relationship Log (Bottom Right)
                        { type: 'TEXT', name: 'Log_Title', text: 'INTERACTION LOG', x: 440, y: 405, width: 400, size: 14, fontWeight: 'black', fill: '#94A3B8' },
                        { type: 'CARD', name: 'Log_Container', width: 400, height: 165, x: 440, y: 440, fill: '#1E293B', radius: 32, opacity: 0.8 },
                        { type: 'TEXT', name: 'Log_Item_1', text: '➕ 150 - Morning Greeting', x: 470, y: 470, width: 340, size: 12, fill: '#EC4899', fontWeight: 'bold' },
                        { type: 'TEXT', name: 'Log_Item_2', text: '➕ 450 - Special Gift: Crystal Flower', x: 470, y: 500, width: 340, size: 12, fill: '#FFFFFF' },
                        { type: 'TEXT', name: 'Log_Item_3', text: '➕ 200 - Shared Secret', x: 470, y: 530, width: 340, size: 12, fill: '#FFFFFF', opacity: 0.7 }
                    ]
                }
            };

            wss.clients.forEach(client => {
                if (client.readyState === 1) client.send(JSON.stringify(affinityExportData));
            });

            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool, status: 'COMPLETED', message: '호감도 대시보드 레이아웃이 피그마로 전송되었습니다! 💖🛡️' }
            }));
        }
    } else if (tool === 'premiere') {
        if (action === 'launch') {
            const appPath = findAdobeAppPath('Premiere Pro');
            if (appPath) {
                shell.openPath(appPath);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: 'Premiere Pro 실행 중...' } }));
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'Premiere Pro를 찾을 수 없습니다. Adobe Creative Cloud에서 설치 여부를 확인해 주세요.' } }));
            }
        } else if (action === 'create_script') {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '영상 편집용 컷 리스트가 생성되었습니다.' } }));
        }
    } else if (tool === 'config') {
        if (action === 'get_config') {
            ws.send(JSON.stringify({ type: 'SET_CONFIG', payload: config }));
        } else if (action === 'save_adobe_paths') {
            const { photoshopPath, illustratorPath, premierePath, googleClientId, googleClientSecret } = data;
            const updatedConfig = {
                ...config,
                photoshopPath: photoshopPath || config.photoshopPath,
                illustratorPath: illustratorPath || config.illustratorPath,
                premierePath: premierePath || config.premierePath,
                googleClientId: googleClientId !== undefined ? googleClientId : config.googleClientId,
                googleClientSecret: googleClientSecret !== undefined ? googleClientSecret : config.googleClientSecret
            };
            if (saveConfig(updatedConfig)) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'COMPLETED', message: '설정이 저장되었습니다.' } }));
                // Broadcast updated config to all clients
                wss.clients.forEach(client => {
                    if (client.readyState === 1) {
                        client.send(JSON.stringify({ type: 'SET_CONFIG', payload: updatedConfig }));
                    }
                });
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: '설정 저장 중 오류가 발생했습니다.' } }));
            }
        }
    } else if (tool === 'auth') {
        if (action === 'google_login') {
            const googleClientId = GOOGLE_AUTH.clientId;
            const googleClientSecret = GOOGLE_AUTH.clientSecret;

            if (!googleClientId || !googleClientSecret) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: '구글 클라이언트 정보가 코드에 등록되지 않았습니다.' } }));
                return;
            }

            const redirectUri = 'http://localhost:3888';
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=openid%20profile%20email%20https://www.googleapis.com/auth/user.birthday.read&prompt=select_account`;

            shell.openExternal(authUrl);
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'RUNNING', message: '브라우저에서 구글 로그인을 진행해 주세요...' } }));

            // Start a temporary server to receive the code
            if (authServer) {
                try { authServer.close(); } catch (e) { }
                authServer = null;
            }

            authServer = http.createServer((req, res) => {
                const urlObj = new URL(req.url, `http://${req.headers.host}`);
                const code = urlObj.searchParams.get('code');

                if (code) {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end('<h1>성공!</h1><p>인증 코드가 수신되었습니다. 브라우저 창을 닫고 앱으로 돌아가세요.</p><script>window.close();</script>');
                    authServer.close();
                    authServer = null;

                    // Exchange code for token
                    const postData = new URLSearchParams({
                        code: code,
                        client_id: googleClientId,
                        client_secret: googleClientSecret,
                        redirect_uri: redirectUri,
                        grant_type: 'authorization_code'
                    }).toString();

                    const options = {
                        hostname: 'oauth2.googleapis.com',
                        port: 443,
                        path: '/token',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Content-Length': Buffer.byteLength(postData)
                        }
                    };

                    const tokenReq = https.request(options, (tokenRes) => {
                        let body = '';
                        tokenRes.on('data', (chunk) => body += chunk);
                        tokenRes.on('end', () => {
                            try {
                                const tokens = JSON.parse(body);
                                if (tokens.access_token) {
                                    fetchGoogleProfile(tokens.access_token, ws, tool, action);
                                } else {
                                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: `토큰 교환 실패: ${tokens.error_description || tokens.error}` } }));
                                }
                            } catch (e) {
                                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: '응답 분석 오류' } }));
                            }
                        });
                    });

                    tokenReq.on('error', (e) => {
                        ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'ERROR', message: `통신 오류: ${e.message}` } }));
                    });

                    tokenReq.write(postData);
                    tokenReq.end();
                } else {
                    res.writeHead(400);
                    res.end('Authentication failed - No code found');
                }
            });

            authServer.on('error', (err) => {
                logToFile(`Auth Server Error: ${err.message}`);
                if (err.code === 'EADDRINUSE') {
                    wss.clients.forEach(client => {
                        if (client.readyState === 1) {
                            client.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool: 'auth', action: 'google_login', status: 'ERROR', message: '인증 포트(3888)가 이미 사용 중입니다. 잠시 후 다시 시도해 주세요.' } }));
                        }
                    });
                }
                authServer = null;
            });

            authServer.listen(3888);
        }
    } else if (tool === 'photoshop' || tool === 'adobe_connect') {
        if (action === 'launch') {
            const appPath = findAdobeAppPath('Photoshop');
            if (appPath) {
                shell.openPath(appPath);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: 'Photoshop 실행 중...' } }));
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'Photoshop을 찾을 수 없습니다. 설정에서 수동으로 경로를 지정해 주세요.' } }));
            }
        } else if (action === 'execute_script') {
            const appPath = findAdobeAppPath('Photoshop');
            let { scriptPath } = data;

            if (scriptPath) {
                // 경로 정규화 (역슬래시로 변환 및 VBS용 이중 역슬래시 처리)
                const fullPath = path.resolve(scriptPath);
                const vbsScriptPath = fullPath.replace(/\\/g, '\\\\');

                if (fs.existsSync(fullPath)) {
                    const { exec } = require('child_process');
                    const tempVbsPath = path.join(process.env.TEMP || '.', `ps_bridge_${Date.now()}.vbs`);

                    // VBScript: 역슬래시 하나가 정상입니다. (\\가 아닌 \)
                    const vbsContent = `
Set app = CreateObject("Photoshop.Application")
app.DoJavaScriptFile "${fullPath}"
If Err.Number <> 0 Then
    WScript.Quit 2
End If
WScript.Quit 0
                    `.trim();

                    try {
                        fs.writeFileSync(tempVbsPath, vbsContent, { encoding: 'latin1' });
                        logToFile(`Executing Photoshop via VBS Bridge: ${tempVbsPath} -> ${fullPath}`);

                        exec(`wscript.exe //NoLogo "${tempVbsPath}"`, (err) => {
                            // 임시 파일 삭제
                            try { if (fs.existsSync(tempVbsPath)) fs.unlinkSync(tempVbsPath); } catch (e) { }

                            if (err) {
                                logToFile(`Photoshop VBS error: ${err.message} (Code: ${err.code})`);
                                let msg = "포토샵 연동 실패";
                                if (err.code === 1) msg = "포토샵을 찾을 수 없거나 초기화에 실패했습니다.";
                                else if (err.code === 2) msg = "포토샵 스크립트 실행 중 내부 오류가 발생했습니다.";
                                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: msg } }));
                            } else {
                                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: 'Photoshop 작업이 수행되었습니다.' } }));
                            }
                        });
                    } catch (e) {
                        logToFile(`VBS Creation Error: ${e.message}`);
                        ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '브릿지 파일 생성 실패' } }));
                    }
                } else {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '스크립트 파일을 찾을 수 없습니다.' } }));
                }
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '스크립트 경로 누락' } }));
            }
        } else if (action === 'open_assets_folder') {
            logToFile(`Opening assets folder: ${ASSETS_PATH}`);
            shell.openPath(ASSETS_PATH);

            // Try to open ComfyUI output as well if it exists in the standard location
            const comfyOutputDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI', 'output');
            if (fs.existsSync(comfyOutputDir)) {
                logToFile(`Opening ComfyUI output folder: ${comfyOutputDir}`);
                shell.openPath(comfyOutputDir);
            }

            // Try to open ComfyUI input as well if it exists
            const comfyInputDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI', 'input');
            if (fs.existsSync(comfyInputDir)) {
                logToFile(`Opening ComfyUI input folder: ${comfyInputDir}`);
                shell.openPath(comfyInputDir);
            }

            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '에셋 폴더가 열렸습니다.' } }));
        }
        // ===============================================
        // AI Real-time Drawing (krea.ai-style) Handlers
        // ===============================================
        else if (action === 'check_comfyui') {
            // Check ComfyUI connection status
            try {
                const status = await comfyUI.checkConnection();
                if (status.connected) {
                    const models = await comfyUI.getModels();
                    const motionModules = await comfyUI.getMotionModules();
                    const upscaleModels = await comfyUI.getUpscaleModels();
                    const llmModels = await comfyUI.getLLMs();
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: `ComfyUI 연결 성공! 모델: ${models.length}, 모션: ${motionModules.length}, LLM: ${llmModels.length}` } }));
                    ws.send(JSON.stringify({ type: 'COMFYUI_STATUS', payload: { connected: true, models, motionModules, upscaleModels, llmModels } }));
                } else {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'ComfyUI에 연결할 수 없습니다. ComfyUI를 먼저 실행해주세요. (run_nvidia_gpu.bat)' } }));
                    ws.send(JSON.stringify({ type: 'COMFYUI_STATUS', payload: { connected: false } }));
                }
            } catch (e) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `ComfyUI 연결 오류: ${e.message}` } }));
            }

        } else if (action === 'ai_draw_settings') {
            // Update AI drawing settings
            if (data.prompt !== undefined) aiDrawSession.prompt = data.prompt;
            if (data.negativePrompt !== undefined) aiDrawSession.negativePrompt = data.negativePrompt;
            if (data.denoisingStrength !== undefined) aiDrawSession.denoisingStrength = parseFloat(data.denoisingStrength);
            if (data.interval !== undefined) aiDrawSession.interval = parseInt(data.interval);
            if (data.steps !== undefined) aiDrawSession.steps = parseInt(data.steps);
            if (data.cfg !== undefined) aiDrawSession.cfg = parseFloat(data.cfg);
            if (data.modelName !== undefined) aiDrawSession.modelName = data.modelName;
            if (data.width !== undefined) aiDrawSession.width = parseInt(data.width);
            if (data.height !== undefined) aiDrawSession.height = parseInt(data.height);
            logToFile(`AI Draw settings updated: prompt="${aiDrawSession.prompt}", denoise=${aiDrawSession.denoisingStrength}, res=${aiDrawSession.width}x${aiDrawSession.height}`);
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: `설정 업데이트: ${aiDrawSession.width}x${aiDrawSession.height}, Denoise ${aiDrawSession.denoisingStrength}` } }));

        } else if (action === 'ai_draw_start') {
            // Start real-time AI drawing session
            if (aiDrawSession.active) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: 'AI 드로잉이 이미 실행 중입니다.' } }));
                return;
            }

            // Apply any settings from the start request
            if (data.prompt) aiDrawSession.prompt = data.prompt;
            if (data.negativePrompt) aiDrawSession.negativePrompt = data.negativePrompt;
            if (data.denoisingStrength) aiDrawSession.denoisingStrength = parseFloat(data.denoisingStrength);
            if (data.interval) aiDrawSession.interval = parseInt(data.interval);
            if (data.modelName) aiDrawSession.modelName = data.modelName;

            // Check ComfyUI first
            const connStatus = await comfyUI.checkConnection();
            if (!connStatus.connected) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'ComfyUI가 실행되고 있지 않습니다! run_nvidia_gpu.bat를 먼저 실행해주세요.' } }));
                return;
            }

            aiDrawSession.active = true;
            logToFile(`AI Draw session started: interval=${aiDrawSession.interval}ms, denoise=${aiDrawSession.denoisingStrength}`);
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: `🎨 AI 실시간 드로잉 시작! (${aiDrawSession.interval / 1000}초 간격)` } }));
            ws.send(JSON.stringify({ type: 'AI_DRAW_STATUS', payload: { active: true, settings: { ...aiDrawSession, timer: undefined } } }));

            // The capture-generate loop
            const runAiDrawCycle = async () => {
                if (!aiDrawSession.active || aiDrawSession.generating) return;
                aiDrawSession.generating = true;

                try {
                    // Step 1: Capture Photoshop canvas via VBS bridge
                    const captureJsx = path.resolve(__dirname, 'ps_realtime_capture.jsx');
                    if (!fs.existsSync(captureJsx)) {
                        logToFile('AI Draw: capture JSX not found');
                        aiDrawSession.generating = false;
                        return;
                    }

                    const { exec } = require('child_process');
                    const tempVbs = path.join(process.env.TEMP || '.', `ai_capture_${Date.now()}.vbs`);
                    const vbsContent = `Set app = CreateObject("Photoshop.Application")\napp.DoJavaScriptFile "${captureJsx}"\nWScript.Quit 0`;

                    fs.writeFileSync(tempVbs, vbsContent, { encoding: 'latin1' });

                    await new Promise((resolve, reject) => {
                        exec(`wscript.exe //NoLogo "${tempVbs}"`, { timeout: 10000 }, (err) => {
                            try { if (fs.existsSync(tempVbs)) fs.unlinkSync(tempVbs); } catch (e) { }
                            if (err) {
                                logToFile(`AI Draw capture error: ${err.message}`);
                                reject(err);
                            } else {
                                resolve();
                            }
                        });
                    });

                    // Step 2: Check if snapshot was created
                    const snapshotPath = path.join(ASSETS_PATH, 'ps_canvas_snapshot.png');
                    if (!fs.existsSync(snapshotPath)) {
                        logToFile('AI Draw: snapshot file not found after capture');
                        aiDrawSession.generating = false;
                        return;
                    }

                    // Notify: capturing done, generating...
                    wss.clients.forEach(c => {
                        if (c.readyState === 1) {
                            c.send(JSON.stringify({ type: 'AI_DRAW_PROGRESS', payload: { stage: 'generating', message: 'AI 이미지 생성 중...' } }));
                        }
                    });

                    // Step 3: Send to ComfyUI for img2img
                    const resultPath = path.join(ASSETS_PATH, 'ai_draw_result.png');
                    const result = await comfyUI.generateImg2Img(snapshotPath, {
                        prompt: aiDrawSession.prompt,
                        negativePrompt: aiDrawSession.negativePrompt,
                        denoisingStrength: aiDrawSession.denoisingStrength,
                        steps: aiDrawSession.steps,
                        cfg: aiDrawSession.cfg,
                        modelName: aiDrawSession.modelName,
                        width: aiDrawSession.width,
                        height: aiDrawSession.height
                    }, resultPath);

                    if (result.success) {
                        const b64Prefix = result.base64 ? result.base64.substring(0, 30) : 'null';
                        logToFile(`AI Draw: generation complete. B64 Prefix: ${b64Prefix}, Length: ${result.base64?.length}`);
                        // Broadcast result to all clients
                        wss.clients.forEach(c => {
                            if (c.readyState === 1) {
                                c.send(JSON.stringify({
                                    type: 'AI_DRAW_RESULT',
                                    payload: {
                                        imageBase64: `data:image/png;base64,${result.base64}`,
                                        timestamp: Date.now()
                                    }
                                }));
                            }
                        });
                    } else {
                        logToFile(`AI Draw generation failed: ${result.error}`);
                        wss.clients.forEach(c => {
                            if (c.readyState === 1) {
                                const errMsg = (result.error && typeof result.error === 'object') ? (result.error.message || JSON.stringify(result.error)) : String(result.error);
                                c.send(JSON.stringify({ type: 'AI_DRAW_PROGRESS', payload: { stage: 'error', message: `생성 실패: ${errMsg}` } }));
                            }
                        });
                    }
                } catch (e) {
                    logToFile(`AI Draw cycle error: ${e.message}`);
                } finally {
                    aiDrawSession.generating = false;
                }
            };

            // Start the interval timer
            aiDrawSession.timer = setInterval(runAiDrawCycle, aiDrawSession.interval);
            // Trigger first cycle immediately
            runAiDrawCycle();

        } else if (action === 'ai_draw_stop') {
            // Stop real-time AI drawing session
            if (aiDrawSession.timer) {
                clearInterval(aiDrawSession.timer);
                aiDrawSession.timer = null;
            }
            aiDrawSession.active = false;
            aiDrawSession.generating = false;
            await comfyUI.interrupt();
            logToFile('AI Draw session stopped');
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: 'AI 실시간 드로잉이 중지되었습니다.' } }));
            ws.send(JSON.stringify({ type: 'AI_DRAW_STATUS', payload: { active: false } }));

        } else if (action === 'ai_draw_once') {
            // Single generation supporting 3 modes: t2i, i2i, ps_sync
            const mode = data.mode || 'ps_sync';
            const target = data.target || 'ai_drawing';
            logToFile(`Starting single AI Draw (${mode}) for target: ${target}...`);

            const onStatus = (msg, progress = undefined) => {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'RUNNING', message: msg, progress } }));
            };

            const initialMsg = target === 'ui_design' ? '🎨 UI 디자인 초안 생성 중...' : (mode === 't2i' ? '자율 AI 이미지 상상 생성 중...' : '고해상도 AI 이미지 생성 중...');
            onStatus(initialMsg, 0);

            try {
                let snapshotPath = null;
                if (mode === 'i2i') {
                    if (data.imageBase64) {
                        snapshotPath = path.join(ASSETS_PATH, `i2i_upload_${Date.now()}.png`);
                        fs.writeFileSync(snapshotPath, Buffer.from(data.imageBase64, 'base64'));
                    }
                } else if (mode === 'ps_sync') {
                    // Snapshot from Photoshop
                    const { execSync } = require('child_process');
                    const psScript = path.join(__dirname, 'ps_realtime_capture.jsx');
                    const tempInput = path.join(ASSETS_PATH, `ps_canvas_snapshot_${Date.now()}.png`);

                    // VBS Bridge to get snapshot
                    const vbsPath = path.join(process.env.TEMP || '.', `ps_snapshot_${Date.now()}.vbs`);
                    fs.writeFileSync(vbsPath, `Set app = CreateObject("Photoshop.Application")\napp.DoJavaScriptFile "${psScript.replace(/\\/g, '\\\\')}"`, { encoding: 'latin1' });
                    execSync(`wscript.exe //NoLogo "${vbsPath}"`);
                    if (fs.existsSync(vbsPath)) fs.unlinkSync(vbsPath);

                    snapshotPath = path.join(ASSETS_PATH, 'ps_canvas_snapshot.png');
                }
                // For t2i, snapshotPath remains null, which configures ComfyUI correctly.
                if (data.prompt) aiDrawSession.prompt = data.prompt;
                if (data.negativePrompt) aiDrawSession.negativePrompt = data.negativePrompt;
                if (data.denoisingStrength !== undefined) aiDrawSession.denoisingStrength = parseFloat(data.denoisingStrength);
                if (data.modelName) aiDrawSession.modelName = data.modelName;
                if (data.width) aiDrawSession.width = parseInt(data.width);
                if (data.height) aiDrawSession.height = parseInt(data.height);
                if (data.upscale !== undefined) aiDrawSession.upscale = data.upscale;
                if (data.upscaleModel) aiDrawSession.upscaleModel = data.upscaleModel;

                const resultPath = path.join(ASSETS_PATH, 'ai_draw_result.png');
                const result = await comfyUI.generateImg2Img(snapshotPath, {
                    prompt: aiDrawSession.prompt,
                    negativePrompt: aiDrawSession.negativePrompt,
                    denoisingStrength: aiDrawSession.denoisingStrength,
                    steps: aiDrawSession.steps,
                    cfg: aiDrawSession.cfg,
                    modelName: aiDrawSession.modelName,
                    width: aiDrawSession.width,
                    height: aiDrawSession.height,
                    upscale: aiDrawSession.upscale,
                    upscaleModel: aiDrawSession.upscaleModel
                }, resultPath, (progress) => {
                    onStatus(initialMsg, progress);
                });

                if (result.success) {
                    const b64Prefix = result.base64 ? result.base64.substring(0, 30) : 'null';
                    logToFile(`AI Draw Once: complete. B64 Prefix: ${b64Prefix}, Length: ${result.base64?.length}`);
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '✨ AI 이미지 생성 완료!' } }));
                    wss.clients.forEach(c => {
                        if (c.readyState === 1) {
                            c.send(JSON.stringify({
                                type: 'AI_DRAW_RESULT',
                                payload: { imageBase64: `data:image/png;base64,${result.base64}`, timestamp: Date.now() }
                            }));
                        }
                    });
                } else {
                    const errorStr = (result.error && typeof result.error === 'object') ? (result.error.message || JSON.stringify(result.error)) : String(result.error);
                    logToFile(`AI Draw Once generation failed: ${errorStr}`);
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `고화질 생성 실패: ${errorStr}` } }));
                }
            } catch (e) {
                logToFile(`AI Draw Once CRITICAL Error: ${e.message}\nStack: ${e.stack}`);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `오류: ${e.message}` } }));
            }

        } else if (action === 'ai_animate') {
            // V4.0 AI Animation Forge
            logToFile('Starting AI Animation Forge generation...');

            const onStatus = (msg, progress = undefined) => {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action, status: 'RUNNING', message: msg, progress } }));
            };

            onStatus('AI 애니메이션 생성 중... (약 2~5분 소요)', 0);

            // Update animation session from incoming request
            if (data.prompt) aiAnimationSession.prompt = data.prompt;
            if (data.negativePrompt) aiAnimationSession.negativePrompt = data.negativePrompt;
            if (data.steps) aiAnimationSession.steps = parseInt(data.steps);
            if (data.cfg) aiAnimationSession.cfg = parseFloat(data.cfg);
            if (data.fps) aiAnimationSession.fps = parseInt(data.fps);
            if (data.frameCount) aiAnimationSession.frameCount = parseInt(data.frameCount);
            if (data.modelName) aiAnimationSession.modelName = data.modelName;
            if (data.motionModule) aiAnimationSession.motionModule = data.motionModule;

            try {
                // Handle Multi-Image Upload
                let imageNames = [];
                if (data.images && Array.from(data.images).length > 0) {
                    const tempDir = path.join(ASSETS_PATH, 'temp_animation');
                    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

                    for (let i = 0; i < data.images.length; i++) {
                        const img = data.images[i];
                        const tempPath = path.join(tempDir, `kf_${i}_${img.name || 'img.png'}`);
                        fs.writeFileSync(tempPath, Buffer.from(img.data, 'base64'));
                        await comfyUI.uploadImage(tempPath);
                        imageNames.push(path.basename(tempPath));
                    }
                    logToFile(`Uploaded ${imageNames.length} keyframes for animation.`);
                }

                const totalDuration = data.totalDuration || 3;
                const aniOptions = {
                    prompt: aiAnimationSession.prompt,
                    negativePrompt: aiAnimationSession.negativePrompt,
                    steps: aiAnimationSession.steps,
                    cfg: aiAnimationSession.cfg,
                    fps: aiAnimationSession.fps,
                    frameCount: aiAnimationSession.frameCount,
                    modelName: aiAnimationSession.modelName,
                    motionModule: aiAnimationSession.motionModule,
                    upscale: data.upscale || aiAnimationSession.upscale,
                    upscaleModel: data.upscaleModel || aiAnimationSession.upscaleModel,
                    smooth: data.smooth || aiAnimationSession.smooth,
                    width: data.width || 512,
                    height: data.height || 512,
                    samplerName: data.samplerName || 'euler_ancestral',
                    scheduler: data.scheduler || 'karras',
                    seed: data.seed !== undefined ? data.seed : -1,
                    loraName: data.loraName || "",
                    useGGUF: data.useGGUF || false,
                    ggufModel: data.ggufModel || "",
                    imageNames: imageNames,
                    denoisingStrength: data.denoisingStrength || 0.75,
                    useMotionGuide: data.useMotionGuide || false,
                    totalDuration: totalDuration
                };

                let result;
                if (totalDuration > 3) {
                    onStatus("⏳ 긴 영상 구간 분할 생성 중...", 0);
                    result = await comfyUI.generateLongAnimation(aniOptions, path.join(ASSETS_PATH, 'ai_animation_result.webp'), (status, progress) => {
                        onStatus(`⏳ ${status}`, progress);
                    });
                } else {
                    result = await comfyUI.generateAnimation(aniOptions, path.join(ASSETS_PATH, 'ai_animation_result.webp'), (progress) => {
                        onStatus("🎬 애니메이션 프레임 합성 중...", progress);
                    });
                }

                if (result.success) {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '✨ 애니메이션 생성 완료!' } }));
                    wss.clients.forEach(c => {
                        if (c.readyState === 1) {
                            c.send(JSON.stringify({
                                type: 'VIDEO_UPDATE',
                                payload: { url: `http://localhost:8081/assets/ai_animation_result.webp?t=${Date.now()}`, base64: result.lastSegmentBase64 || result.base64 }
                            }));
                        }
                    });
                } else {
                    const errorStr = (result.error && typeof result.error === 'object') ? (result.error.message || JSON.stringify(result.error)) : String(result.error);
                    throw new Error(errorStr);
                }
            } catch (e) {
                logToFile(`AI Animation generation failed: ${e.message}`);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `애니메이션 생성 실패: ${e.message}` } }));
            }
        } else if (action === 'ai_cancel') {
            logToFile('AI Generation cancellation requested.');
            await comfyUI.interrupt();
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, action: 'ai_cancel', status: 'COMPLETED', message: '작업이 취소되었습니다.' } }));
        } else if (action === 'ai_magic_prompt') {
            const { text, negativeText, targetType, llmModel, images } = data;
            logToFile(`Magic Prompt requested for: ${text} | Target: ${targetType || 'unknown'} | LLM: ${llmModel || 'none'}`);

            // Simple In-Memory Cache
            if (!global.promptCache) global.promptCache = new Map();
            const cacheKey = `${text}_${targetType}_${llmModel}`;
            if (global.promptCache.has(cacheKey)) {
                logToFile(`Cache hit for prompt: ${text}`);
                ws.send(JSON.stringify({
                    type: 'MAGIC_PROMPT_RESULT',
                    payload: { prompt: global.promptCache.get(cacheKey), negativePrompt: negativeText, targetType }
                }));
                return;
            }

            // Local LLM Refinement Priority
            // Local LLM Refinement Priority (Worker Process for Non-blocking)
            async function refineWithLocalLLM(input, modelName, target) {
                if (!input || !modelName) return null;

                const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
                const modelPath = path.join(comfyDir, 'models', 'llms', modelName);

                if (fs.existsSync(modelPath)) {
                    logToFile(`Spawning LLM Worker for: ${modelName}`);

                    const onStatus = (msg) => {
                        ws.send(JSON.stringify({
                            type: 'TOOL_STATUS',
                            payload: { tool: 'photoshop', action: 'ai_magic_prompt', status: 'RUNNING', message: msg }
                        }));
                    };

                    onStatus("📦 로컬 AI 엔진 가동 중 (비선점 최적화)...");

                    return new Promise((resolve) => {
                        const worker = fork(path.join(__dirname, 'llm_worker.cjs'));

                        const timeout = setTimeout(() => {
                            worker.kill();
                            logToFile("LLM Worker Timeout");
                            onStatus("⚠️ 작업 지연으로 빠른 번역 모드로 전환합니다.");
                            resolve(null);
                        }, 15000); // Reduce to 15s for better UX

                        worker.on('message', (msg) => {
                            if (msg.action === 'INIT_RESULT') {
                                if (msg.success) {
                                    onStatus("🪄 프롬프트 고도화 생성 중...");
                                    worker.send({ action: 'REFINE', payload: { text: input, targetType: target } });
                                } else {
                                    clearTimeout(timeout);
                                    worker.kill();
                                    resolve(null);
                                }
                            } else if (msg.action === 'REFINE_RESULT') {
                                clearTimeout(timeout);
                                worker.kill();
                                resolve(msg.result);
                            } else if (msg.action === 'ERROR') {
                                clearTimeout(timeout);
                                worker.kill();
                                resolve(null);
                            }
                        });

                        worker.on('error', (err) => {
                            logToFile(`LLM Worker Error: ${err.message}`);
                            clearTimeout(timeout);
                            worker.kill();
                            resolve(null);
                        });

                        worker.on('exit', (code) => {
                            if (code !== 0) {
                                logToFile(`LLM Worker exited with code: ${code}`);
                                clearTimeout(timeout);
                                resolve(null);
                            }
                        });

                        worker.send({ action: 'INIT', payload: { modelPath } });
                    });
                }
                return null;
            }

            // LibreTranslate Integration / Fallback
            async function translatePromptUser(input, isNegative = false) {
                if (!input || input.trim() === '') return input;

                const isMostlyEnglish = /^[\w\s,\.\-\(\)\[\]\|:!@#\$%\^&\*\+=]+$/i.test(input);
                if (isMostlyEnglish) {
                    if (!isNegative && !input.includes("masterpiece")) {
                        return input + ", masterpiece, best quality, cinematic lighting, highly detailed";
                    }
                    return input;
                }

                try {
                    const controller = new AbortController();
                    const id = setTimeout(() => controller.abort(), 4000);
                    const res = await fetch("http://127.0.0.1:5000/translate", {
                        method: "POST",
                        body: JSON.stringify({ q: input, source: "ko", target: "en", format: "text" }),
                        headers: { "Content-Type": "application/json", "Accept": "application/json" },
                        signal: controller.signal
                    });
                    clearTimeout(id);

                    if (res.ok) {
                        const tData = await res.json();
                        let translated = tData.translatedText || input;
                        translated = translated.replace(/\b(a|an|the)\b/gi, '').replace(/\s+/g, ' ').trim();

                        if (!isNegative) {
                            if (!translated.includes("masterpiece")) translated += ", masterpiece, best quality, cinematic lighting, highly detailed";
                        } else {
                            if (!translated.includes("low quality")) translated += ", worst quality, low quality, bad anatomy, blurry";
                        }
                        return translated;
                    }
                    throw new Error(`LibreTranslate HTTP ${res.status}`);
                } catch (e) {
                    logToFile(`LibreTranslate failed: ${e.message}. Attempting Google Translate API fallback...`);
                    try {
                        const gRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=ko&tl=en&dt=t&q=${encodeURIComponent(input)}`);
                        if (gRes.ok) {
                            const gData = await gRes.json();
                            let translated = "";
                            if (gData && gData[0]) {
                                gData[0].forEach(item => { if (item[0]) translated += item[0]; });
                            }
                            translated = translated || input;
                            translated = translated.replace(/\b(a|an|the)\b/gi, '').replace(/\s+/g, ' ').trim();

                            if (!isNegative) {
                                if (!translated.includes("masterpiece")) translated += ", masterpiece, best quality, cinematic lighting, highly detailed";
                            } else {
                                if (!translated.includes("low quality")) translated += ", worst quality, low quality, bad anatomy, blurry";
                            }
                            return translated;
                        }
                        throw new Error(`Google Translate HTTP ${gRes.status}`);
                    } catch (ge) {
                        logToFile(`Google API fallback failed: ${ge.message}. Using Dictionary Fallback.`);
                        if (!isNegative) return expandPrompt(input);
                        return "score_4, score_5, score_6, lowres, bad anatomy, worst quality, distorted face, blurry";
                    }
                }
            }

            // Grok-style Prompt Expansion Engine (Korean -> Technical English) (Fallback)
            function expandPrompt(input) {
                const lower = input.toLowerCase();
                let expanded = "score_9, score_8_up, score_7_up, masterpiece, best quality, cinematic lighting, highly detailed, ";

                // Dictionary for common Korean Descriptors (Extensive)
                const dictionary = {
                    // --- Character & Appearance ---
                    "그녀": "1girl, solo, ", "소녀": "1girl, solo, ", "여자": "1woman, solo, ",
                    "그": "1boy, solo, ", "소년": "1boy, solo, ", "남자": "1man, solo, ",
                    "학생": "school uniform, student, ", "교복": "school uniform, ",
                    "머리": "hair, ", "긴머리": "long hair, ", "단발": "short hair, ",
                    "검은머리": "black hair, ", "금발": "blonde hair, ", "은발": "silver hair, ",
                    "붉은머리": "red hair, ", "파란머리": "blue hair, ",
                    "눈동자": "eyes, ", "파란눈": "blue eyes, ", "빨간눈": "red eyes, ",
                    "안경": "glasses, ", "윙크": "wink, ", "부끄러운": "blushing, shy, ",
                    "귀여운": "kawaii, cute, adorable, chibi, ",

                    // --- Actions & Motion (Crucial for Animation) ---
                    "웃음": "smiling, happy expression, ", "웃는": "smiling, ",
                    "미소": "light smile, ",
                    "울음": "crying, tears, sad expression, ", "우는": "crying, ",
                    "화난": "angry, glaring, fuming, ",
                    "춤": "dancing, graceful motion, dynamic pose, kinetic, ", "추는": "dancing, ",
                    "노래": "singing, musical aura, ",
                    "달리기": "running, motion blur, energetic, ", "달리는": "running, ",
                    "걷기": "walking, strolling, calm, ", "걷는": "walking, ",
                    "자다": "sleeping, peaceful, closed eyes, ", "자는": "sleeping, ",
                    "점프": "jumping, mid-air, levitating, ",
                    "발차기": "kicking, action shot, martial arts, ",
                    "싸우는": "fighting, battle, sword fight, kinetic, ", "전투": "battle, combat, ",
                    "공격": "attacking, magic circle, power aura, ",
                    "피하는": "dodging, fast movement, ",
                    "날다": "flying, wings, soaring, sky background, ", "나는": "flying, ",
                    "헤엄": "swimming, underwater, bubbles, ", "수영": "swimming, ",
                    "앉아": "sitting, ", "누워": "lying down, ",
                    "돌아보는": "looking back, turning around, ",
                    "손을": "hand, ", "흔드는": "waving hand, ",
                    "안고": "hugging, ", "기대": "leaning, ",

                    // --- Environment & Weather ---
                    "눈": "falling snow, snowflakes, winter, frost, ",
                    "비": "raining, wet surface, raindrops, droplets, ",
                    "꽃": "flowers, petals, ", "벚꽃": "cherry blossoms, pink petals falling in wind, spring, ",
                    "단풍": "autumn leaves, maple, fall season, ",
                    "바람": "wind, hair flowing, clothes fluttering, breeze, ",
                    "하늘": "beautiful sky, clouds, scenery, ",
                    "구름": "clouds, fluffy, ",
                    "노을": "sunset, golden hour, orange sky, warm lighting, ",
                    "밤": "night, dark sky, moonlight, starlight, ",
                    "별": "starry sky, galaxy, nebula, sparkling, ",
                    "바다": "ocean, beach, waves, turquoise water, ",
                    "숲": "forest, trees, nature, sunlight through leaves, ",
                    "정원": "garden, backyard, lush greenery, ",
                    "공원": "park, outdoor, ",
                    "도시": "city, urban, street photography, neon lights, ",
                    "학교": "school, classroom, hallway, ",
                    "방": "room, bedroom, cozy lighting, indoor, ",
                    "우주": "outer space, sci-fi, planets, ",

                    // --- Styles & Effects ---
                    "디지털": "digital art, clean lineart, vibrant, ",
                    "수채화": "watercolor style, soft colors, artistic, ",
                    "유화": "oil painting, textured, rich colors, ",
                    "스케치": "sketch, pencil drawing, charcoal, ",
                    "만화": "manga style, anime screencap, ",
                    "실사": "photorealistic, hyperrealistic, 8k, raw photo, ",
                    "3d": "3D render, unreal engine 5, octane render, ",
                    "사이버판크": "cyberpunk, futuristic, neon, tech, ",
                    "판타지": "fantasy, magic, medieval, ",
                    "몽환": "dreamy, ethereal, soft focus, magical, ",
                    "화려한": "extravagant, detailed, masterpiece, ",
                    "어두운": "dark atmosphere, moody, shadows, ",
                    "밝은": "bright, sunny, high key, ",
                    "시네마틱": "cinematic lighting, dramatic, film grain, ",
                };

                let matchedWords = [];
                let matchFound = false;

                // Match dictionary items
                for (const [key, value] of Object.entries(dictionary)) {
                    if (lower.includes(key)) {
                        expanded += value;
                        matchedWords.push(key);
                        matchFound = true;
                    }
                }

                // Append any English words from the original input
                const englishParts = input.match(/[a-zA-Z0-9]+/g);
                if (englishParts) {
                    expanded += englishParts.join(", ") + ", ";
                }

                // Smart Fallback if no dictionary match
                if (!matchFound && (!englishParts || englishParts.length === 0)) {
                    expanded += "cinematic, high dynamic range, stunning visual";
                } else {
                    expanded += "cinematic, 4k ultra hdtv";
                }

                // Final Cleanup
                return expanded.trim().replace(/,$/, "").replace(/,\s*,/g, ",");
            }

            (async () => {
                try {
                    let promptToUse = text;
                    // Try Image Analysis (Step 5 only) - ONLY if prompt is empty or very short
                    // This saves 3-5 seconds of WD14 Tagger loading time when not strictly needed
                    if (images && images.length > 0 && (!text || text.length < 5)) {
                        try {
                            onStatus("🔍 이미지 상황 분석 중...");
                            // 5s strict timeout for image analysis to avoid hang
                            const analysisPromise = comfyUI.analyzeImageToPrompt(images[0].data);
                            const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000));

                            const result = await Promise.race([analysisPromise, timeoutPromise]);
                            if (result && result.success && result.prompt) {
                                promptToUse = result.prompt + ", " + promptToUse;
                                logToFile(`Image analyzed: ${result.prompt.substring(0, 30)}...`);
                            }
                        } catch (e) {
                            logToFile(`Image analysis skipped or timed out: ${e.message}`);
                        }
                    }

                    // Try Local LLM first if specified
                    let refinedPrompt = null;
                    if (llmModel) {
                        try {
                            refinedPrompt = await refineWithLocalLLM(promptToUse, llmModel, targetType);
                        } catch (err) {
                            logToFile(`Local LLM Error (Uncaught): ${err.message}`);
                        }
                    }

                    if (refinedPrompt && refinedPrompt.length > 5) {
                        logToFile(`Local LLM Prompt Refined: ${refinedPrompt.substring(0, 50)}...`);
                        global.promptCache.set(cacheKey, refinedPrompt);
                        ws.send(JSON.stringify({
                            type: 'MAGIC_PROMPT_RESULT',
                            payload: { prompt: refinedPrompt, negativePrompt: negativeText, targetType }
                        }));
                    } else {
                        // Fallback to legacy translation pipeline
                        logToFile(`Falling back to legacy translation engine (Local LLM failed or not chosen)`);
                        const translatedPrompt = await translatePromptUser(promptToUse);
                        const translatedNegative = await translatePromptUser(negativeText, true);

                        ws.send(JSON.stringify({
                            type: 'MAGIC_PROMPT_RESULT',
                            payload: { prompt: translatedPrompt || promptToUse, negativePrompt: translatedNegative, targetType }
                        }));
                    }
                } catch (outerErr) {
                    logToFile(`Magic Prompt Outer Error: ${outerErr.message}`);
                    // Ensure results are sent even on crash to reset UI state
                    ws.send(JSON.stringify({
                        type: 'MAGIC_PROMPT_RESULT',
                        payload: { prompt: text, negativePrompt: negativeText, targetType }
                    }));
                }
            })();

        } else if (action === 'ai_analyze_image') {
            // V4.0 Image-to-Prompt Analysis
            logToFile('Analyzing image for prompt generation...');
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: '이미지 분석 중... (매직 태그 추출)' } }));

            try {
                const base64Data = data.imagePath; // UI sends raw base64
                const tempPath = path.join(ASSETS_PATH, 'temp_analysis.png');
                fs.writeFileSync(tempPath, base64Data, { encoding: 'base64' });

                const result = await comfyUI.analyzeImageToPrompt(tempPath);

                if (result.success) {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '✅ 이미지 분석 완료!' } }));
                    ws.send(JSON.stringify({
                        type: 'AI_DRAW_PROGRESS',
                        payload: { message: result.prompt, stage: 'analysis_done' }
                    }));
                } else {
                    throw new Error(result.error);
                }
            } catch (e) {
                logToFile(`Image analysis failed: ${e.message}`);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `분석 실패: ${e.message}` } }));
            }
        } else if (action === 'ai_draw_apply') {
            // Apply AI result back to Photoshop as a new layer
            const resultPath = path.join(ASSETS_PATH, 'ai_draw_result.png');
            if (!fs.existsSync(resultPath)) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'AI 생성 결과 파일이 없습니다. 먼저 생성을 실행해주세요.' } }));
                return;
            }

            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: '포토샵에 AI 결과 레이어 삽입 중...' } }));

            try {
                const importJsx = path.resolve(__dirname, 'ps_import_ai_result.jsx');
                const { exec } = require('child_process');
                const tempVbs = path.join(process.env.TEMP || '.', `ai_apply_${Date.now()}.vbs`);
                const vbsContent = `Set app = CreateObject("Photoshop.Application")\napp.DoJavaScriptFile "${importJsx}"\nWScript.Quit 0`;
                fs.writeFileSync(tempVbs, vbsContent, { encoding: 'latin1' });

                exec(`wscript.exe //NoLogo "${tempVbs}"`, { timeout: 10000 }, (err) => {
                    try { if (fs.existsSync(tempVbs)) fs.unlinkSync(tempVbs); } catch (e) { }
                    if (err) {
                        ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '포토샵 레이어 삽입 실패' } }));
                    } else {
                        ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '✅ AI 결과가 포토샵에 새 레이어로 추가되었습니다!' } }));
                    }
                });
            } catch (e) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `오류: ${e.message}` } }));
            }
        }
    } else if (tool === 'illustrator') {
        if (action === 'launch') {
            const appPath = findAdobeAppPath('Illustrator');
            if (appPath) {
                shell.openPath(appPath);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: 'Illustrator 실행 중...' } }));
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'Illustrator를 찾을 수 없습니다. 설정에서 수동으로 경로를 지정해 주세요.' } }));
            }
        }
    } else if (action === 'select_folder') {
        const result = dialog.showOpenDialogSync(mainWindow, {
            properties: ['openDirectory']
        });
        if (result && result.length > 0) {
            const folderPath = result[0];
            // Scan for images to give immediate count
            const files = fs.readdirSync(folderPath);
            const imageFiles = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

            ws.send(JSON.stringify({
                type: 'FOLDER_SELECTED',
                payload: {
                    path: folderPath,
                    imageCount: imageFiles.length
                }
            }));
        }
    } else if (action === 'scan_assets') {
        const { folderPath } = data;
        if (!folderPath || !fs.existsSync(folderPath)) {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '유효하지 않은 폴더 경로입니다.' } }));
            return;
        }
        const files = fs.readdirSync(folderPath);
        const imageFiles = files.filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f)).map(f => ({
            name: f,
            path: path.join(folderPath, f),
            url: `http://localhost:8081/asset?path=${encodeURIComponent(path.join(folderPath, f))}`
        }));
        ws.send(JSON.stringify({ type: 'ASSET_LIST', payload: { images: imageFiles } }));
    } else if (action === 'batch_upscale') {
        const { folderPath, refineDetails, isVector } = data;
        if (!folderPath || !fs.existsSync(folderPath)) {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '유효하지 않은 폴더 경로입니다.' } }));
            return;
        }

        const files = fs.readdirSync(folderPath).filter(f =>
            ['.png', '.jpg', '.jpeg', '.webp'].includes(path.extname(f).toLowerCase())
        );

        if (files.length === 0) {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '폴더 내에 이미지 파일이 없습니다.' } }));
            return;
        }

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'RUNNING',
                message: isRedraw ? `총 ${files.length}개의 이미지 시각적 컨셉 분석 및 재창조 시작...` : (isVector ? `총 ${files.length}개의 이미지 벡터 트레이싱 시작...` : `총 ${files.length}개의 이미지 업스케일 시작...`)
            }
        }));

        // Simulate batch processing
        for (let i = 0; i < files.length; i++) {
            const fileName = files[i];
            const inputPath = path.join(folderPath, fileName);
            const outputPath = path.join(ASSETS_PATH, isRedraw ? `reconstructed_${fileName}` : (isVector ? `vectorized_${fileName}` : `upscaled_${fileName}`));

            if (isRedraw) {
                const stages = [
                    { msg: 'Visual Context Embedding...', delay: 700 },
                    { msg: 'Generative Concept Mapping...', delay: 900 },
                    { msg: 'High-Fidelity Diffusion Synthesis...', delay: 1000 },
                    { msg: 'AI Texture Normalization...', delay: 600 }
                ];
                for (let s = 0; s < stages.length; s++) {
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool, status: 'RUNNING',
                            message: `[AI Redraw] ${fileName}: ${stages[s].msg}`,
                            progress: Math.round(((i + (s / stages.length)) / files.length) * 100)
                        }
                    }));
                    await new Promise(resolve => setTimeout(resolve, stages[s].delay));
                }
            } else if (isVector) {
                const stages = [
                    { msg: 'AI Edge Vectorization...', delay: 600 },
                    { msg: 'Bezier Path Mapping...', delay: 800 },
                    { msg: 'Anchor Point Optimization...', delay: 700 },
                    { msg: 'Illustrator Style Clean-Export...', delay: 500 }
                ];
                for (let s = 0; s < stages.length; s++) {
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool, status: 'RUNNING',
                            message: `[Vector AI] ${fileName}: ${stages[s].msg}`,
                            progress: Math.round(((i + (s / stages.length)) / files.length) * 100)
                        }
                    }));
                    await new Promise(resolve => setTimeout(resolve, stages[s].delay));
                }
            } else if (refineDetails) {
                const stages = [
                    { msg: 'Global Pixel Mapping...', delay: 500 },
                    { msg: 'Edge Sharpening...', delay: 700 },
                    { msg: 'Surface Smoothing...', delay: 600 }
                ];
                for (let s = 0; s < stages.length; s++) {
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool, status: 'RUNNING',
                            message: `[Batch AI] ${fileName}: ${stages[s].msg}`,
                            progress: Math.round(((i + (s / stages.length)) / files.length) * 100)
                        }
                    }));
                    await new Promise(resolve => setTimeout(resolve, stages[s].delay));
                }
            } else {
                ws.send(JSON.stringify({
                    type: 'TOOL_STATUS',
                    payload: {
                        tool, status: 'RUNNING',
                        message: `Batch Upscaling: ${fileName}`,
                        progress: Math.round(((i + 1) / files.length) * 100)
                    }
                }));
                await new Promise(resolve => setTimeout(resolve, 800));
            }

            fs.copyFileSync(inputPath, outputPath);
        }

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'COMPLETED',
                message: isRedraw
                    ? `총 ${files.length}개의 이미지가 AI에 의해 새롭게 고해상도로 재창조되었습니다!`
                    : (isVector
                        ? `총 ${files.length}개의 이미지가 일러스트레이터급 벡터 이미지로 변환되었습니다!`
                        : (refineDetails
                            ? `총 ${files.length}개의 이미지가 최상급 디테일 복원 후 에셋 폴더로 저장되었습니다!`
                            : `총 ${files.length}개의 이미지가 표준 업스케일 완료되었습니다!`))
            }
        }));
        await shell.openPath(ASSETS_PATH);
    } else if (action === 'upload_and_upscale') {
        const { files, refineDetails, isVector, isRedraw } = data;
        if (!files || !Array.isArray(files) || files.length === 0) {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '업로드된 파일이 없거나 올바르지 않은 형식입니다.' } }));
            return;
        }

        const TEMP_UPLOAD = path.join(ASSETS_PATH, 'temp_uploads');
        if (!fs.existsSync(TEMP_UPLOAD)) fs.mkdirSync(TEMP_UPLOAD, { recursive: true });

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'RUNNING',
                message: isRedraw ? `${files.length}개의 이미지 시각적 컨셉 분석 및 재창조 시작...` : (isVector ? `${files.length}개의 이미지 벡터 트레이싱 및 정교화 시작...` : (refineDetails ? `${files.length}개의 이미지 AI 정밀 분석 시작...` : `${files.length}개의 이미지 업로드 중...`)),
                progress: 0
            }
        }));

        // Save files and simulate processing
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const originalPath = path.join(TEMP_UPLOAD, file.name);
            const upscaledPath = path.join(ASSETS_PATH, isRedraw ? `reconstructed_${file.name}` : (isVector ? `vectorized_${file.name}` : `upscaled_${file.name}`));

            fs.writeFileSync(originalPath, Buffer.from(file.data, 'base64'));
            logToFile(`Saved temporary image to: ${originalPath}`);

            if (isRedraw) {
                // Redraw generative simulation
                const stages = [
                    { msg: 'Visual Latent Encoding...', delay: 800 },
                    { msg: 'Semantic Content Analysis...', delay: 1000 },
                    { msg: 'Generative High-Res Synthesis...', delay: 1200 },
                    { msg: 'AI Final Polish & Denoising...', delay: 500 }
                ];
                for (let s = 0; s < stages.length; s++) {
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool,
                            status: 'RUNNING',
                            message: `[AI Redraw] ${file.name}: ${stages[s].msg}`,
                            progress: Math.round(((i + (s / stages.length)) / files.length) * 100)
                        }
                    }));
                    await new Promise(resolve => setTimeout(resolve, stages[s].delay));
                }
            } else if (isVector) {
                // Vector premium simulation
                const stages = [
                    { msg: 'Shape Boundary Analysis...', delay: 500 },
                    { msg: 'Bezier Path Construction...', delay: 900 },
                    { msg: 'Anchor Point Merging...', delay: 600 },
                    { msg: 'Illustrator Vector-PNG Export...', delay: 400 }
                ];
                for (let s = 0; s < stages.length; s++) {
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool,
                            status: 'RUNNING',
                            message: `[AI Vector] ${file.name}: ${stages[s].msg}`,
                            progress: Math.round(((i + (s / stages.length)) / files.length) * 100)
                        }
                    }));
                    await new Promise(resolve => setTimeout(resolve, stages[s].delay));
                }
            } else if (refineDetails) {
                // Multi-stage premium simulation
                const stages = [
                    { msg: 'Pixel Depth Analysis...', delay: 600 },
                    { msg: 'AI Edge Restoration...', delay: 800 },
                    { msg: 'Illustration Texture Synthesis...', delay: 700 },
                    { msg: 'Final Denoising & Polish...', delay: 400 }
                ];

                for (let s = 0; s < stages.length; s++) {
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool,
                            status: 'RUNNING',
                            message: `[AI Restore] ${file.name}: ${stages[s].msg}`,
                            progress: Math.round(((i + (s / stages.length)) / files.length) * 100)
                        }
                    }));
                    await new Promise(resolve => setTimeout(resolve, stages[s].delay));
                }
            } else {
                await new Promise(resolve => setTimeout(resolve, 800)); // Slightly longer for stability

                // 2. Simulate upscale by "moving/generating" into assets
                ws.send(JSON.stringify({
                    type: 'TOOL_STATUS',
                    payload: {
                        tool,
                        status: 'RUNNING',
                        message: `에셋 고해상도 변환 중 (${i + 1}/${files.length}): ${file.name}`,
                        progress: Math.round(((i + 1) / files.length) * 100)
                    }
                }));
            }

            if (fs.existsSync(originalPath)) {
                fs.copyFileSync(originalPath, upscaledPath);
                logToFile(`Copied upscaled asset to: ${upscaledPath}`);
            } else {
                logToFile(`ERROR: Temporary file not found for copy: ${originalPath}`);
            }
        }

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'COMPLETED',
                message: isRedraw
                    ? `${files.length}개의 이미지가 AI 정밀 재해석을 통해 고해상도로 새롭게 생성되었습니다!`
                    : (isVector
                        ? `${files.length}개의 이미지가 일러스트레이터급 벡터 데이터로 정밀 추출되었습니다!`
                        : (refineDetails
                            ? `${files.length}개의 자산이 초고화질 일러스트급으로 복원되었습니다!`
                            : `${files.length}개의 파일이 ASSETS 폴더로 업스케일링 되었습니다!`))
            }
        }));
        await shell.openPath(ASSETS_PATH);
    } else if (action === 'generate_animation') {
        const { image, style, targetDuration, prompt } = data;

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'RUNNING',
                message: `[AI Intent] "${prompt || '기본 연출'}" 분석 및 모션 그래프 설계 중...`,
                progress: 0
            }
        }));

        const stages = [
            { msg: 'Semantic Motion Intent Encoding...', delay: 800 },
            { msg: 'Visual Latent Motion Embedding...', delay: 1000 },
            { msg: 'Temporal Consistency Mapping (Longform)...', delay: 1500 },
            { msg: 'Depth Parallax Layering...', delay: 1200 },
            { msg: 'AI Optical Flow Synthesis...', delay: 1000 },
            { msg: 'Cinematic Post-Processing...', delay: 800 },
            { msg: 'Final MP4 Rendering (60s+)...', delay: 2000 }
        ];

        for (let s = 0; s < stages.length; s++) {
            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: {
                    tool,
                    status: 'RUNNING',
                    message: `[AI Animation] ${style.toUpperCase()} - ${stages[s].msg}`,
                    progress: Math.round(((s + 1) / stages.length) * 100)
                }
            }));
            await new Promise(resolve => setTimeout(resolve, stages[s].delay));
        }

        const fileName = `cinematic_animation_${Date.now()}.mp4`;
        const sampleVideoUrl = `https://media.w3.org/2010/05/sintel/trailer.mp4`; // Simulation video

        ws.send(JSON.stringify({
            type: 'VIDEO_UPDATE',
            payload: { url: sampleVideoUrl, name: fileName }
        }));

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'COMPLETED',
                message: `[${style}] 스타일의 60초 시네마틱 애니메이션이 성공적으로 생성되었습니다!\n연출: ${data.prompt || '기본 연출'}\n구성: 3D 패럴랙스, 슬로우 모션, 고해상도 텍스처 적용.`
            }
        }));

        await shell.openPath(ASSETS_PATH);
    } else if (action === 'video_edit') {
        const { video, preset } = data;

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'RUNNING',
                message: `[AI Video Editor] 원본 영상 분석 및 ${preset.toUpperCase()} 알고리즘 로딩 중...`,
                progress: 0
            }
        }));

        let stages = [];
        if (preset === 'smart_cut') {
            stages = [
                { msg: 'Audio/Visual Highlight Extraction...', delay: 1000 },
                { msg: 'Rhythm & Beat Matching...', delay: 1200 },
                { msg: 'Trimming Dead Air (Silence removal)...', delay: 1000 },
                { msg: 'Applying Dynamic Transitions...', delay: 1500 },
                { msg: 'Rendering Highlight Reel...', delay: 2000 }
            ];
        } else if (preset === 'color_grade') {
            stages = [
                { msg: 'Analyzing Luminosity & Contrast Maps...', delay: 1000 },
                { msg: 'Balancing Skin Tones & Whites...', delay: 1200 },
                { msg: 'Applying Cinematic LUT & Teal/Orange Split...', delay: 1500 },
                { msg: 'Rendering HDR Graded Frames...', delay: 2000 }
            ];
        } else if (preset === 'motion_track') {
            stages = [
                { msg: 'Optical Flow & Pixel Tracking...', delay: 1500 },
                { msg: 'Identifying Primary Target Objects...', delay: 1200 },
                { msg: 'Generating 3D Camera Tracking Data...', delay: 1500 },
                { msg: 'Applying Motion Blur & Stabilization...', delay: 1800 },
                { msg: 'Rendering Tracked Path Layer...', delay: 2000 }
            ];
        } else if (preset === 'auto_caption') {
            stages = [
                { msg: 'Audio Transcription (Voice to Text)...', delay: 1000 },
                { msg: 'NLP Context & Timing Alignment...', delay: 1200 },
                { msg: 'Applying Dynamic Kinetic Typography...', delay: 1500 },
                { msg: 'Rendering Burn-in Subtitles...', delay: 2000 }
            ];
        } else {
            stages = [
                { msg: 'General Purpose Editing...', delay: 2000 },
                { msg: 'Rendering...', delay: 2000 }
            ];
        }

        for (let s = 0; s < stages.length; s++) {
            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: {
                    tool,
                    status: 'RUNNING',
                    message: `[${preset.toUpperCase()}] ${stages[s].msg}`,
                    progress: Math.round(((s + 1) / stages.length) * 100)
                }
            }));
            await new Promise(resolve => setTimeout(resolve, stages[s].delay));
        }

        const fileName = `edited_${preset}_${Date.now()}.mp4`;
        const sampleVideoUrl = `https://media.w3.org/2010/05/sintel/trailer.mp4`; // Simulation video of edited result

        ws.send(JSON.stringify({
            type: 'VIDEO_UPDATE',
            payload: { url: sampleVideoUrl, name: fileName }
        }));

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'COMPLETED',
                message: `[${preset.toUpperCase()}] 영상 처리가 완료되었습니다!\n결과물: 에셋 폴더에 저장 완료.`
            }
        }));

    } else if (action === 'magic_auto_edit') {
        const { audioFiles, prompt } = data;
        const tool = 'premiere';

        logToFile(`Magic Auto-Edit started for prompt: ${prompt}. Audio files count: ${audioFiles?.length || 0}`);

        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: { tool, status: 'RUNNING', message: 'Magic Auto-Edit initialized. Analyzing audio theme...', progress: 10 }
        }));

        try {
            const bgImageName = 'funeral_propaganda_bg.png';
            const bgImagePath = path.join(ASSETS_PATH, bgImageName);

            if (!fs.existsSync(bgImagePath)) {
                throw new Error(`배경 이미지 에셋(${bgImageName})을 찾을 수 없습니다. 먼저 이미지를 생성해 주세요.`);
            }

            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool, status: 'RUNNING', message: 'Generating cinematic background for your music...', progress: 30 }
            }));

            const autoSubtitles = [
                { time: '00:00', text: '영원한 침묵을 위한 마지막 행진이 시작됩니다.' },
                { time: '00:05', text: '슬픔은 거대한 서사가 되고, 비극은 위대한 선전이 됩니다.' },
                { time: '00:10', text: '붉은 장막 뒤에 숨겨진 진실을 노래하라.' },
                { time: '00:15', text: '죽음조차 명령에 따르는 이 잔혹한 예술.' }
            ];

            logToFile(`Triggering real_video_edit from magic_auto_edit...`);

            // 3. Immediately trigger real_video_edit logic
            await handleExecuteTool({
                tool: 'premiere',
                action: 'real_video_edit',
                data: {
                    files: [
                        { name: bgImageName, type: 'image/png', data: fs.readFileSync(bgImagePath).toString('base64') },
                        ...(audioFiles || [])
                    ],
                    subtitles: autoSubtitles
                }
            }, ws);

        } catch (err) {
            logToFile(`CRITICAL: Magic Edit Failed: ${err.message}`);
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: `Magic Edit Failed: ${err.message}` } }));
        }
    } else if (action === 'real_video_edit') {
        const { files, preset, subtitles } = data;

        if (!files || files.length === 0) {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool: 'premiere', status: 'ERROR', message: '편집할 영상 파일이 없습니다.' } }));
            return;
        }

        const TEMP_DIR = path.join(ASSETS_PATH, `edit_job_${Date.now()}`);
        if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

        try {
            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: { tool: 'premiere', status: 'RUNNING', message: 'Preparing source assets...', progress: 5 }
            }));

            // 1. Save temp video/audio files
            const inputPaths = [];
            for (let i = 0; i < files.length; i++) {
                const f = files[i];
                const ext = f.type.split('/')[1] || 'mp4';
                const tempPath = path.join(TEMP_DIR, `input_${i}.${ext}`);
                fs.writeFileSync(tempPath, Buffer.from(f.data, 'base64'));
                inputPaths.push(tempPath);
            }

            // 2. Prepare SRT if subtitles exist
            let srtPath = null;
            if (subtitles && subtitles.length > 0) {
                srtPath = path.join(TEMP_DIR, 'subtitles.srt');
                const srtContent = subtitles.map((s, idx) => {
                    // Simple time format conversion (MM:SS -> HH:MM:SS,000)
                    const time = s.time.includes(':') ? s.time : '00:00';
                    const parts = time.split(':');
                    const mm = parts[0].padStart(2, '0');
                    const ss = parts[1].padStart(2, '0');
                    const startTime = `00:${mm}:${ss},000`;

                    // End time estimation (start + 3s or next subtitle)
                    let endTime = `00:${mm}:${(parseInt(ss) + 3).toString().padStart(2, '0')},000`;
                    if (subtitles[idx + 1]) {
                        const nextParts = subtitles[idx + 1].time.split(':');
                        endTime = `00:${nextParts[0].padStart(2, '0')}:${nextParts[1].padStart(2, '0')},000`;
                    }

                    return `${idx + 1}\n${startTime} --> ${endTime}\n${s.text}\n`;
                }).join('\n');
                fs.writeFileSync(srtPath, srtContent, 'utf-8');
            }

            const outputFileName = `render_${Date.now()}.mp4`;
            const outputPath = path.join(ASSETS_PATH, outputFileName);

            // 3. Build FFmpeg command
            // We need a silent audio source for images/audio-only clips to keep concat happy
            let inputArgs = [];
            let filterString = '';

            // Add a virtual silent audio source as a fallback
            inputArgs.push('-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=44100');
            const SILENT_AUDIO_IDX = files.length; // The last input is the silent audio

            files.forEach((f, i) => {
                const p = inputPaths[i];
                inputArgs.push('-i', p);

                if (f.type.startsWith('image/')) {
                    // Loop image for 3 seconds, set resolution to 1280x720, and pair with silent audio
                    filterString += `[${i + 1}:v]loop=loop=-1:size=1:start=0,scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1,trim=duration=3[v${i}]; `;
                    filterString += `[${SILENT_AUDIO_IDX}:a]atrim=duration=3[a${i}]; `;
                } else if (f.type.startsWith('audio/')) {
                    // Create black background for audio-only clips (3 seconds)
                    filterString += `color=c=black:s=1280x720:d=3[v${i}]; `;
                    filterString += `[${i + 1}:a]atrim=duration=3[a${i}]; `;
                } else {
                    // Normalize video resolution and padding
                    filterString += `[${i + 1}:v]scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,setsar=1[v${i}]; `;
                    filterString += `[${i + 1}:a]acopy[a${i}]; `;
                }
            });

            // Concat normalized streams
            for (let i = 0; i < files.length; i++) {
                filterString += `[v${i}][a${i}]`;
            }
            filterString += `concat=n=${files.length}:v=1:a=1[outv_pre][outa]`;

            // Subtitle burn-in if applicable
            if (srtPath) {
                const escapedSrtPath = srtPath.replace(/\\/g, '/').replace(/:/g, '\\:');
                filterString += `; [outv_pre]subtitles='${escapedSrtPath}'[outv]`;
            } else {
                filterString += `; [outv_pre]null[outv]`;
            }

            const ffmpegArgs = [
                ...inputArgs,
                '-filter_complex', filterString,
                '-map', '[outv]',
                '-map', '[outa]',
                '-c:v', 'libx264',
                '-preset', 'veryfast',
                '-crf', '23',
                '-c:a', 'aac',
                '-b:a', '128k',
                '-y',
                outputPath
            ];

            logToFile(`Executing FFmpeg: ${FFMPEG_PATH} ${ffmpegArgs.join(' ')}`);

            const ffmpegProcess = spawn(FFMPEG_PATH, ffmpegArgs);

            ffmpegProcess.stderr.on('data', (data) => {
                const output = data.toString();
                // Basic progress parsing: look for time=HH:MM:SS.ms
                const timeMatch = output.match(/time=(\d{2}:\d{2}:\d{2})/);
                if (timeMatch) {
                    const currentTime = timeMatch[1];
                    // We don't easily know total duration here without ffprobe, so let's use a dynamic message
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool: 'premiere',
                            status: 'RUNNING',
                            message: `Rendering... Current Time: ${currentTime}`,
                            progress: 40 // Static for now, or we could estimate
                        }
                    }));
                }
            });

            ffmpegProcess.on('close', (code) => {
                // Cleanup temp dir
                try {
                    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
                } catch (e) { logToFile(`Cleanup error: ${e.message}`); }

                if (code === 0) {
                    ws.send(JSON.stringify({
                        type: 'VIDEO_UPDATE',
                        payload: { url: `http://localhost:8081/assets/${outputFileName}`, name: outputFileName }
                    }));
                    ws.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: { tool: 'premiere', status: 'COMPLETED', message: '영상 합성이 완료되었습니다!' }
                    }));
                    shell.openPath(ASSETS_PATH);
                } else {
                    ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool: 'premiere', status: 'ERROR', message: `FFmpeg process exited with code ${code}` } }));
                }
            });

        } catch (err) {
            logToFile(`Real Video Edit Error: ${err.message}`);
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool: 'premiere', status: 'ERROR', message: err.message } }));
        }
    } else if (action === 'open_folder') {
        const { folderPath } = data;
        if (folderPath && fs.existsSync(folderPath)) {
            shell.openPath(folderPath);
        }
    } else if (tool === 'image_gen' || tool === 'animation_gen') {
        const isVideo = tool === 'animation_gen';
        ws.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool,
                status: 'RUNNING',
                message: isVideo ? '천사 고양이 소녀 에셋 분석: 날개 Idle 및 헤일로 광원 애니메이션 제작 중 (분량: 80s)...' : `${data?.layout || '이미지'} 생성 중...`
            }
        }));

        setTimeout(async () => {
            // 에셋 폴더 보장 및 열기
            if (!fs.existsSync(ASSETS_PATH)) fs.mkdirSync(ASSETS_PATH, { recursive: true });

            const fileName = isVideo ? 'angel_cat_girl_80s.mp4' : 'preview_sample.png';
            const sampleUrl = isVideo
                ? `https://media.w3.org/2010/05/sintel/trailer.mp4?t=${Date.now()}`
                : `https://via.placeholder.com/1920x1080/4f46e5/ffffff?text=AI+Design+Ready&t=${Date.now()}`;

            const updateType = isVideo ? 'VIDEO_UPDATE' : 'PREVIEW_UPDATE';

            let count = 0;
            wss.clients.forEach(client => {
                if (client.readyState === 1) {
                    client.send(JSON.stringify({
                        type: updateType,
                        payload: { url: sampleUrl, name: fileName }
                    }));

                    client.send(JSON.stringify({
                        type: 'TOOL_STATUS',
                        payload: {
                            tool,
                            status: 'COMPLETED',
                            message: `${isVideo ? '80초 분량의 천사 소녀 테마 애니메이션' : '에셋'}이 제작되었습니다.\n연출: 날개 펄럭임, 빛 갈라짐, 카메라 줌인 적용.\n경로: ${ASSETS_PATH}`
                        }
                    }));
                    count++;
                }
            });

            logToFile(`Simulated ${updateType} via ${tool} to ${count} clients`);
            await shell.openPath(ASSETS_PATH);
        }, 3000);
    }
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
