# IVariableMetaDataProvider


interface [IVariableMetaDataProvider](index.md)

Base interface for ITradeStudy3 job info and results

#### Author

Dave

## Functions

| Name | Summary |
|---|---|
| [getAllVariableMetaData](get-all-variable-meta-data.md) | abstract fun [getAllVariableMetaData](get-all-variable-meta-data.md)(path: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[DHVariable](./../-d-h-variable/index.md)&gt;<br>Get the metadata of all variables within a specified path. |
| [getVariableMetaData](get-variable-meta-data.md) | abstract fun [getVariableMetaData](get-variable-meta-data.md)(fullName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [DHVariable](./../-d-h-variable/index.md)<br>Get the metadata of a variable. |
