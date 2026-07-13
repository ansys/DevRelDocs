# Namespace ZOSAPI::Tools::Layouts

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Tools::Layouts::I3DViewerExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i3_d_viewer_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i3_d_viewer_export)
* [ZOSAPI::Tools::Layouts::ICrossSectionExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_cross_section_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_cross_section_export)
* [ZOSAPI::Tools::Layouts::IImageExportData](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_export_data)
* [ZOSAPI::Tools::Layouts::IImagePixel](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_image_pixel)
* [ZOSAPI::Tools::Layouts::INSC3DLayoutExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c3_d_layout_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c3_d_layout_export)
* [ZOSAPI::Tools::Layouts::INSCShadedModelExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c_shaded_model_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c_shaded_model_export)
* [ZOSAPI::Tools::Layouts::IShadedModelExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_shaded_model_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_shaded_model_export)

## Enumeration types

### Enumeration type CameraViewpointOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1adc83e57d8c8494c925bcad2b3fb0c730"></a>

![][public]

**Definition**:


```csharp
enum CameraViewpointOptions {
  Isometric = 0,
  XY,
  YZ,
  XZ
}
```


#### Enumerator Isometric

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1adc83e57d8c8494c925bcad2b3fb0c730a93fe1f7c5ca2e09af063aca96d0625cc"></a>


#### Enumerator XY

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1adc83e57d8c8494c925bcad2b3fb0c730a74c53bcd3dcb2bb79993b2fec37d362a"></a>


#### Enumerator YZ

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1adc83e57d8c8494c925bcad2b3fb0c730affa4ba973372c3650fd0881abeca6512"></a>


#### Enumerator XZ

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1adc83e57d8c8494c925bcad2b3fb0c730a27db3b98d01e664c17a6620b222c6469"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.CameraViewpointOptions"}]}`
-->

### Enumeration type RealPupilOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a94e4acd7945eceb7d03bff6a0236b6bd"></a>

![][public]

**Definition**:


```csharp
enum RealPupilOptions {
  Pupils_Off = 0,
  Pupils_4 = 4,
  Pupils_8 = 8,
  Pupils_16 = 16,
  Pupils_32 = 32
}
```


#### Enumerator Pupils_Off

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a94e4acd7945eceb7d03bff6a0236b6bdac1c6505a1505f17cd7491b1fb178da14"></a>


#### Enumerator Pupils_4

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a94e4acd7945eceb7d03bff6a0236b6bda42f06cf2197c999cda5719445c3f56dc"></a>


#### Enumerator Pupils_8

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a94e4acd7945eceb7d03bff6a0236b6bda351d6110eb2aca5c18f463492633384e"></a>


#### Enumerator Pupils_16

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a94e4acd7945eceb7d03bff6a0236b6bdaa79737ec4829dd3a8e2b40eeba845ba0"></a>


#### Enumerator Pupils_32

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a94e4acd7945eceb7d03bff6a0236b6bdaeccf537c27b2702e710fa1e1e269bd12"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.RealPupilOptions"}]}`
-->

### Enumeration type ColorRaysByCrossSectionOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8aef29893b58747fc75c83db197b9c38"></a>

![][public]

**Definition**:


```csharp
enum ColorRaysByCrossSectionOptions {
  Fields = 0,
  Waves,
  Wavelength
}
```


#### Enumerator Fields

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8aef29893b58747fc75c83db197b9c38aa4ca5edd20d0b5d502ebece575681f58"></a>


#### Enumerator Waves

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8aef29893b58747fc75c83db197b9c38aa4b44939aabfe8df39b1ecf05fa95c0a"></a>


#### Enumerator Wavelength

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8aef29893b58747fc75c83db197b9c38ab25b2722ad826f67423cdb48bdbc837e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.ColorRaysByCrossSectionOptions"}]}`
-->

### Enumeration type LineThicknessOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a581fd9977fb234a027503ed495663dc7"></a>

