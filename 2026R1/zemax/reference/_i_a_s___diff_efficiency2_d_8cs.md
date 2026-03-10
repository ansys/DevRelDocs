# File IAS_DiffEfficiency2D.cs

<a id="_i_a_s___diff_efficiency2_d_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::DiffractionEfficiency::IAS\_DiffEfficiency2D](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency2_d.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency_1_1_i_a_s___diff_efficiency2_d)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::DiffractionEfficiency](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_diffraction_efficiency)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Tools.Tolerancing;

namespace ZOSAPI.Analysis.Settings.DiffractionEfficiency
{    
    [ComVisible(true)]
    [Guid("99AFEE51-3A44-423A-BBE3-1EF4C1558979")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_DiffEfficiency2D : IAS_
    {
        SampleSizes SampleSize { get; set; }
        IAS_Surface Surface { get; }
        IAS_Field      Field { get; }
        IAS_Wavelength Wavelength { get; }
        double MinWavelength { get; set; }
        double MaxWavelength { get; set; }
        double MinAngle { get; set; }
        double MaxAngle { get; set; }

        int HologramObject { get; set; }
        int AmbientObject { get; set; }
        int DetectorObject { get; set; }
        double srcPositionX { get; set; }
        double srcPositionY { get; set; }
        double srcPositionZ { get; set; }
        bool srcUnpolarized { get; set; }
        bool srcXTitled { get; set; }
        double srcPolJx { get; set; }
        double srcPolJy { get; set; }
        double srcPrePropagation { get; set; }
        int InsideOfObject { get; set; }
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