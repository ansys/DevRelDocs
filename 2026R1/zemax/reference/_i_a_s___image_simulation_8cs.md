# File IAS_ImageSimulation.cs

<a id="_i_a_s___image_simulation_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::ExtendedScene::IAS\_ImageSimulation](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___image_simulation.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___image_simulation)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::ExtendedScene](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.ExtendedScene
{
    [ComVisible(true)]
    [Guid("97ED8309-A9F2-47D9-AA32-06481785C981")]
    public enum ISFlipTypes
    {
        None = 0,
        TopBottom,
        LeftRight,
        TopBottomLeftRight,
    }

    [ComVisible(true)]
    [Guid("DEF00C45-7787-4D22-8313-1A58251C1380")]
    public enum ISSamplings
    {
        None = 0,
        X2,
        X4,
        X8,
        X16,
        X32,
        X64
    }

    [ComVisible(true)]
    [Guid("BB60902B-E5A1-4743-BB6A-1CBA52F8BCDE")]
    public enum ISAberrationTypes
    {
        None = 0,
        Geometric,
        Diffraction,
    }

    [ComVisible(true)]
    [Guid("B19137BE-EF93-4169-8EA7-2FD1E0045B54")]
    public enum ISShowAsTypes
    {
        SimulatedImage = 0,
        SourceBitmap,
        PSFGrid,
    }
    

    [ComVisible(true)]
    [Guid("E6808780-3BC6-4123-A09C-56CF32903AA7")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_ImageSimulation : IAS_
    {
        // Source Bitmap Settings
        string InputFile { get; set; }
        double FieldHeight { get; set; }
        ISFlipTypes FlipSource { get; set; }
        Rotations RotationSource { get; set; }
        ISSamplings Oversampling { get; set; }
        ISSamplings GuardBand { get; set; }
        IAS_Field Field { get; }
        void SetWavelengthRGB();
        void SetWavelength123();
        void SetWavelengthNumber(int wlNum);
        bool GetWavelengthRGB();
        bool GetWavelength123();
        int GetWavelengthNumber();
        string[] GetInputFileNames();

        // Convolution Grid Settings
        SampleSizes PupilSampling { get; set; }
        SampleSizes ImageSampling { get; set; } 
        ISAberrationTypes Aberrations { get; set; }
        int PSFXPoints { get; set; }
        int PSFYPoints { get; set; }
        bool UsePolarization { get; set; }
        bool ApplyFixedApertures { get; set; }
        bool UseRelativeIllumination { get; set; }

        // Detector and Display Settings
        ISShowAsTypes ShowAs { get; set; }
        ReferenceGia Reference { get; set; }
        ISFlipTypes FlipImage { get; set; }
        double PixelSize { get; set; }
        int XPixels { get; set; }
        int YPixels { get; set; }
        bool SuppressFrame { get; set; }
        string OutputFile { get; set; }
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