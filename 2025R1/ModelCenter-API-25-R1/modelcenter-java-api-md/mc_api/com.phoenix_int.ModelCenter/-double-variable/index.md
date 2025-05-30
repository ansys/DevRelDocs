# DoubleVariable


public class [DoubleVariable](index.md) : [Variable](../-variable/index.md)

A variable type class for ModelCenter

#### Author

Woyak, 10/2001

## Functions

| Name | Summary |
|---|---|
| [clearLowerBound](clear-lower-bound.md) | public [clearLowerBound](clear-lower-bound.md)()<br>clears the lower bound |
| [clearUpperBound](clear-upper-bound.md) | public [clearUpperBound](clear-upper-bound.md)()<br>clears the upper bound |
| [dependentLinks](../-variable/dependent-links.md) | public [dependentLinks](../-variable/dependent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that immediately depend on the value of this variable. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromFormattedString](from-formatted-string.md) | public [fromFormattedString](from-formatted-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the value for the variable from a formatted string |
| [fromString](../-variable/from-string.md) | public [fromString](../-variable/from-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the value for the variable from a string. |
| [getDescription](get-description.md) | public [getDescription](get-description.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the description for the variable |
| [getDirectDependents](../-variable/get-direct-dependents.md) | public [getDirectDependents](../-variable/get-direct-dependents.md)(): [Variables](../-variables/index.md)<br>public [getDirectDependents](../-variable/get-direct-dependents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked outputs of this variable. |
| [getDirectPrecedents](../-variable/get-direct-precedents.md) | public [getDirectPrecedents](../-variable/get-direct-precedents.md)(): [Variables](../-variables/index.md)<br>public [getDirectPrecedents](../-variable/get-direct-precedents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked inputs of this variable. |
| [getEnumAliases](get-enum-aliases.md) | public [getEnumAliases](get-enum-aliases.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the enumerated aliases for the variable |
| [getEnumValues](get-enum-values.md) | public [getEnumValues](get-enum-values.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the enumerated values for the variable |
| [getFormat](get-format.md) | public [getFormat](get-format.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the format for the variable |
| [getFullName](../-variable/get-full-name.md) | public [getFullName](../-variable/get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the full name of the variable, e.g. |
| [getHasChanged](../-variable/get-has-changed.md) | public [getHasChanged](../-variable/get-has-changed.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [getHide](../-variable/get-hide.md) | public [getHide](../-variable/get-hide.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether the variable is hidden or not |
| [getLowerBound](get-lower-bound.md) | public [getLowerBound](get-lower-bound.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>gets the lower bound for the variable |
| [getMetadata](../-variable/get-metadata.md) | public [getMetadata](../-variable/get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](../-variant/index.md)<br>Get a metadata value. |
| [getName](../-variable/get-name.md) | public [getName](../-variable/get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the name of the variable, e.g. |
| [getOwningComponent](../-variable/get-owning-component.md) | public [getOwningComponent](../-variable/get-owning-component.md)(): [Component](../-component/index.md)<br>Get the component which owns this variable. |
| [getType](../-variable/get-type.md) | public [getType](../-variable/get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the type of the variable. |
| [getUnits](get-units.md) | public [getUnits](get-units.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the units for the variable |
| [getUpperBound](get-upper-bound.md) | public [getUpperBound](get-upper-bound.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>gets the upper bound for the variable |
| [getValue](get-value.md) | public [getValue](get-value.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>gets the value of the variable |
| [getValueAbsolute](get-value-absolute.md) | public [getValueAbsolute](get-value-absolute.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>gets the value of the variable without validating it |
| [hasLowerBound](has-lower-bound.md) | public [hasLowerBound](has-lower-bound.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>indicates whether a lower bound exists or not |
| [hasUpperBound](has-upper-bound.md) | public [hasUpperBound](has-upper-bound.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>indicates whether an upper bound exists or not |
| [invalidate](../-variable/invalidate.md) | public [invalidate](../-variable/invalidate.md)()<br>Invalidates the variable |
| [isInput](../-variable/is-input.md) | public [~~isInput~~](../-variable/is-input.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the variable is an input or output |
| [isInputToComponent](../-variable/is-input-to-component.md) | public [isInputToComponent](../-variable/is-input-to-component.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether a variable is an input to a component |
| [isInputToModel](../-variable/is-input-to-model.md) | public [isInputToModel](../-variable/is-input-to-model.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether a variable is an input to the Model |
| [isValid](../-variable/is-valid.md) | public [isValid](../-variable/is-valid.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the variable is currently valid or not |
| [precedentLinks](../-variable/precedent-links.md) | public [precedentLinks](../-variable/precedent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that are immediate precedents to the value of this variable. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setDescription](set-description.md) | public [setDescription](set-description.md)(description: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the description for the variable |
| [setEnumAliases](set-enum-aliases.md) | public [setEnumAliases](set-enum-aliases.md)(enumAliases: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the enumerated aliases for the variable. |
| [setEnumValues](set-enum-values.md) | public [setEnumValues](set-enum-values.md)(enumValues: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the enumerated values for the variable |
| [setFormat](set-format.md) | public [setFormat](set-format.md)(format: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the format for the variable |
| [setHasChanged](../-variable/set-has-changed.md) | public [setHasChanged](../-variable/set-has-changed.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [setHide](../-variable/set-hide.md) | public [setHide](../-variable/set-hide.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set whether the variable is hidden or not |
| [setLowerBound](set-lower-bound.md) | public [setLowerBound](set-lower-bound.md)(bound: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br>sets the lower bound for the variable |
| [setMetadata](../-variable/set-metadata.md) | public [setMetadata](../-variable/set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a variable. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setUnits](set-units.md) | public [setUnits](set-units.md)(units: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the units for the variable |
| [setUpperBound](set-upper-bound.md) | public [setUpperBound](set-upper-bound.md)(bound: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br>sets the upper bound for the variable |
| [setValue](set-value.md) | public [setValue](set-value.md)(value: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br>sets the value of the variable |
| [toFormattedString](to-formatted-string.md) | public [toFormattedString](to-formatted-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>converts the variable value to a formatted string representation. |
| [toFormattedStringAbsolute](to-formatted-string-absolute.md) | public [toFormattedStringAbsolute](to-formatted-string-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>converts the variable value to a formatted string representation. |
| [toString](../-variable/to-string.md) | public [toString](../-variable/to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [toStringAbsolute](../-variable/to-string-absolute.md) | public [toStringAbsolute](../-variable/to-string-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [validate](../-variable/validate.md) | public [validate](../-variable/validate.md)()<br>Causes the scheduler to get a valid value for this variable. |
