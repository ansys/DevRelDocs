# File IAS_RMSFieldMap.cs

<a id="_i_a_s___r_m_s_field_map_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::RMS::IAS\_RMSFieldMap](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field_map.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field_map)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::RMS](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s)
* [ZOSAPI::Analysis::Settings::RMS::RMSFieldMap](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_r_m_s_field_map.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_r_m_s_field_map)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Analysis.Settings.RMS.RMSFieldMap;

namespace ZOSAPI.Analysis.Settings.RMS.RMSFieldMap
{
    [ComVisible(true)]
    [Guid("F06C36BC-1A3A-42E6-8F29-9043295CF887")]
    public enum DataType
    {
        Wavefront, SpotRadius, Spot_X, Spot_Y, StrehlRation, PTWavefront,
    }
}

namespace ZOSAPI.Analysis.Settings.RMS
{
    [ComVisible(true)]
    [Guid("ED7A7536-63A9-4463-BE65-2A062EE0D1DF")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RMSFieldMap : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        DataType Data { get; set; }
        Method MethodType { get; set; }
        RayDensities RayDensity { get; set; }
        ReferTo ReferTo { get; set; }
        ShowAs ShowAs { get; set; }

        bool UsePolarization { get; set; }
        bool RemoveVignettingFactors { get; set; }

        int X_FieldSampling { get; set; }
        int Y_FieldSampling { get; set; }

        double X_FieldSize { get; set; }
        double Y_FieldSize { get; set; }

        double PlotScale { get; set; }

        String ContourFormat { get; set; }
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