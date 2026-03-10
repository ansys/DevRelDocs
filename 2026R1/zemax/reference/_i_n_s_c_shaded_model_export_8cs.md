# File INSCShadedModelExport.cs

<a id="_i_n_s_c_shaded_model_export_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Layouts::INSCShadedModelExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c_shaded_model_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_n_s_c_shaded_model_export)

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
    [Guid("faa760ec-d5c9-4237-be31-c6f4e5bf2f28")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCShadedModelExport : ISystemTool
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

        DetectorPixelColorOptions DetectorPixelColorMode { get; set; }

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

        DetectorDisplayModeOptions DetectorDisplayMode { get; set; }

        OpacityOptions Opacity { get; set; }
        BackgroundOptions Background { get; set; }
        BrightnessOptions Brightness { get; set; }

    }

    [Guid("4da1fff5-afa6-4759-a23c-b859cf77e20e")]
    [ComVisible(true)]
    public enum DetectorPixelColorOptions
    {
        DoNotColorIndividualPoints,
        ByRaysOnLayout,
        ByLastAnalysis
    }

    [Guid("e3f0e1e1-2c22-43d5-965e-ac9db0947c7c")]
    [ComVisible(true)]
    public enum DetectorDisplayModeOptions
    {
        Consider,
        GreyScaleFlux,
        InverseGreyScaleFlux,
        FalseColorFlux,
        InverseFalseColorFlux,
        GreyScaleIrradiance,
        InverseGreyScaleIrradiance,
        FalseColorIrradiance,
        InverseFalseColorIrradiance,
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