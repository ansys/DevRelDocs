<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer"></a>
# Class Phoenix::ModelCenter::PlugIn::TradeStudySerializer

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 36)

Serializer for a trade study.



**Inherits from**:

* [Phoenix.ModelCenter.PlugIn.IStringSerializer](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer)

## Members

* [\_plugin](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a0dcc6293269415b1d67bf7a0fda6e5db)
* [fromString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1aaca9e42d5e3985610ad7e72f084c3a76)
* [toString](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a1a7ffcad8737122e8c6e474b9ca813b8)
* [TradeStudySerializer](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a78faeca556c8acc54037a7ef6015dd1b)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a0dcc6293269415b1d67bf7a0fda6e5db"></a>
### Variable \_plugin

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterFavoritesProvider.cs` (line 38)


```csharp
ITradeStudyPlugIn Phoenix.ModelCenter.PlugIn.TradeStudySerializer._plugin
```








**Type**: ITradeStudyPlugIn

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudySerializer._plugin"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a78faeca556c8acc54037a7ef6015dd1b"></a>
### Function TradeStudySerializer

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.TradeStudySerializer.TradeStudySerializer(ITradeStudyPlugIn plugin)
```


Constructor.

**Parameters**:

* **plugin**: The plug-in to serialize.



**Parameters**:

* ITradeStudyPlugIn **plugin**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudySerializer.TradeStudySerializer"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1a1a7ffcad8737122e8c6e474b9ca813b8"></a>
### Function toString

![][public]


```csharp
string Phoenix.ModelCenter.PlugIn.TradeStudySerializer.toString()
```


Calls through to the wrapped plug-ins toString

**Returns**:

favorites string



**Return type**: string

**Reimplements**: [toString](interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer.md#interfacePhoenix_1_1ModelCenter_1_1PlugIn_1_1IStringSerializer_1a46e9ec850240d3f4d1f4f8afd20eae16)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudySerializer.toString"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudySerializer_1aaca9e42d5e3985610ad7e72f084c3a76"></a>
### Function fromString

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.TradeStudySerializer.fromString(string value)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.TradeStudySerializer.fromString"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)