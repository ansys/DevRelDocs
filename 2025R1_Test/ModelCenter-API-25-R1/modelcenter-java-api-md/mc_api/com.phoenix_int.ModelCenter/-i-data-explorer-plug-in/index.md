//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IDataExplorerPlugIn](index.md)

# IDataExplorerPlugIn


interface [IDataExplorerPlugIn](index.md)

This is the interface that must be implemented by all Java Data Explorer plug-ins for ModelCenter. Please note that due to an issue in Java 8, we do not explicitly override [toString](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--) here, but you still need to implement it.

## Functions

| Name | Summary |
|---|---|
| [construct](construct.md) | abstract fun [construct](construct.md)(dhid: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), freeDaX: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), dialogParent: [JFrame](https://docs.oracle.com/javase/8/docs/api/javax/swing/JFrame.html), pluginid: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), dh: [DataHistory](../-data-history/index.md), mc: [ModelCenter](../-model-center/index.md), context: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Container](https://docs.oracle.com/javase/8/docs/api/java/awt/Container.html)<br>Construct your plug-in. |
| [dataChanged](data-changed.md) | abstract fun [dataChanged](data-changed.md)(varIndex: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), runIndex: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>Called by the Data Explorer to notify the plug-in that the data in the DataHistory has changed. |
| [exportImage](export-image.md) | abstract fun [exportImage](export-image.md)(hints: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), filename: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Tells the plug-in to export an image to a file. |
| [fromString](from-string.md) | abstract fun [fromString](from-string.md)(s: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Called to restore the state of a Plug-In. |
| [getPageTitle](get-page-title.md) | abstract fun [getPageTitle](get-page-title.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Called by the Data Explorer to get the plug-in title. |
| [getRequiredLicense](get-required-license.md) | abstract fun [getRequiredLicense](get-required-license.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>If this plot needs a license to operate, return the feature name in this function and ModelCenter will check it out for you. |
| [getThumbnail](get-thumbnail.md) | abstract fun [getThumbnail](get-thumbnail.md)(hints: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Called by the Data Explorer to get the name of a file that contains the thumbnail image. |
| [invokeMenuItem](invoke-menu-item.md) | abstract fun [invokeMenuItem](invoke-menu-item.md)(id: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>Called by the Data Explorer to notify the plug-in that a user has selected a menu item. |
| [onEnd](on-end.md) | abstract fun [onEnd](on-end.md)()<br>Called by the Data Explorer to notify the plug-in that it is about to be destroyed |
| [progressMeterStop](progress-meter-stop.md) | abstract fun [progressMeterStop](progress-meter-stop.md)()<br>Called by the Data Explorer to notify the plug-in that its progress meter has stopped |
| [variablesChanged](variables-changed.md) | abstract fun [variablesChanged](variables-changed.md)()<br>Called by the Data Explorer to notify the plug-in that the variables in the DataHistory have changed. |
