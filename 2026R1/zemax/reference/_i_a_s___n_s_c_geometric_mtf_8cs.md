# File IAS_NSCGeometricMtf.cs

<a id="_i_a_s___n_s_c_geometric_mtf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_NSCGeometricMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___n_s_c_geometric_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___n_s_c_geometric_mtf)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Mtf](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Mtf
{
    [ComVisible(true)]
    [Guid("A81C6597-89DB-407C-9C09-B5843F6F7647")]
    public interface IAS_NSCGeometricMtf : IAS_
    {
        IAS_Detector Detector { get; }

        String RayDatabaseFilename { get; set; }
        String Filter { get; set; }

        Double MaximumFrequency { get; set; }
        Double MinimumPlotScale { get; set; }
        Double MaximumPlotScale { get; set; }
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