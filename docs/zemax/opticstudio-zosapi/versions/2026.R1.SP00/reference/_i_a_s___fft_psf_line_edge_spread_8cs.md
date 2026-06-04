# File IAS_FftPsfLineEdgeSpread.cs

<a id="_i_a_s___fft_psf_line_edge_spread_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Psf::IAS\_FftPsfLineEdgeSpread](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_line_edge_spread.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf_line_edge_spread)

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
    //
    //  TODO: Make sure to generate your own GUID
    //
    [Guid("90108689-029D-44F2-97F8-9AC7DA84C64E")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FftPsfLineEdgeSpread : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }
        
        SampleSizes SampleSize { get; set; }
        PsfSpread Spread { get; set; }
        PsfTypes Type { get; set; }

        bool UseCoherentPSF { get; set; }
        bool UsePolarization { get; set; }

        double PlotScale { get; set; }

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
