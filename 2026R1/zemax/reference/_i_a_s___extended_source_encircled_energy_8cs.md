# File IAS_ExtendedSourceEncircledEnergy.cs

<a id="_i_a_s___extended_source_encircled_energy_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_ExtendedSourceEncircledEnergy](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___extended_source_encircled_energy.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___extended_source_encircled_energy)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::EncircledEnergy](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.EncircledEnergy
{
    [ComVisible(true)]
    [Guid("F7B69877-3E92-4CCE-A043-9F869282AFDB")]
    public enum ExtendedSourceTypes
    {
        Encircled = 1, X_Only = 2, Y_Only = 3, Ensquared = 4,
        X_Distrib = 5, Y_Distrib = 6, 
    }

    [ComVisible(true)]
    [Guid("E387594F-F19F-4794-8B96-835A9CDE6A86")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_ExtendedSourceEncircledEnergy : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        ExtendedSourceTypes Type { get; set; }
        ReferToTypes ReferTo { get; set; }

        int RaysX1000 { get; set; }

        bool MultiplyByDiffractionLimit { get; set; }
        bool RemoveVignettingFactors { get; set; }
        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }

        double MaximumDistance { get; set; }
        double FieldSize { get; set; }
        double Rotation { get; set; }

        string ImageName { get; set; }

        //List<string> AvailableFiles { get; set; }
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