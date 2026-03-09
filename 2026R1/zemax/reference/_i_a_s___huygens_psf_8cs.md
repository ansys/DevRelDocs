# File IAS\_HuygensPsf.cs

<a id="_i_a_s___huygens_psf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Psf::IAS\_HuygensPsf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___huygens_psf)

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
    [Guid("F9ECD9A5-E212-4510-A438-DF29C2717EE3")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_HuygensPsf : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes PupilSampleSize { get; set; }
        SampleSizes ImageSampleSize { get; set; }
        HuygensPsfTypes Type { get; set; }
        HuygensShowAsTypes ShowAsType { get; set; }
        Rotations Rotation { get; set; }

        bool Normalize { get; set; }
        bool UseCentroid { get; set; }
        bool UsePolarization { get; set; }

        double ImageDelta { get; set; }

        int Configuration { get; set; }
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