![][public]

**Definition**:


```csharp
enum LineThicknessOptions {
  Thinnest = -2,
  Thin = -1,
  Standard = 0,
  Thick = 1,
  Thickest = 2
}
```


#### Enumerator Thinnest

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a581fd9977fb234a027503ed495663dc7ad4588b75ba1227aee3ef8bf5d8ceacf4"></a>


#### Enumerator Thin

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a581fd9977fb234a027503ed495663dc7aaedfcbf06fc92bafadf4527a2fcccc69"></a>


#### Enumerator Standard

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a581fd9977fb234a027503ed495663dc7aeb6d8ae6f20283755b339c0dc273988b"></a>


#### Enumerator Thick

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a581fd9977fb234a027503ed495663dc7a0a908b7941c6bfd50ba866821e83cd2b"></a>


#### Enumerator Thickest

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a581fd9977fb234a027503ed495663dc7a31e80cf72f1ba434dedff659c4719af4"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.LineThicknessOptions"}]}`
-->

### Enumeration type RayTraceOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aca4f6813df8041426c1fd981e62ca602"></a>

![][public]

**Definition**:


```csharp
enum RayTraceOptions {
  UseRays = 0,
  LightningTraceTrueColor,
  LightningTraceAvgWavelength
}
```


#### Enumerator UseRays

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aca4f6813df8041426c1fd981e62ca602a31b45a0e88a80ebe8d86aaed66b7932e"></a>


#### Enumerator LightningTraceTrueColor

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aca4f6813df8041426c1fd981e62ca602a277407f85a9c5e13344681feaacc89e4"></a>


#### Enumerator LightningTraceAvgWavelength

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aca4f6813df8041426c1fd981e62ca602ad952e2a2ef3336f289cf03bef88d7943"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.RayTraceOptions"}]}`
-->

### Enumeration type ColorRaysByNSCOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a4b18950951def2f66a17acaf2b413030"></a>

![][public]

**Definition**:


```csharp
enum ColorRaysByNSCOptions {
  SourceNumber,
  WaveNumber,
  ConfigNumber,
  Wavelength,
  SegmentNumber
}
```


#### Enumerator SourceNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a4b18950951def2f66a17acaf2b413030a3c4cbd4d58ab1f77418c102c46e0b519"></a>


#### Enumerator WaveNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a4b18950951def2f66a17acaf2b413030a8ec75fa1331d94f6174acd25192754ce"></a>


#### Enumerator ConfigNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a4b18950951def2f66a17acaf2b413030a954413c41cbcb70489641fa8bf817d96"></a>


#### Enumerator Wavelength

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a4b18950951def2f66a17acaf2b413030ab25b2722ad826f67423cdb48bdbc837e"></a>


#### Enumerator SegmentNumber

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a4b18950951def2f66a17acaf2b413030a4d60256dc35fcd589539013895063891"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.ColorRaysByNSCOptions"}]}`
-->

### Enumeration type DetectorPixelColorOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab1ddf5af9c4b5f10cfb174655bce1794"></a>

![][public]

**Definition**:


```csharp
enum DetectorPixelColorOptions {
  DoNotColorIndividualPoints,
  ByRaysOnLayout,
  ByLastAnalysis
}
```


#### Enumerator DoNotColorIndividualPoints

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab1ddf5af9c4b5f10cfb174655bce1794af8b3ad516b00d428532422e2ba6bdaba"></a>


#### Enumerator ByRaysOnLayout

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab1ddf5af9c4b5f10cfb174655bce1794afbdf6451e083cd76605ea240418b536b"></a>


#### Enumerator ByLastAnalysis

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab1ddf5af9c4b5f10cfb174655bce1794a57e52841b6404dd8fde05356b06b19ba"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.DetectorPixelColorOptions"}]}`
-->

### Enumeration type DetectorDisplayModeOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6"></a>

