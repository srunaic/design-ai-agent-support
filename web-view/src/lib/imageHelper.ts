export function getPromptHelper(intent: string): string {
    const prompts: Record<string, string> = {
        "실사 스타일": "high quality realistic photography, professional lighting, 8k, highly detailed",
        "3D 일러스트": "cute 3d clay illustration, isometric view, vibrant colors, soft lighting, stylized",
        "미니멀 플랫 디자인": "minimalist flat design illustration, clean lines, pastel color palette, vector art"
    };
    return prompts[intent] || intent;
}
