# File IAS\_HuygensMtfvsField.cs

<a id="_i_a_s___huygens_mtfvs_field_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_HuygensMtfvsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtfvs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtfvs_field)

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
    [Guid("5176EACF-508C-447E-9D5A-490104EAEC64")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_HuygensMtfvsField : IAS_
    {
        IAS_Wavelength Wavelength { get; }

        SampleSizes SampleSize { get; set; }
        ScanTypes ScanType { get; set; }

        bool RemoveVignetting { get; set; }
        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }

        double Freq_1 { get; set; }
        double Freq_2 { get; set; }
        double Freq_3 { get; set; }
        double Freq_4 { get; set; }
        double Freq_5 { get; set; }
        double Freq_6 { get; set; }

        int FieldDensity { get; set; }

        double ImageDelta { get; set; }
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