![][public]

**Definition**:


```csharp
enum DetectorDisplayModeOptions {
  Consider,
  GreyScaleFlux,
  InverseGreyScaleFlux,
  FalseColorFlux,
  InverseFalseColorFlux,
  GreyScaleIrradiance,
  InverseGreyScaleIrradiance,
  FalseColorIrradiance,
  InverseFalseColorIrradiance
}
```


#### Enumerator Consider

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6a9bfb93aa9c186a1ee365e92efd7ccb7b"></a>


#### Enumerator GreyScaleFlux

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6a3104eb037cdde45f80bb43475bceb5b9"></a>


#### Enumerator InverseGreyScaleFlux

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6ad861f23c433df1231aee5f58bd371555"></a>


#### Enumerator FalseColorFlux

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6a6295fec176d4d6d68c68a039f3516d4b"></a>


#### Enumerator InverseFalseColorFlux

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6a31ab8273a31a10e964e33268bb8f2fbf"></a>


#### Enumerator GreyScaleIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6abdc622a3d4c550aafd4f74e10991cb0a"></a>


#### Enumerator InverseGreyScaleIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6af2a5760732574853451db2beddcc353b"></a>


#### Enumerator FalseColorIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6a116634ae841929e46bf4b882ab793e17"></a>


#### Enumerator InverseFalseColorIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a8d85fe3ceb208925a40f048ad3f38eb6afe34a54494d2454e2f623b33992e5954"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.DetectorDisplayModeOptions"}]}`
-->

### Enumeration type OpacityOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a1bddeeb274249ae7d1da6486169be5fd"></a>

![][public]

**Definition**:


```csharp
enum OpacityOptions {
  Ignore = 0,
  Consider,
  All50Percent
}
```


#### Enumerator Ignore

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a1bddeeb274249ae7d1da6486169be5fdafd038fc7f319e48f3115d92bf5bdbef9"></a>


#### Enumerator Consider

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a1bddeeb274249ae7d1da6486169be5fda9bfb93aa9c186a1ee365e92efd7ccb7b"></a>


