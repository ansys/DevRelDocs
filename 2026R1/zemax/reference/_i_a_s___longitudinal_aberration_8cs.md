# File IAS_LongitudinalAberration.cs

<a id="_i_a_s___longitudinal_aberration_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_LongitudinalAberration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___longitudinal_aberration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___longitudinal_aberration)

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
    [Guid("8F625B27-F93D-433D-8898-AC299A5BD653")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_LongitudinalAberration : IAS_
    {
        bool UseDashes { get; set; }
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