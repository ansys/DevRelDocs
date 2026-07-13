# File IAS_CriticalRayTracer.cs

<a id="_i_a_s___critical_ray_tracer_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::IAS\_CriticalRayTracer](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___critical_ray_tracer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___critical_ray_tracer)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings//.XXXFolderXXX
{

    [ComVisible(true)]
    [Guid("80C8CA7F-33FB-4A7C-8F17-9F39B354C1B0")]
    public enum DisplayOption
    {
        AllRays,
        FailedRays,
        PassedRays
    }

    [ComVisible(true)]
    [Guid("87C59792-5EC0-4DC3-8E90-4E7E15568BCF")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_CriticalRayTracer : IAS_
    {
        double PositionTolerance { get; set; }
        double AngleTolerance { get; set; }

        String Filename { get; set; }

        DisplayOption RaysToDisplay { get; set; }
        bool DisplayXYZ { get; set; }
        bool DisplayLMN { get; set; }
        bool DisplayActualEndData { get; set; }
        bool DisplayTargetEndData { get; set; }
        bool DisplayStartData { get; set; }
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
