# File IConvertToNSCGroup.cs

<a id="_i_convert_to_n_s_c_group_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IConvertToNSCGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_convert_to_n_s_c_group)

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
    [Guid("DBA8CEFE-572F-4B3A-A3D8-90DB538B3BDC")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IConvertToNSCGroup : ISystemTool
    {
        int FirstSurface { get; set; }
        int LastSurface { get; set; }
        bool IgnoreErrors { get; set; }
        bool ConvertFileToNSC { get; set; }
        bool CreateSourcesAndDetectors { get; set; }
        bool ConvertToGlobalCoordinates { get; set; }
        bool ConvertStopToNSCAperture { get; set; }
        double StopMechanicalHalfWidth { get; set; }
        double OverfillFactor { get; set; }
        int StopObjectNumber { get; }
        int StopObjectFace { get; }
        bool HighFidelityConversion { get; set; }
        SampleSizes_Pow2Plus1_X HighFidelityResolution { get; set; }
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
