const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const imagePath = process.argv[2];
if (!imagePath) {
    console.error('Usage: node send_image.cjs <image_path> [name] [width] [height]');
    process.exit(1);
}

if (!fs.existsSync(imagePath)) {
    console.error(`Image file not found: ${imagePath}`);
    process.exit(1);
}

const name = process.argv[3] || path.basename(imagePath, path.extname(imagePath));
const width = parseInt(process.argv[4]) || 512;
const height = parseInt(process.argv[5]) || 512;

// Read image and convert to base64
const imageBuffer = fs.readFileSync(imagePath);
const base64Image = imageBuffer.toString('base64');
const ext = path.extname(imagePath).slice(1).toLowerCase();
const mimeType = ext === 'jpg' ? 'jpeg' : ext;
const dataUrl = `data:image/${mimeType};base64,${base64Image}`;

console.log(`Sending image: ${name} (${width}x${height})`);

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    ws.send(JSON.stringify({
        type: 'INSERT_IMAGE',
        payload: {
            imageData: dataUrl,
            name: name,
            width: width,
            height: height,
            x: 0,
            y: 0
        }
    }));
    console.log('✅ Image sent successfully to Figma Bridge');
    setTimeout(() => ws.close(), 500);
});

ws.on('error', (err) => {
    console.error('Failed to connect to bridge:', err.message);
    process.exit(1);
});
