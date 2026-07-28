<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute"></a>
# Class Phoenix::ModelCenter::PlugIn::PlugInAttribute

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/PlugInAttributes.cs` (line 13)

abstract class for other plug-in attributes



**Inherits from**:

* Attribute

**Inherited by**:

* [Phoenix.ModelCenter.PlugIn.ComponentPlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentPlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ComponentPlugInAttribute)
* [Phoenix.ModelCenter.PlugIn.DataCollectorPlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorPlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1DataCollectorPlugInAttribute)
* [Phoenix.ModelCenter.PlugIn.TradeStudyPlugInAttribute](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyPlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1TradeStudyPlugInAttribute)

## Members

* [\_displayName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute_1a03ea9fd3d8387588b21ea49fd0d6aa84)
* [DisplayName](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute_1a6203f7b60fac423b8e644568e0e327d4)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute_1a03ea9fd3d8387588b21ea49fd0d6aa84"></a>
### Variable \_displayName

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/PlugInAttributes.cs` (line 16)


```csharp
string Phoenix.ModelCenter.PlugIn.PlugInAttribute._displayName = ""
```








**Type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.PlugInAttribute._displayName"}]}`
-->

## Properties

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1PlugInAttribute_1a6203f7b60fac423b8e644568e0e327d4"></a>
### Property DisplayName

![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/PlugInAttributes.cs` (line 25)


```csharp
string Phoenix.ModelCenter.PlugIn.PlugInAttribute.DisplayName
```


The display name of the plug-in.

DO NOT CHANGE THE NAME of these properties casually. [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) relies on these names when loading plugins through reflection. <br/>



**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.PlugInAttribute.DisplayName"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)