# Interface ZOSAPI::Tools::General::IRestoreArchive

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for restoring a ZAR file. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [ArchiveFile](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a4dcb38a82acb6f424037751f10f38f0d)
* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [ExtractAllFilesToProjectDirectory](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1aa758f94f5881b7864ad10301bd6eb38d)
* [GetFileNameInArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a0c94f05a6e8bcea5c4d89605578ed347)
* [GetOutputFolder](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1aa6b9453979452990a7a9d9ec1d976cab)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [NumberOfFilesInArchive](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a487165dfd78be98bb9298d23a6b00ded)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SetFileName](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a6c49ac1f2c5319dad40dc974dc8e3620)
* [SetFileOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a027ce4c26687f3b57e27529a297ef41b)
* [SetFilesAllOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1acf7e00569b30d5b2d008f8d45ffbd08e)
* [SetFilesNoOverwrite](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1ad459d2a1eabce5975867a380a9cde612)
* [SetOutputFolder](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a9e1c0a8380cebf7d4f6446a6a12f72af)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property ArchiveFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a4dcb38a82acb6f424037751f10f38f0d"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.General.IRestoreArchive.ArchiveFile
```


Gets the name of the currently selected input archive.

The full path to the archive file.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.ArchiveFile"}]}`
-->

### Property NumberOfFilesInArchive

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a487165dfd78be98bb9298d23a6b00ded"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.General.IRestoreArchive.NumberOfFilesInArchive
```


Gets the number of files stored in the specified archive.

The number of files in archive.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.NumberOfFilesInArchive"}]}`
-->

### Property ExtractAllFilesToProjectDirectory

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1aa758f94f5881b7864ad10301bd6eb38d"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.IRestoreArchive.ExtractAllFilesToProjectDirectory
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.ExtractAllFilesToProjectDirectory"}]}`
-->

## Public functions

### Function SetFileName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a6c49ac1f2c5319dad40dc974dc8e3620"></a>

![][public]


```csharp
ArchiveFileStatus ZOSAPI.Tools.General.IRestoreArchive.SetFileName(string archiveFile)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.SetFileName"}]}`
-->

### Function GetOutputFolder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1aa6b9453979452990a7a9d9ec1d976cab"></a>

![][public]


```csharp
string ZOSAPI.Tools.General.IRestoreArchive.GetOutputFolder()
```


Gets the currently selected output folder.

**Returns**:


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.GetOutputFolder"}]}`
-->

### Function SetOutputFolder

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a9e1c0a8380cebf7d4f6446a6a12f72af"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.IRestoreArchive.SetOutputFolder(string folder)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.SetOutputFolder"}]}`
-->

### Function GetFileNameInArchive

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a0c94f05a6e8bcea5c4d89605578ed347"></a>

![][public]


```csharp
string ZOSAPI.Tools.General.IRestoreArchive.GetFileNameInArchive(int fileNumber)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.GetFileNameInArchive"}]}`
-->

### Function SetFileOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1a027ce4c26687f3b57e27529a297ef41b"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IRestoreArchive.SetFileOverwrite(int fileNumber, bool allowOverwrite)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.SetFileOverwrite"}]}`
-->

### Function SetFilesAllOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1acf7e00569b30d5b2d008f8d45ffbd08e"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IRestoreArchive.SetFilesAllOverwrite()
```


All files will be overwritten if they exist.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.SetFilesAllOverwrite"}]}`
-->

### Function SetFilesNoOverwrite

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_restore_archive_1ad459d2a1eabce5975867a380a9cde612"></a>

![][public]


```csharp
void ZOSAPI.Tools.General.IRestoreArchive.SetFilesNoOverwrite()
```


No files will be overwritten.


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.IRestoreArchive.SetFilesNoOverwrite"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)