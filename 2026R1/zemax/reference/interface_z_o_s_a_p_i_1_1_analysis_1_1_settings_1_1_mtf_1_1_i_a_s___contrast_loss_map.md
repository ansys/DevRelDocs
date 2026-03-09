# Interface ZOSAPI::Analysis::Settings::Mtf::IAS\_ContrastLossMap

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 04](page_ex04.md#page_ex04) for a full sample)


C# 
```csharp
            // Settings
            IAS_FftMtf newWin_Settings = newWin.GetSettings() as IAS_FftMtf;
            newWin_Settings.MaximumFrequency = 50;
            newWin_Settings.SampleSize = SampleSizes.S_256x256;
```
 C++ 
```csharp
    // Settings
    IAS_FftMtfPtr newWin_Settings = newWin->GetSettings();
    newWin_Settings->MaximumFrequency = 50;
    newWin_Settings->SampleSize = SampleSizes_S_256x256;
```
 Matlab 
```csharp
    % Settings
    newWin_Settings = newWin.GetSettings();
    newWin_Settings.MaximumFrequency = 50;
    newWin_Settings.SampleSize = ZOSAPI.Analysis.SampleSizes.S_256x256;
```
 Python 
```csharp
    # Settings
    newWin_Settings = newWin.GetSettings()
    newWin_Settings.MaximumFrequency = 50
    newWin_Settings.SampleSize = ZOSAPI.Analysis.SampleSizes.S_256x256
```

**Inherits from**:

* [ZOSAPI.Analysis.Settings.IAS\_](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__)

## Members

* [Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a6412c89a2495761e186711129e1a2fdd)
* [Frequency](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a47bb63ee1fdc376e565d2d01f1279f8f)
* [Load](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76)
* [LoadFrom](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650)
* [ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309)
* [Normalize](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a34f51645326e044e9728c6810891d227)
* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277)
* [SampleSize](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a4a830727113508e354a7efa2da33e15e)
* [Save](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca)
* [SaveTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7)
* [ShowOPD](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a0eaa093454c15990e6c68e728c87b49a)
* [Verify](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e)
* [Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a40a053411fae7cc62655b735d0dc9fd5)

## Properties

### Property Field

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a6412c89a2495761e186711129e1a2fdd"></a>

![][public]

**Definition**:


```csharp
IAS_Field ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Field
```


**Return type**: [IAS\_Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Field"}]}`
-->

### Property Wavelength

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a40a053411fae7cc62655b735d0dc9fd5"></a>

![][public]

**Definition**:


```csharp
IAS_Wavelength ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Wavelength
```


**Return type**: [IAS\_Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Wavelength"}]}`
-->

### Property SampleSize

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a4a830727113508e354a7efa2da33e15e"></a>

![][public]

**Definition**:


```csharp
SampleSizes_ContrastLoss ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.SampleSize
```


**Return type**: [SampleSizes\_ContrastLoss](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a7f1e5576980c9cbc0f35123fe3951ef9)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.SampleSize"}]}`
-->

### Property Frequency

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a47bb63ee1fdc376e565d2d01f1279f8f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Frequency
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Frequency"}]}`
-->

### Property Normalize

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a34f51645326e044e9728c6810891d227"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Normalize
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.Normalize"}]}`
-->

### Property ShowOPD

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___contrast_loss_map_1a0eaa093454c15990e6c68e728c87b49a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.ShowOPD
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_ContrastLossMap.ShowOPD"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)