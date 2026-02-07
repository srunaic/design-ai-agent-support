/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, { width: 300, height: 400 });

// Color conversion helper
function hexToFigmaColor(hex) {
    if (!hex) return { r: 0.2, g: 0.2, b: 0.2 };
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    } : { r: 0.2, g: 0.2, b: 0.2 };
}

// Create rounded rectangle helper
function setCornerRadius(node, radius) {
    if (radius && 'cornerRadius' in node) {
        node.cornerRadius = radius;
    }
}

figma.ui.onmessage = async (msg) => {
    figma.notify("📡 Incoming: " + msg.type, { timeout: 1000 });

    if (msg.type === 'create-ui') {
        const { actions, layout } = msg.payload;
        figma.notify("🎨 Processing " + (actions ? actions.length : 0) + " elements...");

        try {
            // 1. Load fonts with individual try-catch
            const fonts = [
                { family: "Inter", style: "Regular" },
                { family: "Inter", style: "Medium" },
                { family: "Inter", style: "Bold" },
                { family: "Inter", style: "Semi Bold" }
            ];

            for (const f of fonts) {
                try {
                    await figma.loadFontAsync(f);
                } catch (e) {
                    console.warn(`Font load failed: ${f.family} ${f.style}`);
                }
            }

            const allRootFrames = [];
            let currentFrame = null;

            if (actions && Array.isArray(actions)) {
                for (let i = 0; i < actions.length; i++) {
                    const action = actions[i];
                    const type = (action.type || '').toUpperCase();

                    // FRAME = ROOT CONTAINER
                    if (type === 'FRAME') {
                        currentFrame = figma.createFrame();
                        currentFrame.name = action.name || "Design_Screen";
                        currentFrame.resize(action.width || 1920, action.height || 1080);
                        currentFrame.x = action.x || 0;
                        currentFrame.y = action.y || 0;
                        currentFrame.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                        figma.currentPage.appendChild(currentFrame);
                        allRootFrames.push(currentFrame);
                        continue;
                    }

                    // Default frame safety
                    if (!currentFrame) {
                        currentFrame = figma.createFrame();
                        currentFrame.name = layout || "Default_Canvas";
                        currentFrame.resize(1920, 1080);
                        figma.currentPage.appendChild(currentFrame);
                        allRootFrames.push(currentFrame);
                    }

                    let node = null;
                    switch (type) {
                        case 'RECT':
                        case 'RECTANGLE':
                            node = figma.createRectangle();
                            node.name = action.name || "Rect_" + i;
                            node.resize(action.width || 100, action.height || 100);
                            node.x = action.x || 0;
                            node.y = action.y || 0;
                            if (action.fill) node.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill) }];
                            setCornerRadius(node, action.radius);
                            currentFrame.appendChild(node);
                            break;

                        case 'TEXT':
                            node = figma.createText();
                            node.name = action.name || "Text_" + i;
                            node.characters = action.content || action.text || "Text";
                            node.fontSize = action.size || action.fontSize || 16;
                            node.x = action.x || 0;
                            node.y = action.y || 0;
                            if (action.fill) node.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill) }];

                            // Safe font assignment
                            try {
                                if (action.fontWeight === 'bold') {
                                    node.fontName = { family: "Inter", style: "Bold" };
                                } else if (action.fontWeight === 'medium') {
                                    node.fontName = { family: "Inter", style: "Medium" };
                                }
                            } catch (e) { console.log("Font weight application failed"); }

                            currentFrame.appendChild(node);
                            break;

                        case 'BUTTON':
                            const btn = figma.createFrame();
                            btn.name = action.name || "Button_" + i;
                            btn.resize(action.width || 200, action.height || 50);
                            btn.x = action.x || 0;
                            btn.y = action.y || 0;
                            btn.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#4F46E5') }];
                            btn.cornerRadius = action.radius || 12;
                            btn.layoutMode = "HORIZONTAL";
                            btn.primaryAxisAlignItems = "CENTER";
                            btn.counterAxisAlignItems = "CENTER";

                            const btnText = figma.createText();
                            btnText.characters = action.label || "Button";
                            btnText.fontSize = action.fontSize || 16;
                            try { btnText.fontName = { family: "Inter", style: "Bold" }; } catch (e) { }
                            btnText.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.textColor || '#FFFFFF') }];

                            btn.appendChild(btnText);
                            currentFrame.appendChild(btn);
                            break;

                        case 'CARD':
                            const card = figma.createFrame();
                            card.name = action.name || "Card_" + i;
                            card.resize(action.width || 300, action.height || 200);
                            card.x = action.x || 0;
                            card.y = action.y || 0;
                            card.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                            card.cornerRadius = action.radius || 16;
                            currentFrame.appendChild(card);
                            break;

                        case 'BADGE':
                            const badge = figma.createFrame();
                            badge.name = action.name || "Badge_" + i;
                            badge.x = action.x || 0;
                            badge.y = action.y || 0;
                            badge.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FCE4EC') }];
                            badge.cornerRadius = 100;
                            badge.layoutMode = "HORIZONTAL";
                            badge.primaryAxisAlignItems = "CENTER";
                            badge.counterAxisAlignItems = "CENTER";
                            badge.primaryAxisSizingMode = "AUTO";
                            badge.counterAxisSizingMode = "AUTO";
                            badge.paddingLeft = 12; badge.paddingRight = 12;

                            const bText = figma.createText();
                            bText.characters = action.label || "Tag";
                            bText.fontSize = 14;
                            bText.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.textColor || '#FF4081') }];

                            badge.appendChild(bText);
                            currentFrame.appendChild(badge);
                            break;
                        case 'IMAGE':
                            try {
                                const base64 = action.imageData.replace(/^data:image\/\w+;base64,/, '');
                                const bytes = new Uint8Array(atob(base64).split("").map(c => c.charCodeAt(0)));
                                const image = figma.createImage(bytes);
                                node = figma.createRectangle();
                                node.name = action.name || "Image_" + i;
                                node.resize(action.width || 256, action.height || 256);
                                node.x = action.x || 0;
                                node.y = action.y || 0;
                                node.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FILL' }];
                                setCornerRadius(node, action.radius);
                                currentFrame.appendChild(node);
                                figma.notify("🖼️ Importing high-res asset...", { timeout: 500 });
                            } catch (e) {
                                console.error("Image creation failed", e);
                            }
                            break;
                    }
                }
            }

            if (allRootFrames.length > 0) {
                figma.viewport.scrollAndZoomIntoView(allRootFrames);
                figma.currentPage.selection = allRootFrames;
                figma.notify("✅ Success: " + allRootFrames.length + " screens created!");
            } else {
                figma.notify("⚠️ Warning: No frames were created.");
            }
        } catch (e) {
            figma.notify("❌ Create UI Error: " + e.message, { error: true });
            console.error(e);
        }
    }

    if (msg.type === 'insert-image') {
        try {
            const { imageData, name, width, height, x, y } = msg.payload;
            const base64 = imageData.replace(/^data:image\/\w+;base64,/, '');
            const bytes = new Uint8Array(atob(base64).split("").map(c => c.charCodeAt(0)));
            const image = figma.createImage(bytes);
            const rect = figma.createRectangle();
            rect.name = name || "Sprite";
            rect.resize(width || 256, height || 256);
            rect.x = x || 0; rect.y = y || 0;
            rect.fills = [{ type: 'IMAGE', imageHash: image.hash, scaleMode: 'FILL' }];
            figma.currentPage.appendChild(rect);
            figma.viewport.scrollAndZoomIntoView([rect]);
            figma.notify("🖼️ Image inserted!");
        } catch (e) {
            figma.notify("❌ Image Error: " + e.message, { error: true });
        }
    }
};
