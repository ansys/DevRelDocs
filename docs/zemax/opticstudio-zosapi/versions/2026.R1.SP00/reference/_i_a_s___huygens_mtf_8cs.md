# File IAS_HuygensMtf.cs

<a id="_i_a_s___huygens_mtf_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Analysis::Settings::Mtf::IAS\_HuygensMtf](interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtf.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_settings_1_1_mtf_1_1_i_a_s___huygens_mtf)

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
    [Guid("94107009-3416-4682-97EF-10C8B964178F")]
    public enum HuygensMtfTypes
    {
        Modulation,
    }

    [ComVisible(true)]
    [Guid("8B37D664-3CD9-41F3-9ABF-A8EAD68E56E7")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IAS_HuygensMtf : IAS_
    {
        IAS_Field Field { get; }
        IAS_Wavelength Wavelength { get; }

        SampleSizes ImageSampleSize { get; set; }
        SampleSizes PupilSampleSize { get; set; }
        HuygensMtfTypes Type { get; set; }

        bool UseDashes { get; set; }
        bool UsePolarization { get; set; }

        double ImageDelta { get; set; }
        double MaximumFrequency { get; set; }

        int Configuration { get; set; }
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
