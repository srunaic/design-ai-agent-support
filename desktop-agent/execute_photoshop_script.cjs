const WebSocket = require('ws');
const path = require('path');

const socket = new WebSocket('ws://127.0.0.1:8080');

socket.on('open', () => {
    console.log('Connected to Bridge. Sending EXECUTE_SCRIPT for Photoshop...');

    const scriptPath = path.resolve(__dirname, 'photoshop_automation.jsx');

    socket.send(JSON.stringify({
        type: 'EXECUTE_TOOL',
        payload: {
            tool: 'photoshop',
            action: 'execute_script',
            data: {
                scriptPath: scriptPath
            }
        }
    }));

    setTimeout(() => {
        socket.close();
        process.exit(0);
    }, 1000);
});

socket.on('error', (err) => {
    console.error('Connection Error:', err.message);
    process.exit(1);
});
