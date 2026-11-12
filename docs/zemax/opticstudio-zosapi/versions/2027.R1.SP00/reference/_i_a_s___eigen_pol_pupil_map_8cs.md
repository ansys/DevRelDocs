# File IAS_EigenPolPupilMap.cs

<a id="_i_a_s___eigen_pol_pupil_map_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Polarization::IAS\_EigenPolPupilMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_polarization_1_1_i_a_s___eigen_pol_pupil_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_polarization_1_1_i_a_s___eigen_pol_pupil_map)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Polarization](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_polarization.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_polarization)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Polarization
{
    [ComVisible(true)]
    [Guid("B1B8C9F7-3E5B-4C9A-BDCD-1F0E2F3B2A1A")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_EigenPolPupilMap : IAS_
    {
        EigenPol_Analyses    AnalysisType { get; set; }
        IAS_Wavelength Wavelength { get; }
        IAS_Field Field { get; }
        IAS_Surface         Surface { get; }
        SampleSizes_ContrastLoss SampleSize { get; set; }
        EigenPol_AngleUnit          Unit { get; set; }
    }
}

namespace ZOSAPI.Analysis.Settings.Polarization
{
    [ComVisible(true)]
    [Guid("C2F9E8A4-5B6D-4F1A-9B3E-2D7A8C9E1F0B")]
    public enum EigenPol_Analyses
    {
        AngleOfIncidence = 0,
        Diattenuation = 1,
        Retardance = 2
    }
}

namespace ZOSAPI.Analysis.Settings.Polarization
{
    [ComVisible(true)]
    [Guid("D3A7F9B5-6C8E-4D2B-9A4F-3E8B9C0D2F1C")]
    public enum EigenPol_AngleUnit
    {
        Degree = 0,
        Radian = 1
    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
