# Component

public class [Component](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md), [IVariableHolder](../-i-variable-holder/index.md)

This is the wrapper class that handles the native COM calls to a Component object. The class is used by Java plug-ins to ModelCenter.

#### Author

Woyak, 9-01

#### Inheritors

| |
|---|
| [IfComponent](../-if-component/index.md) |
| [ScriptComponent](../-script-component/index.md) |
| [IfComponent](../-if-component/index.md) |
| [ScriptComponent](../-script-component/index.md) |

## Properties

| Name | Summary |
|---|---|
| [COMPONENT_TYPE_ASSEMBLY](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-a-s-s-e-m-b-l-y.md) | val [COMPONENT_TYPE_ASSEMBLY](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-a-s-s-e-m-b-l-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Assembly&quot; |
| [COMPONENT_TYPE_COMPONENT](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-c-o-m-p-o-n-e-n-t.md) | val [COMPONENT_TYPE_COMPONENT](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-c-o-m-p-o-n-e-n-t.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Component&quot; |
| [COMPONENT_TYPE_EMPTY](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-e-m-p-t-y.md) | val [COMPONENT_TYPE_EMPTY](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-e-m-p-t-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Empty&quot; |
| [COMPONENT_TYPE_FOR_EACH](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-f-o-r_-e-a-c-h.md) | val [~~COMPONENT_TYPE_FOR_EACH~~](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-f-o-r_-e-a-c-h.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ForEach&quot; |
| [COMPONENT_TYPE_IF](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-i-f.md) | val [COMPONENT_TYPE_IF](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-i-f.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;If&quot; |
| [COMPONENT_TYPE_LOOP](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-l-o-o-p.md) | val [COMPONENT_TYPE_LOOP](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-l-o-o-p.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Loop&quot; |
| [COMPONENT_TYPE_PARALLEL](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-p-a-r-a-l-l-e-l.md) | val [COMPONENT_TYPE_PARALLEL](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-p-a-r-a-l-l-e-l.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Parallel&quot; |
| [COMPONENT_TYPE_SCRIPTCOMPONENT](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-c-r-i-p-t-c-o-m-p-o-n-e-n-t.md) | val [COMPONENT_TYPE_SCRIPTCOMPONENT](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-c-r-i-p-t-c-o-m-p-o-n-e-n-t.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ScriptComponent&quot; |
| [COMPONENT_TYPE_SEQUENCE](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-e-q-u-e-n-c-e.md) | val [COMPONENT_TYPE_SEQUENCE](-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-e-q-u-e-n-c-e.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Sequence&quot; |

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [downloadValues](download-values.md) | public [downloadValues](download-values.md)()<br>downloads the component's variable values from Analysis Server, if it's an Analysis Server component |
| [getAssociatedFiles](get-associated-files.md) | public [getAssociatedFiles](get-associated-files.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;<br>gets the associated files of the component |
| [getFullName](get-full-name.md) | public [getFullName](get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the full name of the current object, e.g. |
| [getGroup](get-group.md) | public [getGroup](get-group.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Group](../-group/index.md)<br>public [getGroup](get-group.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Group](../-group/index.md)<br>gets the specified group |
| [getIndexInParent](get-index-in-parent.md) | public [getIndexInParent](get-index-in-parent.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the index of the component in its parent assembly. |
| [getMetadata](get-metadata.md) | public [getMetadata](get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](../-variant/index.md)<br>Get a metadata value. |
| [getName](get-name.md) | public [getName](get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the current object, e.g. |
| [getNumGroups](get-num-groups.md) | public [getNumGroups](get-num-groups.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of groups stored in this object |
| [getNumVariables](get-num-variables.md) | public [getNumVariables](get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of variables stored in this object |
| [getParentAssembly](get-parent-assembly.md) | public [getParentAssembly](get-parent-assembly.md)(): [Assembly](../-assembly/index.md)<br>gets the parent assembly of this component (fails if this is the model/root assembly) |
| [getPositionX](get-position-x.md) | public [getPositionX](get-position-x.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the X co-ordinate value of the current object, |
| [getPositionY](get-position-y.md) | public [getPositionY](get-position-y.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the Y co-ordinate value of the current object, |
| [getSource](get-source.md) | public [getSource](get-source.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the server path for the component, e.g. |
| [getType](get-type.md) | public [getType](get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the type of the component: COMPONENT_TYPE_COMPONENT = &quot;Component&quot; COMPONENT_TYPE_SCRIPTCOMPONENT = &quot;ScriptComponent&quot; COMPONENT_TYPE_ASSEMBLY = &quot;Assembly&quot; COMPONENT_TYPE_SEQUENCE = &quot;Sequence&quot; COMPONENT_TYPE_IF = &quot;If&quot; COMPONENT_TYPE_PARALLEL = &quot;Parallel&quot; COMPONENT_TYPE_EMPTY = &quot;Empty&quot; COMPONENT_TYPE_FOR_EACH = &quot;ForEach&quot; |
| [getUserData](get-user-data.md) | public [getUserData](get-user-data.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Get user data of the component. |
| [getVariable](get-variable.md) | public [getVariable](get-variable.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](../-variable/index.md)<br>gets the specified variable<br>public [getVariable](get-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](../-variable/index.md)<br>gets the specified variable. |
| [invalidate](invalidate.md) | public [invalidate](invalidate.md)()<br>causes the component to be invalidated |
| [invokeMethod](invoke-method.md) | public [invokeMethod](invoke-method.md)(method: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>invokes a method of the Component |
| [reconnect](reconnect.md) | public [reconnect](reconnect.md)()<br>reconnects the component |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [rename](rename.md) | public [rename](rename.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Rename the component |
| [run](run.md) | public [run](run.md)()<br>causes the component to run |
| [setAssociatedFiles](set-associated-files.md) | public [setAssociatedFiles](set-associated-files.md)(val: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;)<br>sets the associated files of the component |
| [setMetadata](set-metadata.md) | public [setMetadata](set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a component |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setUserData](set-user-data.md) | public [setUserData](set-user-data.md)(val: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>Set user data of the Component |
| [show](show.md) | public [show](show.md)()<br>Show the GUI form associated with the component, if any. |
