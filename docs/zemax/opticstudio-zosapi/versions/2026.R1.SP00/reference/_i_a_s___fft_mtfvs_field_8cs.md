# File IAS_FftMtfvsField.cs

<a id="_i_a_s___fft_mtfvs_field_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_FftMtfvsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtfvs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtfvs_field)

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
    [Guid("14ACE4DC-676F-4B4C-8585-A5F2F0E036E4")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FftMtfvsField : IAS_
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
    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
