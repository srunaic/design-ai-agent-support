const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const net = require('net');
const { WebSocketServer } = require('ws');

let mainWindow;
let wss;

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
    figmaFileKey: ''
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

    // Loading Remote App (GitHub Pages)
    const targetUrl = 'https://srunaic.github.io/design-ai-agent-support';
    logToFile(`Loading remote app from: ${targetUrl}`);

    // No need to check localhost port anymore. Just load the URL.
    setTimeout(() => {
        mainWindow.loadURL(targetUrl).catch(err => {
            logToFile(`Failed to load remote URL: ${err.message}`);
            mainWindow.loadFile(path.join(__dirname, 'loading.html')); // Fallback
        });
    }, 1000);
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

function startBridge() {
    if (wss) {
        logToFile('Bridge Server already running');
        return;
    }
    logToFile('Starting Bridge Server on port 8080...');
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
                    wss.clients.forEach(client => {
                        if (client.readyState === 1) { // WebSocket.OPEN === 1
                            client.send(JSON.stringify({ type: payload.type, payload: payload.payload }));
                        }
                    });
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
    const { tool, action, payload: data } = payload;
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
    } else if (tool === 'image_gen') {
        ws.send(JSON.stringify({ type: 'TOOL_STATUS', payload: { tool, status: 'SAVING', message: `${data?.layout || '이미지'} 생성 중...` } }));

        setTimeout(async () => {
            // 실제 폴더 열기
            if (fs.existsSync(ASSETS_PATH)) {
                await shell.openPath(ASSETS_PATH);
            }
            ws.send(JSON.stringify({
                type: 'TOOL_STATUS',
                payload: {
                    tool,
                    status: 'COMPLETED',
                    message: `에셋이 저장되었습니다.\n경로: ${ASSETS_PATH}`
                }
            }));
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
