# showFileBrowseDialog


public [showFileBrowseDialog](show-file-browse-dialog.md)(title: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), filters: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, initialUri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

Displays file selection dialog for loading and returns URL of selected file.

#### Return

URL of selected file, or null if none selected

#### Parameters



| | |
|---|---|
| title | title of dialog window |
| filters | array of file type filters, may be null |
| initialUri | initialUri to use in dialog, may be null |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |


public [showFileBrowseDialog](show-file-browse-dialog.md)(title: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), filters: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, initialUri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), hwnd: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

Displays file selection dialog for loading and returns URL of selected file.

#### Return

URL of selected file, or null if none selected

#### Parameters



| | |
|---|---|
| title | title of dialog window |
| filters | array of file type filters, may be null |
| initialUri | initialUri to use in dialog, may be null |
| hwnd | the window handle to which to parent the dialog |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
