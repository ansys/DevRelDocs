# Namespace ZOSAPI::Analysis::Settings::NSCSurface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::Settings::NSCSurface::IAS\_NSCSurfaceSag](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1_1_i_a_s___n_s_c_surface_sag.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1_1_i_a_s___n_s_c_surface_sag)

## Enumeration types

### Enumeration type NSCSagShowAs

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362a"></a>

![][public]

**Definition**:


```csharp
enum NSCSagShowAs {
  Surface,
  Contour,
  GreyScale,
  InverseGreyScale,
  FalseColor,
  InverseFalseColor,
  X_CrossSection,
  Y_CrossSection
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aaaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Contour

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aa0b3303e86f36d6d2b1266da88cf76e66"></a>


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator InverseGreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aa533f7c0fd53c890ed9be2f3d92031055"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aa3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aa28f8d40e579b2808c44974521fcdd3a4"></a>


#### Enumerator X\_CrossSection

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aa474d32678e7db1908377cd44fec1b570"></a>


#### Enumerator Y\_CrossSection

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a5506190e454f1caa2f6d5f65d800362aa98d2f90a1c2e4206244d686a8396f998"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.NSCSurface.NSCSagShowAs"}]}`
-->

### Enumeration type NSCSagRemoveOptions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a3d63c39b5d3e813be91b8fae500a35ba"></a>

![][public]

**Definition**:


```csharp
enum NSCSagRemoveOptions {
  None = 0,
  BaseROC = 1,
  BestFitSphere = 2,
  AverageSag = 3,
  MinimumSag = 4
}
```


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a3d63c39b5d3e813be91b8fae500a35baa6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator BaseROC

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a3d63c39b5d3e813be91b8fae500a35baad16f361306fe64e6e0ab6fb97d31368c"></a>


#### Enumerator BestFitSphere

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a3d63c39b5d3e813be91b8fae500a35baa92fd625a9214fd60f2d1a92aa15f6bcc"></a>


#### Enumerator AverageSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a3d63c39b5d3e813be91b8fae500a35baaeffae2fa22fe06e36fbb9497b23e69f1"></a>


#### Enumerator MinimumSag

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1a3d63c39b5d3e813be91b8fae500a35baaacbaa3c82c5a4bbf73554771dcf171e3"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.NSCSurface.NSCSagRemoveOptions"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)