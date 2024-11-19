//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[SaveContext](index.md)/[restoreFile](restore-file.md)

# restoreFile


public [restoreFile](restore-file.md)(fileID: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), targetLocation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

***************************************************************************** Restores the file by ID to the given location.

#### Return

true if a file with the given id was restored, false on failure

#### Parameters



| | |
|---|---|
| fileID | id of the file to restore |
| targetLocation | disk location to restore the file |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
