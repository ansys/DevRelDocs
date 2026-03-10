# File IConvertProjectToFileTool.cs

<a id="_i_convert_project_to_file_tool_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::Tools::FileManager::IConvertProjectToFileTool](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::Tools](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools)
* [ZOSAPI::Tools::FileManager](namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_file_manager)

## Source


```csharp
using System.Runtime.InteropServices;

namespace ZOSAPI.Tools.FileManager
{
    [Guid("80A20A1E-17A8-43B0-81A9-0CCCCB5B919F")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface IConvertProjectToFileTool : ISystemTool
    {
        string GetOutputDirectoryName();

        bool SetOutputDirectoryName(string directoryName);

        int NumberOfFilesInUse { get; }

        IFile GetFileInUse(int fileIndex);

        void SetFileOverwrite(int fileIndex, bool allowOverwrite);

        void SetFilesAllOverwrite();

        void SetFilesNoOverwrite();
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