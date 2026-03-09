# File IAS\_FftMtfMap.cs

<a id="_i_a_s___fft_mtf_map_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_FftMtfMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf_map)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Mtf](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Mtf
{
    [ComVisible(true)]
    [Guid("21A21DEB-C225-43FA-BF8B-5339AC417118")]
    public enum MtfDataTypes
    {
        Average, Tangential, Sagittal,
    }

    [ComVisible(true)]
    [Guid("7616882D-96B7-481A-97FB-9F1DCCF822C0")]
    public enum ShowAsTypes
    {
        GreyScale, GreyScaleInverted, FalseColor, FalseColorInverted,
    }

    [ComVisible(true)]
    [Guid("32634F60-6B54-415B-978B-C34249771947")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FftMtfMap : IAS_
    {
        IAS_Field ReferenceField { get; }
        IAS_Wavelength Wavelength { get; }

        MtfDataTypes MTF_DataType { get; set; }
        SampleSizes SampleSize { get; set; }
        ShowAsTypes ShowAs { get; set; }

        //bool ShowDiffractionLimit { get; set; }
        bool UsePolarization { get; set; }
        //bool UseGeometric { get; set; }
        //bool ScatterRays { get; set; }
        bool RemoveVignetting { get; set; }

        double Frequency { get; set; }
        double X_Field_Width { get; set; }
        double Y_Field_Width { get; set; }

        int X_Pixels { get; set; }
        int Y_Pixels { get; set; }
    }
}
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)