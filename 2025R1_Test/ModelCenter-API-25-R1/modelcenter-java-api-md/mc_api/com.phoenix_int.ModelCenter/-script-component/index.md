# ScriptComponent


public class [ScriptComponent](index.md) : [Component](../-component/index.md)

This is the wrapper class that handles the native COM calls to a ScriptComponent object.

#### Author

jboutwell, 8-2011

## Properties

| Name | Summary |
|---|---|
| [COMPONENT_TYPE_ASSEMBLY](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-a-s-s-e-m-b-l-y.md) | val [COMPONENT_TYPE_ASSEMBLY](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-a-s-s-e-m-b-l-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Assembly&quot; |
| [COMPONENT_TYPE_COMPONENT](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-c-o-m-p-o-n-e-n-t.md) | val [COMPONENT_TYPE_COMPONENT](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-c-o-m-p-o-n-e-n-t.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Component&quot; |
| [COMPONENT_TYPE_EMPTY](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-e-m-p-t-y.md) | val [COMPONENT_TYPE_EMPTY](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-e-m-p-t-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Empty&quot; |
| [COMPONENT_TYPE_FOR_EACH](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-f-o-r_-e-a-c-h.md) | val [~~COMPONENT_TYPE_FOR_EACH~~](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-f-o-r_-e-a-c-h.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ForEach&quot; |
| [COMPONENT_TYPE_IF](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-i-f.md) | val [COMPONENT_TYPE_IF](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-i-f.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;If&quot; |
| [COMPONENT_TYPE_LOOP](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-l-o-o-p.md) | val [COMPONENT_TYPE_LOOP](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-l-o-o-p.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Loop&quot; |
| [COMPONENT_TYPE_PARALLEL](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-p-a-r-a-l-l-e-l.md) | val [COMPONENT_TYPE_PARALLEL](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-p-a-r-a-l-l-e-l.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Parallel&quot; |
| [COMPONENT_TYPE_SCRIPTCOMPONENT](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-c-r-i-p-t-c-o-m-p-o-n-e-n-t.md) | val [COMPONENT_TYPE_SCRIPTCOMPONENT](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-c-r-i-p-t-c-o-m-p-o-n-e-n-t.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ScriptComponent&quot; |
| [COMPONENT_TYPE_SEQUENCE](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-e-q-u-e-n-c-e.md) | val [COMPONENT_TYPE_SEQUENCE](../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-e-q-u-e-n-c-e.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Sequence&quot; |

## Functions

| Name | Summary |
|---|---|
| [addVariable](add-variable.md) | public [addVariable](add-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), state: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>Adds the variable from the script component. |
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [downloadValues](../-component/download-values.md) | public [downloadValues](../-component/download-values.md)()<br>downloads the component's variable values from Analysis Server, if it's an Analysis Server component |
| [getAssociatedFiles](../-component/get-associated-files.md) | public [getAssociatedFiles](../-component/get-associated-files.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;<br>gets the associated files of the component |
| [getForwardSchedule](get-forward-schedule.md) | public [getForwardSchedule](get-forward-schedule.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets the state of the script's forward scheduling mode. |
| [getFullName](../-component/get-full-name.md) | public [getFullName](../-component/get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the full name of the current object, e.g. |
| [getGroup](../-component/get-group.md) | public [getGroup](../-component/get-group.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Group](../-group/index.md)<br>public [getGroup](../-component/get-group.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Group](../-group/index.md)<br>gets the specified group |
| [getIndexInParent](../-component/get-index-in-parent.md) | public [getIndexInParent](../-component/get-index-in-parent.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the index of the component in its parent assembly. |
| [getLanguage](get-language.md) | public [getLanguage](get-language.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the script's source language. |
| [getMetadata](../-component/get-metadata.md) | public [getMetadata](../-component/get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](../-variant/index.md)<br>Get a metadata value. |
| [getName](../-component/get-name.md) | public [getName](../-component/get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the current object, e.g. |
| [getNumGroups](../-component/get-num-groups.md) | public [getNumGroups](../-component/get-num-groups.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of groups stored in this object |
| [getNumVariables](../-component/get-num-variables.md) | public [getNumVariables](../-component/get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of variables stored in this object |
| [getParentAssembly](../-component/get-parent-assembly.md) | public [getParentAssembly](../-component/get-parent-assembly.md)(): [Assembly](../-assembly/index.md)<br>gets the parent assembly of this component (fails if this is the model/root assembly) |
| [getPositionX](../-component/get-position-x.md) | public [getPositionX](../-component/get-position-x.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the X co-ordinate value of the current object, |
| [getPositionY](../-component/get-position-y.md) | public [getPositionY](../-component/get-position-y.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the Y co-ordinate value of the current object, |
| [getPrevalidate](get-prevalidate.md) | public [getPrevalidate](get-prevalidate.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Gets the state of the script's prevalidate mode. |
| [getSource](../-component/get-source.md) | public [getSource](../-component/get-source.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the server path for the component, e.g. |
| [getSourceScript](get-source-script.md) | public [getSourceScript](get-source-script.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the source script code associated with this script component. |
| [getTimeout](get-timeout.md) | public [getTimeout](get-timeout.md)(): [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html)<br>Gets the script's run timeout. |
| [getType](../-component/get-type.md) | public [getType](../-component/get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the type of the component: COMPONENT_TYPE_COMPONENT = &quot;Component&quot; COMPONENT_TYPE_SCRIPTCOMPONENT = &quot;ScriptComponent&quot; COMPONENT_TYPE_ASSEMBLY = &quot;Assembly&quot; COMPONENT_TYPE_SEQUENCE = &quot;Sequence&quot; COMPONENT_TYPE_IF = &quot;If&quot; COMPONENT_TYPE_PARALLEL = &quot;Parallel&quot; COMPONENT_TYPE_EMPTY = &quot;Empty&quot; COMPONENT_TYPE_FOR_EACH = &quot;ForEach&quot; |
| [getUserData](../-component/get-user-data.md) | public [getUserData](../-component/get-user-data.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Get user data of the component. |
| [getVariable](../-component/get-variable.md) | public [getVariable](../-component/get-variable.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](../-variable/index.md)<br>gets the specified variable<br>public [getVariable](../-component/get-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>gets the specified variable. |
| [invalidate](../-component/invalidate.md) | public [invalidate](../-component/invalidate.md)()<br>causes the component to be invalidated |
| [invokeMethod](../-component/invoke-method.md) | public [invokeMethod](../-component/invoke-method.md)(method: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>invokes a method of the Component |
| [reconnect](../-component/reconnect.md) | public [reconnect](../-component/reconnect.md)()<br>reconnects the component |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [removeVariable](remove-variable.md) | public [removeVariable](remove-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Removes the variable from the script component. |
| [rename](../-component/rename.md) | public [rename](../-component/rename.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Rename the component |
| [run](../-component/run.md) | public [run](../-component/run.md)()<br>causes the component to run |
| [setAssociatedFiles](../-component/set-associated-files.md) | public [setAssociatedFiles](../-component/set-associated-files.md)(val: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;)<br>sets the associated files of the component |
| [setForwardSchedule](set-forward-schedule.md) | public [setForwardSchedule](set-forward-schedule.md)(forwardSchedule: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Turns on/off the script's forward scheduling mode. |
| [setLanguage](set-language.md) | public [setLanguage](set-language.md)(language: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the script's source language. |
| [setMetadata](../-component/set-metadata.md) | public [setMetadata](../-component/set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a component |
| [setPrevalidate](set-prevalidate.md) | public [setPrevalidate](set-prevalidate.md)(prevalidate: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Sets the script's prevalidate mode. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setSourceFromFile](set-source-from-file.md) | public [setSourceFromFile](set-source-from-file.md)(file: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the script source code to the value of the given file. |
| [setSourceFromString](set-source-from-string.md) | public [setSourceFromString](set-source-from-string.md)(script: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the script source code to the given string. |
| [setTimeout](set-timeout.md) | public [setTimeout](set-timeout.md)(timeout: [Double](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html))<br>Sets the script's run timeout. |
| [setUserData](../-component/set-user-data.md) | public [setUserData](../-component/set-user-data.md)(val: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>Set user data of the Component |
| [setVariables](set-variables.md) | public [setVariables](set-variables.md)(inputs: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), outputs: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Sets the variables in the script to only those passed into this function. |
| [show](../-component/show.md) | public [show](../-component/show.md)()<br>Show the GUI form associated with the component, if any. |
