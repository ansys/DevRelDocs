# File IAS_RelativeIllumination.cs

<a id="_i_a_s___relative_illumination_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::ExtendedScene::IAS\_RelativeIllumination](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___relative_illumination.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___relative_illumination)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::ExtendedScene](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.ExtendedScene
{
    [ComVisible(true)]
    [Guid("8436FB9D-0152-406F-AD90-1369E02277E8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RelativeIllumination : IAS_
    {
        IAS_Wavelength Wavelength { get; }
        ScanTypes ScanType { get; set; }
        int RayDensity { get; set; }
        int FieldDensity { get; set; }
        bool UsePolarization { get; set; }
        bool LogScale { get; set; }
        bool RemoveVignettingFactors { get; set; }
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
