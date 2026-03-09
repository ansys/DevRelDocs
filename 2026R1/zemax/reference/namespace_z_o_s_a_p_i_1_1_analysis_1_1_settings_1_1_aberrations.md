# Namespace ZOSAPI::Analysis::Settings::Aberrations

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_FieldCurvatureAndDistortion](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___field_curvature_and_distortion.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___field_curvature_and_distortion)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_FocalShiftDiagram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___focal_shift_diagram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___focal_shift_diagram)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_FullFieldAberration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___full_field_aberration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___full_field_aberration)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_GridDistortion](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___grid_distortion.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___grid_distortion)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_LateralColor](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___lateral_color.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___lateral_color)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_LongitudinalAberration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___longitudinal_aberration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___longitudinal_aberration)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_RayTrace](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___ray_trace.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___ray_trace)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_SeidelCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_coefficients)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_SeidelDiagram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_diagram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___seidel_diagram)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_ZernikeAnnularCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_annular_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_annular_coefficients)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_ZernikeCoefficientsVsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_coefficients_vs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_coefficients_vs_field)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_ZernikeFringeCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_fringe_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_fringe_coefficients)
* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_ZernikeStandardCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_standard_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_standard_coefficients)

## Enumeration types

### Enumeration type Distortions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a9b81c8ebdc56ab158a9b244ed9398404"></a>

![][public]

**Definition**:


```csharp
enum Distortions {
  F_TanTheta,
  F_Theta,
  Cal_F_Theta,
  Cal_F_TanTheta,
  SMIA_TV
}
```


#### Enumerator F\_TanTheta

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a9b81c8ebdc56ab158a9b244ed9398404aabfdacd001ae6fa72ca4920148d597e1"></a>


#### Enumerator F\_Theta

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a9b81c8ebdc56ab158a9b244ed9398404a213b6831abf9f268b89233051cba6c6b"></a>


#### Enumerator Cal\_F\_Theta

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a9b81c8ebdc56ab158a9b244ed9398404aacad4f103785e92e42f9f27a81cf62dd"></a>


#### Enumerator Cal\_F\_TanTheta

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a9b81c8ebdc56ab158a9b244ed9398404a331147aa5e88bbca8b9375ee5ccbeef0"></a>


#### Enumerator SMIA\_TV

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a9b81c8ebdc56ab158a9b244ed9398404ab8763af0155899cdb19f3b87eff33f72"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.Distortions"}]}`
-->

### Enumeration type DisplayAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a03340bb686f8c0f78a9a8b78a7707baf"></a>

![][public]

**Definition**:


```csharp
enum DisplayAsTypes {
  Percent,
  Absolute
}
```


#### Enumerator Percent

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a03340bb686f8c0f78a9a8b78a7707bafaadaaee4b22041c27198d410c68d952c9"></a>


#### Enumerator Absolute

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a03340bb686f8c0f78a9a8b78a7707bafab51ca26c6c89cfc9bec338f7a0d3e0c8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.DisplayAsTypes"}]}`
-->

### Enumeration type FFA\_DisplayTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a1b0b644b8d69be3b08c3ea46614d3f1b"></a>

![][public]

**Definition**:


```csharp
enum FFA_DisplayTypes {
  Absolute = 0,
  Relative = 1,
  Average = 2
}
```


#### Enumerator Absolute

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a1b0b644b8d69be3b08c3ea46614d3f1bab51ca26c6c89cfc9bec338f7a0d3e0c8"></a>


#### Enumerator Relative

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a1b0b644b8d69be3b08c3ea46614d3f1ba2ca9469819fb0fb61ff98e914a7ccca0"></a>


#### Enumerator Average

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a1b0b644b8d69be3b08c3ea46614d3f1bab1897515d548a960afe49ecf66a29021"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.FFA_DisplayTypes"}]}`
-->

### Enumeration type FFA\_ShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c157edcde674e5576302f9a82b16047"></a>

![][public]

**Definition**:


```csharp
enum FFA_ShowAsTypes {
  GreyScale = 0,
  GreyScaleInverted = 1,
  FalseColor = 2,
  FalseColorInverted = 3,
  Icons = 4
}
```


#### Enumerator GreyScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c157edcde674e5576302f9a82b16047ac056039d8df8a5a3744c509dc9bedb7c"></a>


#### Enumerator GreyScaleInverted

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c157edcde674e5576302f9a82b16047a0d502ee8a5114d70031f21dbb921eada"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c157edcde674e5576302f9a82b16047a3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator FalseColorInverted

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c157edcde674e5576302f9a82b16047a801d6982250c3d3b4b0c954c74d723d6"></a>


#### Enumerator Icons

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c157edcde674e5576302f9a82b16047a8f67973007158337346584551b093be8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.FFA_ShowAsTypes"}]}`
-->

