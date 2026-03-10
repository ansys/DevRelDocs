# File IAS_Fan.cs

<a id="_i_a_s___fan_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Fans::IAS\_Fan](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_fans_1_1_i_a_s___fan.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_fans_1_1_i_a_s___fan)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Fans](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_fans.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_fans)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Fans
{
    [ComVisible(true)]
    [Guid("B6387306-BE6D-4F21-BA1D-31E4CB45BEE3")]
    public enum SagittalAberrationComponent
    {
        Aberration_X = 0, Aberration_Y = 1,
    }

    [ComVisible(true)]
    [Guid("ADE64B08-169F-441E-8CCA-6092241363A4")]
    public enum TangentialAberrationComponent
    {
        Aberration_Y = 0, Aberration_X = 1,
    }

    [ComVisible(true)]
    [Guid("EB02A480-7000-4B85-A0B9-98EAB30B96A9")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Fan : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        int NumberOfRays { get; set; }

        double PlotScale { get; set; }

        bool CheckApertures { get; set; }
        bool VignettedPupil { get; set; }
        bool UseDashes { get; set; }

        SagittalAberrationComponent Sagittal { get; set; }
        TangentialAberrationComponent Tangential { get; set; }
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