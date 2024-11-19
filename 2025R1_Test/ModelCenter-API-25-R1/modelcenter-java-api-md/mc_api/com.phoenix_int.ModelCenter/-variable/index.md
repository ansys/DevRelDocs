//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[Variable](index.md)

# Variable

public class [Variable](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is a base class for variable types in ModelCenter

#### Author

Woyak, 9/2001

#### Inheritors

| |
|---|
| [Array](../-array/index.md) |
| [BooleanVariable](../-boolean-variable/index.md) |
| [DoubleVariable](../-double-variable/index.md) |
| [FileVariable](../-file-variable/index.md) |
| [GeometryVariable](../-geometry-variable/index.md) |
| [IntegerVariable](../-integer-variable/index.md) |
| [ObjectVariable](../-object-variable/index.md) |
| [ReferenceVariable](../-reference-variable/index.md) |
| [StringVariable](../-string-variable/index.md) |
| [Array](../-array/index.md) |
| [BooleanVariable](../-boolean-variable/index.md) |
| [DoubleVariable](../-double-variable/index.md) |
| [FileVariable](../-file-variable/index.md) |
| [GeometryVariable](../-geometry-variable/index.md) |
| [IntegerVariable](../-integer-variable/index.md) |
| [ObjectVariable](../-object-variable/index.md) |
| [ReferenceVariable](../-reference-variable/index.md) |
| [StringVariable](../-string-variable/index.md) |

## Types

| Name | Summary |
|---|---|
| [MetadataAccess](-metadata-access/index.md) | enum [MetadataAccess](-metadata-access/index.md)<br>Supported access levels. |
| [MetadataType](-metadata-type/index.md) | enum [MetadataType](-metadata-type/index.md)<br>Supported metadata types. |

## Functions

| Name | Summary |
|---|---|
| [dependentLinks](dependent-links.md) | public [dependentLinks](dependent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that immediately depend on the value of this variable. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromString](from-string.md) | public [fromString](from-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the value for the variable from a string. |
| [getDirectDependents](get-direct-dependents.md) | public [getDirectDependents](get-direct-dependents.md)(): [Variables](../-variables/index.md)<br>public [getDirectDependents](get-direct-dependents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked outputs of this variable. |
| [getDirectPrecedents](get-direct-precedents.md) | public [getDirectPrecedents](get-direct-precedents.md)(): [Variables](../-variables/index.md)<br>public [getDirectPrecedents](get-direct-precedents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked inputs of this variable. |
| [getFullName](get-full-name.md) | public [getFullName](get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the full name of the variable, e.g. |
| [getHasChanged](get-has-changed.md) | public [getHasChanged](get-has-changed.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [getHide](get-hide.md) | public [getHide](get-hide.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether the variable is hidden or not |
| [getMetadata](get-metadata.md) | public [getMetadata](get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](../-variant/index.md)<br>Get a metadata value. |
| [getName](get-name.md) | public [getName](get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the name of the variable, e.g. |
| [getOwningComponent](get-owning-component.md) | public [getOwningComponent](get-owning-component.md)(): [Component](../-component/index.md)<br>Get the component which owns this variable. |
| [getType](get-type.md) | public [getType](get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the type of the variable. |
| [invalidate](invalidate.md) | public [invalidate](invalidate.md)()<br>Invalidates the variable |
| [isInput](is-input.md) | public [~~isInput~~](is-input.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the variable is an input or output |
| [isInputToComponent](is-input-to-component.md) | public [isInputToComponent](is-input-to-component.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether a variable is an input to a component |
| [isInputToModel](is-input-to-model.md) | public [isInputToModel](is-input-to-model.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether a variable is an input to the Model |
| [isValid](is-valid.md) | public [isValid](is-valid.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the variable is currently valid or not |
| [precedentLinks](precedent-links.md) | public [precedentLinks](precedent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that are immediate precedents to the value of this variable. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setHasChanged](set-has-changed.md) | public [setHasChanged](set-has-changed.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [setHide](set-hide.md) | public [setHide](set-hide.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set whether the variable is hidden or not |
| [setMetadata](set-metadata.md) | public [setMetadata](set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a variable. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [toString](to-string.md) | public [toString](to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [toStringAbsolute](to-string-absolute.md) | public [toStringAbsolute](to-string-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [validate](validate.md) | public [validate](validate.md)()<br>Causes the scheduler to get a valid value for this variable. |
