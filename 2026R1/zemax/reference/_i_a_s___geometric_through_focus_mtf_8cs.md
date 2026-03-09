# File IAS_GeometricThroughFocusMtf.cs

<a id="_i_a_s___geometric_through_focus_mtf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_GeometricThroughFocusMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_through_focus_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___geometric_through_focus_mtf)

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
    [Guid("53E14E49-2013-4565-A500-7057BDF5FB2A")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_GeometricThroughFocusMtf : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes SampleSize { get; set; }

        bool MultiplyByDiffractionLimit { get; set; }
        bool ScatterRays { get; set; }
        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }

        double DeltaFocus { get; set; }
        double Frequency { get; set; }

        int NumberOfSteps { get; set; }
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