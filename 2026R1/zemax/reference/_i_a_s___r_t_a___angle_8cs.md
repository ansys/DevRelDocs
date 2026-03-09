# File IAS_RTA_Angle.cs

<a id="_i_a_s___r_t_a___angle_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Coatings::IAS\_RTA\_Angle](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___angle.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_coatings_1_1_i_a_s___r_t_a___angle)

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
    [Guid("196992fe-73b3-478e-a110-17a09e279435")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RTA_Angle : IAS_
    {
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }
        int ObjectNumber { get; set; }
        int FaceNumber { get; set; }
        double MinAngle { get; set; }
        double MaxAngle { get; set; }
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
