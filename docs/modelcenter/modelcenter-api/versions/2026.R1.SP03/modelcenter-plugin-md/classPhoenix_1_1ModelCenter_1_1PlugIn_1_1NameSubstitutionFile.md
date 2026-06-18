<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile"></a>
# Class Phoenix::ModelCenter::PlugIn::NameSubstitutionFile

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/NameSubstitutionFile.cs` (line 19)

Mapping of name substitutions.

It is recommended that future work use a simple json or xml file format instead of this class.





The file format is simple space or tab separated format with one item per line. Comment lines begin with hash (#). Each line should contain two fields. Blank lines are ignored.

**Inherits from**:

* Dictionary\< string, string \>

## Members

* [GetSubstitution](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1acbbccdca6ab4f29b3181e2a093505881)
* [NameSubstitutionFile](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1a29532c499b6b066e3768a476c13efb12)
* [NameSubstitutionFile](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1af412b28d8f2712d27dcfab344306eb7e)
* [NameSubstitutionFile](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1afa8c350c7c3a06d864c13131e41df5f8)

## Public functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1a29532c499b6b066e3768a476c13efb12"></a>
### Function NameSubstitutionFile

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.NameSubstitutionFile(Assembly assembly)
```


Load from the location of an assembly. This will look for a file by the name of names.txt next to the location of the assembly. Will not work if the assembly is not loaded from a local file system.

**Parameters**:

* **assembly**: The assembly.



**Parameters**:

* Assembly **assembly**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.NameSubstitutionFile"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1af412b28d8f2712d27dcfab344306eb7e"></a>
### Function NameSubstitutionFile

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.NameSubstitutionFile(Assembly assembly, string fileName)
```


Load from the location of an assembly. Will not work if the assembly is not loaded from a local file system.

**Parameters**:

* **assembly**: The assembly.
* **fileName**: The file name, which should be a relative path relative to the location of the assembly.



**Parameters**:

* Assembly **assembly**
* string **fileName**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.NameSubstitutionFile"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1afa8c350c7c3a06d864c13131e41df5f8"></a>
### Function NameSubstitutionFile

![][public]


```csharp
Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.NameSubstitutionFile(string path)
```


Load from a path.

**Parameters**:

* **path**: The path to the file.



**Parameters**:

* string **path**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.NameSubstitutionFile"}]}`
-->

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1NameSubstitutionFile_1acbbccdca6ab4f29b3181e2a093505881"></a>
### Function GetSubstitution

![][public]


```csharp
string Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.GetSubstitution(string key)
```


Get a substitution for the specified key; if none exists, the key is returned.

**Parameters**:

* **key**: The key to search for


**Returns**:

The substitution to use, or the key if there is no substitution



**Parameters**:

* string **key**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.NameSubstitutionFile.GetSubstitution"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)