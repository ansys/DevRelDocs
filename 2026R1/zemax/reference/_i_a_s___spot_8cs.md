# File IAS_Spot.cs

<a id="_i_a_s___spot_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Spot::IAS\_Spot](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot_1_1_i_a_s___spot)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Spot](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_spot)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Spot
{
    [ComVisible(true)]
    [Guid("952254E7-4310-4229-ACFE-98A9FCF941DB")]
    public enum Patterns
    {
        Square = 0, Hexapolar, Dithered,
    }

    [ComVisible(true)]
    [Guid("3DDEE9F7-AC96-43E6-97DF-696E46472531")]
    public enum Reference
    {
        ChiefRay = 0, Centroid, Middle, Vertex,
    }

    [ComVisible(true)]
    [Guid("59E17C84-9EC0-4A1A-B46A-967F9772DA75")]
    public enum ShowScales
    {
        ScaleBar = 0, Box, Cross, Circle,
    }

    [ComVisible(true)]
    [Guid("CC851D2C-91C6-46B7-AE70-35252B4C32FF")]
    public enum ColorRaysBy
    {
        Fields = 0, Waves, Config, Wavelength
    }

    [ComVisible(true)]
    [Guid("9FF6CD79-D587-4745-8B70-DEFB4E33EB7F")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Spot : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        Patterns Pattern { get; set; }
        Reference ReferTo { get; set; }
        ShowScales ShowScale { get; set; }
        ColorRaysBy ColorRaysBy { get; set; }

        int RayDensity { get; set; }
        int Configuration { get; set; }

        bool DirectionCosines { get; set; }
        bool UseSymbols { get; set; }
        bool UsePolarization { get; set; }
        bool ScatterRays { get; set; }
        bool ShowAiryDisk { get; set; }
        bool IgnoreLateralColor { get; set; }

        double PlotScale { get; set; }
        double DeltaFocus { get; set; }
        double Exaggerate { get; set; }
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