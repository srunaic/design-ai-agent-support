/**
 * Figma Automation & Preview Script
 * Usage: node figma_automation.cjs <action> [params] 
 * Actions: 
 *   - preview: Get latest frame image and send to Supporter UI
 *   - create: (TBD) Create design elements via API
 */
const https = require('https');
const { execSync } = require('child_process');
const path = require('path');

// 1. Configuration (Extracted from user/main.cjs)
const FIGMA_PAT = process.env.FIGMA_PAT || ''; // Set your PAT in environment variables
const FILE_KEY = process.env.FIGMA_FILE_KEY || '';

function request(url, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            method,
            headers: {
                'X-Figma-Token': FIGMA_PAT,
                'Content-Type': 'application/json'
            }
        };
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                if (res.statusCode >= 400) reject(new Error(`API Error: ${res.statusCode} - ${body}`));
                else resolve(JSON.parse(body));
            });
        });
        req.on('error', reject);
        if (data) req.write(JSON.stringify(data));
        req.end();
    });
}

async function run() {
    const action = process.argv[2] || 'preview';

    try {
        if (action === 'preview') {
            console.log('Fetching Figma document structure...');
            const doc = await request(`https://api.figma.com/v1/files/${FILE_KEY}`);

            // Find the best renderable node
            let frameId = null;
            let frameName = '';

            const scan = (node) => {
                // Prioritize actual Frames, Components, or Instances
                if (node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE') {
                    frameId = node.id;
                    frameName = node.name;
                    return true;
                }
                if (node.children) {
                    for (const child of node.children) {
                        if (scan(child)) return true;
                    }
                }
                return false;
            };

            scan(doc.document);

            if (!frameId) {
                console.log('No specific Frame/Component found. Checking for any renderable content on pages...');
                // Fallback to the first child of the first page if it exists
                if (doc.document.children && doc.document.children[0].children && doc.document.children[0].children.length > 0) {
                    const firstObj = doc.document.children[0].children[0];
                    frameId = firstObj.id;
                    frameName = firstObj.name;
                }
            }

            if (!frameId) {
                console.error('No renderable nodes found. Please create a "Frame" (F key) in Figma.');
                return;
            }

            console.log(`Targeting: [${frameName}] (ID: ${frameId})`);

            console.log(`Getting image for frame: ${frameId}`);
            const images = await request(`https://api.figma.com/v1/images/${FILE_KEY}?ids=${frameId}&format=png`);
            const imageUrl = images.images[frameId];

            if (imageUrl) {
                console.log(`Preview URL: ${imageUrl}`);
                // Send to Supporter Bridge
                const senderPath = path.join(__dirname, 'send_preview.cjs');
                execSync(`node "${senderPath}" "${imageUrl}"`);
            } else {
                console.error('Failed to generate image URL');
            }
        }
    } catch (err) {
        console.error('Automation Error:', err.message);
    }
}

run();
