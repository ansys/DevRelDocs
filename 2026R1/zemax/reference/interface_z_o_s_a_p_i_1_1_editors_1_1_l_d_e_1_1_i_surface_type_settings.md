# Interface ZOSAPI::Editors::LDE::ISurfaceTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings"></a>

![][C#]
![][public]

**Definition**:

This interface is used for selecting any files required by a surface, and for changing surface types. This interface can be accessed via the ILDERow interface.


## Members

* [Filename](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1a2bd7f4a88e2b7f6522d754d5c82f4144)
* [GetFileNames](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1aca5bf7c2e8282b41856be9fe40f8a3cd)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1a6f67d76fde90ff677e30e6f81b69e51b)
* [RequiresFile](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1aba9e75225cbebd1d341529da7da3399a)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1a6902a9206bcb3ec146239136ae56c383)

## Properties

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1a6f67d76fde90ff677e30e6f81b69e51b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ISurfaceTypeSettings.IsValid
```


Gets a value indicating whether all settings are valid.

<code>true</code> if this instance is valid; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceTypeSettings.IsValid"}]}`
-->

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1a6902a9206bcb3ec146239136ae56c383"></a>

![][public]

**Definition**:


```csharp
SurfaceType ZOSAPI.Editors.LDE.ISurfaceTypeSettings.Type
```


Gets the surface type for this interface.

The type.


**Return type**: [SurfaceType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a1481c47c02108d8faf7204b17fcc25ad)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceTypeSettings.Type"}]}`
-->

### Property RequiresFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1aba9e75225cbebd1d341529da7da3399a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ISurfaceTypeSettings.RequiresFile
```


Gets a value indicating whether this surface type requires an external file to function.

<code>true</code> if a file is required; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceTypeSettings.RequiresFile"}]}`
-->

### Property Filename

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1a2bd7f4a88e2b7f6522d754d5c82f4144"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.LDE.ISurfaceTypeSettings.Filename
```


Gets or sets the currently selected file name.

The name of the file. Note that only files returned by GetFileNames are allowed.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceTypeSettings.Filename"}]}`
-->

## Public functions

### Function GetFileNames

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_surface_type_settings_1aca5bf7c2e8282b41856be9fe40f8a3cd"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.LDE.ISurfaceTypeSettings.GetFileNames()
```


Gets all available files for this type.

**Returns**:


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ISurfaceTypeSettings.GetFileNames"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
