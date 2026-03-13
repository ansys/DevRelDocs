# File I3DViewerExport.cs

<a id="_i3_d_viewer_export_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Layouts::I3DViewerExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i3_d_viewer_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i3_d_viewer_export)

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
using ZOSAPI.Tools.General;

namespace ZOSAPI.Tools.Layouts
{
    [Guid("9c2cceee-9888-4eba-886f-12f483d041bc")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface I3DViewerExport : ISystemTool
    {
        bool SaveImageAsFile { get; set; }

        string OutputFileName { get; set; }

        bool IsValidFileName { get; }

        int OutputPixelWidth { get; set; }

        int OutputPixelHeight { get; set; }

        int StartSurface { get; set; }
        int EndSurface { get; set; }
        int NumberOfRays { get; set; }

        int Wavelength { get; set; }
        int Field { get; set; }
        RayPatternType RayPattern { get; set; }
        ColorRaysByOptions ColorRaysBy { get; set; }
        bool DeleteVignetted { get; set; }
        bool HideLensFaces { get; set; }
        bool HideLensEdges { get; set; }
        bool HideXBars { get; set; }
        bool DrawParaxialPupils { get; set; }
        bool FletchRays { get; set; }

        bool SplitNSCRays { get; set; }
        bool ScatterNSCRays { get; set; }
        RealPupilOptions DrawRealEntrancePupils { get; set; }
        RealPupilOptions DrawRealExitPupils { get; set; }

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

    [Guid("c4a5b9ea-20a3-4868-90d0-1259c74bce82")]
    [ComVisible(true)]
    public enum CameraViewpointOptions
    {
        Isometric = 0,
        XY,
        YZ,
        XZ
    }

    [Guid("d518d9f6-f4f8-451c-b5f0-d02e769ddd97")]
    [ComVisible(true)]
    public enum RealPupilOptions
    {
        Pupils_Off = 0,
        Pupils_4 = 4,
        Pupils_8 = 8,
        Pupils_16 = 16,
        Pupils_32 = 32
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
