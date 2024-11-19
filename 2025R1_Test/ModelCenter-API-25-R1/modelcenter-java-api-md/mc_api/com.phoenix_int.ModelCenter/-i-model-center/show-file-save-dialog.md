//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[showFileSaveDialog](show-file-save-dialog.md)

# showFileSaveDialog


abstract fun [showFileSaveDialog](show-file-save-dialog.md)(title: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), selectedFilter: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html)&gt;, initialFileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), filters: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, initialUri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), hwnd: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

Displays file selection dialog for saving and returns URL of selected file.

#### Return

URL of selected file, or null if none selected

#### Parameters



| | |
|---|---|
| title | title of dialog window |
| filters | array of file type filters, may be null |
| initialFileName | the file name to populate the dialog with initially |
| selectedFilter | the index of the filter selected by the dialog (inout) |
| initialUri | initialUri to use in dialog, may be null |
| hwnd | the window handle to which to parent the dialog |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
