<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils"></a>
# Class Phoenix::ModelCenter::PlugIn::DropUtils

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/DropUtils.cs` (line 17)

Utility class for drag and drop actions on a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) GUI.



## Members

* [GetAllVariablesInternal](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1aa238f8dc0741c407b5efa688b3a2e10e)
* [GetObjectForPath](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a0059fcb2bd07742c4c3da278b32b8c32)
* [GetObjectForPathInternal](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1ab1c5766c6605f9155ee16e755768c535)
* [GetVariablesForDropText](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1ae9a15560b87a8e3943fda0826b57ee2a)
* [GetVariablesForDropText](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a79dd2bd9af3517d8a14df7a5eac5fc34)
* [GetVariablesForPath](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a170185b05082d92fedc3f12a6954b2e3)
* [GetVariablesForPaths](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a25dad520997efaaf398ad85b63006012)
* [HasVariableDropText](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a5d7aaee25d51a3347d0a4e5d400b3f97)

## Private static functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1ab1c5766c6605f9155ee16e755768c535"></a>
### Function GetObjectForPathInternal

![][private]
![][static]


```csharp
static object Phoenix.ModelCenter.PlugIn.DropUtils.GetObjectForPathInternal(string path, object searchIn)
```


When as item is dropped the drop text could be a full name of a variable, group, assembly, or component. This searches the model to determine what it is and returns it as an object of the correct type.

**Parameters**:

* **path**: Text passed to the dropped control.
* **searchIn**: [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object to begin searching in.


**Returns**:

An object of the correct type as found in the [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) model, or null if nothing was found.



**Parameters**:

* string **path**
* object **searchIn**

**Return type**: object

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetObjectForPathInternal"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1aa238f8dc0741c407b5efa688b3a2e10e"></a>
### Function GetAllVariablesInternal

![][private]
![][static]


```csharp
static List< PHXVariable > Phoenix.ModelCenter.PlugIn.DropUtils.GetAllVariablesInternal(object mcObject, string path)
```


Get all variables corresponding to the specified object or objects based on the specified path of drop text, which corresponds to a path in a [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) model.

**Parameters**:

* **mcObject**: [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object.
* **path**: Path into the model.


**Returns**:

List of the variables.



**Parameters**:

* object **mcObject**
* string **path**

**Return type**: List< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetAllVariablesInternal"}]}`
-->

## Public static functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a0059fcb2bd07742c4c3da278b32b8c32"></a>
### Function GetObjectForPath

![][public]
![][static]


```csharp
static object Phoenix.ModelCenter.PlugIn.DropUtils.GetObjectForPath(string path, IModelCenter modelCenter)
```


Given a single path of drop text returns the object in [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) that path represents.

**Parameters**:

* **path**: The dropped path to the object.
* **modelCenter**: [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) instance to search.


**Returns**:

[ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object being dropped.



**Parameters**:

* string **path**
* IModelCenter **modelCenter**

**Return type**: object

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetObjectForPath"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a170185b05082d92fedc3f12a6954b2e3"></a>
### Function GetVariablesForPath

![][public]
![][static]


```csharp
static IList< PHXVariable > Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForPath(string path, IModelCenter modelCenter)
```


Get all variables associated with a particular path

**Parameters**:

* **path**: The path to search for
* **modelCenter**: The [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) API to query


**Returns**:

The list of associated variables, which may be empty if no variables are found.



**Parameters**:

* string **path**
* IModelCenter **modelCenter**

**Return type**: IList< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForPath"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a25dad520997efaaf398ad85b63006012"></a>
### Function GetVariablesForPaths

![][public]
![][static]


```csharp
static IList< PHXVariable > Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForPaths(IEnumerable< string > paths, IVariableMetaDataProvider metaDataProvider, bool validate)
```


Get the variables associated with a set of paths.

**Parameters**:

* **paths**: The paths.
* **metaDataProvider**: The metadata provider.
* **validate**: Whether to validate variable names.


**Returns**:

The list of variables. There is no guarantee that there aren't any duplicates if the same item is specified twice.



**Parameters**:

* IEnumerable< string > **paths**
* IVariableMetaDataProvider **metaDataProvider**
* bool **validate**

**Return type**: IList< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForPaths"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1ae9a15560b87a8e3943fda0826b57ee2a"></a>
### Function GetVariablesForDropText

![][public]
![][static]


```csharp
static IList< PHXVariable > Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForDropText(string dropText, IVariableMetaDataProvider metaDataProvider, bool validate)
```


Parse text dropped into a control or form that represents a list of variables or [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) objects. Return all variables found.

**Parameters**:

* **dropText**: The drop text.
* **metaDataProvider**: The variable metadata provider.
* **validate**: Whether to validate names.


**Returns**:

The list of variables found.



**Parameters**:

* string **dropText**
* IVariableMetaDataProvider **metaDataProvider**
* bool **validate**

**Return type**: IList< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForDropText"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a5d7aaee25d51a3347d0a4e5d400b3f97"></a>
### Function HasVariableDropText

![][public]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.DropUtils.HasVariableDropText(DragEventArgs e)
```


Determine if the text being dragged is of a valid format.

**Parameters**:

* **e**: The event args.


**Returns**:

True if yes, false if no.



**Parameters**:

* DragEventArgs **e**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.HasVariableDropText"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DropUtils_1a79dd2bd9af3517d8a14df7a5eac5fc34"></a>
### Function GetVariablesForDropText

![][public]
![][static]


```csharp
static IList< PHXVariable > Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForDropText(DragEventArgs e, IVariableMetaDataProvider metaDataProvider, bool validate)
```


Parse text dropped into a control or form that represents a list of variables or [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) objects. Return all variables found.

**Parameters**:

* **e**: The drag-drop event args.
* **metaDataProvider**: The variable metadata provider.
* **validate**: Whether to validate names.


**Returns**:

The list of variables found.



**Parameters**:

* DragEventArgs **e**
* IVariableMetaDataProvider **metaDataProvider**
* bool **validate**

**Return type**: IList< PHXVariable >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.DropUtils.GetVariablesForDropText"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)