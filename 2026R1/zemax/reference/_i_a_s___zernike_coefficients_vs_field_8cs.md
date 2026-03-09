# File IAS_ZernikeCoefficientsVsField.cs

<a id="_i_a_s___zernike_coefficients_vs_field_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_ZernikeCoefficientsVsField](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_coefficients_vs_field.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___zernike_coefficients_vs_field)

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
    [Guid("ACAF8CD2-A87D-44BF-9182-57A2C27D7C24")]
    public enum FieldScanDirections
    {
        Plus_Y = 0, Plus_X = 1, Minus_Y = 2, Minus_X = 3
    }

    [ComVisible(true)]
    [Guid("D4600E8A-2676-4B94-B8CB-1D1A54942A5E")]
    public enum ZernikeCoefficientTypes
    {
        Fringe = 0, Standard = 1, Annular = 2
    }

    [ComVisible(true)]
    [Guid("4812D1CD-DB6B-4767-A14B-34D2F73366E9")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_ZernikeCoefficientsVsField : IAS_
    {
        IAS_Wavelength Wavelength { get; }

        SampleSizes SampleSize { get; set; }
        FieldScanDirections FieldScanDirection { get; set; }
        ZernikeCoefficientTypes ZernikeCoefficientType { get; set; }

        double ScaleMinimum { get; set; }
        double ScaleMaximum { get; set; }
        double ObscurationFactor { get; set; }

        int FieldDensity { get; set; }

        String Coefficients { get; set; }
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