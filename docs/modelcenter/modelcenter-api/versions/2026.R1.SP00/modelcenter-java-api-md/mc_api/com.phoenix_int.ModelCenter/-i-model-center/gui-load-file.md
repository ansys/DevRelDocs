# guiLoadFile


abstract fun [guiLoadFile](gui-load-file.md)(modelFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Loads a file in &quot;GUI&quot; mode, that is, unlike loadFile(...), will produce a prompt to the user to verify whether or not any currently opened model should be saved prior to loading the given file.

#### Return

false if the save was cancelled; true otherwise

#### Parameters



| | |
|---|---|
| modelFile | Path of the file to load. |

#### Throws

| | |
|---|---|
| [ModelCenterException](./../-model-center-exception/index.md) | if something goes wrong loading the file |
