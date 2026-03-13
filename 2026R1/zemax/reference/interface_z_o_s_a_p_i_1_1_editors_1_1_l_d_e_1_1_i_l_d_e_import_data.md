# Interface ZOSAPI::Editors::LDE::ILDEImportData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data"></a>

![][C#]
![][public]

**Definition**:

Surface properties import tab. This interface can be accessed via the ILDERow interface.


## Members

* [CopyImportDataFrom](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1a4bc9ac352ef0dba2cfc5067fcd202a75)
* [DefaultImportDirectory](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1ae48f90ab8763d71f4d74d95eef91eac3)
* [GetImportFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1afdbb725a9ae3f4fc63ce83da310eabc2)
* [ImportDataFile](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1a63bee9c482754ea8fc4609d14a83c608)

## Properties

### Property DefaultImportDirectory

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1ae48f90ab8763d71f4d74d95eef91eac3"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.LDE.ILDEImportData.DefaultImportDirectory
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEImportData.DefaultImportDirectory"}]}`
-->

## Public functions

### Function ImportDataFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1a63bee9c482754ea8fc4609d14a83c608"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDEImportData.ImportDataFile(string dataFile)
```


**Parameters**:

* string **dataFile**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEImportData.ImportDataFile"}]}`
-->

### Function GetImportFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1afdbb725a9ae3f4fc63ce83da310eabc2"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.LDE.ILDEImportData.GetImportFiles(string directory)
```


**Parameters**:

* string **directory**

**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEImportData.GetImportFiles"}]}`
-->

### Function CopyImportDataFrom

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data_1a4bc9ac352ef0dba2cfc5067fcd202a75"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDEImportData.CopyImportDataFrom(ILDEImportData source)
```


Copies all import data from one surface to another.

**Parameters**:

* **source**: The source.


**Returns**:


**Parameters**:

* [ILDEImportData](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_import_data) **source**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDEImportData.CopyImportDataFrom"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
