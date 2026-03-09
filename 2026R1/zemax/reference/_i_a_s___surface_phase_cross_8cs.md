# File IAS\_SurfacePhaseCross.cs

<a id="_i_a_s___surface_phase_cross_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Surface::IAS\_SurfacePhaseCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_cross)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Surface](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Surface
{
    [ComVisible(true)]
    [Guid("EE2E4C4C-FB5A-45F2-8E9C-67534FDC8AD9")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_SurfacePhaseCross : IAS_
    {
        IAS_Surface Surface { get; }
        SurfacePhaseData Data { get; set; }
        SampleSizes_Pow2Plus1 Sampling { get; set; }
        double Angle { get; set; }
        bool RemovePiston { get; set; }
        bool RemoveTiltX { get; set; }
        bool RemoveTiltY { get; set; }
        bool RemovePower { get; set; }
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