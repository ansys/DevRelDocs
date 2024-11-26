# DataHistoryVariableStruct


public class [DataHistoryVariableStruct](index.md)

This object is used to pass a variable's data and metadata to the addVariableStructs function for data history, which sets the results for a run. For more information see [addVariableStructs](../-data-history/add-variable-structs.md).

## Constructors

| | |
|---|---|
| [DataHistoryVariableStruct](-data-history-variable-struct.md) | constructor() |

## Properties

| Name | Summary |
|---|---|
| [index](--index--.md) | open var [index](--index--.md): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Either a 0 based index to the Variable, or the name of a Variable. |
| [isModified](is-modified.md) | open var [isModified](is-modified.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Whether this value's modified flag is set. |
| [isValid](is-valid.md) | open var [isValid](is-valid.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Whether this value is valid. |
| [metadata](metadata.md) | open var [metadata](metadata.md): [DataHistoryVariableMetadataStruct](../-data-history-variable-metadata-struct/index.md)<br>The metadata for the Variable |
| [varValue](var-value.md) | open var [varValue](var-value.md): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>The value of the Variable. |
