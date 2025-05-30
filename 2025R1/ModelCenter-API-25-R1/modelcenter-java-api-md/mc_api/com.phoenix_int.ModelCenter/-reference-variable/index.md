# ReferenceVariable


public class [ReferenceVariable](index.md) : [Variable](../-variable/index.md)

A variable type class for ModelCenter

#### Author

Woyak, 10/2001

## Functions

| Name | Summary |
|---|---|
| [createRefProp](create-ref-prop.md) | public [createRefProp](create-ref-prop.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [RefProp](../-ref-prop/index.md)<br>creates a reference property |
| [dependentLinks](../-variable/dependent-links.md) | public [dependentLinks](../-variable/dependent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that immediately depend on the value of this variable. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [fromString](../-variable/from-string.md) | public [fromString](../-variable/from-string.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the value for the variable from a string. |
| [getDirectDependents](../-variable/get-direct-dependents.md) | public [getDirectDependents](../-variable/get-direct-dependents.md)(): [Variables](../-variables/index.md)<br>public [getDirectDependents](../-variable/get-direct-dependents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked outputs of this variable. |
| [getDirectPrecedents](../-variable/get-direct-precedents.md) | public [getDirectPrecedents](../-variable/get-direct-precedents.md)(): [Variables](../-variables/index.md)<br>public [getDirectPrecedents](../-variable/get-direct-precedents.md)(followSuspended: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)): [Variables](../-variables/index.md)<br>Gets all the immediately linked inputs of this variable. |
| [getFullName](../-variable/get-full-name.md) | public [getFullName](../-variable/get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the full name of the variable, e.g. |
| [getHasChanged](../-variable/get-has-changed.md) | public [getHasChanged](../-variable/get-has-changed.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [getHide](../-variable/get-hide.md) | public [getHide](../-variable/get-hide.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets whether the variable is hidden or not |
| [getMetadata](../-variable/get-metadata.md) | public [getMetadata](../-variable/get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](../-variant/index.md)<br>Get a metadata value. |
| [getName](../-variable/get-name.md) | public [getName](../-variable/get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the name of the variable, e.g. |
| [getNumReferencedVariables](get-num-referenced-variables.md) | public [getNumReferencedVariables](get-num-referenced-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of variables referenced by this object |
| [getOwningComponent](../-variable/get-owning-component.md) | public [getOwningComponent](../-variable/get-owning-component.md)(): [Component](../-component/index.md)<br>Get the component which owns this variable. |
| [getReference](get-reference.md) | public [getReference](get-reference.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the reference equation |
| [getReferencedVariable](get-referenced-variable.md) | public [getReferencedVariable](get-referenced-variable.md)(): [Variable](../-variable/index.md)<br>Convenience method to return the referenced variable.<br>public [getReferencedVariable](get-referenced-variable.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](../-variable/index.md)<br>gets the specified referenced variable |
| [getRefPropValue](get-ref-prop-value.md) | public [getRefPropValue](get-ref-prop-value.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets a value for a reference property |
| [getRefPropValueAbsolute](get-ref-prop-value-absolute.md) | public [getRefPropValueAbsolute](get-ref-prop-value-absolute.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets a value for a reference property |
| [getType](../-variable/get-type.md) | public [getType](../-variable/get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the type of the variable. |
| [getValue](get-value.md) | public [getValue](get-value.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>gets the value of the reference |
| [invalidate](../-variable/invalidate.md) | public [invalidate](../-variable/invalidate.md)()<br>Invalidates the variable |
| [isInput](../-variable/is-input.md) | public [~~isInput~~](../-variable/is-input.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the variable is an input or output |
| [isInputToComponent](../-variable/is-input-to-component.md) | public [isInputToComponent](../-variable/is-input-to-component.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether a variable is an input to a component |
| [isInputToModel](../-variable/is-input-to-model.md) | public [isInputToModel](../-variable/is-input-to-model.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether a variable is an input to the Model |
| [isValid](../-variable/is-valid.md) | public [isValid](../-variable/is-valid.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Indicates whether the variable is currently valid or not |
| [precedentLinks](../-variable/precedent-links.md) | public [precedentLinks](../-variable/precedent-links.md)(): [VariableLinks](../-variable-links/index.md)<br>Returns a list of links that are immediate precedents to the value of this variable. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setHasChanged](../-variable/set-has-changed.md) | public [setHasChanged](../-variable/set-has-changed.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Boolean which indicates if the variable has changed since the last time the boolean was reset. |
| [setHide](../-variable/set-hide.md) | public [setHide](../-variable/set-hide.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set whether the variable is hidden or not |
| [setMetadata](../-variable/set-metadata.md) | public [setMetadata](../-variable/set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a variable. |
| [setReference](set-reference.md) | public [setReference](set-reference.md)(reference: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the reference equation |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setRefPropValue](set-ref-prop-value.md) | public [setRefPropValue](set-ref-prop-value.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets a value for a reference property |
| [setValue](set-value.md) | public [setValue](set-value.md)(value: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br>set the value of the reference |
| [toString](../-variable/to-string.md) | public [toString](../-variable/to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [toStringAbsolute](../-variable/to-string-absolute.md) | public [toStringAbsolute](../-variable/to-string-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Converts the variable value to a string representation. |
| [validate](../-variable/validate.md) | public [validate](../-variable/validate.md)()<br>Causes the scheduler to get a valid value for this variable. |
