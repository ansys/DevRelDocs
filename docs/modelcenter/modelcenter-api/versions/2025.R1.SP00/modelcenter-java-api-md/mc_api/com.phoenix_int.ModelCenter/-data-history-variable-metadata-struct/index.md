# DataHistoryVariableMetadataStruct

public class [DataHistoryVariableMetadataStruct](index.md)

This object is used to pass variable metadata to the addVariableStructs function for data history, which sets the results for a run. This class is referenced by the [DataHistoryVariableStruct](../-data-history-variable-struct/index.md) object. For more information see [addVariableStructs](../-data-history/add-variable-structs.md).

#### See also

| |
|---|
| [DataHistoryVariableStruct](../-data-history-variable-struct/index.md) |

## Constructors

| | |
|---|---|
| [DataHistoryVariableMetadataStruct](-data-history-variable-metadata-struct.md) | constructor() |

## Properties

| Name | Summary |
|---|---|
| [customMetadata](custom-metadata.md) | open var [customMetadata](custom-metadata.md): [Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;<br>Map of name/value pairs representing each piece of custom metadata |
| [enumAliases](enum-aliases.md) | open var [enumAliases](enum-aliases.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>comma separated list of enumerated aliases of variable |
| [enumValues](enum-values.md) | open var [enumValues](enum-values.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>comma separated list of enumerated values of variable |
| [equation](equation.md) | open var [equation](equation.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The equation of the variable |
| [fileName](file-name.md) | open var [fileName](file-name.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The filename of a file variable |
| [format](format.md) | open var [format](format.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The format of the variable |
| [geomScript](geom-script.md) | open var [geomScript](geom-script.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The geomScript of the variable |
| [isBinary](is-binary.md) | open var [isBinary](is-binary.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>true if file variable is a binary file, false otherwise |
| [isDesignVar](is-design-var.md) | open var [isDesignVar](is-design-var.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>true if the variable is a design variable, false otherwise |
| [isInput](is-input.md) | open var [isInput](is-input.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>true if the variable is an input, false otherwise |
| [isNumeric](is-numeric.md) | open var [isNumeric](is-numeric.md): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>true if the variable is numeric, false otherwise |
| [lowerBound](lower-bound.md) | open var [lowerBound](lower-bound.md): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>The lower bound of the variable |
| [name](name.md) | open var [name](name.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The name of the variable |
| [type](type.md) | open var [type](type.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The type of the variable |
| [units](units.md) | open var [units](units.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>The units of the variable |
| [upperBound](upper-bound.md) | open var [upperBound](upper-bound.md): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>The upper bound of the variable |

## Functions

| Name | Summary |
|---|---|
| [getCustomMetadataNames](get-custom-metadata-names.md) | public [getCustomMetadataNames](get-custom-metadata-names.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;<br>Gets an array of the names of the custom metadata fields. |
