# File IAS_NSCSingleRayTrace.cs

<a id="_i_a_s___n_s_c_single_ray_trace_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::RayTracing::IAS\_NSCSingleRayTrace](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___n_s_c_single_ray_trace.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___n_s_c_single_ray_trace)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::RayTracing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.RayTracing
{
    [ComVisible(true)]
    [Guid("0A69C81C-8F93-456C-89E4-A7F05331F6B8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_NSCSingleRayTrace : IAS_
    {
        IAS_Wavelength Wavelength { get; }

        double RaySourceX { get; set; }

        double RaySourceY { get; set; }

        double RaySourceZ { get; set; }

        double RaySourceL { get; set; }

        double RaySourceM { get; set; }

        double RaySourceN { get; set; }

        int RefObject { get; set; }

        bool SplitNSCRays { get; set; }

        bool ScatterNSCRays { get; set; }

        bool UsePolarization { get; set; }

        bool ShowXYZ { get; set; }

        bool ShowLMN { get; set; }

        bool ShowPath { get; set; }

        bool ShowNormal { get; set; }

        bool ShowExyz { get; set; }

        bool ExpandIntoBranches { get; set; }

        int DecimalPrecision { get; set; }

        string SaveRaysFile { get; set; }
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