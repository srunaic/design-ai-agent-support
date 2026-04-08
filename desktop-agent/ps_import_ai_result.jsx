// Photoshop ExtendScript (JSX) — Import AI Generated Result
// Places the AI-generated image as a new layer in the active document
// Called by the Desktop Agent when user clicks "Apply to PS"

// === CONFIG ===
var AI_RESULT_PATH = "d:/Github/Design_Supporter/assets/ai_draw_result.png";
// ==============

try {
    if (app.documents.length === 0) {
        alert("Antigravity: 열린 문서가 없습니다. 포토샵에서 문서를 먼저 열어주세요.");
    } else {
        var doc = app.activeDocument;
        var resultFile = new File(AI_RESULT_PATH);

        if (!resultFile.exists) {
            alert("Antigravity: AI 생성 결과 파일을 찾을 수 없습니다.\n(" + AI_RESULT_PATH + ")");
        } else {
            var originalRulerUnits = app.preferences.rulerUnits;
            app.preferences.rulerUnits = Units.PIXELS;

            // Place image as a new Smart Object layer
            var desc = new ActionDescriptor();
            desc.putPath(charIDToTypeID("null"), resultFile);
            desc.putEnumerated(
                charIDToTypeID("FTcs"),
                charIDToTypeID("QCSt"),
                charIDToTypeID("Qcsa")
            );
            var offset = new ActionDescriptor();
            offset.putUnitDouble(charIDToTypeID("Hrzn"), charIDToTypeID("#Pxl"), 0);
            offset.putUnitDouble(charIDToTypeID("Vrtc"), charIDToTypeID("#Pxl"), 0);
            desc.putObject(charIDToTypeID("Ofst"), charIDToTypeID("Ofst"), offset);
            executeAction(charIDToTypeID("Plc "), desc, DialogModes.NO);

            // Rename the layer
            var now = new Date();
            var timeStr = now.getFullYear() + ""
                + ("0" + (now.getMonth() + 1)).slice(-2)
                + ("0" + now.getDate()).slice(-2) + "_"
                + ("0" + now.getHours()).slice(-2)
                + ("0" + now.getMinutes()).slice(-2)
                + ("0" + now.getSeconds()).slice(-2);

            var aiLayer = doc.activeLayer;
            aiLayer.name = "AI_Generated_" + timeStr;

            // Scale to fit the document canvas
            var bounds = aiLayer.bounds;
            var layerW = bounds[2] - bounds[0];
            var layerH = bounds[3] - bounds[1];
            var docW = doc.width.as("px");
            var docH = doc.height.as("px");

            var scaleX = (docW / layerW) * 100;
            var scaleY = (docH / layerH) * 100;
            var finalScale = Math.max(scaleX, scaleY);

            aiLayer.resize(finalScale, finalScale, AnchorPosition.MIDDLECENTER);

            // Center the layer
            var newBounds = aiLayer.bounds;
            var newLayerW = newBounds[2] - newBounds[0];
            var newLayerH = newBounds[3] - newBounds[1];
            var offsetX = (docW - newLayerW) / 2 - newBounds[0];
            var offsetY = (docH - newLayerH) / 2 - newBounds[1];
            aiLayer.translate(offsetX, offsetY);

            // Set opacity for easy comparison
            aiLayer.opacity = 80;

            app.preferences.rulerUnits = originalRulerUnits;

            alert("Antigravity: AI 생성 이미지가 새 레이어로 추가되었습니다! ✨\n레이어: " + aiLayer.name);
        }
    }
} catch (e) {
    alert("Antigravity Error: " + e.message);
}
