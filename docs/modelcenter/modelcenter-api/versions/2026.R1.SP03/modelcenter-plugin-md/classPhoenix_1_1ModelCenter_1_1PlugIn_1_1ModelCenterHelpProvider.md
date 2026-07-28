<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider"></a>
# Class Phoenix::ModelCenter::PlugIn::ModelCenterHelpProvider

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterHelpProvider.cs` (line 11)

Implementation of IHelpProvider that uses a IModelCenter object to open help pages.



**Inherits from**:

* IHelpProvider

## Members

* [\_modelCenter](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider_1ab9c4e3070d463882d088f974cc4baa86)
* [InvokeHelp](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider_1a99daa2e6dcba388e82eaf8b1b100bf59)
* [ModelCenterHelpProvider](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider_1a93eba9b56b3dec61a7408fce8bef1eac)

## Private attributes

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider_1ab9c4e3070d463882d088f974cc4baa86"></a>
### Variable \_modelCenter

![][private]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/ModelCenterHelpProvider.cs` (line 16)


```csharp
IModelCenter Phoenix.ModelCenter.PlugIn.ModelCenterHelpProvider._modelCenter
```


[ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object used to open the help page.





**Type**: IModelCenter

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterHelpProvider._modelCenter"}]}`
-->

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider_1a93eba9b56b3dec61a7408fce8bef1eac"></a>
### Function ModelCenterHelpProvider

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.ModelCenterHelpProvider.ModelCenterHelpProvider(IModelCenter modelCenter)
```


Constructor.

**Parameters**:

* **modelCenter**: [ModelCenter](namespacePhoenix_1_1ModelCenter.md#namespacePhoenix_1_1ModelCenter) object used to open the help page.



**Parameters**:

* IModelCenter **modelCenter**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterHelpProvider.ModelCenterHelpProvider"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1ModelCenterHelpProvider_1a99daa2e6dcba388e82eaf8b1b100bf59"></a>
### Function InvokeHelp

![][public]


```csharp
void Phoenix.ModelCenter.PlugIn.ModelCenterHelpProvider.InvokeHelp(string key)
```








**Parameters**:

* string **key**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.ModelCenterHelpProvider.InvokeHelp"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)