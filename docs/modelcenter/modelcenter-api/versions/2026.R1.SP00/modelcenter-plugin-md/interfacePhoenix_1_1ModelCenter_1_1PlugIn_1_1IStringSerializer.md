<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer"></a>
# Interface Phoenix::ModelCenter::PlugIn::IStringSerializer

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 19)

Object that can be serialized to/from a string.



**Inherited by**:

* [Phoenix.ModelCenter.PlugIn.ComponentSerializer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer)
* [Phoenix.ModelCenter.PlugIn.TradeStudySerializer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer)

## Members

* [fromString](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1ae20d064bd88914e41c8555cd162c926d)
* [toString](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1a46e9ec850240d3f4d1f4f8afd20eae16)

## Public functions

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1a46e9ec850240d3f4d1f4f8afd20eae16"></a>
### Function toString

![][public]


```csharp
string Phoenix.ModelCenter.PlugIn.IStringSerializer.toString()
```


Get the serialized representation of the object.

**Returns**:

The string format of this object



**Return type**: string

**Reimplemented by**:

* [toString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a1a7ffcad8737122e8c6e474b9ca813b8)
* [toString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a88409611fa8dfe528263c85c356e3d75)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IStringSerializer.toString"}]}`
-->

<a id="interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1ae20d064bd88914e41c8555cd162c926d"></a>
### Function fromString

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.IStringSerializer.fromString(string value)
```


Deserialize the object from a string.

**Parameters**:

* **value**: The string value to be read in



**Parameters**:

* string **value**

**Return type**: void

**Reimplemented by**:

* [fromString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1aaca9e42d5e3985610ad7e72f084c3a76)
* [fromString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentSerializer_1a2f8033379cc240893244ce96805a1417)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.IStringSerializer.fromString"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)