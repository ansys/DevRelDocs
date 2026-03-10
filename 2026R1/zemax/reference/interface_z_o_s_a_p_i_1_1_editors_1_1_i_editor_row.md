# Interface ZOSAPI::Editors::IEditorRow

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row"></a>

![][C#]
![][public]

**Definition**:

Base interface for all five editor row types. General row information can be accessed via the IEditor interface. Note that this interface can be used to retrieve basic editor information only. For more detailed data, you should use one of the editor-specific interfaces:

[ZOSAPI.Editors.LDE.ILDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row) (from [ZOSAPI.Editors.LDE.ILensDataEditor.GetSurfaceAt](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor_1a25b725fa7de9dd2713ed949ac2199b05))


[ZOSAPI.Editors.NCE.INCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_row) (from [ZOSAPI.Editors.NCE.INonSeqEditor.GetObjectAt](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor_1a4788d547c88f21153f0d2da623c3c9ec))


[ZOSAPI.Editors.MFE.IMFERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row) (from [ZOSAPI.Editors.MFE.IMeritFunctionEditor.GetOperandAt](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor_1a3fa99092db285aac2e8aaf23fd5b0ee0))


[ZOSAPI.Editors.TDE.ITDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row) (from [ZOSAPI.Editors.TDE.IToleranceDataEditor.GetOperandAt](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_tolerance_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_tolerance_data_editor_1ac42d0f1f346b9fb476f9ce9b753dde9d))


[ZOSAPI.Editors.MCE.IMCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row) (from [ZOSAPI.Editors.MCE.IMultiConfigEditor.GetOperandAt](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor_1a357707f4881c5a80b43d2a3de8645523))

**Inherited by**:

* [ZOSAPI.Editors.LDE.ILDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_row)
* [ZOSAPI.Editors.MCE.IMCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row)
* [ZOSAPI.Editors.MFE.IMFERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row)
* [ZOSAPI.Editors.NCE.INCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_row)
* [ZOSAPI.Editors.TDE.ITDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row)

## Members

* [Bookmark](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1a5b38c1b53c51d15c7c1a861b59f2b888)
* [Editor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1ae2f974370142b18c6f7bb8e2fe1e2753)
* [GetCellAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1a6be57f761b7a17d997dc13c11eda45f9)
* [IsValidRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1aff444763eec9d9f1b64205672bbdd68b)
* [RowIndex](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1ad6e9591b2c92d4498b5c30a51dedac59)
* [RowTypeName](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1a54b70201a688651731b2d9be781933a2)

## Properties

### Property Editor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1ae2f974370142b18c6f7bb8e2fe1e2753"></a>

![][public]

**Definition**:


```csharp
IEditor ZOSAPI.Editors.IEditorRow.Editor
```


Gets the editor this row was retrieved from.

The parent editor.


**Return type**: [IEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorRow.Editor"}]}`
-->

### Property IsValidRow

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1aff444763eec9d9f1b64205672bbdd68b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.IEditorRow.IsValidRow
```


Gets a value indicating whether this instance is currently valid. Note that the RowIndex for this object is fixed, so removing one or more rows from the editor may cause it to be invalid.

<code>true</code> if this instance is a valid row; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorRow.IsValidRow"}]}`
-->

### Property RowIndex

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1ad6e9591b2c92d4498b5c30a51dedac59"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.IEditorRow.RowIndex
```


Gets the index of this row in the editor.

The index of the row.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorRow.RowIndex"}]}`
-->

### Property RowTypeName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1a54b70201a688651731b2d9be781933a2"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.IEditorRow.RowTypeName
```


Gets the type of this row; this can be a surface for the LDE, object for the NCE, etc.

The name of the row type.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorRow.RowTypeName"}]}`
-->

### Property Bookmark

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1a5b38c1b53c51d15c7c1a861b59f2b888"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.IEditorRow.Bookmark
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorRow.Bookmark"}]}`
-->

## Public functions

### Function GetCellAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row_1a6be57f761b7a17d997dc13c11eda45f9"></a>

![][public]


```csharp
IEditorCell ZOSAPI.Editors.IEditorRow.GetCellAt(int pos)
```


Gets the cell at the specified index (IEditor.MinColumn to IEditor.MaxColumn).

**Parameters**:

* **pos**: The index of the cell to retrieve.


**Returns**:


**Parameters**:

* int **pos**

**Return type**: [IEditorCell](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorRow.GetCellAt"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)