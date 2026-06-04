# DHVariable


public class [DHVariable](index.md) : [PHXCOMObject](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a Data History Variable. The class is used by Java plug-ins to ModelCenter.

## Constructors

| | |
|---|---|
| [DHVariable](-d-h-variable.md) | constructor(id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>Connects this Java object to the specified session of ModelCenter<br>constructor(id: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), addRef: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |

## Functions

| Name | Summary |
|---|---|
| [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getEnumAlias](get-enum-alias.md) | public [getEnumAlias](get-enum-alias.md)(index: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the Enum Alias given an index |
| [getEnumAliases](get-enum-aliases.md) | public [getEnumAliases](get-enum-aliases.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the Enum Aliases |
| [getEnumValue](get-enum-value.md) | public [getEnumValue](get-enum-value.md)(index: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the Enum Value |
| [getEnumValues](get-enum-values.md) | public [getEnumValues](get-enum-values.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the Enum Values |
| [getEquation](get-equation.md) | public [getEquation](get-equation.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the Equation |
| [getFormat](get-format.md) | public [getFormat](get-format.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the format |
| [getLowerBound](get-lower-bound.md) | public [getLowerBound](get-lower-bound.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>gets the LowerBound |
| [getMetaData](get-meta-data.md) | public [getMetaData](get-meta-data.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the specified meta data |
| [getName](get-name.md) | public [getName](get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>returns the name |
| [getNumEnumAlias](get-num-enum-alias.md) | public [getNumEnumAlias](get-num-enum-alias.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br>gets the number of Enum Alias |
| [getNumEnumValues](get-num-enum-values.md) | public [getNumEnumValues](get-num-enum-values.md)(): [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)<br>gets the Number of Enum Values |
| [getType](get-type.md) | public [getType](get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the type |
| [getUnits](get-units.md) | public [getUnits](get-units.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>get the units |
| [getUpperBound](get-upper-bound.md) | public [getUpperBound](get-upper-bound.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>returns the Upper Bound |
| [isDesignVar](is-design-var.md) | public [isDesignVar](is-design-var.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks to see if there is a Design Variable |
| [isInput](is-input.md) | public [isInput](is-input.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks for input |
| [isNumeric](is-numeric.md) | public [isNumeric](is-numeric.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>checks to see if numeric |
| [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [removeMetadata](remove-metadata.md) | public [removeMetadata](remove-metadata.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>removes the metadata for the specified key |
| [setDesignVar](set-design-var.md) | public [setDesignVar](set-design-var.md)(isDesignVar: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets if this is a Design Variable |
| [setEnumAliases](set-enum-aliases.md) | public [setEnumAliases](set-enum-aliases.md)(aliases: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Enum Aliases |
| [setEnumValues](set-enum-values.md) | public [setEnumValues](set-enum-values.md)(values: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Enum Values |
| [setEquation](set-equation.md) | public [setEquation](set-equation.md)(equation: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Equation |
| [setFormat](set-format.md) | public [setFormat](set-format.md)(format: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the format |
| [setInput](set-input.md) | public [setInput](set-input.md)(isInput: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets whether the variable is an input |
| [setLowerBound](set-lower-bound.md) | public [setLowerBound](set-lower-bound.md)(lwrBnd: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>gets ModelCenter --was IDispatch in COM |
| [setMetaData](set-meta-data.md) | public [setMetaData](set-meta-data.md)(key: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the specified meta data |
| [setName](set-name.md) | public [setName](set-name.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the name |
| [setNumeric](set-numeric.md) | public [setNumeric](set-numeric.md)(isNumeric: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets whether or not the variable represents a numeric value. |
| [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setType](set-type.md) | public [setType](set-type.md)(type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the type |
| [setUnits](set-units.md) | public [setUnits](set-units.md)(units: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the units |
| [setUpperBound](set-upper-bound.md) | public [setUpperBound](set-upper-bound.md)(upprBnd: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>sets the Upper Bound |
