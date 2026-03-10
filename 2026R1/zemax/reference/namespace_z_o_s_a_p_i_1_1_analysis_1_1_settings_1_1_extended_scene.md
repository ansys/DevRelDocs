# Namespace ZOSAPI::Analysis::Settings::ExtendedScene

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::Settings::ExtendedScene::IAS\_GeometricImageAnalysis](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___geometric_image_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___geometric_image_analysis)
* [ZOSAPI::Analysis::Settings::ExtendedScene::IAS\_ImageSimulation](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___image_simulation.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___image_simulation)
* [ZOSAPI::Analysis::Settings::ExtendedScene::IAS\_RelativeIllumination](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___relative_illumination.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___relative_illumination)

## Enumeration types

### Enumeration type ISFlipTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a1dde7b13ac9511a7efc4bf4a1ed29197"></a>

![][public]

**Definition**:


```csharp
enum ISFlipTypes {
  None = 0,
  TopBottom,
  LeftRight,
  TopBottomLeftRight
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a1dde7b13ac9511a7efc4bf4a1ed29197a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator TopBottom

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a1dde7b13ac9511a7efc4bf4a1ed29197ae877fb9a176ab7b69019a542d4844262"></a>


#### Enumerator LeftRight

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a1dde7b13ac9511a7efc4bf4a1ed29197a955322c98b1fc571e8b6b688ae7d9ee4"></a>


#### Enumerator TopBottomLeftRight

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a1dde7b13ac9511a7efc4bf4a1ed29197abbc600a1a2474c2c770046e3285ace7d"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.ExtendedScene.ISFlipTypes"}]}`
-->

### Enumeration type ISSamplings

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310"></a>

![][public]

**Definition**:


```csharp
enum ISSamplings {
  None = 0,
  X2,
  X4,
  X8,
  X16,
  X32,
  X64
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310a6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator X2

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310a54105bddbfe3f639d49cbe8f5182c958"></a>


#### Enumerator X4

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310a7d71ed2af4cc5c6a8380324d9bc4a45f"></a>


#### Enumerator X8

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310ab8295fda5d2245c683e47e1137656c78"></a>


#### Enumerator X16

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310a8566d518618cc93194d9e7688e2dafa2"></a>


#### Enumerator X32

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310aaebf1ebe049feaa907e785eeb955ae32"></a>


#### Enumerator X64

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ad22ad8133ea0871432fef44a803d3310af0851da0e02bf22830828822f578dc8f"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.ExtendedScene.ISSamplings"}]}`
-->

### Enumeration type ISAberrationTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ade0e37e3ec130e90ebed3d048e34413b"></a>

![][public]

**Definition**:


```csharp
enum ISAberrationTypes {
  None = 0,
  Geometric,
  Diffraction
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ade0e37e3ec130e90ebed3d048e34413ba6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Geometric

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ade0e37e3ec130e90ebed3d048e34413baadf9f772a73f364e4ce6c52b9fae740d"></a>


#### Enumerator Diffraction

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1ade0e37e3ec130e90ebed3d048e34413bad14764aaa29aa8fec887bbc6997aecfc"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.ExtendedScene.ISAberrationTypes"}]}`
-->

### Enumeration type ISShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a92692519312a5db8a8a3ebb9832b71c1"></a>

![][public]

**Definition**:


```csharp
enum ISShowAsTypes {
  SimulatedImage = 0,
  SourceBitmap,
  PSFGrid
}
```


#### Enumerator SimulatedImage

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a92692519312a5db8a8a3ebb9832b71c1a4286d178dca01cecb0351f912fb11b7f"></a>


#### Enumerator SourceBitmap

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a92692519312a5db8a8a3ebb9832b71c1a007dc37ded5aa9c940a3abaed69292bb"></a>


#### Enumerator PSFGrid

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1a92692519312a5db8a8a3ebb9832b71c1a132f0961946dd522d33bd8baffda3221"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.ExtendedScene.ISShowAsTypes"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)