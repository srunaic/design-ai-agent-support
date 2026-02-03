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
    if (msg.type === 'create-ui') {
        const { actions, layout, style } = msg.payload;

        // Load fonts
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        await figma.loadFontAsync({ family: "Inter", style: "Medium" });
        await figma.loadFontAsync({ family: "Inter", style: "Bold" });
        await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });

        // Create Main Frame
        const frame = figma.createFrame();
        frame.name = layout || "AI Generated Design";
        frame.resize(375, 812);
        frame.fills = [{ type: 'SOLID', color: { r: 0.98, g: 0.98, b: 0.98 } }];

        if (actions && Array.isArray(actions)) {
            for (const action of actions) {
                let node = null;

                switch (action.type) {
                    // ========== BASIC SHAPES ==========
                    case 'RECT':
                    case 'rectangle':
                        node = figma.createRectangle();
                        node.resize(action.width || 100, action.height || 100);
                        node.x = action.x || 0;
                        node.y = action.y || 0;
                        if (action.color) node.fills = [{ type: 'SOLID', color: action.color }];
                        if (action.fill) node.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill) }];
                        setCornerRadius(node, action.radius);
                        if (action.name) node.name = action.name;
                        frame.appendChild(node);
                        break;

                    case 'ELLIPSE':
                    case 'circle':
                        node = figma.createEllipse();
                        node.resize(action.width || action.size || 50, action.height || action.size || 50);
                        node.x = action.x || 0;
                        node.y = action.y || 0;
                        if (action.fill) node.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill) }];
                        if (action.name) node.name = action.name;
                        frame.appendChild(node);
                        break;

                    case 'LINE':
                        node = figma.createLine();
                        node.resize(action.width || 100, 0);
                        node.x = action.x || 0;
                        node.y = action.y || 0;
                        node.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.stroke || '#E5E5E5') }];
                        node.strokeWeight = action.strokeWeight || 1;
                        if (action.name) node.name = action.name;
                        frame.appendChild(node);
                        break;

                    case 'TEXT':
                    case 'text':
                        node = figma.createText();
                        node.characters = action.content || action.text || "Text";
                        node.fontSize = action.size || action.fontSize || 16;
                        node.x = action.x || 0;
                        node.y = action.y || 0;
                        if (action.color) node.fills = [{ type: 'SOLID', color: action.color }];
                        if (action.fill) node.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill) }];
                        if (action.fontWeight === 'bold') {
                            node.fontName = { family: "Inter", style: "Bold" };
                        } else if (action.fontWeight === 'medium') {
                            node.fontName = { family: "Inter", style: "Medium" };
                        }
                        if (action.name) node.name = action.name;
                        frame.appendChild(node);
                        break;

                    // ========== UI COMPONENTS ==========
                    case 'BUTTON':
                    case 'button':
                        const btnFrame = figma.createFrame();
                        btnFrame.name = action.name || "Button";
                        btnFrame.resize(action.width || 200, action.height || 48);
                        btnFrame.x = action.x || 0;
                        btnFrame.y = action.y || 0;
                        btnFrame.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#4F46E5') }];
                        btnFrame.cornerRadius = action.radius || 12;
                        btnFrame.layoutMode = "HORIZONTAL";
                        btnFrame.primaryAxisAlignItems = "CENTER";
                        btnFrame.counterAxisAlignItems = "CENTER";

                        const btnText = figma.createText();
                        btnText.characters = action.label || action.text || "Button";
                        btnText.fontSize = action.fontSize || 16;
                        btnText.fontName = { family: "Inter", style: "Semi Bold" };
                        btnText.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.textColor || '#FFFFFF') }];
                        btnFrame.appendChild(btnText);
                        frame.appendChild(btnFrame);
                        break;

                    case 'INPUT':
                    case 'input':
                    case 'textfield':
                        const inputFrame = figma.createFrame();
                        inputFrame.name = action.name || "Input";
                        inputFrame.resize(action.width || 300, action.height || 48);
                        inputFrame.x = action.x || 0;
                        inputFrame.y = action.y || 0;
                        inputFrame.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#F5F5F5') }];
                        inputFrame.cornerRadius = action.radius || 8;
                        inputFrame.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.borderColor || '#E5E5E5') }];
                        inputFrame.strokeWeight = 1;
                        inputFrame.layoutMode = "HORIZONTAL";
                        inputFrame.paddingLeft = 16;
                        inputFrame.counterAxisAlignItems = "CENTER";

                        const inputText = figma.createText();
                        inputText.characters = action.placeholder || action.label || "입력하세요...";
                        inputText.fontSize = action.fontSize || 14;
                        inputText.fills = [{ type: 'SOLID', color: hexToFigmaColor('#9CA3AF') }];
                        inputFrame.appendChild(inputText);
                        frame.appendChild(inputFrame);
                        break;

                    case 'CARD':
                    case 'card':
                        const card = figma.createFrame();
                        card.name = action.name || "Card";
                        card.resize(action.width || 343, action.height || 200);
                        card.x = action.x || 0;
                        card.y = action.y || 0;
                        card.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                        card.cornerRadius = action.radius || 16;
                        card.effects = [{
                            type: 'DROP_SHADOW',
                            color: { r: 0, g: 0, b: 0, a: 0.08 },
                            offset: { x: 0, y: 4 },
                            radius: 16,
                            spread: 0,
                            visible: true,
                            blendMode: 'NORMAL'
                        }];

                        if (action.title) {
                            const cardTitle = figma.createText();
                            cardTitle.characters = action.title;
                            cardTitle.fontSize = 18;
                            cardTitle.fontName = { family: "Inter", style: "Bold" };
                            cardTitle.x = 20;
                            cardTitle.y = 20;
                            card.appendChild(cardTitle);
                        }
                        if (action.subtitle) {
                            const cardSub = figma.createText();
                            cardSub.characters = action.subtitle;
                            cardSub.fontSize = 14;
                            cardSub.fills = [{ type: 'SOLID', color: hexToFigmaColor('#6B7280') }];
                            cardSub.x = 20;
                            cardSub.y = 48;
                            card.appendChild(cardSub);
                        }
                        frame.appendChild(card);
                        break;

                    case 'NAVBAR':
                    case 'navbar':
                    case 'header':
                        const navbar = figma.createFrame();
                        navbar.name = action.name || "Navigation Bar";
                        navbar.resize(375, action.height || 56);
                        navbar.x = 0;
                        navbar.y = action.y || 0;
                        navbar.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                        navbar.layoutMode = "HORIZONTAL";
                        navbar.primaryAxisAlignItems = "SPACE_BETWEEN";
                        navbar.counterAxisAlignItems = "CENTER";
                        navbar.paddingLeft = 16;
                        navbar.paddingRight = 16;

                        const navTitle = figma.createText();
                        navTitle.characters = action.title || "Title";
                        navTitle.fontSize = 18;
                        navTitle.fontName = { family: "Inter", style: "Bold" };
                        navbar.appendChild(navTitle);
                        frame.appendChild(navbar);
                        break;

                    case 'TABBAR':
                    case 'tabbar':
                    case 'bottomnav':
                        const tabbar = figma.createFrame();
                        tabbar.name = action.name || "Tab Bar";
                        tabbar.resize(375, action.height || 83);
                        tabbar.x = 0;
                        tabbar.y = action.y || 729;
                        tabbar.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                        tabbar.layoutMode = "HORIZONTAL";
                        tabbar.primaryAxisAlignItems = "SPACE_BETWEEN";
                        tabbar.counterAxisAlignItems = "CENTER";
                        tabbar.paddingLeft = 32;
                        tabbar.paddingRight = 32;
                        tabbar.paddingTop = 8;
                        tabbar.effects = [{
                            type: 'DROP_SHADOW',
                            color: { r: 0, g: 0, b: 0, a: 0.05 },
                            offset: { x: 0, y: -2 },
                            radius: 8,
                            spread: 0,
                            visible: true,
                            blendMode: 'NORMAL'
                        }];

                        const tabs = action.tabs || ['홈', '검색', '알림', '설정'];
                        for (const tab of tabs) {
                            const tabItem = figma.createText();
                            tabItem.characters = tab;
                            tabItem.fontSize = 12;
                            tabItem.fills = [{ type: 'SOLID', color: hexToFigmaColor('#6B7280') }];
                            tabbar.appendChild(tabItem);
                        }
                        frame.appendChild(tabbar);
                        break;

                    case 'AVATAR':
                    case 'avatar':
                        const avatar = figma.createEllipse();
                        avatar.name = action.name || "Avatar";
                        const avatarSize = action.size || 48;
                        avatar.resize(avatarSize, avatarSize);
                        avatar.x = action.x || 0;
                        avatar.y = action.y || 0;
                        avatar.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#E5E7EB') }];
                        frame.appendChild(avatar);
                        break;

                    case 'DIVIDER':
                    case 'divider':
                        const divider = figma.createRectangle();
                        divider.name = action.name || "Divider";
                        divider.resize(action.width || 343, action.height || 1);
                        divider.x = action.x || 16;
                        divider.y = action.y || 0;
                        divider.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#E5E7EB') }];
                        frame.appendChild(divider);
                        break;

                    case 'ICON':
                    case 'icon':
                        const iconFrame = figma.createFrame();
                        iconFrame.name = action.name || action.icon || "Icon";
                        const iconSize = action.size || 24;
                        iconFrame.resize(iconSize, iconSize);
                        iconFrame.x = action.x || 0;
                        iconFrame.y = action.y || 0;
                        iconFrame.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#6B7280') }];
                        iconFrame.cornerRadius = action.radius || 4;
                        frame.appendChild(iconFrame);
                        break;

                    case 'IMAGE':
                    case 'image':
                    case 'placeholder':
                        const imgPlaceholder = figma.createRectangle();
                        imgPlaceholder.name = action.name || "Image";
                        imgPlaceholder.resize(action.width || 343, action.height || 200);
                        imgPlaceholder.x = action.x || 0;
                        imgPlaceholder.y = action.y || 0;
                        imgPlaceholder.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#E5E7EB') }];
                        imgPlaceholder.cornerRadius = action.radius || 12;
                        frame.appendChild(imgPlaceholder);
                        break;

                    case 'BADGE':
                    case 'badge':
                    case 'chip':
                    case 'tag':
                        const badge = figma.createFrame();
                        badge.name = action.name || "Badge";
                        badge.x = action.x || 0;
                        badge.y = action.y || 0;
                        badge.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#EEF2FF') }];
                        badge.cornerRadius = action.radius || 100;
                        badge.layoutMode = "HORIZONTAL";
                        badge.primaryAxisAlignItems = "CENTER";
                        badge.counterAxisAlignItems = "CENTER";
                        badge.paddingLeft = 12;
                        badge.paddingRight = 12;
                        badge.paddingTop = 6;
                        badge.paddingBottom = 6;
                        badge.primaryAxisSizingMode = "AUTO";
                        badge.counterAxisSizingMode = "AUTO";

                        const badgeText = figma.createText();
                        badgeText.characters = action.label || action.text || "Badge";
                        badgeText.fontSize = 12;
                        badgeText.fontName = { family: "Inter", style: "Medium" };
                        badgeText.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.textColor || '#4F46E5') }];
                        badge.appendChild(badgeText);
                        frame.appendChild(badge);
                        break;

                    case 'TOGGLE':
                    case 'switch':
                        const toggle = figma.createFrame();
                        toggle.name = action.name || "Toggle";
                        toggle.resize(51, 31);
                        toggle.x = action.x || 0;
                        toggle.y = action.y || 0;
                        toggle.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.active ? '#4F46E5' : '#E5E7EB') }];
                        toggle.cornerRadius = 100;

                        const toggleKnob = figma.createEllipse();
                        toggleKnob.resize(27, 27);
                        toggleKnob.x = action.active ? 22 : 2;
                        toggleKnob.y = 2;
                        toggleKnob.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                        toggle.appendChild(toggleKnob);
                        frame.appendChild(toggle);
                        break;

                    case 'CHECKBOX':
                        const checkbox = figma.createRectangle();
                        checkbox.name = action.name || "Checkbox";
                        checkbox.resize(24, 24);
                        checkbox.x = action.x || 0;
                        checkbox.y = action.y || 0;
                        checkbox.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.checked ? '#4F46E5' : '#FFFFFF') }];
                        checkbox.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.checked ? '#4F46E5' : '#D1D5DB') }];
                        checkbox.strokeWeight = 2;
                        checkbox.cornerRadius = 6;
                        frame.appendChild(checkbox);
                        break;

                    case 'RADIO':
                        const radio = figma.createEllipse();
                        radio.name = action.name || "Radio";
                        radio.resize(24, 24);
                        radio.x = action.x || 0;
                        radio.y = action.y || 0;
                        radio.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                        radio.strokes = [{ type: 'SOLID', color: hexToFigmaColor(action.selected ? '#4F46E5' : '#D1D5DB') }];
                        radio.strokeWeight = 2;

                        if (action.selected) {
                            const radioInner = figma.createEllipse();
                            radioInner.resize(12, 12);
                            radioInner.x = action.x + 6 || 6;
                            radioInner.y = action.y + 6 || 6;
                            radioInner.fills = [{ type: 'SOLID', color: hexToFigmaColor('#4F46E5') }];
                            frame.appendChild(radioInner);
                        }
                        frame.appendChild(radio);
                        break;

                    case 'PROGRESS':
                    case 'progressbar':
                        const progressBg = figma.createRectangle();
                        progressBg.name = action.name || "Progress Background";
                        progressBg.resize(action.width || 300, action.height || 8);
                        progressBg.x = action.x || 0;
                        progressBg.y = action.y || 0;
                        progressBg.fills = [{ type: 'SOLID', color: hexToFigmaColor('#E5E7EB') }];
                        progressBg.cornerRadius = 100;
                        frame.appendChild(progressBg);

                        const progressFill = figma.createRectangle();
                        progressFill.name = "Progress Fill";
                        const progressValue = action.value || 50;
                        progressFill.resize((action.width || 300) * (progressValue / 100), action.height || 8);
                        progressFill.x = action.x || 0;
                        progressFill.y = action.y || 0;
                        progressFill.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#4F46E5') }];
                        progressFill.cornerRadius = 100;
                        frame.appendChild(progressFill);
                        break;

                    case 'SLIDER':
                        const sliderTrack = figma.createRectangle();
                        sliderTrack.name = action.name || "Slider Track";
                        sliderTrack.resize(action.width || 300, 4);
                        sliderTrack.x = action.x || 0;
                        sliderTrack.y = action.y || 0;
                        sliderTrack.fills = [{ type: 'SOLID', color: hexToFigmaColor('#E5E7EB') }];
                        sliderTrack.cornerRadius = 100;
                        frame.appendChild(sliderTrack);

                        const sliderThumb = figma.createEllipse();
                        sliderThumb.name = "Slider Thumb";
                        sliderThumb.resize(20, 20);
                        const sliderVal = action.value || 50;
                        sliderThumb.x = (action.x || 0) + ((action.width || 300) * (sliderVal / 100)) - 10;
                        sliderThumb.y = (action.y || 0) - 8;
                        sliderThumb.fills = [{ type: 'SOLID', color: hexToFigmaColor('#4F46E5') }];
                        sliderThumb.effects = [{
                            type: 'DROP_SHADOW',
                            color: { r: 0, g: 0, b: 0, a: 0.15 },
                            offset: { x: 0, y: 2 },
                            radius: 4,
                            spread: 0,
                            visible: true,
                            blendMode: 'NORMAL'
                        }];
                        frame.appendChild(sliderThumb);
                        break;

                    case 'LIST_ITEM':
                    case 'listitem':
                        const listItem = figma.createFrame();
                        listItem.name = action.name || "List Item";
                        listItem.resize(375, action.height || 64);
                        listItem.x = action.x || 0;
                        listItem.y = action.y || 0;
                        listItem.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];
                        listItem.layoutMode = "HORIZONTAL";
                        listItem.primaryAxisAlignItems = "SPACE_BETWEEN";
                        listItem.counterAxisAlignItems = "CENTER";
                        listItem.paddingLeft = 16;
                        listItem.paddingRight = 16;

                        const listText = figma.createText();
                        listText.characters = action.label || action.title || "List Item";
                        listText.fontSize = 16;
                        listItem.appendChild(listText);

                        if (action.subtitle) {
                            const listSub = figma.createText();
                            listSub.characters = action.subtitle;
                            listSub.fontSize = 14;
                            listSub.fills = [{ type: 'SOLID', color: hexToFigmaColor('#6B7280') }];
                            listItem.appendChild(listSub);
                        }
                        frame.appendChild(listItem);
                        break;

                    case 'MODAL':
                    case 'dialog':
                        // Overlay
                        const overlay = figma.createRectangle();
                        overlay.name = "Modal Overlay";
                        overlay.resize(375, 812);
                        overlay.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
                        overlay.opacity = 0.5;
                        frame.appendChild(overlay);

                        // Modal
                        const modal = figma.createFrame();
                        modal.name = action.name || "Modal";
                        modal.resize(action.width || 327, action.height || 200);
                        modal.x = (375 - (action.width || 327)) / 2;
                        modal.y = (812 - (action.height || 200)) / 2;
                        modal.fills = [{ type: 'SOLID', color: hexToFigmaColor('#FFFFFF') }];
                        modal.cornerRadius = 24;
                        modal.effects = [{
                            type: 'DROP_SHADOW',
                            color: { r: 0, g: 0, b: 0, a: 0.25 },
                            offset: { x: 0, y: 8 },
                            radius: 32,
                            spread: 0,
                            visible: true,
                            blendMode: 'NORMAL'
                        }];

                        if (action.title) {
                            const modalTitle = figma.createText();
                            modalTitle.characters = action.title;
                            modalTitle.fontSize = 20;
                            modalTitle.fontName = { family: "Inter", style: "Bold" };
                            modalTitle.x = 24;
                            modalTitle.y = 24;
                            modal.appendChild(modalTitle);
                        }
                        frame.appendChild(modal);
                        break;

                    case 'TOAST':
                    case 'snackbar':
                        const toast = figma.createFrame();
                        toast.name = action.name || "Toast";
                        toast.x = 16;
                        toast.y = action.y || 720;
                        toast.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#1F2937') }];
                        toast.cornerRadius = 12;
                        toast.layoutMode = "HORIZONTAL";
                        toast.primaryAxisAlignItems = "CENTER";
                        toast.counterAxisAlignItems = "CENTER";
                        toast.paddingLeft = 16;
                        toast.paddingRight = 16;
                        toast.paddingTop = 14;
                        toast.paddingBottom = 14;
                        toast.primaryAxisSizingMode = "AUTO";
                        toast.counterAxisSizingMode = "AUTO";

                        const toastText = figma.createText();
                        toastText.characters = action.message || action.text || "Toast message";
                        toastText.fontSize = 14;
                        toastText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                        toast.appendChild(toastText);
                        frame.appendChild(toast);
                        break;

                    case 'SKELETON':
                    case 'shimmer':
                        const skeleton = figma.createRectangle();
                        skeleton.name = action.name || "Skeleton";
                        skeleton.resize(action.width || 200, action.height || 20);
                        skeleton.x = action.x || 0;
                        skeleton.y = action.y || 0;
                        skeleton.fills = [{ type: 'SOLID', color: hexToFigmaColor('#E5E7EB') }];
                        skeleton.cornerRadius = action.radius || 4;
                        frame.appendChild(skeleton);
                        break;

                    case 'FAB':
                    case 'floating_button':
                        const fab = figma.createFrame();
                        fab.name = action.name || "FAB";
                        const fabSize = action.size || 56;
                        fab.resize(fabSize, fabSize);
                        fab.x = action.x || 303;
                        fab.y = action.y || 640;
                        fab.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#4F46E5') }];
                        fab.cornerRadius = fabSize / 2;
                        fab.effects = [{
                            type: 'DROP_SHADOW',
                            color: { r: 0.31, g: 0.27, b: 0.9, a: 0.4 },
                            offset: { x: 0, y: 4 },
                            radius: 12,
                            spread: 0,
                            visible: true,
                            blendMode: 'NORMAL'
                        }];
                        fab.layoutMode = "HORIZONTAL";
                        fab.primaryAxisAlignItems = "CENTER";
                        fab.counterAxisAlignItems = "CENTER";

                        const fabIcon = figma.createText();
                        fabIcon.characters = action.icon || "+";
                        fabIcon.fontSize = 24;
                        fabIcon.fontName = { family: "Inter", style: "Bold" };
                        fabIcon.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
                        fab.appendChild(fabIcon);
                        frame.appendChild(fab);
                        break;

                    case 'STATUSBAR':
                        const statusbar = figma.createFrame();
                        statusbar.name = "Status Bar";
                        statusbar.resize(375, 44);
                        statusbar.x = 0;
                        statusbar.y = 0;
                        statusbar.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#FFFFFF') }];

                        const time = figma.createText();
                        time.characters = action.time || "9:41";
                        time.fontSize = 15;
                        time.fontName = { family: "Inter", style: "Semi Bold" };
                        time.x = 21;
                        time.y = 12;
                        statusbar.appendChild(time);
                        frame.appendChild(statusbar);
                        break;

                    case 'HOMEINDICATOR':
                        const homeIndicator = figma.createRectangle();
                        homeIndicator.name = "Home Indicator";
                        homeIndicator.resize(134, 5);
                        homeIndicator.x = 120;
                        homeIndicator.y = action.y || 799;
                        homeIndicator.fills = [{ type: 'SOLID', color: hexToFigmaColor(action.fill || '#000000') }];
                        homeIndicator.cornerRadius = 100;
                        frame.appendChild(homeIndicator);
                        break;

                    default:
                        console.log(`Unknown action type: ${action.type}`);
                }
            }
        }

        figma.viewport.scrollAndZoomIntoView([frame]);
        figma.notify("🎨 AI Design Generated successfully!");
    }
};
