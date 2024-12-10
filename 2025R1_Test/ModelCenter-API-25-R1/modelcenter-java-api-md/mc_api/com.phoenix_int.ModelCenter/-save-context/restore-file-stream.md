# restoreFileStream


public [restoreFileStream](restore-file-stream.md)(fileID: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)

***************************************************************************** Gets a stream that can be used for restoring a file saved into the context with the given ID. Only one stream may be open at a time.

#### Return

input stream for restoring

#### Parameters



| | |
|---|---|
| fileID | id of the file to restore |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
