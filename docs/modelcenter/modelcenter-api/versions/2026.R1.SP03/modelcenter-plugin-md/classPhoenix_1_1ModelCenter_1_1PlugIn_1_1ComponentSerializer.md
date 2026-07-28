<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer"></a>
# Class Phoenix::ModelCenter::PlugIn::ComponentSerializer

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 71)

Serializer for a component.



**Inherits from**:

* [Phoenix.ModelCenter.PlugIn.IStringSerializer](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer)

## Members

* [\_plugin](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a11e3f538720da3cfc9e2127b0769bdd7)
* [ComponentSerializer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1abf7dacd7fb426690c7a4367ab43e54fe)
* [fromString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a2f8033379cc240893244ce96805a1417)
* [toString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a88409611fa8dfe528263c85c356e3d75)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a11e3f538720da3cfc9e2127b0769bdd7"></a>
### Variable \_plugin

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 73)


```csharp
IComponentPlugIn Phoenix.ModelCenter.PlugIn.ComponentSerializer._plugin
```








**Type**: IComponentPlugIn

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ComponentSerializer._plugin"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1abf7dacd7fb426690c7a4367ab43e54fe"></a>
### Function ComponentSerializer

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ComponentSerializer.ComponentSerializer(IComponentPlugIn plugin)
```


Constructor.

**Parameters**:

* **plugin**: The plug-in to serialize.



**Parameters**:

* IComponentPlugIn **plugin**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ComponentSerializer.ComponentSerializer"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a88409611fa8dfe528263c85c356e3d75"></a>
### Function toString

![][public]


```csharp
string Phoenix.ModelCenter.PlugIn.ComponentSerializer.toString()
```


Calls through to the wrapped plug-ins toString

**Returns**:

favorites string



**Return type**: string

**Reimplements**: [toString](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1a46e9ec850240d3f4d1f4f8afd20eae16)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ComponentSerializer.toString"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a2f8033379cc240893244ce96805a1417"></a>
### Function fromString

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ComponentSerializer.fromString(string value)
```


Calls through to the wrapped plug-in's fromString

**Parameters**:

* **value**: The string to read from



**Parameters**:

* string **value**

**Return type**: void

**Reimplements**: [fromString](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1ae20d064bd88914e41c8555cd162c926d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ComponentSerializer.fromString"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)