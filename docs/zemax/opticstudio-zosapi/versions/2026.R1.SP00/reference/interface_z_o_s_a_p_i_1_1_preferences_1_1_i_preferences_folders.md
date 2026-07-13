# Interface ZOSAPI::Preferences::IPreferencesFolders

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders"></a>

![][C#]
![][public]

**Definition**:

Allows configuration of settings from the OpticStudio Preferences -> Folders tab in OpticStudio. <br/>

Note - every time a setting is changed the Preference file in use will be automatically saved, but only if a valid file name is defined for IZOSAPI_Connection.PreferencesFile prior to connecting to the ZOS-API. The excpetion however is the DataDirectory field; it is global, so changing that will effect all OpticStudio users.

## Members

* [ChangeDataDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1aa704f71120228a93ccee178e87454ae2)
* [CoatingDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1affc70ee09a10fb68e6dd72cd5302b4ac)
* [CreoDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a299071721ad924840d763fd58596ed08)
* [CreoInstallDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a74a23494bc89c5e9856103c31cddae4b)
* [DataDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a24ef618f5aaca51045daf6cf696a516c)
* [GlassDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a7ea107417454aa3911cb894c9519fc7d)
* [ImagesDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a86ef282b31ac99e56520d28d79ad9ea7)
* [InventorDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a8f0f168c1ccd83c5052d54aa844a87aa)
* [LensDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a6543a61b954be78d1da6f607cfc7a831)
* [MatlabDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a8e2bc96451e2a2df5ef22e1cf5f4854c)
* [ObjectsDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ac665ef818d63bd6676735ecf5a353881)
* [PopDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ac9bed9ef056319761c863d1391800aaa)
* [ProgramDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1aa44ce436b3530ce8bd5671a46212915e)
* [ScatterDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ae8030df55c42f4251f50a8ffcfd78f1d)
* [SolidWorksDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1afec1470c7647331cf1a9fdfa71a84661)
* [UndoDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ae0053df0608a867d67ec341bd7036adf)
* [ZplDirectory](interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders.md#interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a018c41fed0d327d273b381a871ba3dbf)

## Properties

### Property ProgramDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1aa44ce436b3530ce8bd5671a46212915e"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.ProgramDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.ProgramDirectory"}]}`
-->

### Property DataDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a24ef618f5aaca51045daf6cf696a516c"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.DataDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.DataDirectory"}]}`
-->

### Property LensDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a6543a61b954be78d1da6f607cfc7a831"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.LensDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.LensDirectory"}]}`
-->

### Property ObjectsDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ac665ef818d63bd6676735ecf5a353881"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.ObjectsDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.ObjectsDirectory"}]}`
-->

### Property ZplDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a018c41fed0d327d273b381a871ba3dbf"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.ZplDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.ZplDirectory"}]}`
-->

### Property GlassDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a7ea107417454aa3911cb894c9519fc7d"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.GlassDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.GlassDirectory"}]}`
-->

### Property CoatingDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1affc70ee09a10fb68e6dd72cd5302b4ac"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.CoatingDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.CoatingDirectory"}]}`
-->

### Property PopDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ac9bed9ef056319761c863d1391800aaa"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.PopDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.PopDirectory"}]}`
-->

### Property ImagesDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a86ef282b31ac99e56520d28d79ad9ea7"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.ImagesDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.ImagesDirectory"}]}`
-->

### Property SolidWorksDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1afec1470c7647331cf1a9fdfa71a84661"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.SolidWorksDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.SolidWorksDirectory"}]}`
-->

### Property InventorDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a8f0f168c1ccd83c5052d54aa844a87aa"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.InventorDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.InventorDirectory"}]}`
-->

### Property CreoDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a299071721ad924840d763fd58596ed08"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.CreoDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.CreoDirectory"}]}`
-->

### Property MatlabDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a8e2bc96451e2a2df5ef22e1cf5f4854c"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.MatlabDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.MatlabDirectory"}]}`
-->

### Property ScatterDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ae8030df55c42f4251f50a8ffcfd78f1d"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.ScatterDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.ScatterDirectory"}]}`
-->

### Property UndoDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1ae0053df0608a867d67ec341bd7036adf"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.UndoDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.UndoDirectory"}]}`
-->

### Property CreoInstallDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1a74a23494bc89c5e9856103c31cddae4b"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Preferences.IPreferencesFolders.CreoInstallDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.CreoInstallDirectory"}]}`
-->

## Public functions

### Function ChangeDataDirectory

<a id="interface_z_o_s_a_p_i_1_1_preferences_1_1_i_preferences_folders_1aa704f71120228a93ccee178e87454ae2"></a>

![][public]


```csharp
void ZOSAPI.Preferences.IPreferencesFolders.ChangeDataDirectory(string newDirectory)
```


**Parameters**:

* string **newDirectory**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Preferences.IPreferencesFolders.ChangeDataDirectory"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
