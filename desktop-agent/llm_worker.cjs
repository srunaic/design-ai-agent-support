const path = require("path");

let llama = null;
let model = null;
let context = null;
let session = null;
let currentModelPath = null;
let LlamaChatSessionCls = null;

// Child Process Message Handler
process.on('message', async (msg) => {
    const { action, payload } = msg;

    try {
        if (action === 'INIT') {
            const success = await initLLM(payload.modelPath);
            process.send({ action: 'INIT_RESULT', success });
        } else if (action === 'REFINE') {
            const result = await refinePrompt(payload.text, payload.targetType);
            process.send({ action: 'REFINE_RESULT', result });
        }
    } catch (e) {
        process.send({ action: 'ERROR', error: e.message });
    }
});

async function initLLM(modelPath) {
    if (currentModelPath === modelPath && session) return true;

    try {
        // node-llama-cpp is ESM, must use dynamic import
        const { getLlama, LlamaChatSession } = await import("node-llama-cpp");
        LlamaChatSessionCls = LlamaChatSession;

        if (!llama) llama = await getLlama();

        model = await llama.loadModel({
            modelPath: modelPath,
            gpuLayers: 0 // Keep on CPU for stability
        });

        context = await model.createContext({ contextSize: 1024 });
        session = new LlamaChatSessionCls({ contextSequence: context.getSequence() });
        currentModelPath = modelPath;
        return true;
    } catch (e) {
        console.error("[LLM Worker] Init failed:", e);
        return false;
    }
}

async function refinePrompt(userInput, systemType = 'animation') {
    if (!session) return userInput;

    const systemPrompts = {
        animation: "You are a master cinematic animation prompt engineer. Convert the user's input (Korean or English) into a professional Stable Diffusion / AnimateDiff prompt. Focus on: Cinematic lighting, dynamic camera movement, high quality tags. Output ONLY the refined English prompt string. No conversational text.",
        ui_design: "You are a premium UI/UX design assistant. Convert the user's request into a technical prompt for a UI generation AI. Output ONLY the refined English prompt string.",
        ai_draw: "You are a digital artist. Refine the user's prompt into a masterpiece-level artistic description. Output ONLY the refined English prompt string."
    };

    try {
        const response = await session.prompt(userInput, {
            systemPrompt: systemPrompts[systemType] || systemPrompts.animation,
            maxTokens: 256,
            temperature: 0.6
        });

        let result = response.trim();
        result = result.replace(/^(Refined |Final |Output )?Prompt:\s*/i, '');
        result = result.replace(/^["']|["']$/g, '');
        result = result.split('\n')[0];
        return result;
    } catch (e) {
        return userInput;
    }
}
