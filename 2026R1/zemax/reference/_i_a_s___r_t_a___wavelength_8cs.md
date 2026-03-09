# File IAS_RTA_Wavelength.cs

<a id="_i_a_s___r_t_a___wavelength_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Coatings::IAS\_RTA\_Wavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___wavelength)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Coatings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;

namespace ZOSAPI.Analysis.Settings.Coatings
{
    [ComVisible(true)]
    [Guid("6dc33821-39b5-45d7-847f-7427c64ce1e8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RTA_Wavelength : IAS_
    {
        IAS_Surface Surface { get; }
        double Angle { get; set; }
        int ObjectNumber { get; set; }
        int FaceNumber { get; set; }
        double MinWavelength { get; set; }
        double MaxWavelength { get; set; }
        double MinY { get; set; }
        double MaxY { get; set; }
        bool ReverseDirection { get; set; }
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
