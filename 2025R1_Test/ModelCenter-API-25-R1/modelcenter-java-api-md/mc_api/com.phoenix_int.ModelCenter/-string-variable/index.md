//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[StringVariable](index.md)

# StringVariable


public class [StringVariable](index.md) : [Variable](../-variable/index.md)

A variable type class for ModelCenter

#### Author

Woyak, 9/2001

## Functions

| Name | Summary |
|---|---|
| [dependentLinks](../-variable/dependent-links.md) | public [dependentLinks](../-variable/dependent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that immediately depend on the value of this variable. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromString](../-variable/from-string.md) | public [fromString](../-variable/from-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the value for the variable from a string. |
| [getDescription](get-description.md) | public [getDescription](get-description.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the description for the variable |
| [getDirectDependents](../-variable/get-direct-dependents.md) | public [getDirectDependents](../-variable/get-direct-dependents.md)(): [Variables](../-variables/index.md)<br>public [getDirectDependents](../-variable/get-direct-dependents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked outputs of this variable. |
| [getDirectPrecedents](../-variable/get-direct-precedents.md) | public [getDirectPrecedents](../-variable/get-direct-precedents.md)(): [Variables](../-variables/index.md)<br>public [getDirectPrecedents](../-variable/get-direct-precedents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked inputs of this variable. |
| [getEnumAliases](get-enum-aliases.md) | public [getEnumAliases](get-enum-aliases.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the enumerated aliases for the variable |
| [getEnumValues](get-enum-values.md) | public [getEnumValues](get-enum-values.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the enumerated values for the variable |
| [getFullName](../-variable/get-full-name.md) | public [getFullName](../-variable/get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the full name of the variable, e.g. |
| [getHasChanged](../-variable/get-has-changed.md) | public [getHasChanged](../-variable/get-has-changed.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [getHide](../-variable/get-hide.md) | public [getHide](../-variable/get-hide.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether the variable is hidden or not |
| [getMetadata](../-variable/get-metadata.md) | public [getMetadata](../-variable/get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](../-variant/index.md)<br>Get a metadata value. |
| [getName](../-variable/get-name.md) | public [getName](../-variable/get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the name of the variable, e.g. |
| [getOwningComponent](../-variable/get-owning-component.md) | public [getOwningComponent](../-variable/get-owning-component.md)(): [Component](../-component/index.md)<br>Get the component which owns this variable. |
| [getType](../-variable/get-type.md) | public [getType](../-variable/get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the type of the variable. |
| [getValue](get-value.md) | public [getValue](get-value.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the value of the variable |
| [getValueAbsolute](get-value-absolute.md) | public [getValueAbsolute](get-value-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the value of the variable without validating it |
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
| [setHasChanged](../-variable/set-has-changed.md) | public [setHasChanged](../-variable/set-has-changed.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [setHide](../-variable/set-hide.md) | public [setHide](../-variable/set-hide.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set whether the variable is hidden or not |
| [setMetadata](../-variable/set-metadata.md) | public [setMetadata](../-variable/set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a variable. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setValue](set-value.md) | public [setValue](set-value.md)(value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the value of the variable |
| [toString](../-variable/to-string.md) | public [toString](../-variable/to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [toStringAbsolute](../-variable/to-string-absolute.md) | public [toStringAbsolute](../-variable/to-string-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [validate](../-variable/validate.md) | public [validate](../-variable/validate.md)()<br>Causes the scheduler to get a valid value for this variable. |
