# Interface ZOSAPI::SystemData::ISDFiles

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Files Data. This interface can be accessed via the ISystemData interface.

Usage (see [Example 12](../apiexamples/example_12.md) for a full sample)


C# 
```csharp
            // As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, ABG_DATA.DAT 
            ZOSAPI.SystemData.ISDFiles sysFiles = TheSystem.SystemData.Files;
            sysFiles.CoatingFile = "COATING.DAT";
            sysFiles.ScatterProfile = "SCATTER_PROFILE.DAT";
            sysFiles.ABgDataFile = "ABG_DATA.DAT";
            TheSystem.SystemData.Files.ReloadFiles();
```
 C++ 
```csharp
    // As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, ABG_DATA.DAT 
    ZOSAPI_Interfaces::ISDFilesPtr sysFiles = TheSystem->SystemData->Files;
    sysFiles->CoatingFile = "COATING.DAT";
    sysFiles->ScatterProfile = "SCATTER_PROFILE.DAT";
    sysFiles->ABgDataFile = "ABG_DATA.DAT";
    sysFiles->ReloadFiles();
```
 Matlab 
```csharp
    % As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, ABG_DATA.DAT 
    sysFiles = TheSystem.SystemData.Files;
    sysFiles.CoatingFile = 'COATING.DAT';
    sysFiles.ScatterProfile = 'SCATTER_PROFILE.DAT';
    sysFiles.ABgDataFile = 'ABG_DATA.DAT';
    TheSystem.SystemData.Files.ReloadFiles();
```
 Python 
```csharp
    # As default Files choose: COATING.DAT, SCATTER_PROFILE.DAT, AGB_DATA.DAT
    sysFiles = TheSystem.SystemData.Files
    #sysFiles_cast = CastTo(sysFiles, "ISDFiles")
    # Note: These new files must already be present in the correct folder
    sysFiles.CoatingFile = "COATING.DAT"
    sysFiles.ScatterProfile = "SCATTER_PROFILE.DAT"
    sysFiles.ABgDataFile = "ABG_DATA.DAT"
    sysFiles.ReloadFiles()
```

## Members

* [ABgDataFile](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1ac9512b4a64e7a98020c0f2e61c7c34d8)
* [CoatingFile](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a2fa65dd15661323ab598405b776b853c)
* [GetABgDataFiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a249d16391db6f7802dc8309e8b574766)
* [GetCoatingFiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a4ba9c4fc32ef321b7eea80bb11b9cfea)
* [GetGradiumProfiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a9f18b4bcbd12de678814594568031112)
* [GetScatterProfiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1adefafa097913f87a60ebc5481068272b)
* [GradiumProfile](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a000be1845a679b09d7ce4d4005a6b433)
* [ReloadFiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a1ac7484a1768874af69485fe9255a13c)
* [ScatterProfile](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1aba0d630dfce3e750afced863102b3cac)

## Properties

### Property CoatingFile

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a2fa65dd15661323ab598405b776b853c"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDFiles.CoatingFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.CoatingFile"}]}`
-->

### Property ScatterProfile

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1aba0d630dfce3e750afced863102b3cac"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDFiles.ScatterProfile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.ScatterProfile"}]}`
-->

### Property ABgDataFile

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1ac9512b4a64e7a98020c0f2e61c7c34d8"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDFiles.ABgDataFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.ABgDataFile"}]}`
-->

### Property GradiumProfile

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a000be1845a679b09d7ce4d4005a6b433"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDFiles.GradiumProfile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.GradiumProfile"}]}`
-->

## Public functions

### Function GetCoatingFiles

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a4ba9c4fc32ef321b7eea80bb11b9cfea"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDFiles.GetCoatingFiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.GetCoatingFiles"}]}`
-->

### Function GetScatterProfiles

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1adefafa097913f87a60ebc5481068272b"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDFiles.GetScatterProfiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.GetScatterProfiles"}]}`
-->

### Function GetABgDataFiles

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a249d16391db6f7802dc8309e8b574766"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDFiles.GetABgDataFiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.GetABgDataFiles"}]}`
-->

### Function GetGradiumProfiles

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a9f18b4bcbd12de678814594568031112"></a>

![][public]


```csharp
string[] ZOSAPI.SystemData.ISDFiles.GetGradiumProfiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.GetGradiumProfiles"}]}`
-->

### Function ReloadFiles

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files_1a1ac7484a1768874af69485fe9255a13c"></a>

![][public]


```csharp
void ZOSAPI.SystemData.ISDFiles.ReloadFiles()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDFiles.ReloadFiles"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
