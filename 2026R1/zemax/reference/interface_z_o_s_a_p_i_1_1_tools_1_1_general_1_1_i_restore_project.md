# Interface ZOSAPI::Tools::General::IRestoreProject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project"></a>

![][C#]
![][public]

**Definition**:


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [ArchiveFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1af81068edacc3ae5a3e71cf4d0d5d53a0)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [GetAdditionalFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a53ab006ccdc13b4f53a9c134297c2dfc)
* [GetFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a9c3c93cfa92f159396268fa017a387d3)
* [GetFileNameInArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1ae7a6236b8576b4c2f521f4d06ef844a7)
* [GetOutputFolder](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a50a34d8115adaa07547502576f1e3cfb)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [NumberOfAdditionalFiles](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a0d8c43d61a4617637b9e173058f58ead)
* [NumberOfFilesInArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a7e4006409a2a7b434bc28ba4966a3912)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SetAllFilesToProject](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1af0ba08680aa0a768d7136cb74e702a09)
* [SetAllFilesToRoot](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a96d9dc845a9c46c9d86ffabc4de2007b)
* [SetFileName](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1aaef7980abca5be166187cb41c8b9d68c)
* [SetFileOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a04e6dd636225ec80094b051cd4ba626e)
* [SetFilesAllOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1abda8b5159ddc889c1b1492a9916697aa)
* [SetFilesNoOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1acb6b79d05836ddba6c1046a29c12dd21)
* [SetOutputFolder](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a63992b74735866b9473dd2d1869a481d)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [UseProjectFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1ab4aba206136a922eaf92a331f33cc419)
* [UseRootFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a7944c7640c2f2367ae330db9e2705a32)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property ArchiveFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1af81068edacc3ae5a3e71cf4d0d5d53a0"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.General.IRestoreProject.ArchiveFile
```


Gets the name of the currently selected input archive.

The full path to the archive file.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.ArchiveFile"}]}`
-->

### Property NumberOfFilesInArchive

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a7e4006409a2a7b434bc28ba4966a3912"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IRestoreProject.NumberOfFilesInArchive
```


Gets the number of files stored in the specified archive.

The number of files in archive.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.NumberOfFilesInArchive"}]}`
-->

### Property NumberOfAdditionalFiles

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a0d8c43d61a4617637b9e173058f58ead"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IRestoreProject.NumberOfAdditionalFiles
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.NumberOfAdditionalFiles"}]}`
-->

## Public functions

### Function SetFileName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1aaef7980abca5be166187cb41c8b9d68c"></a>

![][public]


```csharp
ArchiveFileStatus ZOSAPI.Tools.General.IRestoreProject.SetFileName(string archiveFile)
```


Sets the name of the input archive.

**Parameters**:

* **archiveFile**: The full path to the archive file.


**Returns**:

The results from trying to read the archive.


**Parameters**:

* string **archiveFile**

**Return type**: [ArchiveFileStatus](namespace_z_o_s_a_p_i_1_1_tools_1_1_general.md#namespace_z_o_s_a_p_i_1_1_tools_1_1_general_1a7b95b4d18da7ad5644a2419d07a575e4)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetFileName"}]}`
-->

### Function GetOutputFolder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a50a34d8115adaa07547502576f1e3cfb"></a>

![][public]


```csharp
string ZOSAPI.Tools.General.IRestoreProject.GetOutputFolder()
```


Gets the currently selected output folder.

**Returns**:


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.GetOutputFolder"}]}`
-->

### Function SetOutputFolder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a63992b74735866b9473dd2d1869a481d"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.IRestoreProject.SetOutputFolder(string folder)
```


Sets the desired output folder.

**Parameters**:

* **folder**: The folder.


**Returns**:


```csharp
true
```
 if the specified folder is valid and exists; otherwise, 
```csharp
false
```
.


**Parameters**:

* string **folder**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetOutputFolder"}]}`
-->

### Function GetFileNameInArchive

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1ae7a6236b8576b4c2f521f4d06ef844a7"></a>

![][public]


```csharp
string ZOSAPI.Tools.General.IRestoreProject.GetFileNameInArchive(int fileNumber)
```


Gets the file name for the specified file in the archive.

**Parameters**:

* **fileNumber**: The file number (0 - NumberOfFilesInArchive-1).


**Returns**:


**Parameters**:

* int **fileNumber**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.GetFileNameInArchive"}]}`
-->

### Function SetFileOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a04e6dd636225ec80094b051cd4ba626e"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IRestoreProject.SetFileOverwrite(int fileNumber, bool allowOverwrite)
```


Sets a flag determining whether the file at the specified index will be overwritten if it already exists.

**Parameters**:

* **fileNumber**: The file number (see GetFileNameInArchive).
* **allowOverwrite**: if set to <code>true</code> the file will be overwritten; otherwise it will be skipped.


**Parameters**:

* int **fileNumber**
* bool **allowOverwrite**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetFileOverwrite"}]}`
-->

### Function SetFilesAllOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1abda8b5159ddc889c1b1492a9916697aa"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IRestoreProject.SetFilesAllOverwrite()
```


All files will be overwritten if they exist.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetFilesAllOverwrite"}]}`
-->

### Function SetFilesNoOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1acb6b79d05836ddba6c1046a29c12dd21"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IRestoreProject.SetFilesNoOverwrite()
```


No files will be overwritten.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetFilesNoOverwrite"}]}`
-->

### Function GetFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a9c3c93cfa92f159396268fa017a387d3"></a>

![][public]


```csharp
FileManager.IFile ZOSAPI.Tools.General.IRestoreProject.GetFile(int fileNumber)
```


**Parameters**:

* int **fileNumber**

**Return type**: [FileManager.IFile](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.GetFile"}]}`
-->

### Function UseProjectFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1ab4aba206136a922eaf92a331f33cc419"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.IRestoreProject.UseProjectFile(int fileNumber)
```


**Parameters**:

* int **fileNumber**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.UseProjectFile"}]}`
-->

### Function UseRootFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a7944c7640c2f2367ae330db9e2705a32"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.IRestoreProject.UseRootFile(int fileNumber)
```


**Parameters**:

* int **fileNumber**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.UseRootFile"}]}`
-->

### Function SetAllFilesToProject

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1af0ba08680aa0a768d7136cb74e702a09"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.IRestoreProject.SetAllFilesToProject()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetAllFilesToProject"}]}`
-->

### Function SetAllFilesToRoot

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a96d9dc845a9c46c9d86ffabc4de2007b"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.IRestoreProject.SetAllFilesToRoot()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.SetAllFilesToRoot"}]}`
-->

### Function GetAdditionalFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_project_1a53ab006ccdc13b4f53a9c134297c2dfc"></a>

![][public]


```csharp
FileManager.IFile ZOSAPI.Tools.General.IRestoreProject.GetAdditionalFile(int addfileNumber)
```


**Parameters**:

* int **addfileNumber**

**Return type**: [FileManager.IFile](interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file.md#interface_z_o_s_a_p_i_1_1_tools_1_1_file_manager_1_1_i_file)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreProject.GetAdditionalFile"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)