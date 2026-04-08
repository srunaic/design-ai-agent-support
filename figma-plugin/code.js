figma.showUI(__html__, { width: 340, height: 450 });

// Polyfill for atob as it is not available in Figma's main thread sandbox
function atob(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = '';
    str = String(str).replace(/=+$/, '');
    for (let bc = 0, bs, buffer, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = chars.indexOf(buffer);
    }
    return output;
}

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

                    try {
                        // FRAME = ROOT CONTAINER
                        if (type === 'FRAME') {
                            currentFrame = figma.createFrame();
                            currentFrame.name = action.name || "Design_Screen";
                            currentFrame.resize(action.width || 1920, action.height || 1080);
                            currentFrame.x = action.x || 0;
                            currentFrame.y = action.y || 0;
                            currentFrame.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                            if (action.radius) currentFrame.cornerRadius = action.radius;
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

                                if (action.fillGradient) {
                                    const from = hexToFigmaColor(action.fillGradient.from);
                                    const to = hexToFigmaColor(action.fillGradient.to);
                                    node.fills = [{
                                        type: 'GRADIENT_LINEAR',
                                        gradientStops: [
                                            { color: { r: from.r, g: from.g, b: from.b, a: 1 }, position: 0 },
                                            { color: { r: to.r, g: to.g, b: to.b, a: 1 }, position: 1 }
                                        ],
                                        gradientTransform: [[0, 1, 0], [-1, 0, 1]]
                                    }];
                                } else if (action.fill) {
                                    const fillColor = hexToFigmaColor(action.fill);
                                    const fillOpacity = action.opacity !== undefined ? action.opacity : 1;
                                    node.fills = [{ type: 'SOLID', color: fillColor, opacity: fillOpacity }];
                                }

                                if (action.stroke) {
                                    node.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.stroke) }];
                                    node.strokeWeight = action.strokeWeight || 1;
                                }
                                if (action.opacity !== undefined) node.opacity = action.opacity;
                                setCornerRadius(node, action.radius);
                                currentFrame.appendChild(node);
                                break;

                            case 'TEXT':
                                node = figma.createText();
                                node.name = action.name || "Text_" + i;
                                node.characters = action.content || action.text || "Text";
                                node.fontSize = action.size || action.fontSize || 16;

                                // Font Weight
                                try {
                                    if (action.fontWeight === 'black' || action.fontWeight === '900') {
                                        node.fontName = { family: "Inter", style: "Bold" };
                                    } else if (action.fontWeight === 'bold' || action.fontWeight === '700') {
                                        node.fontName = { family: "Inter", style: "Bold" };
                                    } else if (action.fontWeight === 'medium' || action.fontWeight === '500') {
                                        node.fontName = { family: "Inter", style: "Medium" };
                                    } else {
                                        node.fontName = { family: "Inter", style: "Regular" };
                                    }
                                } catch (e) {
                                    console.log("Font assignment failed", e);
                                    node.fontName = { family: "Inter", style: "Regular" };
                                }

                                // Align
                                if (action.textAlign === 'CENTER') {
                                    node.textAlignHorizontal = "CENTER";
                                } else if (action.textAlign === 'RIGHT') {
                                    node.textAlignHorizontal = "RIGHT";
                                }

                                node.resize(action.width || 100, node.height);
                                node.x = action.x || 0;
                                node.y = action.y || 0;
                                if (action.fill) node.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill) }];
                                node.textAutoResize = "HEIGHT";
                                currentFrame.appendChild(node);
                                break;

                            case 'BUTTON':
                                const btn = figma.createFrame();
                                btn.name = action.name || "Button_" + i;
                                btn.resize(action.width || 200, action.height || 50);
                                btn.x = action.x || 0;
                                btn.y = action.y || 0;

                                if (action.fillGradient) {
                                    const from = hexToFigmaColor(action.fillGradient.from);
                                    const to = hexToFigmaColor(action.fillGradient.to);
                                    btn.fills = [{
                                        type: 'GRADIENT_LINEAR',
                                        gradientStops: [{ color: { r: from.r, g: from.g, b: from.b, a: 1 }, position: 0 }, { color: { r: to.r, g: to.g, b: to.b, a: 1 }, position: 1 }],
                                        gradientTransform: [[0, 1, 0], [-1, 0, 1]]
                                    }];
                                } else {
                                    btn.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#EC4899') }];
                                }

                                btn.cornerRadius = action.radius || 12;
                                btn.layoutMode = "HORIZONTAL";
                                btn.primaryAxisAlignItems = "CENTER";
                                btn.counterAxisAlignItems = "CENTER";
                                if (action.stroke) {
                                    btn.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.stroke) }];
                                    btn.strokeWeight = action.strokeWeight || 1;
                                }
                                if (action.shadow || action.fill === '#EC4899' || action.fill === '#FF69B4') {
                                    btn.effects = [{
                                        type: 'DROP_SHADOW',
                                        color: { r: 0.93, g: 0.29, b: 0.6, a: 0.25 },
                                        offset: { x: 0, y: 8 },
                                        radius: 20,
                                        visible: true,
                                        blendMode: 'NORMAL'
                                    }];
                                }

                                const btnText = figma.createText();
                                btnText.characters = action.label || "Button";
                                btnText.fontSize = action.fontSize || 16;
                                try { btnText.fontName = { family: "Inter", style: "Bold" }; } catch (e) { }
                                btnText.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.textColor || '#FFFFFF') }];

                                btn.appendChild(btnText);
                                currentFrame.appendChild(btn);
                                break;

                            case 'CARD':
                            case 'FRAME_NESTED':
                                const nestedFrame = figma.createFrame();
                                nestedFrame.name = action.name || "Card_" + i;
                                nestedFrame.resize(action.width || 300, action.height || 200);
                                nestedFrame.x = action.x || 0;
                                nestedFrame.y = action.y || 0;

                                if (action.fillGradient) {
                                    const from = hexToFigmaColor(action.fillGradient.from);
                                    const to = hexToFigmaColor(action.fillGradient.to);
                                    nestedFrame.fills = [{
                                        type: 'GRADIENT_LINEAR',
                                        gradientStops: [{ color: { r: from.r, g: from.g, b: from.b, a: 1 }, position: 0 }, { color: { r: to.r, g: to.g, b: to.b, a: 1 }, position: 1 }],
                                        gradientTransform: [[0, 1, 0], [-1, 0, 1]]
                                    }];
                                } else {
                                    const cardFillColor = hexToFigmaColor(action.fill || '#FFFFFF');
                                    const cardOpacity = action.opacity !== undefined ? action.opacity : 1;
                                    nestedFrame.fills = [{ type: 'SOLID', color: cardFillColor, opacity: cardOpacity }];
                                }

                                nestedFrame.cornerRadius = action.radius || 16;
                                if (action.stroke) {
                                    nestedFrame.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.stroke) }];
                                    nestedFrame.strokeWeight = action.strokeWeight || 1;
                                }
                                if (action.shadow) {
                                    nestedFrame.effects = [{
                                        type: 'DROP_SHADOW',
                                        color: { r: 0.93, g: 0.29, b: 0.6, a: 0.15 },
                                        offset: { x: 0, y: 15 },
                                        radius: 45,
                                        visible: true,
                                        blendMode: 'NORMAL'
                                    }];
                                }
                                if (action.opacity !== undefined) nestedFrame.opacity = action.opacity;
                                currentFrame.appendChild(nestedFrame);
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
                                try { bText.fontName = { family: "Inter", style: "Bold" }; } catch (e) { }
                                bText.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.textColor || '#FF4081') }];

                                badge.appendChild(bText);
                                currentFrame.appendChild(badge);
                                break;

                            case 'IMAGE':
                                if (!action.imageData) {
                                    console.warn("IMAGE skipped: No imageData provided");
                                    break;
                                }
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
                                break;
                        }
                    } catch (elementError) {
                        console.error(`Error processing element ${i} (${type}):`, elementError);
                        figma.notify(`⚠️ Element ${i} (${type}) skipped: ${elementError.message}`, { timeout: 2000 });
                    }
                }
            }

            if (allRootFrames.length > 0) {
                figma.viewport.scrollAndZoomIntoView(allRootFrames);
                figma.currentPage.selection = allRootFrames;
                figma.notify("✅ Design Export Completed!");
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
