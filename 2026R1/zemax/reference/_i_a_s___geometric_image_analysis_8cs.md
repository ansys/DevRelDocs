# File IAS\_GeometricImageAnalysis.cs

<a id="_i_a_s___geometric_image_analysis_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::ExtendedScene::IAS\_GeometricImageAnalysis](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___geometric_image_analysis.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_extended_scene_1_1_i_a_s___geometric_image_analysis)

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
    [Guid("e05ea1bf-ccbb-4575-8a9d-d3d9220dffaf")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_GeometricImageAnalysis : IAS_
    {
        IAS_Wavelength Wavelength { get; }
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        double FieldSize { get; set; }
        double ImageSize { get; set; }
        string File { get; set; }
        double Rotation { get; set; }
        int RaysX1000 { get; set; }
        GiaShowAsTypes ShowAs { get; set; }
        SourceGia Source { get; set; }
        int NumberOfPixels { get; set; }
        double NA { get; set; }
        double TotalWatts { get; set; }
        Parity Parity { get; set; }
        ReferenceGia Reference { get; set; }
        bool UseSymbols { get; set; }
        bool UsePolarization { get; set; }
        bool RemoveVignettingFactors { get; set; }
        bool ScatterRays { get; set; }
        bool DeleteVignetted { get; set; }
        bool UsePixelInterpolation { get; set; }
        string SaveAsBIMFile { get; set; }
        int RowColumnNumber { get; set; }
        bool UseColumnRowCenter();
        string[] GetFileNames();
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