# Interface ZOSAPI::Tools::General::ICreateArchive

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive"></a>

![][C#]
![][public]

**Definition**:

Interfaces and methods for creating a ZAR file. This interface can be accessed via the IOpticalSystemTools interface.


**Inherits from**:

* [ZOSAPI.Tools.ISystemTool](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool)

## Members

* [CanCancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ac4f45510d803f3b4d3cff327ca410395)
* [Cancel](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a7802878e38f79b8d8c42a22c83a174b6)
* [Close](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a5bfa126385b9d0c5619b1aff9a354d31)
* [ErrorMessage](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1abb853f5e7c3b45ad5c17655ae4fcff24)
* [GetArchiveFileName](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive_1af7677fcdee1105b07caf1f7ad7a2a545)
* [IsAsynchronous](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a1fba539730ae26270f3c6fb1148b5066)
* [IsFiniteDuration](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aebe9787f18931c9849dce718a33eec48)
* [IsRunning](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a33389283a3f775e2e178d5ca968a024b)
* [IsValid](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09de138872b4d706bd1f0703724b4956)
* [Progress](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af8f3521e7190d895d9774c38ca51276b)
* [Run](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a4cf991fab30856f8aeb987f4ad19582b)
* [RunAndWaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a26d8cae18772fd31c1d18525a3b8d9ac)
* [RunAndWaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1ae61b47060b4f3ed933b13d794725984e)
* [SetArchiveFileName](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive_1a9e8eb67f50792884fa5a74efe734abc6)
* [Status](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a09fdf9e7469494fb03e7f214b81f187e)
* [Succeeded](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1af1cc4f2a44ac378669ae576f332cc5de)
* [UseDataCompression](interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive.md#interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive_1a94e417523349ff1c39ce5ecb8c9a4258)
* [WaitForCompletion](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1a9076ae50de72dddc49039fd1378ef3db)
* [WaitWithTimeout](interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool.md#interface_z_o_s_a_p_i_1_1_tools_1_1_i_system_tool_1aed6c681640c06ec6fa7dc4fd8d947394)

## Properties

### Property UseDataCompression

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive_1a94e417523349ff1c39ce5ecb8c9a4258"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.General.ICreateArchive.UseDataCompression
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICreateArchive.UseDataCompression"}]}`
-->

## Public functions

### Function GetArchiveFileName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive_1af7677fcdee1105b07caf1f7ad7a2a545"></a>

![][public]


```csharp
string ZOSAPI.Tools.General.ICreateArchive.GetArchiveFileName()
```


Get the file name of the output archive. This will have a default value only if the default file did not already exist.

**Returns**:

The full path and name of the archive.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICreateArchive.GetArchiveFileName"}]}`
-->

### Function SetArchiveFileName

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_general_1_1_i_create_archive_1a9e8eb67f50792884fa5a74efe734abc6"></a>

![][public]


```csharp
bool ZOSAPI.Tools.General.ICreateArchive.SetArchiveFileName(string fullFileName)
```


Set the file name of the output archive, including extension. Note that the output directory must exist prior to this call.

**Parameters**:

* **fullFileName**: Full path and name of the file.


**Returns**:

<code>true</code> if the specified name is valid; otherwise, <code>false</code>.


**Parameters**:

* string **fullFileName**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.General.ICreateArchive.SetArchiveFileName"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
