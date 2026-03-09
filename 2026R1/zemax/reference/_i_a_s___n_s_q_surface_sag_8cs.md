# File IAS\_NSQSurfaceSag.cs

<a id="_i_a_s___n_s_q_surface_sag_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::NSCSurface::IAS\_NSCSurfaceSag](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1_1_i_a_s___n_s_c_surface_sag.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface_1_1_i_a_s___n_s_c_surface_sag)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::NSCSurface](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_n_s_c_surface)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.NSCSurface
{
    [ComVisible(true)]
    [Guid("C5E0DC78-FD50-4EFB-B65B-743062EA98A9")]
    public enum NSCSagShowAs
    {
        Surface, Contour,
        GreyScale, InverseGreyScale,
        FalseColor, InverseFalseColor,
        X_CrossSection, Y_CrossSection,
    }

    [ComVisible(true)]
    [Guid("674FC61E-1E22-47F4-ACF5-89A4ED919313")]
    public enum NSCSagRemoveOptions
    {
        None = 0,
        BaseROC = 1,
        BestFitSphere = 2,
        AverageSag = 3,
        MinimumSag = 4,
    }

    [ComVisible(true)]
    [Guid("D13F2E9F-1080-4E51-8C0F-F29027B8E50C")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_NSCSurfaceSag : IAS_
    {
        IAS_Surface Surface { get; }
        int ObjectNumber { get; set; }
        int FaceNumber { get; set; }

        SampleSizes_Pow2Plus1_X Sampling { get; set; }
        SurfaceSagData Data { get; set; }
        NSCSagShowAs ShowAs { get; set; }

        double Offset { get; set; }
        double Width { get; set; }
        double Rotation { get; set; }
        double Decenter_X { get; set; }
        double Decenter_Y { get; set; }

        string ContourFormat { get; set; }
        NSCSagRemoveOptions RemoveOption { get; set; }
        BestFitSphereOptions BestFitSphereOption { get; set; }
        bool BFSReverseDirection { get; set; }

        bool KeepObjectTilts { get; set; }

        double ProbeRayOffset { get; set; }
        bool KeepZRD { get; set; }
        string ZRDFilename { get; set; }
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