/**
 * ComfyUI API Wrapper for Design Supporter
 * Handles img2img workflows via ComfyUI's REST API
 * 
 * ComfyUI runs on http://127.0.0.1:8188 by default
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const COMFYUI_HOST = '127.0.0.1';
const COMFYUI_PORT = 8188;
const WebSocket = require('ws'); // Added for progress monitoring

/**
 * Make an HTTP request to ComfyUI
 */
function comfyRequest(method, endpoint, body = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: COMFYUI_HOST,
            port: COMFYUI_PORT,
            path: endpoint,
            method: method,
            headers: { 'Content-Type': 'application/json' },
            timeout: 120000 // Increased to 120s for model loading stability
        };

        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve({ status: res.statusCode, data: JSON.parse(data) });
                } catch (e) {
                    // For binary responses
                    resolve({ status: res.statusCode, data: data });
                }
            });
        });

        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('ComfyUI request timeout')); });
        if (body) req.write(JSON.stringify(body));
        req.end();
    });
}

/**
 * Download a file (image) from ComfyUI
 */
function downloadImage(filename, subfolder, folderType) {
    return new Promise((resolve, reject) => {
        const params = new URLSearchParams({ filename, subfolder: subfolder || '', type: folderType || 'output' });
        const options = {
            hostname: COMFYUI_HOST,
            port: COMFYUI_PORT,
            path: `/view?${params.toString()}`,
            method: 'GET',
            timeout: 120000 // Increased to 120s
        };

        const req = http.request(options, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Download failed with status ${res.statusCode}`));
                return;
            }
            const chunks = [];
            res.on('data', chunk => chunks.push(chunk));
            res.on('end', () => {
                const finalBuffer = Buffer.concat(chunks);
                if (finalBuffer.length < 100) {
                    console.warn(`Warning: Downloaded image for ${filename} is suspiciously small: ${finalBuffer.length} bytes`);
                }
                resolve(finalBuffer);
            });
        });

        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Download timeout')); });
        req.end();
    });
}

/**
 * Upload an image to ComfyUI for use as input
 */
function uploadImage(imageInput, overwrite = true) {
    return new Promise((resolve, reject) => {
        let imageBuffer;
        let filename;

        if (imageInput.startsWith('data:image')) {
            // Base64 Input
            const base64Data = imageInput.split(',')[1];
            imageBuffer = Buffer.from(base64Data, 'base64');
            filename = `upload_${Date.now()}.png`;
        } else if (imageInput.length > 500) {
            // Likely raw base64 without header
            imageBuffer = Buffer.from(imageInput, 'base64');
            filename = `upload_${Date.now()}.png`;
        } else {
            // File Path
            imageBuffer = fs.readFileSync(imageInput);
            filename = path.basename(imageInput);
        }
        const boundary = '----ComfyUIBoundary' + Date.now();

        let body = '';
        body += `--${boundary}\r\n`;
        body += `Content-Disposition: form-data; name="image"; filename="${filename}"\r\n`;
        body += `Content-Type: image/png\r\n\r\n`;

        const bodyStart = Buffer.from(body, 'utf-8');
        const bodyEnd = Buffer.from(`\r\n--${boundary}\r\nContent-Disposition: form-data; name="overwrite"\r\n\r\n${overwrite}\r\n--${boundary}--\r\n`, 'utf-8');
        const fullBody = Buffer.concat([bodyStart, imageBuffer, bodyEnd]);

        const options = {
            hostname: COMFYUI_HOST,
            port: COMFYUI_PORT,
            path: '/upload/image',
            method: 'POST',
            headers: {
                'Content-Type': `multipart/form-data; boundary=${boundary}`,
                'Content-Length': fullBody.length
            },
            timeout: 15000
        };

        const req = http.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(data)); }
                catch (e) { reject(new Error('Upload response parse error: ' + data)); }
            });
        });

        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('Upload timeout')); });
        req.write(fullBody);
        req.end();
    });
}

/**
 * Check if ComfyUI is running
 */
async function checkConnection() {
    try {
        const res = await comfyRequest('GET', '/system_stats');
        return { connected: true, data: res.data };
    } catch (e) {
        return { connected: false, error: e.message };
    }
}

/**
 * Check if specific nodes are available in ComfyUI
 */
async function checkNodesAvailable(nodeClasses) {
    try {
        const results = {};
        for (const nodeClass of nodeClasses) {
            try {
                const res = await comfyRequest('GET', `/object_info/${nodeClass}`);
                results[nodeClass] = (res.status === 200 && res.data[nodeClass] !== undefined);
            } catch (e) {
                results[nodeClass] = false;
            }
        }
        return results;
    } catch (e) {
        return {};
    }
}

/**
 * Get available checkpoint models
 * Prioritizes ComfyUI API (live) then falls back to local disk scan
 */
async function getModels() {
    try {
        let apiModels = [];
        let diskModels = [];

        // 1. Try Live API first (Most accurate for ComfyUI's current state)
        try {
            const res = await comfyRequest('GET', '/object_info/CheckpointLoaderSimple');
            apiModels = res.data?.CheckpointLoaderSimple?.input?.required?.ckpt_name?.[0] || [];
        } catch (apiErr) {
            console.error("ComfyUI API model fetch failed:", apiErr.message);
        }

        // 2. Local disk scan as backup/supplement
        try {
            const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
            const checkpointsDir = path.join(comfyDir, 'models', 'checkpoints');
            if (fs.existsSync(checkpointsDir)) {
                const files = fs.readdirSync(checkpointsDir);
                diskModels = files.filter(f => f.endsWith('.ckpt') || f.endsWith('.safetensors') || f.endsWith('.pt'));
            }
        } catch (dirErr) {
            // Ignore disk scan errors if API worked
        }

        // Merge and unique
        const allModels = [...new Set([...apiModels, ...diskModels])];

        // Ensure default model is at the top if it exists
        const defaultModel = "Custom Anime v4 sharp.safetensors";
        if (allModels.includes(defaultModel)) {
            return [defaultModel, ...allModels.filter(m => m !== defaultModel)];
        }

        return allModels;
    } catch (e) {
        console.error("Critical error in getModels:", e);
        return [];
    }
}

/**
 * Get available upscale models
 */
async function getUpscaleModels() {
    try {
        let models = [];
        const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
        const upscaleDir = path.join(comfyDir, 'models', 'upscale_models');
        if (fs.existsSync(upscaleDir)) {
            const files = fs.readdirSync(upscaleDir);
            models = files.filter(f => f.endsWith('.ckpt') || f.endsWith('.safetensors') || f.endsWith('.pth'));
        }

        if (models.length === 0) {
            try {
                const res = await comfyRequest('GET', '/object_info/UpscaleModelLoader');
                models = res.data?.UpscaleModelLoader?.input?.required?.model_name?.[0] || [];
            } catch (e) { }
        }
        return models;
    } catch (e) {
        console.error("Failed to read upscale models:", e);
        return [];
    }
}

async function getMotionModules() {
    try {
        let modules = [];
        const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
        const modulesDir = path.join(comfyDir, 'custom_nodes', 'ComfyUI-AnimateDiff-Evolved', 'models');
        if (fs.existsSync(modulesDir)) {
            const files = fs.readdirSync(modulesDir);
            modules = files.filter(f => f.endsWith('.ckpt') || f.endsWith('.safetensors') || f.endsWith('.pth'));
        }

        // Fallback: Try to get from ComfyUI API if local scan fails
        if (modules.length === 0) {
            try {
                const res = await comfyRequest('GET', '/object_info/ADE_AnimateDiffLoaderWithContext');
                modules = res.data?.ADE_AnimateDiffLoaderWithContext?.input?.required?.model_name?.[0] || [];
            } catch (e) {
                // If the latest node is not found, try the older one
                const res = await comfyRequest('GET', '/object_info/AnimateDiffLoaderWithContext');
                modules = res.data?.AnimateDiffLoaderWithContext?.input?.required?.model_name?.[0] || [];
            }
        }
        return modules;
    } catch (e) {
        console.error("Failed to read motion modules:", e);
        return [];
    }
}

async function getLLMs() {
    try {
        let models = [];
        const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
        const llmDir = path.join(comfyDir, 'models', 'llms');
        if (fs.existsSync(llmDir)) {
            const files = fs.readdirSync(llmDir);
            models = files.filter(f => f.endsWith('.gguf') || f.endsWith('.bin') || f.endsWith('.safetensors'));
        }
        return models;
    } catch (e) {
        console.error("Failed to scan LLM models:", e);
        return [];
    }
}

/**
 * Helper to check for specific helper LoRAs (Hands/Feet)
 */
function getHelperLoras() {
    const loras = [];
    try {
        const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
        const loraDir = path.join(comfyDir, 'models', 'loras');
        if (fs.existsSync(loraDir)) {
            const files = fs.readdirSync(loraDir);
            // Specific hand/foot improvements
            if (files.includes('goodhands_Beta_Gtonero.safetensors')) loras.push({ name: 'goodhands_Beta_Gtonero.safetensors', strength: 0.7 });
            if (files.includes('PerfectFeet.safetensors')) loras.push({ name: 'PerfectFeet.safetensors', strength: 0.7 });
            // Generic SD1.5 styling if present
            if (files.includes('sd15_lora_beta.safetensors')) loras.push({ name: 'sd15_lora_beta.safetensors', strength: 0.4 });
        }
    } catch (e) {
        console.error("Failed to scan helper loras:", e);
    }
    return loras;
}

/**
 * Helper to check for specific helper Embeddings (Negative)
 */
function getHelperEmbeddings() {
    const embeddings = [];
    try {
        const comfyDir = path.join(__dirname, '..', 'ComfyUI_windows_portable', 'ComfyUI');
        const embDir = path.join(comfyDir, 'models', 'embeddings');
        if (fs.existsSync(embDir)) {
            const files = fs.readdirSync(embDir);
            if (files.includes('easynegative.safetensors') || files.includes('easynegative.pt')) embeddings.push('easynegative');
            if (files.includes('bad-hands-5.pt') || files.includes('bad-hands-5.safetensors')) embeddings.push('bad-hands-5');
        }
    } catch (e) {
        console.error("Failed to scan helper embeddings:", e);
    }
    return embeddings;
}

/**
 * Build the img2img workflow for ComfyUI
 * V3.1: Modern Refining Upscale (Second-Pass Refiner)
 */
function buildImg2ImgWorkflow(options) {
    const {
        inputImageName,
        prompt = 'masterpiece, best quality',
        negativePrompt = 'lowres, bad anatomy, worst quality, distorted face, extra fingers, mutated hands, poorly drawn hands, fused fingers, malformed limbs, misshapen hands, missing fingers, extra limbs, malformed feet, deformed fingers, morbid, mutilated',
        denoisingStrength = 0.5,
        steps = 20,
        cfg = 7.0,
        samplerName = 'euler_ancestral',
        scheduler = 'normal',
        width = 512,
        height = 512,
        seed = -1,
        upscale = false,
        modelName = "Custom Anime v4 sharp.safetensors",
        upscaleModel = "4x-UltraSharp.pth"
    } = options;

    const actualSeed = seed === -1 ? Math.floor(Math.random() * 1e15) : seed;

    // INJECT HELPER EMBEDDINGS (Negative)
    const helperEmbeds = getHelperEmbeddings();
    let finalNegativePrompt = negativePrompt;
    if (helperEmbeds.length > 0) {
        finalNegativePrompt += ", " + helperEmbeds.join(", ");
    }

    // BASE PIPELINE
    const workflow = {
        "1": { "class_type": "CheckpointLoaderSimple", "inputs": { "ckpt_name": modelName } },
        "2": { "class_type": "CLIPTextEncode", "inputs": { "text": prompt, "clip": ["1", 1] } },
        "3": { "class_type": "CLIPTextEncode", "inputs": { "text": finalNegativePrompt, "clip": ["1", 1] } },
        "9": { "class_type": "VAEDecode", "inputs": { "samples": ["8", 0], "vae": ["1", 2] } },
        "10": { "class_type": "SaveImage", "inputs": { "images": ["9", 0], "filename_prefix": "ai_draw_result" } }
    };

    // INJECT HELPER LORAS (Hands/Feet)
    const helperLoras = getHelperLoras();
    let currentModel = ["1", 0];
    let currentClip = ["1", 1];

    if (helperLoras.length > 0) {
        helperLoras.forEach((lora, index) => {
            const nodeId = `lora_${index + 100}`;
            workflow[nodeId] = {
                "class_type": "LoraLoader",
                "inputs": {
                    "lora_name": lora.name,
                    "strength_model": lora.strength,
                    "strength_clip": lora.strength,
                    "model": currentModel,
                    "clip": currentClip
                }
            };
            currentModel = [nodeId, 0];
            currentClip = [nodeId, 1];
        });

        // Redirect CLIP and KSampler inputs to the end of the LoRA chain
        workflow["2"].inputs.clip = currentClip;
        workflow["3"].inputs.clip = currentClip;
    }

    if (inputImageName) {
        workflow["4"] = { "class_type": "LoadImage", "inputs": { "image": inputImageName } };
        workflow["6"] = { "class_type": "ImageScale", "inputs": { "image": ["4", 0], "width": width, "height": height, "upscale_method": "bilinear", "crop": "center" } };
        workflow["7"] = { "class_type": "VAEEncode", "inputs": { "pixels": ["6", 0], "vae": ["1", 2] } };
        workflow["8"] = { "class_type": "KSampler", "inputs": { "model": currentModel, "positive": ["2", 0], "negative": ["3", 0], "latent_image": ["7", 0], "seed": actualSeed, "steps": steps, "cfg": cfg, "sampler_name": samplerName, "scheduler": scheduler, "denoise": denoisingStrength } };
    } else {
        workflow["5"] = { "class_type": "EmptyLatentImage", "inputs": { "width": width, "height": height, "batch_size": 1 } };
        workflow["8"] = { "class_type": "KSampler", "inputs": { "model": currentModel, "positive": ["2", 0], "negative": ["3", 0], "latent_image": ["5", 0], "seed": actualSeed, "steps": steps, "cfg": cfg, "sampler_name": samplerName, "scheduler": scheduler, "denoise": 1.0 } };
    }

    // MODERN REFINING UPSCALE (Second Pass)
    if (upscale) {
        // 11. Load Upscale Model
        workflow["11"] = {
            "class_type": "UpscaleModelLoader",
            "inputs": { "model_name": upscaleModel }
        };
        // 12. Upscale Image
        workflow["12"] = {
            "class_type": "ImageUpscaleWithModel",
            "inputs": {
                "upscale_model": ["11", 0],
                "image": ["9", 0]
            }
        };
        // 13. VAE Encode Tiled (Optimized for 8GB VRAM)
        workflow["13"] = {
            "class_type": "VAEEncodeTiled",
            "inputs": {
                "pixels": ["12", 0],
                "vae": ["1", 2],
                "tile_size": 512
            }
        };
        // 14. KSampler (Refiner Pass) - Optimized for speed
        workflow["14"] = {
            "class_type": "KSampler",
            "inputs": {
                "model": currentModel,
                "positive": ["2", 0],
                "negative": ["3", 0],
                "latent_image": ["13", 0],
                "seed": actualSeed,
                "steps": Math.max(8, Math.round(steps * 0.4)), // Reduced steps for speed
                "cfg": cfg,
                "sampler_name": "euler_ancestral", // Faster sampler
                "scheduler": "karras",
                "denoise": 0.30 // Lower denoise for faster refinement
            }
        };
        // 15. VAE Decode Tiled
        workflow["15"] = {
            "class_type": "VAEDecodeTiled",
            "inputs": {
                "samples": ["14", 0],
                "vae": ["1", 2],
                "tile_size": 512
            }
        };
        // 16. Save Refined Result
        workflow["16"] = {
            "class_type": "SaveImage",
            "inputs": {
                "images": ["15", 0],
                "filename_prefix": "ai_draw_hq_refined"
            }
        };
    }

    return workflow;
}

/**
 * Queue an img2img generation
 */
async function queueImg2Img(imagePath, options = {}) {
    let inputImageName = null;
    if (imagePath) {
        const uploadResult = await uploadImage(imagePath);
        inputImageName = uploadResult.name;
    }
    const workflow = buildImg2ImgWorkflow({ ...options, inputImageName: inputImageName });
    const res = await comfyRequest('POST', '/prompt', { prompt: workflow });
    if (res.data?.prompt_id) return { success: true, promptId: res.data.prompt_id };
    return { success: false, error: res.data?.error || 'Unknown error', nodeErrors: res.data?.node_errors };
}

/**
 * Poll for generation result
 */
async function waitForResult(promptId, timeoutMs = 600000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
        try {
            const res = await comfyRequest('GET', `/history/${promptId}`);
            const history = res.data?.[promptId];
            if (history) {
                const outputs = history.outputs;
                if (outputs) {
                    // Priority: 16 (Refined HQ) -> 10 (Standard)
                    const finalNodeId = (outputs["16"]) ? "16" : (outputs["10"] ? "10" : Object.keys(outputs)[0]);
                    const nodeOutput = outputs[finalNodeId];
                    if (nodeOutput && nodeOutput.images && nodeOutput.images.length > 0) {
                        const img = nodeOutput.images[0];
                        const imageBuffer = await downloadImage(img.filename, img.subfolder, img.type);
                        return { success: true, imageBuffer: imageBuffer, filename: img.filename };
                    }
                }
                if (history.status?.status_str === 'error') return { success: false, error: 'Generation failed', details: history.status };
            }
        } catch (e) { }
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    return { success: false, error: 'Timeout waiting for generation' };
}

/**
 * Full generation pipeline
 */
async function generateImg2Img(imagePath, options = {}, outputPath = null, onProgress = null) {
    const queueResult = await queueImg2Img(imagePath, options);
    if (!queueResult.success) return queueResult;

    // Start progress monitor if callback provided
    let ws = null;
    if (onProgress) {
        ws = new WebSocket(`ws://${COMFYUI_HOST}:${COMFYUI_PORT}/ws?clientId=design_supporter`);
        ws.on('message', (data) => {
            try {
                const msg = JSON.parse(data);
                if (msg.type === 'progress' && msg.data.prompt_id === queueResult.promptId) {
                    const percent = Math.round((msg.data.value / msg.data.max) * 100);
                    onProgress(percent);
                }
            } catch (e) { }
        });
        ws.on('error', () => { });
    }

    const result = await waitForResult(queueResult.promptId, options.timeout || 600000);
    if (ws) ws.close();

    if (!result.success) return result;
    if (outputPath && result.imageBuffer) fs.writeFileSync(outputPath, result.imageBuffer);
    return { success: true, imageBuffer: result.imageBuffer, base64: result.imageBuffer.toString('base64'), filename: result.filename };
}

async function interrupt() {
    try { await comfyRequest('POST', '/interrupt', {}); return true; }
    catch (e) { return false; }
}

/**
 * V4.0: AI Animation Forge (AnimateDiff)
 */
function buildAnimationWorkflow(options) {
    const {
        prompt = 'score_9, score_8_up, score_7_up, masterpiece, best quality, dancing girl',
        negativePrompt = 'score_4, score_5, score_6, lowres, bad anatomy, worst quality, distorted face, extra fingers, mutated hands, poorly drawn hands, fused fingers, malformed limbs, misshapen hands, missing fingers, extra limbs, malformed feet, deformed fingers, morbid, mutilated',
        steps = 25,
        cfg = 7.0,
        samplerName = 'euler_ancestral',
        scheduler = 'karras',
        width = 512,
        height = 512,
        seed = -1,
        modelName = "ponyDiffusionV6XL_v6StartWithThisOne.safetensors",
        motionModule = "sd15_t2v_beta.ckpt",
        loraName = "none",
        useGGUF = false, // Toggle for GGUF
        ggufModel = "ponyDiffusionV6XL_v6StartWithThisOne.gguf",
        frameCount = 16,
        fps = 8
    } = options;

    const actualSeed = seed === -1 ? Math.floor(Math.random() * 1e15) : seed;

    // SDXL Enforcement Logic
    const isSDXL = modelName.toLowerCase().includes("xl") || modelName.toLowerCase().includes("pony") || modelName.toLowerCase().includes("animagine");

    let finalPrompt = prompt;
    let finalMotionModule = motionModule;
    let finalDenoise = options.denoisingStrength || 0.75;
    let finalCfg = cfg;
    let finalSteps = steps;

    if (isSDXL) {
        finalDenoise = 0.35;
        finalCfg = 7.0;
        finalSteps = 28;

        if (finalMotionModule.includes("sd15") || finalMotionModule.includes("v15") || finalMotionModule.includes("t2v") || finalMotionModule.includes("1.5")) {
            finalMotionModule = "mm_sdxl_v10_119.ckpt";
        }

        const removeTags = ["score_9", "score_8_up", "score_7_up", "score_6_up", "score_5_up", "score_4_up", "masterpiece", "best quality", "super detail", "highres"];
        let pArr = finalPrompt.split(',').map(s => s.trim());
        pArr = pArr.filter(t => !removeTags.some(rt => t.toLowerCase() === rt));
        finalPrompt = pArr.join(', ');
    }

    // INJECT HELPER EMBEDDINGS (Negative)
    const helperEmbeds = getHelperEmbeddings();
    let finalNegativePrompt = negativePrompt;
    if (helperEmbeds.length > 0) {
        finalNegativePrompt += ", " + helperEmbeds.join(", ");
    }

    const nodes = {
        "11": { "class_type": "CheckpointLoaderSimple", "inputs": { "ckpt_name": modelName } },
        "4": { "class_type": "EmptyLatentImage", "inputs": { "width": width, "height": height, "batch_size": frameCount } },
        "6": { "class_type": "ADE_AnimateDiffUniformContextOptions", "inputs": { "context_length": 16, "context_stride": 1, "context_overlap": 4, "context_schedule": "uniform", "closed_loop": false } },
        "7": {
            "class_type": "KSampler",
            "inputs": {
                "seed": actualSeed, "steps": finalSteps, "cfg": finalCfg, "sampler_name": samplerName,
                "scheduler": scheduler, "denoise": 1.0,
                "model": ["TEMP_MODEL", 0], "positive": ["TEMP_POS", 0], "negative": ["TEMP_NEG", 0], "latent_image": ["4", 0]
            }
        },
        "8": { "class_type": "VAEDecode", "inputs": { "samples": ["7", 0], "vae": ["11", 2] } },
        "9": { "class_type": "SaveAnimatedWEBP", "inputs": { "images": ["TEMP_FINAL_IMAGES", 0], "filename_prefix": "AnimateDiff", "fps": fps, "lossless": false, "quality": 85, "method": "default" } }
    };

    let currentModel = ["11", 0];
    let currentClip = ["11", 1];

    // Handle GGUF
    if (useGGUF) {
        nodes["1"] = { "class_type": "UnetLoaderGGUF", "inputs": { "unet_name": ggufModel } };
        currentModel = ["1", 0];
    }

    // INJECT HELPER LORAS (Hands/Feet)
    const helperLoras = getHelperLoras();
    if (helperLoras.length > 0) {
        helperLoras.forEach((lora, index) => {
            const nodeId = `lora_helper_${index}`;
            nodes[nodeId] = {
                "class_type": "LoraLoader",
                "inputs": {
                    "lora_name": lora.name,
                    "strength_model": lora.strength,
                    "strength_clip": lora.strength,
                    "model": currentModel,
                    "clip": currentClip
                }
            };
            currentModel = [nodeId, 0];
            currentClip = [nodeId, 1];
        });
    }

    // Handle LoRA
    if (loraName && loraName !== "none" && loraName !== "") {
        nodes["10"] = { "class_type": "LoraLoader", "inputs": { "model": currentModel, "clip": currentClip, "lora_name": loraName, "strength_model": 1.0, "strength_clip": 1.0 } };
        currentModel = ["10", 0];
        currentClip = ["10", 1];
    }

    // AnimateDiff Setup
    // AnimateDiff Setup
    nodes["5"] = { "class_type": "ADE_AnimateDiffLoaderWithContext", "inputs": { "model": currentModel, "model_name": finalMotionModule, "context_options": ["6", 0], "beta_schedule": "autoselect" } };

    // Quality Booster (FreeU V2)
    nodes["freeu"] = {
        "class_type": "FreeU_V2",
        "inputs": {
            "model": ["5", 0],
            "b1": 1.1, "b2": 1.2, "s1": 0.9, "s2": 0.2
        }
    };

    let modelToAnimate = ["freeu", 0];

    // IP-Adapter Logic for Single-Image OR Iterative Continuity (Subsequent segments)
    const hasInputImage = (options.imageNames && options.imageNames.length === 1) || options.inputImage;
    const isXL = modelName.toLowerCase().includes('xl');
    if (hasInputImage) {
        const ipAdapterModel = isXL ? "ip-adapter-plus_sdxl_vit-h.safetensors" : "ip-adapter-plus_sd15.safetensors";
        const clipVisionModel = "CLIP-ViT-H-14-laion2B-s32B-b79K.safetensors"; // ViT-H works for both usually, or specific XL clip vision

        nodes["ip_loader"] = { "class_type": "IPAdapterModelLoader", "inputs": { "ipadapter_file": ipAdapterModel } };
        nodes["clip_vision_loader"] = { "class_type": "CLIPVisionLoader", "inputs": { "clip_name": clipVisionModel } };

        // inputImage is Base64 from previous segment, imageNames[0] is from user upload
        const imageSource = options.inputImage || options.imageNames[0];
        nodes["ip_image_load"] = { "class_type": "LoadImage", "inputs": { "image": imageSource } };

        nodes["ip_apply"] = {
            "class_type": "IPAdapterApply",
            "inputs": {
                "model": modelToAnimate,
                "ipadapter": ["ip_loader", 0],
                "clip_vision": ["clip_vision_loader", 0],
                "image": ["ip_image_load", 0],
                "weight": 0.8,
                "noise": 0.0
            }
        };
        modelToAnimate = ["ip_apply", 0];
    }

    // Motion Logic (ControlNet)
    if (options.useMotionGuide && !options.disableControlNet) {
        const cnModel = isXL ? "controlnet-anime-lineart-sdxl.safetensors" : "control_v11p_sd15s2_lineart_anime.pth";
        nodes["cn_loader"] = { "class_type": "ControlNetLoader", "inputs": { "control_net_name": cnModel } };
    }

    nodes["2"] = { "class_type": "CLIPTextEncode", "inputs": { "text": finalPrompt, "clip": currentClip } };
    nodes["3"] = { "class_type": "CLIPTextEncode", "inputs": { "text": finalNegativePrompt, "clip": currentClip } };

    // Multi-Image Batching Logic
    const inputImageNames = options.imageNames || [];
    let lastImageBatchNode = null;
    if (inputImageNames.length > 0) {
        let lastImageNode = null;
        for (let i = 0; i < inputImageNames.length; i++) {
            const nodeId = `img_${i}`;
            nodes[nodeId] = { "class_type": "LoadImage", "inputs": { "image": inputImageNames[i] } };

            if (i === 0) {
                lastImageNode = [nodeId, 0];
            } else {
                const batchId = `batch_${i}`;
                nodes[batchId] = {
                    "class_type": "ImageBatch",
                    "inputs": { "image1": lastImageNode, "image2": [nodeId, 0] }
                };
                lastImageNode = [batchId, 0];
            }
        }
        lastImageBatchNode = lastImageNode;

        // VAE Encode the batch
        nodes["latent_batch"] = { "class_type": "VAEEncode", "inputs": { "pixels": lastImageBatchNode, "vae": ["11", 2] } };
        nodes["7"].inputs.latent_image = ["latent_batch", 0];
        // Use the batch size as the frame count if frames not explicitly set higher
        if (nodes["4"].inputs.batch_size < inputImageNames.length) {
            nodes["4"].inputs.batch_size = inputImageNames.length;
        }
        // Enable denoise based on user preference
        nodes["7"].inputs.denoise = options.denoisingStrength || 0.75;
    } else {
        // If 1 image + IP-Adapter, we use high denoise or empty latent
        // For "Imagination Mode", we use 1.0 (creative from scratch but style via IPA)
        nodes["7"].inputs.denoise = 1.0;
    }

    // Connect KSampler
    nodes["7"].inputs.model = modelToAnimate; // Use the (possibly IP-Adapter patched) model

    // Apply Motion Guide (ControlNet) to Positive Conditioning
    if (options.useMotionGuide && lastImageBatchNode && !options.disableControlNet) {
        // Switched from Canny to Anime Lineart for professional anime style
        nodes["lineart_pre"] = { "class_type": "AnimeLineArtPreprocessor", "inputs": { "image": lastImageBatchNode } };
        nodes["cn_apply"] = {
            "class_type": "ControlNetApply",
            "inputs": {
                "conditioning": ["2", 0],
                "control_net": ["cn_loader", 0],
                "image": ["lineart_pre", 0],
                "strength": 0.65
            }
        };
        nodes["7"].inputs.positive = ["cn_apply", 0];
    } else {
        nodes["7"].inputs.positive = ["2", 0];
    }

    nodes["7"].inputs.negative = ["3", 0];
    nodes["7"].inputs.steps = finalSteps;

    nodes["7"].inputs.cfg = finalCfg;

    // Final SDXL Denoise Override (preserve Imagination mode 1.0)
    if (isSDXL && nodes["7"].inputs.denoise !== 1.0) {
        nodes["7"].inputs.denoise = finalDenoise;
    }

    let finalOutputNode = ["8", 0];

    // Handle Upscale
    if (options.upscale && options.upscaleModel) {
        nodes["20"] = { "class_type": "UpscaleModelLoader", "inputs": { "model_name": options.upscaleModel } };
        nodes["21"] = { "class_type": "ImageUpscaleWithModel", "inputs": { "upscale_model": ["20", 0], "image": ["8", 0] } };
        finalOutputNode = ["21", 0];
    }

    // Handle Smoothing (RIFE)
    if (options.smooth) {
        // We use RIFE_VFI if available. Note: This might fail if the node is missing.
        nodes["30"] = {
            "class_type": "RIFE VFI",
            "inputs": {
                "ckpt_name": "rife47.pth",
                "frames": [finalOutputNode[0], finalOutputNode[1]],
                "clear_cache_after_n_frames": 10,
                "multiplier": 2,
                "fast_mode": true,
                "ensemble": false,
                "scale_factor": 1.0,
                "dtype": "float32",
                "torch_compile": false,
                "batch_size": 1
            }
        };
        finalOutputNode = ["30", 0];
        // Adjust FPS for smoothing results
        nodes["9"].inputs.fps = options.fps ? options.fps * 2 : 16;
    }

    nodes["9"].inputs.images = finalOutputNode;

    return nodes;
}

async function queueAnimation(options = {}) {
    const workflow = buildAnimationWorkflow(options);
    const res = await comfyRequest('POST', '/prompt', { prompt: workflow });
    if (res.data?.prompt_id) return { success: true, promptId: res.data.prompt_id };
    return { success: false, error: res.data?.error || 'Unknown error' };
}

async function waitForVideoResult(promptId, timeoutMs = 900000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeoutMs) {
        try {
            const res = await comfyRequest('GET', `/history/${promptId}`);
            const history = res.data?.[promptId];
            if (history) {
                const outputs = history.outputs;
                if (outputs) {
                    const videoNodeId = Object.keys(outputs).find(id => outputs[id].gifs || outputs[id].images);
                    const nodeOutput = outputs[videoNodeId];
                    const videoData = nodeOutput.gifs ? nodeOutput.gifs[0] : (nodeOutput.images ? nodeOutput.images[0] : null);
                    if (videoData) {
                        const videoBuffer = await downloadImage(videoData.filename, videoData.subfolder, videoData.type);
                        return { success: true, videoBuffer: videoBuffer, filename: videoData.filename };
                    }
                }
                if (history.status?.status_str === 'error') return { success: false, error: 'Animation failed' };
            }
        } catch (e) { }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return { success: false, error: 'Timeout waiting for animation' };
}

async function generateAnimation(options = {}, outputPath = null, onProgress = null) {
    // PRE-FLIGHT CHECK: Robust node and model validation
    try {
        const requiredNodes = ["ADE_AnimateDiffLoaderWithContext", "FreeU_V2"];
        if (options.useMotionGuide) {
            requiredNodes.push("CannyEdgePreprocessor", "ControlNetLoader", "ControlNetApply");
        }
        if (options.smooth) requiredNodes.push("RIFE VFI");
        if ((options.imageNames && options.imageNames.length === 1) || options.inputImage) {
            requiredNodes.push("IPAdapterModelLoader", "CLIPVisionLoader", "IPAdapterApply");
        }

        const nodeStatus = await checkNodesAvailable(requiredNodes);

        // Critical failures (Animation components)
        if (!nodeStatus["ADE_AnimateDiffLoaderWithContext"]) {
            return { success: false, error: "AnimateDiff 노드가 설치되지 않았습니다. ComfyUI Manager를 통해 'ComfyUI-AnimateDiff-Evolved'를 설치해주세요." };
        }

        // Handle missing IP-Adapter gracefully for hand-off
        if (options.inputImage && !nodeStatus["IPAdapterApply"]) {
            console.warn("IPAdapter nodes missing. Continuity might be degraded.");
        }

    } catch (e) {
        console.error("Pre-flight check failed:", e);
    }

    const queueResult = await queueAnimation(options);
    if (!queueResult.success) return queueResult;

    // WebSocket Progress Monitor for Animation
    let ws = null;
    if (onProgress) {
        ws = new WebSocket(`ws://${COMFYUI_HOST}:${COMFYUI_PORT}/ws?clientId=design_supporter`);
        ws.on('message', (data) => {
            try {
                const msg = JSON.parse(data);
                if (msg.type === 'progress' && msg.data.prompt_id === queueResult.promptId) {
                    const percent = Math.round((msg.data.value / msg.data.max) * 100);
                    onProgress(percent);
                }
            } catch (e) { }
        });
        ws.on('error', () => { });
    }

    const result = await waitForVideoResult(queueResult.promptId, options.timeout || 900000);
    if (ws) ws.close();

    if (!result.success) return result;
    if (outputPath && result.videoBuffer) fs.writeFileSync(outputPath, result.videoBuffer);

    // Extract last frame for iterative synthesis if needed
    let lastFrameBase64 = null;
    if (options.isLongAnimation && result.videoBuffer) {
        try {
            // For now, we'll try to get the last frame via a temporary SaveImage node in next version
            // For this version, we use the buffer directly as inputImage for the next pass
            lastFrameBase64 = result.videoBuffer.toString('base64');
        } catch (e) { console.error("Last frame extraction failed", e); }
    }

    return {
        success: true,
        videoBuffer: result.videoBuffer,
        base64: result.videoBuffer.toString('base64'),
        filename: result.filename,
        lastFrame: lastFrameBase64
    };
}

/**
 * V5.0: Iterative Long Animation Synthesis
 */
async function generateLongAnimation(options = {}, outputPath = null, onProgress = null) {
    const totalDuration = options.totalDuration || 3;
    const segmentDuration = 3; // Fixed 3s segments for 8GB VRAM stability
    const numSegments = Math.ceil(totalDuration / segmentDuration);

    let currentOptions = { ...options, frameCount: 24, fps: 8, isLongAnimation: true };
    const allSegments = [];
    let previousLastFrame = null;

    for (let i = 0; i < numSegments; i++) {
        if (onProgress) onProgress(`Generating Segment ${i + 1}/${numSegments}...`, 0); // Reset % for new segment

        if (i > 0 && previousLastFrame) {
            // Pass the last frame of previous segment as the style/content anchor for the next
            currentOptions.imageNames = []; // Clear original uploads
            currentOptions.inputImage = previousLastFrame;
            currentOptions.denoisingStrength = 0.85; // High denoise to allow motion but keep style
        }

        // Output path for individual segments? No, we just need the buffer.
        // But for the VERY LAST segment, we write to outputPath if provided
        const segmentOutputPath = (i === numSegments - 1) ? outputPath : null;

        const result = await generateAnimation(currentOptions, segmentOutputPath, (percent) => {
            if (onProgress) onProgress(`Generating Segment ${i + 1}/${numSegments}...`, percent);
        });
        if (!result.success) return result;

        allSegments.push(result.videoBuffer);
        previousLastFrame = result.base64; // Use the result as the next starting point

        // Wait a bit to clear VRAM between segments
        await new Promise(r => setTimeout(r, 2000));
    }

    // Combine segments (For now, we return the last segment or a specific message)
    // Real-time stitching requires ffmpeg, so we'll return the array of buffers for the bridge to handle
    return {
        success: true,
        segments: allSegments,
        lastSegmentBase64: allSegments[allSegments.length - 1].toString('base64'),
        base64: allSegments[allSegments.length - 1].toString('base64')
    };
}

async function buildAnalysisWorkflow(imagePath) {
    const filename = path.basename(imagePath);
    await uploadImage(imagePath);

    return {
        "1": { "class_type": "LoadImage", "inputs": { "image": filename, "upload": "image" } },
        "2": { "class_type": "WD14Tagger|pysssss", "inputs": { "image": ["1", 0], "model": "wd-v1-4-vit-tagger-v2", "threshold": 0.35, "character_threshold": 0.85, "exclude_tags": "" } },
        "3": { "class_type": "SaveTextFile", "inputs": { "text": ["2", 0], "path": "analysis_output.txt" } }
    };
}

async function analyzeImageToPrompt(imagePath) {
    const workflow = await buildAnalysisWorkflow(imagePath);
    const res = await comfyRequest('POST', '/prompt', { prompt: workflow });
    if (!res.data || !res.data.prompt_id) return { success: false, error: 'Failed to queue analysis' };

    const promptId = res.data.prompt_id;
    const startTime = Date.now();
    while (Date.now() - startTime < 60000) {
        const history = await comfyRequest('GET', `/history/${promptId}`);
        if (history.data?.[promptId]) {
            const outputs = history.data[promptId].outputs;
            const tagNodeId = Object.keys(outputs).find(id => outputs[id].tags);
            if (tagNodeId) {
                return { success: true, prompt: outputs[tagNodeId].tags[0] };
            }
            // Fallback: check text output if tagger doesn't return directly
            const textNodeId = Object.keys(outputs).find(id => outputs[id].text);
            if (textNodeId) {
                return { success: true, prompt: outputs[textNodeId].text[0] };
            }
        }
        await new Promise(r => setTimeout(r, 1000));
    }
    return { success: false, error: 'Analysis timeout' };
}

module.exports = {
    checkConnection,
    getModels,
    getUpscaleModels,
    getMotionModules,
    getLLMs,
    generateImg2Img,
    generateAnimation,
    generateLongAnimation,
    analyzeImageToPrompt,
    interrupt,
    downloadImage,
    uploadImage
};
