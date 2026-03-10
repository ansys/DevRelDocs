# File IFile.cs

<a id="_i_file_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::FileManager::IFile](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file)

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
    [Guid("6A96C5FE-A6B4-4FD7-97BF-2BF22BE65A2F")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IFile
    {
        string Name { get; }

        KnownFolder KnownFolder { get; }

        string RelativePath { get; }

        FileSource Source { get; }
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