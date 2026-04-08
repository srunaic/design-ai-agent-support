// Photoshop ExtendScript (JSX) — Real-time Canvas Capture
// Exports the current active document as a resized PNG for AI img2img input
// Called periodically by the Desktop Agent via VBS COM bridge

// === CONFIG ===
var OUTPUT_DIR = "d:/Github/Design_Supporter/assets/";
var OUTPUT_FILENAME = "ps_canvas_snapshot.png";
var TARGET_WIDTH = 512;
var TARGET_HEIGHT = 512;
// ==============

try {
    if (app.documents.length === 0) {
        // No document open — silently skip (no alert to avoid interrupting flow)
    } else {
        var doc = app.activeDocument;
        var outputPath = OUTPUT_DIR + OUTPUT_FILENAME;
        var outputFile = new File(outputPath);

        // Save current state
        var originalRulerUnits = app.preferences.rulerUnits;
        app.preferences.rulerUnits = Units.PIXELS;

        // Duplicate the document to avoid modifying the original
        var tempDoc = doc.duplicate("_AI_Capture_Temp_");

        // Flatten all layers for a clean snapshot
        tempDoc.flatten();

        // Resize to target dimensions (SD-friendly 512x512)
        // Use BICUBIC for quality
        tempDoc.resizeImage(
            UnitValue(TARGET_WIDTH, "px"),
            UnitValue(TARGET_HEIGHT, "px"),
            72,
            ResampleMethod.BICUBIC
        );

        // Convert to RGB if not already
        if (tempDoc.mode !== DocumentMode.RGB) {
            tempDoc.changeMode(ChangeMode.RGB);
        }

        // Export as PNG
        var pngOptions = new PNGSaveOptions();
        pngOptions.compression = 6; // balance between speed and size
        pngOptions.interlaced = false;

        tempDoc.saveAs(outputFile, pngOptions, true, Extension.LOWERCASE);

        // Close the temp document without saving
        tempDoc.close(SaveOptions.DONOTSAVECHANGES);

        // Restore
        app.preferences.rulerUnits = originalRulerUnits;
    }
} catch (e) {
    // Silently fail — don't interrupt user's workflow
    // Error info is available if needed for debugging
    try {
        // Try to close any orphaned temp doc
        var docs = app.documents;
        for (var i = docs.length - 1; i >= 0; i--) {
            if (docs[i].name === "_AI_Capture_Temp_") {
                docs[i].close(SaveOptions.DONOTSAVECHANGES);
            }
        }
    } catch (cleanupErr) { }
}
