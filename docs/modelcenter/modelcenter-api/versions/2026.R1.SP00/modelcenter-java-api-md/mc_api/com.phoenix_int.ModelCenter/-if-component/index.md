# IfComponent


public class [IfComponent](index.md) : [Component](./../-component/index.md)

This is the wrapper class that handles the native COM calls to an IfComponent object.

#### Author

jdaley, 4-09

## Properties

| Name | Summary |
|---|---|
| [COMPONENT_TYPE_ASSEMBLY](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-a-s-s-e-m-b-l-y.md) | val [COMPONENT_TYPE_ASSEMBLY](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-a-s-s-e-m-b-l-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Assembly&quot; |
| [COMPONENT_TYPE_COMPONENT](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-c-o-m-p-o-n-e-n-t.md) | val [COMPONENT_TYPE_COMPONENT](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-c-o-m-p-o-n-e-n-t.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Component&quot; |
| [COMPONENT_TYPE_EMPTY](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-e-m-p-t-y.md) | val [COMPONENT_TYPE_EMPTY](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-e-m-p-t-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Empty&quot; |
| [COMPONENT_TYPE_FOR_EACH](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-f-o-r_-e-a-c-h.md) | val [~~COMPONENT_TYPE_FOR_EACH~~](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-f-o-r_-e-a-c-h.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ForEach&quot; |
| [COMPONENT_TYPE_IF](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-i-f.md) | val [COMPONENT_TYPE_IF](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-i-f.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;If&quot; |
| [COMPONENT_TYPE_LOOP](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-l-o-o-p.md) | val [COMPONENT_TYPE_LOOP](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-l-o-o-p.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Loop&quot; |
| [COMPONENT_TYPE_PARALLEL](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-p-a-r-a-l-l-e-l.md) | val [COMPONENT_TYPE_PARALLEL](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-p-a-r-a-l-l-e-l.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Parallel&quot; |
| [COMPONENT_TYPE_SCRIPTCOMPONENT](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-c-r-i-p-t-c-o-m-p-o-n-e-n-t.md) | val [COMPONENT_TYPE_SCRIPTCOMPONENT](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-c-r-i-p-t-c-o-m-p-o-n-e-n-t.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ScriptComponent&quot; |
| [COMPONENT_TYPE_SEQUENCE](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-e-q-u-e-n-c-e.md) | val [COMPONENT_TYPE_SEQUENCE](./../-component/-c-o-m-p-o-n-e-n-t_-t-y-p-e_-s-e-q-u-e-n-c-e.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Sequence&quot; |

## Functions

| Name | Summary |
|---|---|
| [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [downloadValues](./../-component/download-values.md) | public [downloadValues](./../-component/download-values.md)()<br>downloads the component's variable values from Analysis Server, if it's an Analysis Server component |
| [getAssociatedFiles](./../-component/get-associated-files.md) | public [getAssociatedFiles](./../-component/get-associated-files.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;<br>gets the associated files of the component |
| [getBranchCondition](get-branch-condition.md) | public [getBranchCondition](get-branch-condition.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the branch condition |
| [getBranchName](get-branch-name.md) | public [getBranchName](get-branch-name.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>returns the name of the branch |
| [getExclusive](get-exclusive.md) | public [getExclusive](get-exclusive.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>returns the if exclusive mode |
| [getFullName](./../-component/get-full-name.md) | public [getFullName](./../-component/get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the full name of the current object, e.g. |
| [getGroup](./../-component/get-group.md) | public [getGroup](./../-component/get-group.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Group](./../-group/index.md)<br>public [getGroup](./../-component/get-group.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Group](./../-group/index.md)<br>gets the specified group |
| [getIndexInParent](./../-component/get-index-in-parent.md) | public [getIndexInParent](./../-component/get-index-in-parent.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the index of the component in its parent assembly. |
| [getMetadata](./../-component/get-metadata.md) | public [getMetadata](./../-component/get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](./../-variant/index.md)<br>Get a metadata value. |
| [getName](./../-component/get-name.md) | public [getName](./../-component/get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the current object, e.g. |
| [getNumBranches](get-num-branches.md) | public [getNumBranches](get-num-branches.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the number of branches |
| [getNumGroups](./../-component/get-num-groups.md) | public [getNumGroups](./../-component/get-num-groups.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of groups stored in this object |
| [getNumVariables](./../-component/get-num-variables.md) | public [getNumVariables](./../-component/get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of variables stored in this object |
| [getParentAssembly](./../-component/get-parent-assembly.md) | public [getParentAssembly](./../-component/get-parent-assembly.md)(): [Assembly](./../-assembly/index.md)<br>gets the parent assembly of this component (fails if this is the model/root assembly) |
| [getPositionX](./../-component/get-position-x.md) | public [getPositionX](./../-component/get-position-x.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the X co-ordinate value of the current object, |
| [getPositionY](./../-component/get-position-y.md) | public [getPositionY](./../-component/get-position-y.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the Y co-ordinate value of the current object, |
| [getRunLastBranchByDefault](get-run-last-branch-by-default.md) | public [getRunLastBranchByDefault](get-run-last-branch-by-default.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>returns the run last branch by default flag |
| [getSource](./../-component/get-source.md) | public [getSource](./../-component/get-source.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the server path for the component, e.g. |
| [getType](./../-component/get-type.md) | public [getType](./../-component/get-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the type of the component: COMPONENT_TYPE_COMPONENT = &quot;Component&quot; COMPONENT_TYPE_SCRIPTCOMPONENT = &quot;ScriptComponent&quot; COMPONENT_TYPE_ASSEMBLY = &quot;Assembly&quot; COMPONENT_TYPE_SEQUENCE = &quot;Sequence&quot; COMPONENT_TYPE_IF = &quot;If&quot; COMPONENT_TYPE_PARALLEL = &quot;Parallel&quot; COMPONENT_TYPE_EMPTY = &quot;Empty&quot; COMPONENT_TYPE_FOR_EACH = &quot;ForEach&quot; |
| [getUserData](./../-component/get-user-data.md) | public [getUserData](./../-component/get-user-data.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Get user data of the component. |
| [getVariable](./../-component/get-variable.md) | public [getVariable](./../-component/get-variable.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](./../-variable/index.md)<br>gets the specified variable<br>public [getVariable](./../-component/get-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](./../-variable/index.md)<br>gets the specified variable. |
| [invalidate](./../-component/invalidate.md) | public [invalidate](./../-component/invalidate.md)()<br>causes the component to be invalidated |
| [invokeMethod](./../-component/invoke-method.md) | public [invokeMethod](./../-component/invoke-method.md)(method: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>invokes a method of the Component |
| [reconnect](./../-component/reconnect.md) | public [reconnect](./../-component/reconnect.md)()<br>reconnects the component |
| [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [rename](./../-component/rename.md) | public [rename](./../-component/rename.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Rename the component |
| [renameBranch](rename-branch.md) | public [renameBranch](rename-branch.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>renames the branch to the given name |
| [run](./../-component/run.md) | public [run](./../-component/run.md)()<br>causes the component to run |
| [setAssociatedFiles](./../-component/set-associated-files.md) | public [setAssociatedFiles](./../-component/set-associated-files.md)(val: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;)<br>sets the associated files of the component |
| [setBranchCondition](set-branch-condition.md) | public [setBranchCondition](set-branch-condition.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), condition: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>sets the branch condition |
| [setExclusive](set-exclusive.md) | public [setExclusive](set-exclusive.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets the if exclusive mode |
| [setMetadata](./../-component/set-metadata.md) | public [setMetadata](./../-component/set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](./../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](./../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on a component |
| [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setRunLastBranchByDefault](set-run-last-branch-by-default.md) | public [setRunLastBranchByDefault](set-run-last-branch-by-default.md)(flag: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>sets the run last branch by default flag |
| [setUserData](./../-component/set-user-data.md) | public [setUserData](./../-component/set-user-data.md)(val: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>Set user data of the Component |
| [show](./../-component/show.md) | public [show](./../-component/show.md)()<br>Show the GUI form associated with the component, if any. |
