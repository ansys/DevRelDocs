# File IAS\_FullFieldAberration.cs

<a id="_i_a_s___full_field_aberration_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Aberrations::IAS\_FullFieldAberration](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___full_field_aberration.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_aberrations_1_1_i_a_s___full_field_aberration)

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
    [Guid("F587604B-F61D-4A71-93C2-8FD95E66A92A")]
    public enum FFA_DisplayTypes
    {
        Absolute = 0,
        Relative = 1,
        Average = 2,
    }

    [ComVisible(true)]
    [Guid("B7CFBA25-009C-43DE-818E-7A44C6330C3C")]
    public enum FFA_ShowAsTypes
    {
        GreyScale = 0,
        GreyScaleInverted = 1,
        FalseColor = 2,
        FalseColorInverted = 3,
        Icons = 4,
    }

    [ComVisible(true)]
    [Guid("131383F3-351F-41E3-AC40-F11F416B7C4A")]
    public enum FFA_AberrationTypes
    {
        Defocus = 0,
        PrimaryAstigmatism = 1,
        PrimaryComa = 2,
        SpecifiedTerm = 3,
    }

    [ComVisible(true)]
    [Guid("D3709CCF-B855-47D4-8F7A-9CD29CBD7E48")]
    public enum FFA_FieldShapes
    {
        Rectangular = 0,
        Elliptical = 1,
    }

    [ComVisible(true)]
    [Guid("6CE88CB4-4611-4103-B8C3-EED54E12AAEB")]
    public enum FFA_DecompositionTypes
    {
        ZernikeTerms = 0,
    }

    [ComVisible(true)]
    [Guid("5FEC3315-407B-4377-995D-16F77D21D804")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FullFieldAberration : IAS_
    {
        FFA_FieldShapes FieldShape { get; set; }
        double XFieldWidth { get; set; }
        double YFieldWidth { get; set; }
        FFA_DecompositionTypes Decomposition { get; set; }
        int MaximumTerm { get; set; }
        FFA_AberrationTypes AberrationType { get; }
        int AberrationNumber { get; }
        bool SetAberrationByType(FFA_AberrationTypes type);
        bool SetAberrationByNumber(int aberrationNumber);

        IAS_Wavelength Wavelength { get; }
        IAS_Field Field { get; }
        int XFieldSampling { get; set; }
        int YFieldSampling { get; set; }
        SampleSizes PupilSampling { get; set; }
        FFA_ShowAsTypes ShowAs { get; set; }
        FFA_DisplayTypes Display { get; set; }
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