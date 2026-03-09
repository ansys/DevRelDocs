# File IAS\_RMSLambdaDiagram.cs

<a id="_i_a_s___r_m_s_lambda_diagram_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::RMS::IAS\_RMSLambdaDiagram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_lambda_diagram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_lambda_diagram)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::RMS](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings.RMS;
using ZOSAPI.Analysis.Settings.RMS.RMSField;

namespace ZOSAPI.Analysis.Settings.RMS
{
    [ComVisible(true)]
    [Guid("C10CE9DF-309E-431B-8263-5B51EA781C5E")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RMSLambdaDiagram : IAS_
    {
        IAS_Field Field { get; }

        RayDensities RayDensity { get; set; }
        WaveDensities WaveDensity { get; set; }
        DataType Data { get; set; }
        ReferTo ReferTo { get; set; }
        Method Method { get; set; }

        bool UseDashes { get; set; }
        bool ShowDiffractionLimit { get; set; }
        bool UsePolarization { get; set; }

        double PlotScale { get; set; }

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