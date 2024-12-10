# saveFile


public [saveFile](save-file.md)(sourceLocation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), context: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

***************************************************************************** Save a file into the context. If the save is successful passing the context to restore as the file ID will return the saved file.

#### Return

true if the file was saved successfully; false otherwise

#### Parameters



| | |
|---|---|
| sourceLocation | source file to save |
| context | context by which to save |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
