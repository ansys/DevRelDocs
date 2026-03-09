# File INSC3DLayoutExport.cs

<a id="_i_n_s_c3_d_layout_export_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Layouts::INSC3DLayoutExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c3_d_layout_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c3_d_layout_export)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::Layouts](namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_layouts)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Tools.Layouts
{
    [Guid("534a01ff-0528-47ad-8022-fbb9fec87a32")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSC3DLayoutExport : ISystemTool
    {
        bool SaveImageAsFile { get; set; }
        string OutputFileName { get; set; }
        bool IsValidFileName { get; }
        int OutputPixelWidth { get; set; }
        int OutputPixelHeight { get; set; }
        string RayDatabase { get; set; }
        string Filter { get; set; }
        RayTraceOptions RayTrace { get; set; }
        ColorRaysByNSCOptions ColorRaysBy { get; set; }
        bool UsePolarization { get; set; }
        bool FletchRays { get; set; }
        bool SplitNSCRays { get; set; }
        bool ScatterNSCRays { get; set; }

        LineThicknessOptions SurfaceLineThickness { get; set; }
        LineThicknessOptions RaysLineThickness { get; set; }

        void SetConfigurationEnabled(int config, bool enabled);
        bool ConfigurationAll { get; set; }
        bool ConfigurationCurrent { get; set; }

        double ConfigurationOffsetX { get; set; }
        double ConfigurationOffsetY { get; set; }
        double ConfigurationOffsetZ { get; set; }

        double CameraViewpointAngleX { get; set; }
        double CameraViewpointAngleY { get; set; }
        double CameraViewpointAngleZ { get; set; }
        void SetCameraViewpoint(CameraViewpointOptions cameraViewpoint);

        IImageExportData ImageExportData { get; }
    }

    [Guid("5c085b6d-9f75-43d6-9fed-95cbd241e4ac")]
    [ComVisible(true)]
    public enum RayTraceOptions
    {
        UseRays = 0,
        LightningTraceTrueColor,
        LightningTraceAvgWavelength
    }

    [Guid("b3759330-7831-4b32-93bd-476c5ec75809")]
    [ComVisible(true)]
    public enum ColorRaysByNSCOptions
    {
        SourceNumber,
        WaveNumber,
        ConfigNumber,
        Wavelength,
        SegmentNumber
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