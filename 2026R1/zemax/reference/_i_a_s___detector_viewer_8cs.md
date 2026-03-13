# File IAS_DetectorViewer.cs

<a id="_i_a_s___detector_viewer_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::RayTracing::IAS\_DetectorViewer](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing_1_1_i_a_s___detector_viewer)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::RayTracing](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_ray_tracing)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.RayTracing
{
    [ComVisible(true)]
    [Guid("C09DA643-F633-4074-8F9A-F5E1306C55A9")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_DetectorViewer : IAS_
    {
        IAS_Surface Surface { get; }
        IAS_Detector Detector { get; }

        DetectorViewerShowAsTypes ShowAs { get; set; }
        DetectorViewerScaleTypes Scale { get; set; }
        DetectorViewerShowDataTypes DataType { get; set; }
        int SymbolType { get; set; }
        int Configuration { get; set; }
        int ExtraProperty { get; set; }
        int Smoothing { get; set; }
        int RowCol { get; set; }
        int Zplane { get; set; }
        UInt16 Contrast { get; set; }
        UInt16[] AngleList { get; set; }

        double PlotScaleMinimum { get; set; }
        double PlotScaleMaximum { get; set; }

        String RayDatabaseFilename { get; set; }
        String Filter { get; set; }
        String OutFile { get; set; }

        bool SuppressFrame { get; set; }

        int NumberOfNonSequentialSurfaces { get; }
        string GetNonSequentialSurfaceName(int index);
        int GetNonSequentialSurfaceNumber(int index);

        int NumberOfDetectorsOnSurface { get; }
        string GetDetectorName(int index);
        int GetDetectorObjectNumber(int index);

        int NumberOfShowAsTypes { get; }
        string GetShowAsTypeNameAt(int idx);

        bool IsValidDetector(int N);

        double MaxSpatialFrequency { get; set; }
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
