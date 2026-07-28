<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils"></a>
# Class Phoenix::ModelCenter::PlugIn::ModelCenterVariableUtils

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterVariableUtils.cs` (line 17)

Variable utilities.



## Members

* [Find](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7a02b9a25293dd7dc4cc055e1de3296c)
* [GetGroups](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7baf10442594b87236d312a14cd03625)
* [GetVariables](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7deb8c0add1e288d4057570e274df766)
* [ReadFromDHVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1aa8138d976590694d99cbaa8e26c729b2)
* [ReadFromDHVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a426acc00c79de61099be067624cbf879)
* [ReadFromIVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a2383fa5f6e3a88479ab56f5a1d89e59d)
* [ReadFromIVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a5bfbbf71db510f67add0a436afc4e8b1)
* [ReadFromIVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a048b1dc7e5823dfa35a8885b2638f772)
* [ReadFromIVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1ae124c2b5efdbe7393a1dfa6f87482e68)
* [ReadFromModelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1afb54389535b0f272155a001282ab0dbc)
* [WriteToDHVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7ce2aec0252b1c9f3d49d635ca7d5574)
* [WriteToIVariable](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a5c43cc9225dc0674804f6c14d411951e)

## Public static functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a2383fa5f6e3a88479ab56f5a1d89e59d"></a>
### Function ReadFromIVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable(IVariable ivar, PHXVariable dest)
```


Read a variable from the specified MC variable. Uses the full ModelCenter.IVariable name for the PHXVariable name.

**Parameters**:

* **ivar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) variable COM object.
* **dest**: The variable data to write to.



**Parameters**:

* IVariable **ivar**
* PHXVariable **dest**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1aa8138d976590694d99cbaa8e26c729b2"></a>
### Function ReadFromDHVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromDHVariable(IDHVariable dhvar, PHXVariable dest)
```


Read a variable from the specified MC variable metadata. Uses the full DHVariable name for the PHXVariable name.

**Parameters**:

* **dhvar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) variable COM object.
* **dest**: The variable data to write to.



**Parameters**:

* IDHVariable **dhvar**
* PHXVariable **dest**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromDHVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a5bfbbf71db510f67add0a436afc4e8b1"></a>
### Function ReadFromIVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable(IVariable ivar, PHXVariable dest, bool compVar)
```


Read a variable from the specified MC variable. Uses the full ModelCenter.IVariable name for the PHXVariable name.

**Parameters**:

* **ivar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) variable COM object.
* **dest**: The variable data to write to.
* **compVar**: Flag which determines how the variable will be used. If true it is read as a variable to a component, if false as a variable to a model.



**Parameters**:

* IVariable **ivar**
* PHXVariable **dest**
* bool **compVar**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a426acc00c79de61099be067624cbf879"></a>
### Function ReadFromDHVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromDHVariable(IDHVariable dhvar, PHXVariable dest, bool compVar)
```


Read a variable from the specified MC variable metadata. Uses the full DHVariable name for the PHXVariable name.

**Parameters**:

* **dhvar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) variable COM object.
* **dest**: The variable data to write to.
* **compVar**: Flag which determines how the variable will be used. If true it is read as a variable to a component, if false as a variable to a model.



**Parameters**:

* IDHVariable **dhvar**
* PHXVariable **dest**
* bool **compVar**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromDHVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7ce2aec0252b1c9f3d49d635ca7d5574"></a>
### Function WriteToDHVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.WriteToDHVariable(PHXVariable source, IDHVariable dhVar)
```


Write PHXVariable info to an IDHVariable.

**Parameters**:

* **source**: The PHXVariable.
* **dhVar**: The IDHVariable.



**Parameters**:

* PHXVariable **source**
* IDHVariable **dhVar**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.WriteToDHVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a048b1dc7e5823dfa35a8885b2638f772"></a>
### Function ReadFromIVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable(string prefix, IVariable ivar, PHXVariable dest)
```


Read a variable from the specified MC variable.

**Parameters**:

* **prefix**: The path to the containing group.
* **ivar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) variable COM object.
* **dest**: The variable data to write to.



**Parameters**:

* string **prefix**
* IVariable **ivar**
* PHXVariable **dest**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1ae124c2b5efdbe7393a1dfa6f87482e68"></a>
### Function ReadFromIVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable(string prefix, IVariable ivar, PHXVariable dest, bool compVar)
```


Read a variable from the specified MC variable.

**Parameters**:

* **prefix**: The path to the containing group.
* **ivar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) variable COM object.
* **dest**: The variable data to write to.
* **compVar**: Flag which determines how the variable will be used. If true it is read as a variable to a component, if false as a variable to a model.



**Parameters**:

* string **prefix**
* IVariable **ivar**
* PHXVariable **dest**
* bool **compVar**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromIVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1afb54389535b0f272155a001282ab0dbc"></a>
### Function ReadFromModelCenter

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromModelCenter(string name, IModelCenter modelCenter, PHXVariable dest, bool compVar)
```


Read a variable from the specified MC variable. Uses the full ModelCenter.IVariable name for the PHXVariable name.

**Parameters**:

* **name**: The variable's full name.
* **modelCenter**: The instance of [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) from which to read the variable.
* **dest**: The variable data to write to.
* **compVar**: Flag which determines how the variable will be used. If true it is read as a variable to a component, if false as a variable to a model.



**Parameters**:

* string **name**
* IModelCenter **modelCenter**
* PHXVariable **dest**
* bool **compVar**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.ReadFromModelCenter"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a5c43cc9225dc0674804f6c14d411951e"></a>
### Function WriteToIVariable

![][public]
![][static]


```csharp
static void Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.WriteToIVariable(PHXVariable src, IVariable ivar)
```


Write a variable to the specified MC variable.

**Parameters**:

* **src**: The variable to write from.
* **ivar**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) COM object.



**Parameters**:

* PHXVariable **src**
* IVariable **ivar**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.WriteToIVariable"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7baf10442594b87236d312a14cd03625"></a>
### Function GetGroups

![][public]
![][static]


```csharp
static IGroups Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.GetGroups(object obj)
```


Gets the groups from the given [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object.

**Parameters**:

* **obj**: The object.


**Returns**:

The groups.


**Exceptions**:

* **InvalidOperationException**: If the given object is not a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object containing groups.



**Parameters**:

* object **obj**

**Return type**: IGroups

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.GetGroups"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7deb8c0add1e288d4057570e274df766"></a>
### Function GetVariables

![][public]
![][static]


```csharp
static IVariables Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.GetVariables(object obj)
```


Gets the variables from the given [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object.

**Parameters**:

* **obj**: The object.


**Returns**:

The variables.


**Exceptions**:

* **InvalidOperationException**: If the given object is not a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object containing groups.



**Parameters**:

* object **obj**

**Return type**: IVariables

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.GetVariables"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterVariableUtils_1a7a02b9a25293dd7dc4cc055e1de3296c"></a>
### Function Find

![][public]
![][static]


```csharp
static object Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.Find(object mcObject, string name)
```


Retrieve a variable or group, recursively.

**Parameters**:

* **mcObject**: The component or group to search.
* **name**: The relative name to search for.


**Returns**:

Either the IVariable of IGroup object by that name. Returns null if not found.



**Parameters**:

* object **mcObject**
* string **name**

**Return type**: object

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterVariableUtils.Find"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)