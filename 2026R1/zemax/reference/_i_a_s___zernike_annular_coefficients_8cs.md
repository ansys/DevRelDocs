# File IAS_ZernikeAnnularCoefficients.cs

<a id="_i_a_s___zernike_annular_coefficients_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_ZernikeAnnularCoefficients](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_annular_coefficients.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_annular_coefficients)

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
    [Guid("8556F78B-1E22-4994-A960-508502F8A594")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_ZernikeAnnularCoefficients : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes SampleSize { get; set; }

        bool ReferenceOBDToVertex { get; set; }

        double Sx { get; set; }
        double Sy { get; set; }
        double Sr { get; set; }
        double Obscuration { get; set; }

        int MaximumNumberOfTerms { get; set; }
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
