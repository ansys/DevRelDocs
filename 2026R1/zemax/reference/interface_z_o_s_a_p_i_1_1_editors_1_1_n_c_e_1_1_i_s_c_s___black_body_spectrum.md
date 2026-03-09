# Interface ZOSAPI::Editors::NCE::ISCS\_BlackBodySpectrum

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum"></a>

![][C#]
![][public]

**Definition**:

Source Color Mode - Black Body Spectrum. This interface can be accessed via the INCESourcesData interface.

Usage (see [Example 25](page_ex25.md#page_ex25) for a full sample)


C# 
```csharp
            // Changes sourcecolor to Blackbody, sets temperature, min/ max wavelength
            o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45;
            o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65;
```
 C++ 
```csharp
    // Changes sourcecolor to Blackbody, sets temperature, min / max wavelength
    o1->SourcesData->SourceColor = SourceColorMode_BlackBodySpectrum;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->TemperatureK = 6000;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthFrom = 0.45;
    o1->SourcesData->SourceColorSettings->_S_BlackBodySpectrum->WavelengthTo = 0.65;
```
 Matlab 
```csharp
    % Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum;
    o1.SourcesData.SourceColorSettings.TemperatureK = 6000;
    o1.SourcesData.SourceColorSettings.WavelengthFrom = 0.45;
    o1.SourcesData.SourceColorSettings.WavelengthTo = 0.65;
```
 Python 
```csharp
    # Changes sourcecolor to Blackbody, sets temperature, min/max wavelength
    o1.SourcesData.SourceColor = ZOSAPI.Editors.NCE.SourceColorMode.BlackBodySpectrum
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.TemperatureK = 6000
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthFrom = 0.45
    o1.SourcesData.SourceColorSettings._S_BlackBodySpectrum.WavelengthTo = 0.65
```

**Inherits from**:

* [ZOSAPI.Editors.NCE.ISourceColorSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings)

## Members

* [\_S\_BlackBodySpectrum](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a1a917872c01d94541671d621c7a97a3a)
* [\_S\_CIE1931Chromaticity](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a31773130dad21880b838349dd6eb2c49)
* [\_S\_CIE1931RGB](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a99a24e219d75761400b35d291ab85a0d)
* [\_S\_CIE1931Tristimulus](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a8fe23a4cead8da56de46f123cdced3df)
* [\_S\_CIE1976](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a60c3b417edd7e3ba6be54a2da0e58ec9)
* [\_S\_ColorTemperature](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a5357f6f44fb6a4d79db8da3b5605a7c9)
* [\_S\_D65White](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a576f5020d8e422236f60b4028e061e76)
* [\_S\_SpectrumFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1ac7c8ec53eba2a8b0df2c891fbcdd163c)
* [\_S\_SystemWavelengths](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a2db7f0040ffbeea9e03f5f718a1336e7)
* [\_S\_UniformPowerSpectrum](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a633d901fee026a38e1d2bab97b672e2e)
* [Fit](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1a9d978663156e1502ac0c2769035ca49e)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1a7bc81ddad0da90bb5adbab01b4080378)
* [Mode](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_source_color_settings_1aa2ca6252701018d673516cf1cc33dead)
* [SpectrumCount](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1ac88d8052265972cb359719c56dcf1568)
* [TemperatureK](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1ac3cb6b394e2cc9065d57fca380c358e8)
* [WavelengthFrom](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1a439249fe9055feeeb73fff23cc9a4a40)
* [WavelengthTo](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1a0a35bb7f9456de8d5f213465aa3c118a)

## Properties

### Property TemperatureK

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1ac3cb6b394e2cc9065d57fca380c358e8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.TemperatureK
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.TemperatureK"}]}`
-->

### Property SpectrumCount

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1ac88d8052265972cb359719c56dcf1568"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.SpectrumCount
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.SpectrumCount"}]}`
-->

### Property WavelengthFrom

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1a439249fe9055feeeb73fff23cc9a4a40"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.WavelengthFrom
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.WavelengthFrom"}]}`
-->

### Property WavelengthTo

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1a0a35bb7f9456de8d5f213465aa3c118a"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.WavelengthTo
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.WavelengthTo"}]}`
-->

### Property Fit

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_s_c_s___black_body_spectrum_1a9d978663156e1502ac0c2769035ca49e"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.Fit
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.ISCS_BlackBodySpectrum.Fit"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)