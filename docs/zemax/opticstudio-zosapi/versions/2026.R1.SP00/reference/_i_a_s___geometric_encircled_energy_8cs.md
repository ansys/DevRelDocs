# File IAS_GeometricEncircledEnergy.cs

<a id="_i_a_s___geometric_encircled_energy_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_GeometricEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_encircled_energy)

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
    [Guid("103DFA9D-C6C9-49DF-942C-4BF5553469F3")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_GeometricEncircledEnergy : IAS_
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


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
