# File IAS\_FftPsfCrossSection.cs

<a id="_i_a_s___fft_psf_cross_section_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Psf::IAS\_FftPsfCrossSection](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_cross_section.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_cross_section)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Psf](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Psf
{
    [ComVisible(true)]
    [Guid("F09485E3-3B98-4005-8D76-2059478DE923")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FftPsfCrossSection : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes SampleSize { get; set; }
        PsfTypes Type { get; set; }
        
        bool UsePolarization { get; set; }
        bool Normalize { get; set; }

        double PlotScale { get; set; }

        int RowCol { get; set; }
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