# File IFileManager.cs

<a id="_i_file_manager_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::IFileManager](interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_file_manager)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)

## Source


```csharp
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools
{
    [ComVisible(true)]
    [Guid("55D27838-93B3-488D-A86C-2975070C3AE1")]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IFileManager : ISystemTool
    {
        FileManager.Operation Operation { get; set; }

        int NumberOfFiles { get; }

        FileManager.IFile GetFile(int fileNumber);

        bool UseProjectFile(FileManager.KnownFolder knownFolder, string relativePath, string name);

        bool UseRootFile(FileManager.KnownFolder knownFolder, string relativePath, string name);

        bool AddAdditionalFile(FileManager.KnownFolder knownFolder, string relativePath, string fileName);

        bool RemoveAdditionalFile(FileManager.KnownFolder project, string relativePath, string fileName);
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