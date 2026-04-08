/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = async (msg) => {
    if (msg.type === 'create-ui') {
        const { actions, layout, style } = msg.payload;

        // 1. Create Main Frame
        const frame = figma.createFrame();
        frame.name = layout || "AI Design Support";
        frame.resize(375, 812);
        frame.fills = [{ type: 'SOLID', color: { r: 0.05, g: 0.05, b: 0.05 } }]; // Dark theme default

        // 2. Load Fonts (Required for text creation)
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });

        // 3. Process Actions from Agent
        if (actions && Array.isArray(actions)) {
            for (const action of actions) {
                if (action.type === 'RECT') {
                    const rect = figma.createRectangle();
                    rect.resize(action.width || 100, action.height || 100);
                    rect.x = action.x || 0;
                    rect.y = action.y || 0;
                    if (action.color) rect.fills = [{ type: 'SOLID', color: action.color }];
                    frame.appendChild(rect);
                } else if (action.type === 'TEXT') {
                    const text = figma.createText();
                    text.characters = action.content || "Text";
                    text.fontSize = action.size || 16;
                    text.x = action.x || 0;
                    text.y = action.y || 0;
                    if (action.color) text.fills = [{ type: 'SOLID', color: action.color }];
                    frame.appendChild(text);
                }
            }
        }

        figma.viewport.scrollAndZoomIntoView([frame]);
        figma.notify("AI Design Generated successfully!");
    }
};
