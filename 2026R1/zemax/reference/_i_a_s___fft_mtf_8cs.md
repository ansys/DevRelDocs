# File IAS\_FftMtf.cs

<a id="_i_a_s___fft_mtf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_FftMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___fft_mtf)

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
    [Guid("DDCBC8CD-FB59-4E9B-9BCF-D0C33E20D8BF")]
    public enum MtfTypes
    {
        Modulation, Real, Imaginary, Phase, SquareWave
    }

    [ComVisible(true)]
    [Guid("F0CDF654-11CF-49C6-9D6A-6F61993822AB")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FftMtf : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        MtfTypes Type { get; set; }
        SampleSizes SampleSize { get; set; }

        bool ShowDiffractionLimit { get; set; }
        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }

        double MaximumFrequency { get; set; }
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