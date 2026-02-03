const WebSocket = require('ws');

const data = process.argv[2];
if (!data) {
    console.error('Usage: node send_preview.cjs <image_url_or_base64>');
    process.exit(1);
}

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    ws.send(JSON.stringify({
        type: 'UPDATE_PREVIEW',
        payload: { url: data }
    }));
    console.log('Preview data sent successfully');
    setTimeout(() => ws.close(), 500);
});

ws.on('error', (err) => {
    console.error('Failed to send preview:', err.message);
    process.exit(1);
});