### Enumeration type FFA\_AberrationTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a572e9f4d0dc05e437ae87de0307a574a"></a>

![][public]

**Definition**:


```csharp
enum FFA_AberrationTypes {
  Defocus = 0,
  PrimaryAstigmatism = 1,
  PrimaryComa = 2,
  SpecifiedTerm = 3
}
```


#### Enumerator Defocus

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a572e9f4d0dc05e437ae87de0307a574aa0ab20b5ad4d15b445ed94fa4eebb18d8"></a>


#### Enumerator PrimaryAstigmatism

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a572e9f4d0dc05e437ae87de0307a574aa189edc28d1145f5f6c18fb6afaeb9885"></a>


#### Enumerator PrimaryComa

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a572e9f4d0dc05e437ae87de0307a574aa7146c209d8fae3ebf7ad52faa99c2308"></a>


#### Enumerator SpecifiedTerm

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a572e9f4d0dc05e437ae87de0307a574aac6627a6ba5ae8aa6af5c75ecf1146f88"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.FFA_AberrationTypes"}]}`
-->

### Enumeration type FFA\_FieldShapes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c41d747c27d91238e349b152008ff4f"></a>

![][public]

**Definition**:


```csharp
enum FFA_FieldShapes {
  Rectangular = 0,
  Elliptical = 1
}
```


#### Enumerator Rectangular

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c41d747c27d91238e349b152008ff4fa7545c5d3ad246a683a197a2903a4d5e6"></a>


#### Enumerator Elliptical

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a0c41d747c27d91238e349b152008ff4facfbec59eb62422713d3f23f412fa1e09"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.FFA_FieldShapes"}]}`
-->

### Enumeration type FFA\_DecompositionTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1aaeb4b92ee0342da0e930fee96805406e"></a>

![][public]

**Definition**:


```csharp
enum FFA_DecompositionTypes {
  ZernikeTerms = 0
}
```


#### Enumerator ZernikeTerms

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1aaeb4b92ee0342da0e930fee96805406ea0de2e5fc3374d599af2f0bf15e92d91f"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.FFA_DecompositionTypes"}]}`
-->

### Enumeration type RayTraceType

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a4774ad54d666629cb3da4952dd9961a1"></a>

![][public]

**Definition**:


```csharp
enum RayTraceType {
  DirectionCosines = 0,
  TangentAngle = 1,
  YmUmYcUc = 2
}
```


#### Enumerator DirectionCosines

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a4774ad54d666629cb3da4952dd9961a1a934bcc53ba22cb25e6cd4b357b37cda5"></a>


#### Enumerator TangentAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a4774ad54d666629cb3da4952dd9961a1a00ad2efd56b026ab1f726efc2cd80eb8"></a>


#### Enumerator YmUmYcUc

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a4774ad54d666629cb3da4952dd9961a1acb837830baf9ae43149af866f54ca664"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.RayTraceType"}]}`
-->

### Enumeration type FieldScanDirections

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1ad2767e5a86d706920ddf35e69dead284"></a>

![][public]

**Definition**:


```csharp
enum FieldScanDirections {
  Plus_Y = 0,
  Plus_X = 1,
  Minus_Y = 2,
  Minus_X = 3
}
```


#### Enumerator Plus\_Y

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1ad2767e5a86d706920ddf35e69dead284a1eab11b7a1ada8f1dac89046e796b587"></a>


#### Enumerator Plus\_X

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1ad2767e5a86d706920ddf35e69dead284ad435e9dc7d8efa70f554777467a849c6"></a>


#### Enumerator Minus\_Y

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1ad2767e5a86d706920ddf35e69dead284ae8675dc13adb958ec6e6b9cc59d0141c"></a>


#### Enumerator Minus\_X

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1ad2767e5a86d706920ddf35e69dead284a1b48579d82fe194199b2495a33956cd6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.FieldScanDirections"}]}`
-->

### Enumeration type ZernikeCoefficientTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a6fa59382e12bf020d713b1c025c64764"></a>

![][public]

**Definition**:


```csharp
enum ZernikeCoefficientTypes {
  Fringe = 0,
  Standard = 1,
  Annular = 2
}
```


#### Enumerator Fringe

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a6fa59382e12bf020d713b1c025c64764a1d9139d011c1705153c1c64273011399"></a>


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a6fa59382e12bf020d713b1c025c64764aeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator Annular

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1a6fa59382e12bf020d713b1c025c64764a1d20d825e26c12f98ce37585afd10ee8"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Aberrations.ZernikeCoefficientTypes"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)