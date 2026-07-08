# Interface ZOSAPI::Tools::FileManager::IConvertProjectToFileTool

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool"></a>

![][C#]
![][public]

**Definition**:

Tool for converting a Lens Project to a Lens File. This tool can be accessed via the IOpticalSystemTools interface, itself accessible via IOpticalSystem.Tools.

This is patterned off General.IRestoreArchive.

**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [GetFileInUse](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a37fc3434604c8f094d2c3a55bf0eb8b0)
* [GetOutputDirectoryName](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a2872db2dd8b359a4e1a8c8aecaac6d36)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [NumberOfFilesInUse](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a60535708c3be3be16fc27118a77c59dc)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SetFileOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1ac707da42cef55a660a2b25eb6dd9412a)
* [SetFilesAllOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a1976bdd7f5b98fcc614c2c028ef7055e)
* [SetFilesNoOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1aebba74bbe1572df159ece2847ab471c9)
* [SetOutputDirectoryName](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a36d864cd38a9aa0445d8580d1edbb602)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property NumberOfFilesInUse

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a60535708c3be3be16fc27118a77c59dc"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.NumberOfFilesInUse
```


Gets the number of files used by the current system.

The number of files in use by the current system.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.NumberOfFilesInUse"}]}`
-->

## Public functions

### Function GetOutputDirectoryName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a2872db2dd8b359a4e1a8c8aecaac6d36"></a>

![][public]


```csharp
string ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.GetOutputDirectoryName()
```


Gets the name of the output directory where the Lens File will be saved.

**Returns**:


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.GetOutputDirectoryName"}]}`
-->

### Function SetOutputDirectoryName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a36d864cd38a9aa0445d8580d1edbb602"></a>

![][public]


```csharp
bool ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetOutputDirectoryName(string directoryName)
```


Sets the name of the directory where the Lens File will be saved.

**Parameters**:

* **directoryName**: The full name of the output directory.


**Returns**:


```csharp
true
```
 if the specified directory name is valid and names an existing directory; otherwise, 
```csharp
false
```
.


**Parameters**:

* string **directoryName**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetOutputDirectoryName"}]}`
-->

### Function GetFileInUse

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a37fc3434604c8f094d2c3a55bf0eb8b0"></a>

![][public]


```csharp
IFile ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.GetFileInUse(int fileIndex)
```


Gets the file name for the specified file in the archive.

**Parameters**:

* **fileIndex**: The (array) index of the file (0 - NumberOfFilesInUse-1).


**Returns**:


**Parameters**:

* int **fileIndex**

**Return type**: [IFile](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.GetFileInUse"}]}`
-->

### Function SetFileOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1ac707da42cef55a660a2b25eb6dd9412a"></a>

![][public]


```csharp
void ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetFileOverwrite(int fileIndex, bool allowOverwrite)
```


Sets a flag determining whether the file at the specified index will be overwritten if it already exists in the Root.

**Parameters**:

* **fileIndex**: The (array) index of the file (see GetFileInUse).
* **allowOverwrite**: if set to <code>true</code> the file will be overwritten; otherwise it will be skipped.


**Parameters**:

* int **fileIndex**
* bool **allowOverwrite**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetFileOverwrite"}]}`
-->

### Function SetFilesAllOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1a1976bdd7f5b98fcc614c2c028ef7055e"></a>

![][public]


```csharp
void ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetFilesAllOverwrite()
```


All files will be overwritten if they exist.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetFilesAllOverwrite"}]}`
-->

### Function SetFilesNoOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_convert_project_to_file_tool_1aebba74bbe1572df159ece2847ab471c9"></a>

![][public]


```csharp
void ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetFilesNoOverwrite()
```


No files will be overwritten.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.FileManager.IConvertProjectToFileTool.SetFilesNoOverwrite"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
