# File ILayouts.cs

<a id="_i_layouts_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::ILayouts](interface_z_o_s_a_p_i_1_1_tools_1_1_i_layouts.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_layouts)

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
using ZOSAPI.Tools.Layouts;

namespace ZOSAPI.Tools
{
    [Guid("f48d6968-29fa-4751-8699-2bc94b3e72e9")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface ILayouts
    {
        ICrossSectionExport OpenCrossSectionExport();
        I3DViewerExport Open3DViewerExport();
        IShadedModelExport OpenShadedModelExport();

        INSC3DLayoutExport OpenNSC3DLayoutExport();
        INSCShadedModelExport OpenNSCShadedModelExport();
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