# File Operation.cs

<a id="_operation_8cs"></a>

![][C#]


## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::FileManager](namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager)

## Source


```csharp
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools.FileManager
{
    [ComVisible(true)]
    [Guid("3D22E39B-DC26-4930-89B1-06D2CBFB5506")]
    public enum Operation
    {
        None,
        GetFilesInUse,
        GetAdditionalFiles,
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