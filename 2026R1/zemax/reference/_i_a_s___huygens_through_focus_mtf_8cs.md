# File IAS_HuygensThroughFocusMtf.cs

<a id="_i_a_s___huygens_through_focus_mtf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_HuygensThroughFocusMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_through_focus_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_through_focus_mtf)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Mtf](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings.Mtf;

namespace ZOSAPI.Analysis.Settings.Mtf
{
    [ComVisible(true)]
    [Guid("A97FDB1F-3D9D-473B-B452-C9C7E3E699E8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_HuygensThroughFocusMtf : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes ImageSampleSize { get; set; }
        SampleSizes PupilSampleSize { get; set; }
        HuygensMtfTypes Type { get; set; }

        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }

        double DeltaFocus { get; set; }
        double ImageDelta { get; set; }
        double Frequency { get; set; }

        int Configuration { get; set; }
        int NumberOfSteps { get; set; }
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