#### Enumerator All50Percent

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a1bddeeb274249ae7d1da6486169be5fda21d1cf23bdad73d1429096f66bac2226"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.OpacityOptions"}]}`
-->

### Enumeration type BackgroundOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1e"></a>

![][public]

**Definition**:


```csharp
enum BackgroundOptions {
  White = 0,
  Black,
  Red,
  Green,
  Blue,
  DarkGreen,
  DarkBlue,
  Color01,
  Color02,
  Color03,
  Color04,
  Color05,
  Color06,
  Color07,
  Color08,
  Color09,
  Color10,
  Color11,
  Color12,
  Color13,
  Color14,
  Color15,
  Color16,
  Color17,
  Color18,
  Color19,
  Color20,
  Color21,
  Color22,
  Color23,
  Color24,
  Gradient01,
  Gradient02,
  Gradient03,
  Gradient04,
  Gradient05,
  Gradient06,
  Gradient07,
  Gradient08,
  Gradient09,
  Gradient10,
  GradientUser
}
```


#### Enumerator White

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea25a81701fbfa4a1efdf660a950c1d006"></a>


#### Enumerator Black

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eae90dfb84e30edf611e326eeb04d680de"></a>


#### Enumerator Red

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eaee38e4d5dd68c4e440825018d549cb47"></a>


#### Enumerator Green

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ead382816a3cbeed082c9e216e7392eed1"></a>


#### Enumerator Blue

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea9594eec95be70e7b1710f730fdda33d9"></a>


#### Enumerator DarkGreen

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eaf780aab6295a2f368ac69a514f8b4605"></a>


#### Enumerator DarkBlue

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea877716336e4eb22ac67faaa9c2b86635"></a>


#### Enumerator Color01

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea23a377af5bc28d2e79b9559fdab2ebc6"></a>


#### Enumerator Color02

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea9de0eee6a4a1215de8e59c96f3b12e3e"></a>


#### Enumerator Color03

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ead14e2253762fd517fa6e385ed14cf0e9"></a>


#### Enumerator Color04

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eadffc0346ea75cf5fc1158b9362460a8d"></a>


#### Enumerator Color05

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eae1909992a69162047e372acfbed025ac"></a>


#### Enumerator Color06

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea372202fb081b0324c6624fd320ebaddc"></a>


#### Enumerator Color07

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea3cad4aa3969e448461cacd307456c91a"></a>


#### Enumerator Color08

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea72d0fdb353004b3c1e991cabd2b68dbd"></a>


#### Enumerator Color09

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea2dc445ac51da1926f1349e6c06d4ad3a"></a>


#### Enumerator Color10

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eab35c05431951c287d43b6e99dc4094ff"></a>


#### Enumerator Color11

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea5ca39723547d0bf4d5bdf297f4a8b5ef"></a>


#### Enumerator Color12

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea236b2a160b1d7e13ea0301fdb2e4c705"></a>


#### Enumerator Color13

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea7e43937d34383a1fc77337a4b7a8ba36"></a>


#### Enumerator Color14

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea487886d364eef41a559632d8db73d116"></a>


#### Enumerator Color15

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eafdd652ed15bd62101b361b632185016e"></a>


#### Enumerator Color16

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea6d29615d6bea6274f0991fd3748ad057"></a>


#### Enumerator Color17

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea958df9f8af09ea8893d5757a22898bed"></a>


#### Enumerator Color18

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea0621ae2fac8718fe568084b6ece99c36"></a>


#### Enumerator Color19

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea66214a22dfb1ade311a75beb3db34993"></a>


#### Enumerator Color20

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea848bb011e14014088deaa18ee1e98c3b"></a>


#### Enumerator Color21

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea3bf709d431160b4e8ddb4c9780571e7b"></a>


#### Enumerator Color22

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eab0cdf0d99e99d76aecf311b7db789b20"></a>


#### Enumerator Color23

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eadbef8b9213ec31d4044cbaf1f9663bb3"></a>


#### Enumerator Color24

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eacfa2c86e5a10caaf8bf0d2cf7a853fbf"></a>


#### Enumerator Gradient01

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea6f180a4f610ec1408769e2e47e1f3f9b"></a>


#### Enumerator Gradient02

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ead600455772325a18d3c558b99e68d37f"></a>


#### Enumerator Gradient03

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eacdf63818991dde012b0c9d7a799d788d"></a>


#### Enumerator Gradient04

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea31bab4699b2eaa1e67adc49e8b744917"></a>


#### Enumerator Gradient05

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea4a4f30c076c8b5cc690305d87ef7abd8"></a>


#### Enumerator Gradient06

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea9eddd5beff00e5d0b52c12ae29ecb099"></a>


#### Enumerator Gradient07

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eada925167c77aaef2708fb64ce95fb6e1"></a>


#### Enumerator Gradient08

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eabe8b8673290df994fad6c0624aab60fd"></a>


#### Enumerator Gradient09

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea9fcb698c4cf8c84a99a3604b1be4e174"></a>


#### Enumerator Gradient10

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1eae102ae954f44b6f6ad3ce3456aac23e8"></a>


#### Enumerator GradientUser

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aeef1ecf09ecc0e581ecda7359bd50a1ea0c3cf7d995c69404e00337310f6be9bc"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.BackgroundOptions"}]}`
-->

### Enumeration type DrawSectionOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a943b290c055429c8bc038b113511794f"></a>

![][public]

**Definition**:


```csharp
enum DrawSectionOptions {
  P100 = 0,
  P75,
  P50,
  P25
}
```


#### Enumerator P100

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a943b290c055429c8bc038b113511794fa9e776ce9dbca3d1ccdcc42a288bf2d16"></a>


