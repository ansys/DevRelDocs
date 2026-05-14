# DataExplorer


public class [DataExplorer](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a Data Explorer. The class is used by Java plug-ins to ModelCenter.

## Types

| Name | Summary |
|---|---|
| [PHXDEKeepalive](-p-h-x-d-e-keepalive/index.md) | open inner class [PHXDEKeepalive](-p-h-x-d-e-keepalive/index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md) |

## Functions

| Name | Summary |
|---|---|
| [addPage](add-page.md) | public [addPage](add-page.md)(type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), insertBefore: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), setupString: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Adds a page in the DataExplorer --used to be IDispatch in COM |
| [addRunsToComparisonList](add-runs-to-comparison-list.md) | public [addRunsToComparisonList](add-runs-to-comparison-list.md)(runIDs: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)&gt;)<br>add a list of runs to the design comparison list |
| [addToComparisonList](add-to-comparison-list.md) | public [addToComparisonList](add-to-comparison-list.md)(runID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>add a run to the design comparison list |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromXML](from-x-m-l.md) | public [fromXML](from-x-m-l.md)(xml: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>public [fromXML](from-x-m-l.md)(xml: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), root: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>from XML |
| [fromXMLFile](from-x-m-l-file.md) | public [fromXMLFile](from-x-m-l-file.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>public [fromXMLFile](from-x-m-l-file.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), root: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>from XML file |
| [getAssociatedModelFile](get-associated-model-file.md) | public [getAssociatedModelFile](get-associated-model-file.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the AssociatedModelFile |
| [getAssociatedModelFileUUID](get-associated-model-file-u-u-i-d.md) | public [getAssociatedModelFileUUID](get-associated-model-file-u-u-i-d.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the AssociatedModelFileUUID |
| [getAuthor](get-author.md) | public [getAuthor](get-author.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>returns the author |
| [getCreationDate](get-creation-date.md) | public [getCreationDate](get-creation-date.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>returns the creation date |
| [getDataHistory](get-data-history.md) | public [getDataHistory](get-data-history.md)(): [DataHistory](../-data-history/index.md)<br>gets the DataHistory --was IDispatch in COM |
| [getDaXFormat](get-da-x-format.md) | public [getDaXFormat](get-da-x-format.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [getDaXType](get-da-x-type.md) | public [getDaXType](get-da-x-type.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>check whether the type of data explorer (free/non-free) |
| [getDescription](get-description.md) | public [getDescription](get-description.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the description |
| [getDisplayName](get-display-name.md) | public [getDisplayName](get-display-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the Displayname |
| [getFileUri](get-file-uri.md) | public [getFileUri](get-file-uri.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Get the File URI loaded into this DataExplorer. |
| [getHWND](get-h-w-n-d.md) | public [getHWND](get-h-w-n-d.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [getKeepalive](get-keepalive.md) | public [getKeepalive](get-keepalive.md)(): [DataExplorer.PHXDEKeepalive](-p-h-x-d-e-keepalive/index.md)<br>Function for internal use only |
| [getModelCenter](get-model-center.md) | public [getModelCenter](get-model-center.md)(): [ModelCenter](../-model-center/index.md)<br>gets ModelCenter --was IDispatch in COM |
| [getNumPages](get-num-pages.md) | public [getNumPages](get-num-pages.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br>returns the number of pages |
| [getPageType](get-page-type.md) | public [getPageType](get-page-type.md)(page: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the page type |
| [getSelectedPage](get-selected-page.md) | public [getSelectedPage](get-selected-page.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br>gets the selected page from the DataExplorer |
| [getTradeStudySetup](get-trade-study-setup.md) | public [getTradeStudySetup](get-trade-study-setup.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the TradeStudySetup |
| [getTradeStudyType](get-trade-study-type.md) | public [getTradeStudyType](get-trade-study-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the TradeStudyType |
| [hide](hide.md) | public [hide](hide.md)() |
| [ignoreDefaultPlotSetup](ignore-default-plot-setup.md) | public [ignoreDefaultPlotSetup](ignore-default-plot-setup.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>check whether the default plot setup should be ignored |
| [invokeInsertPageGUI](invoke-insert-page-g-u-i.md) | public [invokeInsertPageGUI](invoke-insert-page-g-u-i.md)()<br>Invokes the act of inserting a page in the GUI |
| [invokeMenuItem](invoke-menu-item.md) | public [invokeMenuItem](invoke-menu-item.md)(item: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>invokes a given menu item |
| [isMenuItemChecked](is-menu-item-checked.md) | public [isMenuItemChecked](is-menu-item-checked.md)(id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>return the check status of Data Explorer menu item (such as tooltip enabled) |
| [isMenuItemEnabled](is-menu-item-enabled.md) | public [isMenuItemEnabled](is-menu-item-enabled.md)(item: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>check to see if the menu item is enabled (t/f) |
| [isVisible](is-visible.md) | public [isVisible](is-visible.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [movePage](move-page.md) | public [movePage](move-page.md)(page: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), insertBefore: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>moves a page in the DataExplorer |
| [multiDelete](multi-delete.md) | public [multiDelete](multi-delete.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>string of index for deleting pages |
| [multiPageCopy](multi-page-copy.md) | public [multiPageCopy](multi-page-copy.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>string of index for copying pages |
| [multiPageCut](multi-page-cut.md) | public [multiPageCut](multi-page-cut.md)(index: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>string of index for cutting pages |
| [newInstance](new-instance.md) | public [newInstance](new-instance.md)(): [DataExplorer](index.md)<br>creates a new DataExplorer object |
| [pageCopy](page-copy.md) | public [pageCopy](page-copy.md)(index: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>copies a page in the DataExplorer |
| [pageCut](page-cut.md) | public [pageCut](page-cut.md)(index: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>cuts a page from the DataExplorer |
| [pagePaste](page-paste.md) | public [pagePaste](page-paste.md)()<br>Pastes a page from the DataExplorer |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [removeFromComparisonList](remove-from-comparison-list.md) | public [removeFromComparisonList](remove-from-comparison-list.md)(runID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>remove a run from the design comparison list |
| [removePage](remove-page.md) | public [removePage](remove-page.md)(page: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>remove a page from the DataExplorer |
| [selectPage](select-page.md) | public [selectPage](select-page.md)(page: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>selects a certain page in the DataExplorer |
| [setAssociatedModelFile](set-associated-model-file.md) | public [setAssociatedModelFile](set-associated-model-file.md)(filename: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the AssociatedModelFile |
| [setAssociatedModelFileUUID](set-associated-model-file-u-u-i-d.md) | public [setAssociatedModelFileUUID](set-associated-model-file-u-u-i-d.md)(fileUUID: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the AssociatedModelFileUUID |
| [setAuthor](set-author.md) | public [setAuthor](set-author.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the author |
| [setCreationDate](set-creation-date.md) | public [setCreationDate](set-creation-date.md)(creationDate: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the creation date |
| [setDescription](set-description.md) | public [setDescription](set-description.md)(desc: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the description |
| [setDisplayName](set-display-name.md) | public [setDisplayName](set-display-name.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Displayname |
| [setFileUri](set-file-uri.md) | public [setFileUri](set-file-uri.md)(fileUri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Set the File URI loaded in this DataExplorer. |
| [setGeomViewerRunID](set-geom-viewer-run-i-d.md) | public [setGeomViewerRunID](set-geom-viewer-run-i-d.md)(viewerID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), runID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>set runID for the design viewer. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setTradeStudySetup](set-trade-study-setup.md) | public [setTradeStudySetup](set-trade-study-setup.md)(tsSetup: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the TradeStudySetup |
| [setTradeStudyType](set-trade-study-type.md) | public [setTradeStudyType](set-trade-study-type.md)(tsType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the TradeStudyType |
| [setupPlotsPost](setup-plots-post.md) | public [setupPlotsPost](setup-plots-post.md)()<br>add plots when the trade study finished. |
| [setupPlotsPre](setup-plots-pre.md) | public [setupPlotsPre](setup-plots-pre.md)()<br>add plots when Data Collector is created. |
| [show](show.md) | public [show](show.md)() |
| [showGeomTooltip](show-geom-tooltip.md) | public [showGeomTooltip](show-geom-tooltip.md)(run: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), xPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), yPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>add plots when the trade study finished. |
| [showGeomViewer](show-geom-viewer.md) | public [showGeomViewer](show-geom-viewer.md)(run: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), xPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), yPos: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>add plots when the trade study finished. |
| [toXML](to-x-m-l.md) | public [toXML](to-x-m-l.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>public [toXML](to-x-m-l.md)(includeRunData: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>to XML |
| [toXMLFile](to-x-m-l-file.md) | public [toXMLFile](to-x-m-l-file.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>public [toXMLFile](to-x-m-l-file.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), includeRunData: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>turns the given file into an XML file |
| [updateComparisonViewHint](update-comparison-view-hint.md) | public [updateComparisonViewHint](update-comparison-view-hint.md)(restore: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>trigger updating the comparison view |
| [updateGeomViewerHint](update-geom-viewer-hint.md) | public [updateGeomViewerHint](update-geom-viewer-hint.md)(viewerID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>trigger updating design viewers. |
| [updateThumbHint](update-thumb-hint.md) | public [updateThumbHint](update-thumb-hint.md)(item: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>updates a thumb hint |
