# File IAS_Interferogram.cs

<a id="_i_a_s___interferogram_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::IAS\_Interferogram](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___interferogram.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_i_a_s___interferogram)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)

## Source


```csharp
using System;
using System.Runtime.InteropServices;

namespace ZOSAPI.Analysis.Settings//.XXXFolderXXX
{
    [ComVisible(true)]
    [Guid("A6EC2613-1A0E-4B49-9AA4-88F506399FDD")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_Interferogram : IAS_
    {
        IAS_Field Field { get; }
        IAS_Surface Surface { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes Sampling { get; set; }
        ShowAs ShowAs { get; set; }
        Beam Beam_1 { get; set; }
        Beam Beam_2 { get; set; }

        bool Ref_Beam_1_To_Vertex { get; set; }
        bool Ref_Beam_2_To_Vertex { get; set; }
        bool UseExitPupil { get; set; }
        bool ConsiderOPL { get; set; }

        double ScaleFactor { get; set; }
        double X_Tilt { get; set; }
        double Y_Tilt { get; set; }
        double Subaperture_X { get; set; }
        double Subaperture_Y { get; set; }
        double Subaperture_R { get; set; }

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