#### Enumerator P75

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a943b290c055429c8bc038b113511794fa376823097e7ddd3f6d35d79ddfda9ba4"></a>


#### Enumerator P50

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a943b290c055429c8bc038b113511794fae0e09951f61fed537fba9bd4673c6673"></a>


#### Enumerator P25

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a943b290c055429c8bc038b113511794facea622d16b041c7022024470412e7543"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.DrawSectionOptions"}]}`
-->

### Enumeration type NumberSegmentsOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aa7ea9ef6d3fe484e2939bc8d972902e3"></a>

![][public]

**Definition**:


```csharp
enum NumberSegmentsOptions {
  S_8 = 0,
  S_16,
  S_32,
  S_64,
  S_128
}
```


#### Enumerator S_8

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aa7ea9ef6d3fe484e2939bc8d972902e3a19f5714b750b80517cdc6f9c63fbdc28"></a>


#### Enumerator S_16

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aa7ea9ef6d3fe484e2939bc8d972902e3a85dc52a34eef4bb46b47d8f271e81aae"></a>


#### Enumerator S_32

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aa7ea9ef6d3fe484e2939bc8d972902e3a25429be65b4936b6e443ccedefb54e5e"></a>


#### Enumerator S_64

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aa7ea9ef6d3fe484e2939bc8d972902e3af679ccecb7a0fde4f7192606ecfdf627"></a>


#### Enumerator S_128

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1aa7ea9ef6d3fe484e2939bc8d972902e3a53e5002d69fcafda348b0692b5a7f74b"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.NumberSegmentsOptions"}]}`
-->

### Enumeration type BrightnessOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cf"></a>

![][public]

**Definition**:


```csharp
enum BrightnessOptions {
  P100 = 0,
  P90,
  P80,
  P70,
  P60,
  P50,
  P40,
  P30,
  P20,
  P10
}
```


#### Enumerator P100

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfa9e776ce9dbca3d1ccdcc42a288bf2d16"></a>


#### Enumerator P90

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfa94d84f61c9b1ca10a7651203d685539a"></a>


#### Enumerator P80

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfa148fb42c49bedf684e19dce8ff58a5f1"></a>


#### Enumerator P70

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfa36ad4f3e5d60ba949427f719fe5256be"></a>


#### Enumerator P60

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfae14abdda2f1a04dd8828c73540a1ce09"></a>


#### Enumerator P50

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfae0e09951f61fed537fba9bd4673c6673"></a>


#### Enumerator P40

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfaf8fad38873381c3fe36228ceda07f8cf"></a>


#### Enumerator P30

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfa09d6d0ff190eac94313f1dc0565780e5"></a>


#### Enumerator P20

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfa10d0da4c8a5f5ee1e90f05239ab78d03"></a>


#### Enumerator P10

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1ab6b33b61cf3f117da3d46c61287f80cfaa8c1f8495e10277718398939ece8a2ae"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.BrightnessOptions"}]}`
-->

### Enumeration type ColorRaysByOptions

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a2295775627af0a70de053c99e6e8681d"></a>

![][public]

**Definition**:


```csharp
enum ColorRaysByOptions {
  Fields = 0,
  Waves,
  Config,
  Wavelength
}
```


#### Enumerator Fields

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a2295775627af0a70de053c99e6e8681daa4ca5edd20d0b5d502ebece575681f58"></a>


#### Enumerator Waves

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a2295775627af0a70de053c99e6e8681daa4b44939aabfe8df39b1ecf05fa95c0a"></a>


#### Enumerator Config

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a2295775627af0a70de053c99e6e8681dafa535ffb25e1fd20341652f9be21e06e"></a>


#### Enumerator Wavelength

<a id="namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts_1a2295775627af0a70de053c99e6e8681dab25b2722ad826f67423cdb48bdbc837e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Layouts.ColorRaysByOptions"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
