let llama = null;
let model = null;
let context = null;
let session = null;
let currentModelPath = null;
let LlamaChatSessionCls = null;

async function initLLM(modelPath, onStatus) {
    if (currentModelPath === modelPath && session) return true;

    try {
        if (onStatus) onStatus("📦 LLM 엔진 최적화 로딩 중... (VRAM 절약 모드)");
        console.log(`[LLM] Initializing with model: ${modelPath}`);

        const { getLlama, LlamaChatSession } = await import("node-llama-cpp");
        LlamaChatSessionCls = LlamaChatSession;

        if (!llama) llama = await getLlama();

        // RTX 4060 (8GB VRAM) 최적화: Mistral 12B는 너무 커서 VRAM을 조금이라도 쓰면 렉이 발생합니다.
        // 모든 연산을 CPU로 강제 전환하여 그래픽카드(VRAM)는 오직 이미지 생성에만 100% 집중하게 합니다.
        model = await llama.loadModel({
            modelPath: modelPath,
            gpuLayers: 0
        });

        context = await model.createContext({
            contextSize: 1024 // 프롬프트용이므로 컨텍스트 축소하여 메모리 절약
        });

        session = new LlamaChatSessionCls({
            contextSequence: context.getSequence()
        });

        currentModelPath = modelPath;
        console.log("[LLM] Context and session ready (ECO Mode).");
        if (onStatus) onStatus("✨ LLM 준비 완료 (저사양 최적화 모드)");
        return true;
    } catch (e) {
        console.error("[LLM] Initialization failed:", e);
        if (onStatus) onStatus("❌ LLM 로딩 실패 - 일반 번역기로 전환합니다.");
        return false;
    }
}

async function refinePrompt(userInput, systemType = 'animation', onStatus) {
    if (!session) {
        console.error("[LLM] Session not initialized.");
        return userInput;
    }

    if (onStatus) onStatus("🪄 Mistral NeMo가 최적화 추론 중...");

    const systemPrompts = {
        animation: "You are a master cinematic animation prompt engineer. Convert the user's input (Korean or English) into a professional Stable Diffusion / AnimateDiff prompt. Focus on: Cinematic lighting, dynamic camera movement, high quality tags. Output ONLY the refined English prompt string. No conversational text.",
        ui_design: "You are a premium UI/UX design assistant. Convert the user's request into a technical prompt for a UI generation AI. Focus on layout and modern web aesthetics. Output ONLY the refined English prompt string.",
        ai_draw: "You are a digital artist. Refine the user's prompt into a masterpiece-level artistic description. Output ONLY the refined English prompt string."
    };

    try {
        // 타임아웃 처리 (30초 이상 걸리면 실패로 간주)
        const inferencePromise = session.prompt(userInput, {
            systemPrompt: systemPrompts[systemType] || systemPrompts.animation,
            maxTokens: 256,
            temperature: 0.6
        });

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Inference Timeout")), 45000)
        );

        const response = await Promise.race([inferencePromise, timeoutPromise]);

        let result = response.trim();
        // 쓰레기 텍스트 제거 강화
        result = result.replace(/^(Refined |Final |Output )?Prompt:\s*/i, '');
        result = result.replace(/^["']|["']$/g, '');
        result = result.split('\n')[0]; // 첫 줄만 사용

        if (onStatus) onStatus("✨ 최적화 마법 적용 완료!");
        return result;
    } catch (e) {
        console.error("[LLM] Inference failed or timed out:", e);
        if (onStatus) onStatus("⚠️ 응답 지연으로 일반 번역기를 사용합니다.");
        return null; // null 반환 시 main.cjs에서 폴백 처리
    }
}

async function unloadLLM() {
    try {
        session = null;
        context = null;
        model = null;
        currentModelPath = null;
        console.log("[LLM] Memory cleared.");
    } catch (e) {
        console.error("[LLM] Unload failed:", e);
    }
}

module.exports = {
    initLLM,
    refinePrompt,
    unloadLLM
};
