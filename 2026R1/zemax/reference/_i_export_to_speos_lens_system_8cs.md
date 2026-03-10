# File IExportToSpeosLensSystem.cs

<a id="_i_export_to_speos_lens_system_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IExportToSpeosLensSystem](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_lens_system)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using ZOSAPI.Analysis;

namespace ZOSAPI.Tools
{
    [Guid("258C4473-4BB0-4930-AFE6-C184B0709370")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IExportToSpeosLensSystem : ISystemTool
    {
        double SensorWidth { get; set; }

        double SensorHeight { get; set; }

        bool SkipSystemReversal { get; set; }

        int SamplePoints { get; set; }

        int XSampling { get; set; }

        int YSampling { get; set; }

        SampleSizes SampleSize { get; set; }

        int Configuration { get; set; }

        int FileFormatVersion { get; }

        bool AssumeRadialSymmetry { get; set; }

        string OPTDistortionFilename { get; set; }
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