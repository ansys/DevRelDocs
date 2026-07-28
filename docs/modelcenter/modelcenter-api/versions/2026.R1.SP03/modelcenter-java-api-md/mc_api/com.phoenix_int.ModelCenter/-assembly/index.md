# Assembly


public class [Assembly](index.md) : [PHXCOMObject](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md), [IVariableHolder](./../-i-variable-holder/index.md)

This is the wrapper class that handles the native COM calls to a Component object. The class is used by Java plug-ins to ModelCenter.

#### Author

Woyak, 9-01

## Properties

| Name | Summary |
|---|---|
| [ASSEMBLY](-a-s-s-e-m-b-l-y.md) | val [ASSEMBLY](-a-s-s-e-m-b-l-y.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Assembly&quot;<br>Generic (data-driven) assembly type. |
| [FOR_EACH](-f-o-r_-e-a-c-h.md) | val [~~FOR_EACH~~](-f-o-r_-e-a-c-h.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;ForEach&quot;<br>For-each assembly type. |
| [IF](-i-f.md) | val [IF](-i-f.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;If&quot;<br>IF-block assembly type. |
| [LOOP](-l-o-o-p.md) | val [LOOP](-l-o-o-p.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Loop&quot;<br>Loop assembly type. |
| [PARALLEL](-p-a-r-a-l-l-e-l.md) | val [PARALLEL](-p-a-r-a-l-l-e-l.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Parallel&quot;<br>Parallel assembly type. |
| [SEQUENCE](-s-e-q-u-e-n-c-e.md) | val [SEQUENCE](-s-e-q-u-e-n-c-e.md): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) = &quot;Sequence&quot;<br>Generic (process-driven) assembly type. |

## Functions

| Name | Summary |
|---|---|
| [addAssembly](add-assembly.md) | public [addAssembly](add-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)<br>adds a sub-assembly<br>public [addAssembly](add-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), assemblyType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)<br>adds a sub-assembly of the specified type |
| [addAssembly2](add-assembly2.md) | public [addAssembly2](add-assembly2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), xPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), yPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Assembly](index.md)<br>adds a sub-assembly<br>public [addAssembly2](add-assembly2.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), xPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), yPos: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), assemblyType: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)<br>adds a sub-assembly of the specified type |
| [addVariable](add-variable.md) | public [addVariable](add-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](./../-variable/index.md)<br>adds a variable to the assembly |
| [convertToSubmodel](convert-to-submodel.md) | public [convertToSubmodel](convert-to-submodel.md)(fileName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), versionStatus: [ModelCenter.VersionStatus](./../-model-center/-version-status/index.md), checkinMessage: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>For internal use only |
| [deleteVariable](delete-variable.md) | public [deleteVariable](delete-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>deletes a variable from the assembly |
| [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getAssembly](get-assembly.md) | public [getAssembly](get-assembly.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Assembly](index.md)<br>public [getAssembly](get-assembly.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Assembly](index.md)<br>gets the specified assembly |
| [getAssemblyType](get-assembly-type.md) | public [getAssemblyType](get-assembly-type.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>Gets the type of assembly. |
| [getComponent](get-component.md) | public [getComponent](get-component.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Component](./../-component/index.md)<br>public [getComponent](get-component.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Component](./../-component/index.md)<br>gets the specified component |
| [getFullName](get-full-name.md) | public [getFullName](get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the full name of the current object, e.g. |
| [getGroup](get-group.md) | public [getGroup](get-group.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Group](./../-group/index.md)<br>public [getGroup](get-group.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Group](./../-group/index.md)<br>gets the specified group |
| [getIconID](get-icon-i-d.md) | public [getIconID](get-icon-i-d.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the icon ID for the icon displayed for this Assembly. |
| [getIndexInParent](get-index-in-parent.md) | public [getIndexInParent](get-index-in-parent.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the index of the assembly in its parent assembly. |
| [getMetadata](get-metadata.md) | public [getMetadata](get-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variant](./../-variant/index.md)<br>Get a metadata value. |
| [getName](get-name.md) | public [getName](get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the current object, e.g. |
| [getNumAssemblies](get-num-assemblies.md) | public [getNumAssemblies](get-num-assemblies.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of assemblies stored in this object |
| [getNumComponents](get-num-components.md) | public [getNumComponents](get-num-components.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of components stored in this object |
| [getNumGroups](get-num-groups.md) | public [getNumGroups](get-num-groups.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of groups stored in this object |
| [getNumVariables](get-num-variables.md) | public [getNumVariables](get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of variables stored in this object |
| [getParentAssembly](get-parent-assembly.md) | public [getParentAssembly](get-parent-assembly.md)(): [Assembly](index.md)<br>gets the parent assembly of this component (fails if this is the model/root assembly) |
| [getPositionX](get-position-x.md) | public [getPositionX](get-position-x.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the X co-ordinate value of the current object, |
| [getPositionY](get-position-y.md) | public [getPositionY](get-position-y.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>gets the Y co-ordinate value of the current object, |
| [getUserData](get-user-data.md) | public [getUserData](get-user-data.md)(): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Get user data of the component. |
| [getVariable](get-variable.md) | public [getVariable](get-variable.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](./../-variable/index.md)<br>public [getVariable](get-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](./../-variable/index.md)<br>gets the specified variable |
| [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [rename](rename.md) | public [rename](rename.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Rename the assembly |
| [setIconID](set-icon-i-d.md) | public [setIconID](set-icon-i-d.md)(iconID: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>Specifies the icon for use with this Assembly. |
| [setMetadata](set-metadata.md) | public [setMetadata](set-metadata.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), type: [Variable.MetadataType](./../-variable/-metadata-type/index.md), value: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html), access: [Variable.MetadataAccess](./../-variable/-metadata-access/index.md), archive: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Set a metadata value on an assembly. |
| [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](./../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
| [setUserData](set-user-data.md) | public [setUserData](set-user-data.md)(val: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html))<br>Set user data of the Component |
