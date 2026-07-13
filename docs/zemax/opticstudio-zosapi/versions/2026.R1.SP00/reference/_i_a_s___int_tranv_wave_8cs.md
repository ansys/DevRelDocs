# File IAS_IntTranvWave.cs

<a id="_i_a_s___int_tranv_wave_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Materials::IAS\_InternalTransmissionvsWavelength](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___internal_transmissionvs_wavelength.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials_1_1_i_a_s___internal_transmissionvs_wavelength)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Materials](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_materials)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Materials
{
    [ComVisible(true)]
    [Guid("64A77D43-69BA-426B-8AA9-BB43B52BBF70")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_InternalTransmissionvsWavelength : IAS_
    {
        string Glass1 { get; set; }
        string Glass2 { get; set; }
        string Glass3 { get; set; }
        string Glass4 { get; set; }
        double MinimumWave { get; set; }
        double MaximumWave { get; set; }
        double MinimumTransmission { get; set; }
        double MaximumTransmission { get; set; }
        double Thickness { get; set; }
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
