// Photoshop ExtendScript (JSX) for Antigravity Design Supporter
// Goal: Create 1920x1080 doc, place Luna_Remake.jpg, and fit to canvas.

var docWidth = 1920;
var docHeight = 1080;
var docName = "Luna_PC_Title";

// 1. Create New Document
var newDoc = app.documents.add(docWidth, docHeight, 72, docName, NewDocumentMode.RGB, DocumentFill.WHITE);

// 2. Define Image Path (Using Absolute Path)
var imagePath = "d:\\Github\\Design_Supporter\\assets\\Luna_Remake.jpg";
var imageFile = new File(imagePath);

if (imageFile.exists) {
    // 3. Place Image as Smart Object
    var desc1 = new ActionDescriptor();
    desc1.putPath(charIDToTypeID("null"), imageFile);
    desc1.putEnumerated(charIDToTypeID("FTcs"), charIDToTypeID("QCSt"), charIDToTypeID("Qcsa"));
    var desc2 = new ActionDescriptor();
    desc2.putUnitDouble(charIDToTypeID("Hrzn"), charIDToTypeID("#Pxl"), 0.000000);
    desc2.putUnitDouble(charIDToTypeID("Vrtc"), charIDToTypeID("#Pxl"), 0.000000);
    desc1.putObject(charIDToTypeID("Ofst"), charIDToTypeID("Ofst"), desc2);
    executeAction(charIDToTypeID("Plc "), desc1, DialogModes.NO);

    // 4. Resize to fit canvas (Simple Scaling)
    var activeLayer = app.activeDocument.activeLayer;
    var bounds = activeLayer.bounds; // [left, top, right, bottom]
    var layerWidth = bounds[2] - bounds[0];
    var layerHeight = bounds[3] - bounds[1];

    var scaleX = (docWidth / layerWidth) * 100;
    var scaleY = (docHeight / layerHeight) * 100;

    // Maintain aspect ratio or fill? Let's Fill for PC HD aesthetic
    var finalScale = Math.max(scaleX, scaleY);
    activeLayer.resize(finalScale, finalScale, AnchorPosition.MIDDLECENTER);

    // Center it (Placing already centers it usually, but let's be sure)
    activeLayer.translate(docWidth / 2 - (bounds[0] + (bounds[2] - bounds[0]) / 2), docHeight / 2 - (bounds[1] + (bounds[3] - bounds[1]) / 2));

    alert("Antigravity: PC 해상도(1920x1080)에 맞게 Luna 이미지가 배치되었습니다.");
} else {
    alert("Antigravity Error: 에셋 파일을 찾을 수 없습니다. (" + imagePath + ")");
}
