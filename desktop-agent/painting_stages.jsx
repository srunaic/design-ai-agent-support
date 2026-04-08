// Photoshop ExtendScript (JSX) - Intelligent Painting Workflow
// Process: Rough -> Sketch -> Final Coloring

var docWidth = 1920;
var docHeight = 1080;
var imagePath = "d:/Github/Design_Supporter/assets/Luna_Painting_Target.jpg";
var imageFile = new File(imagePath);

if (!imageFile.exists) {
    alert("Error: Target image not found at " + imagePath);
} else {
    // 1. Setup Document
    var newDoc = app.documents.add(docWidth, docHeight, 72, "Luna_Painting_Process", NewDocumentMode.RGB, DocumentFill.WHITE);

    // Function to place and scale image
    function placeImage(layerName) {
        var desc1 = new ActionDescriptor();
        desc1.putPath(charIDToTypeID("null"), imageFile);
        executeAction(charIDToTypeID("Plc "), desc1, DialogModes.NO);

        var layer = app.activeDocument.activeLayer;
        layer.name = layerName;

        // Scale to fit
        var bounds = layer.bounds;
        var layerWidth = bounds[2] - bounds[0];
        var layerHeight = bounds[3] - bounds[1];
        var scale = Math.max((docWidth / layerWidth) * 100, (docHeight / layerHeight) * 100);
        layer.resize(scale, scale, AnchorPosition.MIDDLECENTER);

        return layer;
    }

    // Stage 3: Final Coloring (Bottom layer of the stack for now, will reorder)
    var finalLayer = placeImage("03_Final_Coloring");

    // Stage 2: Sketch (Line Art Simulation)
    var sketchLayer = finalLayer.duplicate();
    sketchLayer.name = "02_Sketch_LineArt";
    app.activeDocument.activeLayer = sketchLayer;

    // Simple filter simulation for line art: High Pass + Desaturate
    // Using Action Manager for High Pass as it's not in DOM
    try {
        sketchLayer.desaturate();
        var descHighPass = new ActionDescriptor();
        descHighPass.putUnitDouble(charIDToTypeID("Rds "), charIDToTypeID("#Pxl"), 2.0);
        executeAction(stringIDToTypeID("highPass"), descHighPass, DialogModes.NO);
        sketchLayer.opacity = 80;
    } catch (e) { }

    // Stage 1: Rough (Loose Guide Simulation)
    var roughLayer = sketchLayer.duplicate();
    roughLayer.name = "01_Rough_Guide";
    app.activeDocument.activeLayer = roughLayer;

    try {
        roughLayer.blur(20); // Gaussian Blur
        roughLayer.opacity = 40;
    } catch (e) { }

    // Organize Layers: Rough (Top) -> Sketch -> Final (Bottom)
    // Actually, usually it's Final -> Sketch -> Rough from top to bottom for visibility?
    // Let's do Rough (Top, 40%) -> Sketch (Middle, 80%) -> Final (Bottom, 100%)
    roughLayer.move(app.activeDocument, ElementPlacement.PLACEATBEGINNING);
    sketchLayer.move(roughLayer, ElementPlacement.PLACEAFTER);
    finalLayer.move(sketchLayer, ElementPlacement.PLACEAFTER);

    // Final Touch: Hide Final layer to show the 'process' starting from Rough
    finalLayer.visible = false;
    sketchLayer.visible = false;
    roughLayer.visible = true;

    alert("Antigravity: '러프 > 스케치 > 채색' 단계별 레이어 구성이 완료되었습니다. \n레이어를 하나씩 켜보며 단계별 가이드를 확인해 보세요!");
}
