const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const net = require('net');
const { WebSocketServer } = require('ws');
const http = require('http');

let mainWindow;
let wss;
let assetServer;

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
    afterEffectsPath: ''
};

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
        width: 1280,
        height: 800,
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
                } else if (payload.type === 'UPDATE_PREVIEW' || payload.type === 'DESIGN_COMMAND') {
                    // 프리뷰 업데이트 또는 디자인 명령을 모든 클라이언트에게 브로드캐스트
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

const ASSETS_PATH = path.join(process.cwd(), '..', 'assets');

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

            // Step 1 핑크 & 화이트 토글 UI 데이터 정의
            const exportData = {
                type: 'DESIGN_COMMAND',
                payload: {
                    description: 'Pink & White Toggle Menu UI (Hi-Res)',
                    elements: [
                        { type: 'FRAME', name: 'Step1_Pink_UI', width: 400, height: 600, x: 0, y: 0, fill: '#FFFFFF', radius: 48 },
                        // 캐릭터 이미지 레이어 (이미지가 있으면 사용, 없으면 핑크 원)
                        imageBase64 ?
                            { type: 'IMAGE', name: 'Character_Avatar', width: 120, height: 120, x: 140, y: 50, imageData: imageBase64, radius: 60 } :
                            { type: 'RECT', name: 'User_Icon_BG', width: 96, height: 96, x: 152, y: 64, fill: '#FF69B4', radius: 48 },

                        { type: 'TEXT', name: 'Title', text: 'Game Session', x: 0, y: 190, width: 400, size: 24, fontWeight: 'bold', fill: '#1E293B' },
                        { type: 'TEXT', name: 'Subtitle', text: 'EXPERIMENTAL UI', x: 0, y: 225, width: 400, size: 12, fontWeight: 'bold', fill: '#FF69B4' },
                        { type: 'BUTTON', name: 'Toggle_Btn', label: '...', x: 172, y: 280, width: 56, height: 56, fill: '#FF69B4', radius: 16, textColor: '#FFFFFF', fontSize: 24 }
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
    } else if (tool === 'after_effects') {
        if (action === 'launch') {
            const appPath = findAdobeAppPath('After Effects');
            if (appPath) {
                shell.openPath(appPath);
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'RUNNING', message: 'After Effects 실행 중...' } }));
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: 'After Effects를 찾을 수 없습니다. Adobe Creative Cloud에서 설치 여부를 확인해 주세요.' } }));
            }
        } else if (action === 'apply_motion') {
            ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '선택한 모션 설정이 프로젝트에 적용되었습니다.' } }));
        }
    } else if (tool === 'config') {
        if (action === 'save_adobe_paths') {
            const { photoshopPath, illustratorPath, premierePath, afterEffectsPath } = data;
            const updatedConfig = {
                ...config,
                photoshopPath: photoshopPath || config.photoshopPath,
                illustratorPath: illustratorPath || config.illustratorPath,
                premierePath: premierePath || config.premierePath,
                afterEffectsPath: afterEffectsPath || config.afterEffectsPath
            };
            if (saveConfig(updatedConfig)) {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'COMPLETED', message: '어도비 경로 설정이 업데이트되었습니다.' } }));
            } else {
                ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'ERROR', message: '경로 저장 중 오류가 발생했습니다.' } }));
            }
        }
    } else if (tool === 'photoshop') {
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

            // 시뮬레이션: 실제 파일이 생성된 것처럼 이벤트를 보냄 
            // 실제 구현에서는 AI가 에셋 폴더에 파일을 생성한 후 이 경로를 보냄
            const fileName = isVideo ? 'angel_cat_girl_80s.mp4' : 'preview_sample.png';
            const sampleUrl = isVideo
                ? `https://media.w3.org/2010/05/sintel/trailer.mp4?t=${Date.now()}` // 더 안정적인 샘플 MP4 (Sintel)
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
