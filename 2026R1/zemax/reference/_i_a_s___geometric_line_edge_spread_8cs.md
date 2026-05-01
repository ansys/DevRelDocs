# File IAS_GeometricLineEdgeSpread.cs

<a id="_i_a_s___geometric_line_edge_spread_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::EncircledEnergy::IAS\_GeometricLineEdgeSpread](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_line_edge_spread.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_encircled_energy_1_1_i_a_s___geometric_line_edge_spread)

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
    [Guid("83E4B3A9-33A6-41F4-904C-0060AC2B15A7")]
    public enum GeometricLineEdgeSpreadTypes
    {
        LineEdge = 1, Line = 2, Edge = 3,
    }

    [ComVisible(true)]
    [Guid("5434F735-F258-4A1E-B16D-C1FA426C0618")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_GeometricLineEdgeSpread : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes SampleSize { get; set; }
        GeometricLineEdgeSpreadTypes Type { get; set; }

        bool UsePolarization { get; set; }

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
