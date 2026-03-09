# File IAS_SurfaceSagCross.cs

<a id="_i_a_s___surface_sag_cross_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Surface::IAS\_SurfaceSagCross](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_sag_cross.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_surface_1_1_i_a_s___surface_sag_cross)

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
    [Guid("F9D33A39-C401-4E69-8CAE-6F565D5DE4CB")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_SurfaceSagCross : IAS_
    {
        IAS_Surface Surface { get; }

        SurfaceSagData Data { get; set; }
        SampleSizes_Pow2Plus1 Sampling { get; set; }
        double Angle { get; set; }
        RemoveOptions RemoveOption { get; set; }
        BestFitSphereOptions BestFitSphereOption { get; set; }
        bool ConsiderOffAxisAperture { get; set; }
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