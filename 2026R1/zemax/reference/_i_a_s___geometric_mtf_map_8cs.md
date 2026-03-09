# File IAS_GeometricMtfMap.cs

<a id="_i_a_s___geometric_mtf_map_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_GeometricMtfMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtf_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_mtf_map)

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
    [Guid("9939D304-E27D-4091-8226-9639286750A6")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_GeometricMtfMap : IAS_
    {
        IAS_Field ReferenceField { get; }
        IAS_Wavelength Wavelength { get; }

        MtfDataTypes MTF_DataType { get; set; }
        SampleSizes SampleSize { get; set; }
        ShowAsTypes ShowAs { get; set; }

        bool UsePolarization { get; set; }
        bool ScatterRays { get; set; }
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