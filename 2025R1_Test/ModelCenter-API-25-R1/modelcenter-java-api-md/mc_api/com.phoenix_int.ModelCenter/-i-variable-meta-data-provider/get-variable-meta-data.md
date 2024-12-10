# getVariableMetaData


abstract fun [getVariableMetaData](get-variable-meta-data.md)(fullName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [DHVariable](../-d-h-variable/index.md)

Get the metadata of a variable.

#### Return

the variable metadata; will be released (do not re-use)

#### Parameters



| | |
|---|---|
| fullName | the full name/path of the variable |

#### Throws

| | |
|---|---|
| [IllegalArgumentException](https://docs.oracle.com/javase/8/docs/api/java/lang/IllegalArgumentException.html) | if the variable does not exist |
