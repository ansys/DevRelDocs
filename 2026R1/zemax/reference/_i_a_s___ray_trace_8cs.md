# File IAS\_RayTrace.cs

<a id="_i_a_s___ray_trace_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_RayTrace](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___ray_trace.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___ray_trace)

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
    [Guid("A74A380E-49EA-4F15-8818-7DC1574BA059")]
    public enum RayTraceType
    {
        DirectionCosines = 0, TangentAngle = 1, YmUmYcUc = 2,
    }

    [ComVisible(true)]
    [Guid("DA20BBDB-D41F-4532-B148-7694469C0251")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RayTrace : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        bool UseGlobal { get; set; }

        double Hx { get; set; }
        double Hy { get; set; }
        double Px { get; set; }
        double Py { get; set; }

        RayTraceType Type { get; set; }

        void UseArbitraryRay();
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