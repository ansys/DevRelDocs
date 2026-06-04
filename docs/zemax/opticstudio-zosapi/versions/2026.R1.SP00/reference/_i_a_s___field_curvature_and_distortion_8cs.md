# File IAS_FieldCurvatureAndDistortion.cs

<a id="_i_a_s___field_curvature_and_distortion_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_FieldCurvatureAndDistortion](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___field_curvature_and_distortion.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___field_curvature_and_distortion)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Aberrations](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings.Aberrations
{
    [ComVisible(true)]
    [Guid("1DC98C2A-215F-4B16-9939-DDF4CDD0B77C")]
    public enum Distortions
    {
        F_TanTheta, F_Theta, Cal_F_Theta, Cal_F_TanTheta, SMIA_TV
    }

    [ComVisible(true)]
    [Guid("B8A5FDFF-68C4-4397-A46C-C5CAAD41F13D")]
    public enum DisplayAsTypes
    {
        Percent, Absolute
    }

    [ComVisible(true)]
    [Guid("7D93126D-AE09-416A-AB2D-B10F19C0293A")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FieldCurvatureAndDistortion : IAS_
    {
        IAS_Wavelength Wavelength { get; }

        DisplayAsTypes DisplayAs { get; set; }
        Distortions Distortion { get; set; }
        FieldScanDirections ScanType { get; set; }

        bool UseDashes { get; set; }
        bool IgnoreVignette { get; set; }

        double MaximumCurvature { get; set; }
        double MaximumDistortion { get; set; }
        IAS_Field ReferenceField { get; }
        double FieldAspectRatio { get; set; }
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
