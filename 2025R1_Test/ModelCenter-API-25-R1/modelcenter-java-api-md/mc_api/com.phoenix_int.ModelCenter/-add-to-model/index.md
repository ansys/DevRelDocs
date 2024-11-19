//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[AddToModel](index.md)

# AddToModel


public class [AddToModel](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

This is the wrapper class that handles the native COM calls to a AddToModel object. The class is used by Java plug-ins to ModelCenter.

#### Author

Woyak, 10-01

## Constructors

| | |
|---|---|
| [AddToModel](-add-to-model.md) | constructor(pstrm: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))constructor(pstrm: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), addRef: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)) |

## Functions

| Name | Summary |
|---|---|
| [addInput](add-input.md) | public [addInput](add-input.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>adds a pending input to the component. |
| [addInput2](add-input2.md) | public [addInput2](add-input2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), classURL: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>adds a pending input to the component. |
| [addMethod](add-method.md) | public [addMethod](add-method.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), displayName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Adds the method |
| [addOutput](add-output.md) | public [addOutput](add-output.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>adds a pending output to the component  Valid types of variables are listed below. |
| [addOutput2](add-output2.md) | public [addOutput2](add-output2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), classURL: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), value: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>adds a pending output to the component  Valid types of variables are listed below. |
| [addToModel](add-to-model.md) | public [addToModel](add-to-model.md)()<br>adds a new component to the Model |
| [addToModel2](add-to-model2.md) | public [addToModel2](add-to-model2.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>adds a new component to the Model |
| [addToModel3](add-to-model3.md) | public [addToModel3](add-to-model3.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) |
| [clearBusyFlag](clear-busy-flag.md) | public [clearBusyFlag](clear-busy-flag.md)()<br>clears the busy state if an Exception is encountered in addInput() or addOutput() |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getAutoRun](get-auto-run.md) | public [getAutoRun](get-auto-run.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>returns the current autorun flag |
| [getComponent](get-component.md) | public [getComponent](get-component.md)(): [Component](../-component/index.md)<br>gets the component object associated with this object |
| [getPrevalidateInputs](get-prevalidate-inputs.md) | public [getPrevalidateInputs](get-prevalidate-inputs.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>returns the current prevalidate inputs flag |
| [getProgID](get-prog-i-d.md) | public [getProgID](get-prog-i-d.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the &quot;ProgID&quot; registry entry associated with this Plug-In |
| [getRegID](get-reg-i-d.md) | public [getRegID](get-reg-i-d.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the registry id associated with this Plug-In |
| [newInstance](new-instance.md) | public [newInstance](new-instance.md)(): [AddToModel](index.md)<br>creates a new AddToModel object (that is connected to the same ModelCenter session) that is not currently attached to any thread. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setAuthor](set-author.md) | public [setAuthor](set-author.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In author |
| [setAutoRun](set-auto-run.md) | public [setAutoRun](set-auto-run.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets the current autorun flag |
| [setComponentRequirements](set-component-requirements.md) | public [setComponentRequirements](set-component-requirements.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In requirements |
| [setDescription](set-description.md) | public [setDescription](set-description.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In description |
| [setHelpURL](set-help-u-r-l.md) | public [setHelpURL](set-help-u-r-l.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In help URL |
| [setIcon](set-icon.md) | public [setIcon](set-icon.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In icon |
| [setKeywords](set-keywords.md) | public [setKeywords](set-keywords.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In keywords |
| [setPrevalidateInputs](set-prevalidate-inputs.md) | public [setPrevalidateInputs](set-prevalidate-inputs.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets the current prevalidate inputs flag |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setVersion](set-version.md) | public [setVersion](set-version.md)(str: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the Plug-In version |
| [updateComponent](update-component.md) | public [updateComponent](update-component.md)()<br>Reinitializes the inputs and outputs of a Component Plug-In. |
