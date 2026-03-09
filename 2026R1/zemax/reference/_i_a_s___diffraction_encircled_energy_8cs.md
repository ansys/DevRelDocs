# File IAS_DiffractionEncircledEnergy.cs

<a id="_i_a_s___diffraction_encircled_energy_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_DiffractionEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___diffraction_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___diffraction_encircled_energy)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::EncircledEnergy](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.EncircledEnergy
{
    [ComVisible(true)]
    [Guid("AB54B33F-409F-4268-B514-122E1B5B83FF")]
    public enum EncircledEnergyTypes
    {
        Encircled = 1, X_Only = 2, Y_Only = 3, Ensquared = 4,
    }

    [ComVisible(true)]
    [Guid("B4905081-9B49-47D8-8BDF-264636057712")]
    public enum ReferToTypes
    {
        ChiefRay = 0, Centroid = 1, Vertex = 2,
    }                 

    [ComVisible(true)]
    [Guid("FBFE00C5-8FCA-457D-939B-96B650811E79")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_DiffractionEncircledEnergy : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes HuygensSample { get; set; }
        SampleSizes SampleSize { get; set; }
        EncircledEnergyTypes Type { get; set; }
        ReferToTypes ReferTo { get; set; }

        bool ScatterRays { get; set; }
        bool ShowDiffractionLimit { get; set; }
        bool UseDashes { get; set; }
        bool UseHuygensPSF { get; set; }
        bool UsePolarization { get; set; }

        double HuygensDelta { get; set; }
        double RadiusMaximum { get; set; }
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