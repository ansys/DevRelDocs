# File FileSource.cs

<a id="_file_source_8cs"></a>

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
    [Guid("736EA9E7-4540-4B19-9600-794A14CEF939")]
    public enum FileSource
    {
        Unknown = -1,
        Project,
        Root,
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
