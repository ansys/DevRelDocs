# File IAS_WavefrontMap.cs

<a id="_i_a_s___wavefront_map_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::IAS\_WavefrontMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavefront_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___wavefront_map)

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
    [Guid("720E379A-A6B0-4EC1-9416-57C400FAE236")]
    public enum STAREffectsOptions
    {
        On = 0,
        Difference = 1
    }

    [ComVisible(true)]
    [Guid("5BCC6767-E4AD-4428-812A-F800AA512CF8")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_WavefrontMap : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        ShowAs ShowAs { get; set; }
        Rotations Rotation { get; set; }
        SampleSizes Sampling { get; set; }
        Polarizations Polarization { get; set; }

        bool ReferenceToPrimary { get; set; }
        bool UseExitPupil { get; set; }
        bool RemoveTilt { get; set; }

        double Scale { get; set; }
        double Subaperture_X { get; set; }
        double Subaperture_Y { get; set; }
        double Subaperture_R { get; set; }

        String ContourFormat { get; set; }

        STAREffectsOptions STAREffects { get; set; }
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