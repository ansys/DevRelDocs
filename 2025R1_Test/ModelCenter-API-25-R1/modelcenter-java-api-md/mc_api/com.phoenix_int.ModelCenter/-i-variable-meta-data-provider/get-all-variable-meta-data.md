# getAllVariableMetaData


abstract fun [getAllVariableMetaData](get-all-variable-meta-data.md)(path: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[DHVariable](../-d-h-variable/index.md)&gt;

Get the metadata of all variables within a specified path.

#### Return

the variable metadatas; will be released (do not re-use)

#### Parameters



| | |
|---|---|
| path | the path to retrieve variables for |

#### Throws

| | |
|---|---|
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the path does not exist |
