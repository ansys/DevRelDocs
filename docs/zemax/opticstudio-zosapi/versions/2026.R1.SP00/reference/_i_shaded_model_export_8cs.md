# File IShadedModelExport.cs

<a id="_i_shaded_model_export_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::Layouts::IShadedModelExport](interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_shaded_model_export.md#interface_z_o_s_a_p_i_1_1_tools_1_1_layouts_1_1_i_shaded_model_export)

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
using ZOSAPI.Common;
using ZOSAPI.Tools.General;

namespace ZOSAPI.Tools.Layouts
{
    [Guid("4c107b02-a4c1-4181-9783-6e60f9452bbb")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IShadedModelExport : ISystemTool
    {
        bool SaveImageAsFile { get; set; }

        string OutputFileName { get; set; }

        bool IsValidFileName { get; }

        int OutputPixelWidth { get; set; }

        int OutputPixelHeight { get; set; }

        int StartSurface { get; set; }
        int EndSurface { get; set; }
        int NumberOfRays { get; set; }

        ColorRaysByOptions ColorRaysBy { get; set; }
        RayPatternType RayPattern { get; set; }

        int Wavelength { get; set; }

        void SetWavelengthsAll();
        int Field { get; set; }
        void SetFieldsAll();

        OpacityOptions Opacity { get; set; }
        BackgroundOptions Background { get; set; }
        BrightnessOptions Brightness { get; set; }

        NumberSegmentsOptions AngularSegments { get; set; }
        NumberSegmentsOptions RadialSegments { get; set; }

        bool FletchRays { get; set; }
        bool DeleteVignetted { get; set; }
        bool SplitNSCRays { get; set; }
        bool ScatterNSCRays { get; set; }

        LineThicknessOptions SurfaceLineThickness { get; set; }
        LineThicknessOptions RaysLineThickness { get; set; }

        IImageExportData ImageExportData { get; }

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

        DrawSectionOptions DrawSection { get; set; }
    }

    [Guid("b694c63c-d5f8-485e-9f3c-4ac5870431a2")]
    [ComVisible(true)]
    public enum OpacityOptions
    {
        Ignore = 0,
        Consider,
        All50Percent
    }

    [Guid("4351e64e-2367-4ddf-bfb9-9906967d46e9")]
    [ComVisible(true)]
    public enum BackgroundOptions
    {
        White = 0,
        Black,
        Red,
        Green,
        Blue,
        DarkGreen,
        DarkBlue,
        Color01,
        Color02,
        Color03,
        Color04,
        Color05,
        Color06,
        Color07,
        Color08,
        Color09,
        Color10,
        Color11,
        Color12,
        Color13,
        Color14,
        Color15,
        Color16,
        Color17,
        Color18,
        Color19,
        Color20,
        Color21,
        Color22,
        Color23,
        Color24,
        Gradient01,
        Gradient02,
        Gradient03,
        Gradient04,
        Gradient05,
        Gradient06,
        Gradient07,
        Gradient08,
        Gradient09,
        Gradient10,
        GradientUser
    }

    [Guid("66636133-fa29-4663-b096-1459f36de6a3")]
    [ComVisible(true)]
    public enum DrawSectionOptions
    {
        P100 = 0,
        P75,
        P50,
        P25
    }

    [Guid("a5692143-f8c4-4b65-8ff0-53ac340960d3")]
    [ComVisible(true)]
    public enum NumberSegmentsOptions
    {
        S_8 = 0,
        S_16,
        S_32,
        S_64,
        S_128
    }

    [Guid("b3b93091-e8b9-44be-a3cb-bd362428d050")]
    [ComVisible(true)]
    public enum BrightnessOptions
    {
        P100 = 0,
        P90,
        P80,
        P70,
        P60,
        P50,
        P40,
        P30,
        P20,
        P10
    }


    [Guid("8b542688-3be7-4ea4-bc50-fd964e47c4b8")]
    [ComVisible(true)]
    public enum ColorRaysByOptions
    {
        Fields = 0,
        Waves,
        Config,
        Wavelength
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
