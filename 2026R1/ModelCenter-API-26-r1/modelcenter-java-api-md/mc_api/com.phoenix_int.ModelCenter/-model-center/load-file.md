# loadFile


public [loadFile](load-file.md)(modelFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))

opens the specified Model

#### Parameters



| | |
|---|---|
| modelFile | the Model to open |

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |


public [loadFile](load-file.md)(modelFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), connectErrorMode: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))

opens the specified Model

#### Parameters



| | |
|---|---|
| modelFile | the Model to open |
| connectErrorMode | What to do when a connect error is encountered. (see error modes below) <br>```kotlin Error Modes:    CONN_ERR_ERROR - (default) Abort loading and throw the error back to the caller.    CONN_ERR_IGNORE - Ignore the error and continue loading (as if user has pressed "Ignore" in the dialog).    CONN_ERR_USEDIALOG - (option not available when running ModelCenter in server mode) Shows the error as if the user were loading the file manually with full control. ``` |

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
