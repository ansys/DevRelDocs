# File IAS_RMSField.cs

<a id="_i_a_s___r_m_s_field_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::RMS::IAS\_RMSField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_i_a_s___r_m_s_field)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::RMS](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s)
* [ZOSAPI::Analysis::Settings::RMS::RMSField](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_r_m_s_field.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_r_m_s_1_1_r_m_s_field)

## Source


```csharp
using System;
using System.Runtime.InteropServices;
using ZOSAPI.Analysis.Settings;
using ZOSAPI.Analysis.Settings.RMS.RMSField;

namespace ZOSAPI.Analysis.Settings.RMS.RMSField
{
    [ComVisible(true)]
    [Guid("FEF8B33D-25C7-47F5-BDBA-471DBCB60937")]
    public enum DataType
    {
        Wavefront, SpotRadius, Spot_X, Spot_Y, StrehlRation, 
    }
}

namespace ZOSAPI.Analysis.Settings.RMS
{
    [ComVisible(true)]
    [Guid("E0258114-CA7E-45BC-9EFC-14A44012A1FD")]
    public enum Method
    {
        GaussQuad, RectArray,
    }

    [ComVisible(true)]
    [Guid("EA15AF5D-26B6-4242-9B61-B6838E7D47E2")]
    public enum FieldDensities
    {
        FieldDens_5 = 1, FieldDens_10, FieldDens_15, FieldDens_20, FieldDens_25,
        FieldDens_30, FieldDens_35, FieldDens_40, FieldDens_45, FieldDens_50,
        FieldDens_55, FieldDens_60, FieldDens_65, FieldDens_70, FieldDens_75,
        FieldDens_80, FieldDens_85, FieldDens_90, FieldDens_95, FieldDens_100,
    }

    [ComVisible(true)]
    [Guid("63E3DCBD-C900-4449-8F02-8FE2911326D8")]
    public enum FocusDensities
    {
        FocusDens_5 = 1, FocusDens_10, FocusDens_15, FocusDens_20, FocusDens_25,
        FocusDens_30, FocusDens_35, FocusDens_40, FocusDens_45, FocusDens_50,
        FocusDens_55, FocusDens_60, FocusDens_65, FocusDens_70, FocusDens_75,
        FocusDens_80, FocusDens_85, FocusDens_90, FocusDens_95, FocusDens_100,
    }

    [ComVisible(true)]
    [Guid("C8EEF18D-6060-4EEF-B419-B9BB9E0A2DDB")]
    public enum WaveDensities
    {
        WaveDens_5 = 1, WaveDens_10, WaveDens_15, WaveDens_20, WaveDens_25,
        WaveDens_30, WaveDens_35, WaveDens_40, WaveDens_45, WaveDens_50,
        WaveDens_55, WaveDens_60, WaveDens_65, WaveDens_70, WaveDens_75,
        WaveDens_80, WaveDens_85, WaveDens_90, WaveDens_95, WaveDens_100,
    }

    [ComVisible(true)]
    [Guid("A535341C-EBAB-4106-8DCD-3E7042FF3676")]
    public enum RayDensities
    {
        RayDens_32x32 = 1, RayDens_64x64 = 2, RayDens_128x128 = 3, RayDens_256x256 = 4, RayDens_512x512 = 5,
        RayDens_1024x1024 = 6, RayDens_2048x2048 = 7, RayDens_4096x4096 = 8, RayDens_8192x8192 = 9,
        RayDens_16384x16384 = 10,

        RayDens_1 = 1, RayDens_2, RayDens_3, RayDens_4, RayDens_5, RayDens_6, RayDens_7, RayDens_8, RayDens_9,
        RayDens_10, RayDens_11, RayDens_12, RayDens_13, RayDens_14, RayDens_15, RayDens_16, RayDens_17, RayDens_18, RayDens_19, RayDens_20,
    }

    [ComVisible(true)]
    [Guid("4A2B99D9-8D13-4520-9317-DC0ED3076E49")]
    public enum ReferTo
    {
        ChiefRay, Centroid,
    }

    [ComVisible(true)]
    [Guid("8A52F615-6599-4FC2-BD8D-036C2094C792")]
    public enum Orientations
    {
        Plus_Y, Minus_Y, Plus_X, Minus_X,
    }

    [ComVisible(true)]
    [Guid("C56BC141-E5F2-4771-BEF2-652EB0D5B88F")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_RMSField : IAS_
    {
        IAS_Wavelength Wavelength { get; }

        DataType Data { get; set; }
        FieldDensities FieldDensity { get; set; }
        RayDensities RayDensity { get; set; }
        ReferTo ReferTo { get; set; }
        Method Method { get; set; }
        Orientations Orientation { get; set; }

        bool ShowDiffractionLimit { get; set; }
        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }
        bool RemoveVignettingFactors { get; set; }

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