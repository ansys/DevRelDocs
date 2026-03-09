# File IAS_LateralColor.cs

<a id="_i_a_s___lateral_color_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_LateralColor](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___lateral_color.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___lateral_color)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Aberrations](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Aberrations
{
    [ComVisible(true)]
    [Guid("A3366B2A-8C3A-4C39-BC12-0EE405BEBCDA")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_LateralColor : IAS_
    {
        bool AllWavelengths { get; set; }
        bool ShowAiryDisk { get; set; }
        bool UseRealRays { get; set; }

        double PlotScale { get; set; }
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