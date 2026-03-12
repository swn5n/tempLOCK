#targetengine "AutoLockSession_v3"

function main() {
    // Stop if nothing is selected
    if (app.documents.length === 0 || app.selection.length === 0) return;

    var lockSeconds = 5;
    var doc = app.activeDocument;
    var lockedItemIDs = [];

    // Loop BACKWARDS so InDesign deselecting locked items doesn't break the count
    for (var i = app.selection.length - 1; i >= 0; i--) {
        var item = app.selection[i];
        if ("locked" in item) {
            // Save the ID first, THEN lock it
            lockedItemIDs.push(item.id);
            item.locked = true;
        }
    }

    if (lockedItemIDs.length === 0) return;

    // Create the background task
    var taskName = "Unlock_" + new Date().getTime();
    var myIdleTask = app.idleTasks.add({name: taskName, sleep: lockSeconds * 1000});

    var onIdleHandler = function(event) {
        try {
            // Look up the items by their IDs and unlock them
            for (var j = 0; j < lockedItemIDs.length; j++) {
                var itemToUnlock = doc.pageItems.itemByID(lockedItemIDs[j]);
                if (itemToUnlock.isValid) {
                    itemToUnlock.locked = false;
                }
            }
        } catch (e) {
            // Failsafe in case the document was closed during the countdown
        }

        try {
            // Safely destroy the background task so it doesn't loop
            event.parent.sleep = 0;
            event.parent.remove();
        } catch (e) {
            var fallbackTask = app.idleTasks.itemByName(taskName);
            if (fallbackTask.isValid) {
                fallbackTask.sleep = 0;
                fallbackTask.remove();
            }
        }
    };

    myIdleTask.addEventListener("onIdle", onIdleHandler);
}

main();