const WebSocket = require('ws');

const fs = require('fs');

const input = process.argv[2];
if (!input) {
    console.error('Usage: node send_design.cjs <json_data_or_file_path>');
    process.exit(1);
}

let designData = input;
if (fs.existsSync(input)) {
    designData = fs.readFileSync(input, 'utf-8');
}

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    try {
        const payload = JSON.parse(designData);
        ws.send(JSON.stringify({
            type: 'DESIGN_COMMAND',
            payload: payload
        }));
        console.log('Design command sent successfully to Figma Bridge');
    } catch (e) {
        console.error('Invalid JSON data:', e.message);
    }
    setTimeout(() => ws.close(), 500);
});

ws.on('error', (err) => {
    console.error('Failed to connect to bridge:', err.message);
    process.exit(1);
});
