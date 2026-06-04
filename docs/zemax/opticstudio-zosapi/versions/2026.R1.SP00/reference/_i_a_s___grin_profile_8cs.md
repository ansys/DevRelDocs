# File IAS_GrinProfile.cs

<a id="_i_a_s___grin_profile_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Materials::IAS\_GrinProfile](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___grin_profile.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___grin_profile)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Materials](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Materials
{

    [ComVisible(true)]
    [Guid("88fda0a4-d067-49d4-a5e5-313ab762bb66")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_GrinProfile : IAS_
    {
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }
        AxisType ShowIndexVs { get; set; }
        double MinimumX { get; set; }
        double MaximumX { get; set; }
        double MinimumY { get; set; }
        double MaximumY { get; set; }
        double MinimumZ { get; set; }
        double MaximumZ { get; set; }
        double X_Value { get; set; }
        double Y_Value { get; set; }
        double Z_Value { get; set; }
        double MinimumIndex { get; set; }
        double MaximumIndex { get; set; }
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
