# Interface ZOSAPI::Analysis::Settings::Mtf::IAS_FftMtf

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf"></a>

![][C#]
![][public]

**Definition**:


Usage (see [Example 04](../apiexamples/example_04.md) for a full sample)


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

* [Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1aac108d43f406d60f36e7df9fb350d7ef)
* [Load](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a233390b15755feb10db900149fb97e76)
* [LoadFrom](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a62cf3f062ab2e3015ffca22e5173d650)
* [MaximumFrequency](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1a2aef906da5aea48d04beff6510d54680)
* [ModifySettings](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a0bd90efa9aecf2f0f3dc7f8e9ad6f309)
* [Reset](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7928f2305168474181938609be36c277)
* [SampleSize](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1af01f96026dfe472d74f562c04c8c7bce)
* [Save](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a7e7874f49a22e3762c632821669532ca)
* [SaveTo](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a3c196d30f275d5d8e17363b3b702bed7)
* [ShowDiffractionLimit](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1a6d7ac77d0929c66e92f7a52f7cd367e4)
* [Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1a413eb905caec3ee59b55d840e1ce5c6d)
* [Type](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1ae95968514036320e8d708e77b7bf7979)
* [UseDashes](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1aeea79417352bd13a51b9f0d3b586f29c)
* [UsePolarization](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1acf8f62f06236b95c57fde78db8127e66)
* [Verify](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s__.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___1a2fe8bcba3de86b96ca2c2f6fa9e1f75e)
* [Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1aaf22d256cb23a57b0bdf26cd8d7632a8)

## Properties

### Property Field

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1aac108d43f406d60f36e7df9fb350d7ef"></a>

![][public]

**Definition**:


```csharp
IAS_Field ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Field
```


**Return type**: [IAS\_Field](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Field"}]}`
-->

### Property Surface

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1a413eb905caec3ee59b55d840e1ce5c6d"></a>

![][public]

**Definition**:


```csharp
IAS_Surface ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Surface
```


**Return type**: [IAS\_Surface](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___surface)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Surface"}]}`
-->

### Property Wavelength

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1aaf22d256cb23a57b0bdf26cd8d7632a8"></a>

![][public]

**Definition**:


```csharp
IAS_Wavelength ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Wavelength
```


**Return type**: [IAS\_Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavelength)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Wavelength"}]}`
-->

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1ae95968514036320e8d708e77b7bf7979"></a>

![][public]

**Definition**:


```csharp
MtfTypes ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Type
```


**Return type**: [MtfTypes](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1a1e5c10d6cda7201e0b9d605e21bde015)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.Type"}]}`
-->

### Property SampleSize

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1af01f96026dfe472d74f562c04c8c7bce"></a>

![][public]

**Definition**:


```csharp
SampleSizes ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.SampleSize
```


**Return type**: [SampleSizes](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis_1a479044c3e49c63d5670e891fccffe840)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.SampleSize"}]}`
-->

### Property ShowDiffractionLimit

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1a6d7ac77d0929c66e92f7a52f7cd367e4"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.ShowDiffractionLimit
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.ShowDiffractionLimit"}]}`
-->

### Property UseDashes

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1aeea79417352bd13a51b9f0d3b586f29c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.UseDashes
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.UseDashes"}]}`
-->

### Property UsePolarization

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1acf8f62f06236b95c57fde78db8127e66"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.UsePolarization
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.UsePolarization"}]}`
-->

### Property MaximumFrequency

<a id="interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_1a2aef906da5aea48d04beff6510d54680"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.MaximumFrequency
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.Settings.Mtf.IAS_FftMtf.MaximumFrequency"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
