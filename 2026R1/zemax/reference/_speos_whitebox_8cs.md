# File SpeosWhitebox.cs

<a id="_speos_whitebox_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IExportToSpeosWhitebox](interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_export_to_speos_whitebox)

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

namespace ZOSAPI.Tools
{
    [Guid("B22050EE-B4A4-4ECE-97C5-CE1255547B3D")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IExportToSpeosWhitebox : ISystemTool
    {
        int ErrorCode { get; }
        string OutputFilename { get; }
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