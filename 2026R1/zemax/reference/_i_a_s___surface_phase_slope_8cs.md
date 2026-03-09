# File IAS\_SurfacePhaseSlope.cs

<a id="_i_a_s___surface_phase_slope_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Surface::IAS\_SurfacePhaseSlope](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_slope.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_phase_slope)

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
    [Guid("b1157d94-3b36-4296-ad20-34a49d0b90d7")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_SurfacePhaseSlope : IAS_
    {
        IAS_Surface Surface { get; }
        SampleSizes_Pow2Plus1_X Sampling { get; set; }
        SurfacePhaseSlopeData Data { get; set; }
        ShowAs ShowAs { get; set; }
        string ContourFormat { get; set; }
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