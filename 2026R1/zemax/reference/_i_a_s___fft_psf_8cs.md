# File IAS\_FftPsf.cs

<a id="_i_a_s___fft_psf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Psf::IAS\_FftPsf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf_1_1_i_a_s___fft_psf)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Analysis](namespace_z_o_s_a_p_i_1_1_analysis.md#namespace_z_o_s_a_p_i_1_1_analysis)
* [ZOSAPI::Analysis::Settings](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings)
* [ZOSAPI::Analysis::Settings::Psf](namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_psf)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace ZOSAPI.Analysis.Settings.Psf
{
    [ComVisible(true)]
    [Guid("9BC4A9A7-C4B0-469D-88F5-3FEDBF3820F3")]
    public enum PsfSampling
    {
        PsfS_32x32 = 1, PsfS_64x64 = 2, PsfS_128x128 = 3, PsfS_256x256 = 4, PsfS_512x512 = 5,
        PsfS_1024x1024 = 6, PsfS_2048x2048 = 7, PsfS_4096x4096 = 8, PsfS_8192x8192 = 9,
        PsfS_16384x16384 = 10
    }

    [ComVisible(true)]
    [Guid("6066CB5B-3562-4D8C-9B7A-D73C54B03381")]
    public enum PsfRotation
    {
        CW0, CW90, CW180, CW270
    }

    [ComVisible(true)]
    [Guid("B9CC3DDF-5C60-4F7B-8F3F-4608E4BB4543")]
    public enum FftPsfType
    {
        Linear, Log, Phase, Real, Imaginary
    }

    [ComVisible(true)]
    [Guid("D32F67CC-60DF-4C7D-B47C-9BC1CF384533")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_FftPsf : IAS_
    {
        IAS_Field      Field { get; }
        IAS_Surface    Surface { get; }
        IAS_Wavelength Wavelength { get; }
        PsfSampling    SampleSize { get; set; }
        PsfSampling    OutputSize { get; set; } 
        PsfRotation    Rotation { get; set; }
        double         ImageDelta { get; set; }
        bool           UsePolarization { get; set; }
        FftPsfType     Type { get; set; }
        //int            ShowAs { get; set; }        //Don't think we need this since it is only for display
        bool           Normalize { get; set; }        
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