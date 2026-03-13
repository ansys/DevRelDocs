# Interface ZOSAPI::Editors::IEditor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor"></a>

![][C#]
![][public]

**Definition**:

Base interface for all five editor types. All editors can be accessed via the IOpticalSystem interface. Note that this interface can be used to retrieve basic editor information only. For more detailed data, you should use one of the editor-specific interfaces:

IOpticalSystem.LDE


IOpticalSystem.NCE


IOpticalSystem.MFE


IOpticalSystem.MCE


IOpticalSystem.TDE

**Inherited by**:

* [ZOSAPI.Editors.LDE.ILensDataEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_lens_data_editor)
* [ZOSAPI.Editors.MCE.IMultiConfigEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_multi_config_editor)
* [ZOSAPI.Editors.MFE.IMeritFunctionEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_merit_function_editor)
* [ZOSAPI.Editors.NCE.INonSeqEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_non_seq_editor)
* [ZOSAPI.Editors.TDE.IToleranceDataEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_tolerance_data_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_tolerance_data_editor)

## Members

* [AddRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a7a4b1663300efa48b1af005b71c5e6cc)
* [DeleteAllRows](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a6a214f428fde561b408723563cb63d16)
* [DeleteRowAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1acc52182a5f56f3559c49af15351b9d7b)
* [DeleteRowsAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a4b0d2919682f61f9bbfc2b1f4a8684ee)
* [Editor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1afa3443875a539cc24e6fab36d37809a8)
* [GetRowAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a55d7953b4bcf937ccc91a22e5ed1b64d)
* [HideEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1aa27886e8ce393b3e7f3da903ad952ddd)
* [InsertRowAt](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a528b4a4c89b73c97f8fb0440be176147)
* [MaxColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1ac48c64eb7297f62d3687762a66f8277d)
* [MinColumn](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a00feb76f3b9e070a94ed7475b351768b)
* [NumberOfRows](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a28a0d35664035366c10f6b0a3b5003c2)
* [ShowEditor](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a9971ba810c39993f1693405663d109a3)

## Properties

### Property Editor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1afa3443875a539cc24e6fab36d37809a8"></a>

![][public]

**Definition**:


```csharp
EditorType ZOSAPI.Editors.IEditor.Editor
```


Gets the type of this editor instance.

This editor instance type.


**Return type**: [EditorType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0be773de4268acbae53ad15c130fc971)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.Editor"}]}`
-->

### Property NumberOfRows

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a28a0d35664035366c10f6b0a3b5003c2"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.IEditor.NumberOfRows
```


Gets the number of rows in this editor. Note that this referes to surfaces, objects, or operands depending on editor type.

The number of rows.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.NumberOfRows"}]}`
-->

### Property MinColumn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a00feb76f3b9e070a94ed7475b351768b"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.IEditor.MinColumn
```


The minimum column index that can be used in calls to IEditorRow.GetCellAt for any IEditorRow retrieved from this editor.

The minimum column index.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.MinColumn"}]}`
-->

### Property MaxColumn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1ac48c64eb7297f62d3687762a66f8277d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.IEditor.MaxColumn
```


The maximum column index that can be used in calls to IEditorRow.GetCellAt for any IEditorRow retrieved from this editor.

The maximum column index.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.MaxColumn"}]}`
-->

## Public functions

### Function GetRowAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a55d7953b4bcf937ccc91a22e5ed1b64d"></a>

![][public]


```csharp
IEditorRow ZOSAPI.Editors.IEditor.GetRowAt(int pos)
```


Gets the row at the specified index (0 to NumberOfRows-1).

**Parameters**:

* **pos**: The row index.


**Returns**:


**Parameters**:

* int **pos**

**Return type**: [IEditorRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.GetRowAt"}]}`
-->

### Function InsertRowAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a528b4a4c89b73c97f8fb0440be176147"></a>

![][public]


```csharp
IEditorRow ZOSAPI.Editors.IEditor.InsertRowAt(int pos)
```


Inserts a new row at the specified index (0 to NumberOfRows). Note that some editors - such as the Lens Data Editor may not allow inserting new rows before the first row.

**Parameters**:

* **pos**: The new row index.


**Returns**:

The new row if successful; otherwise <code>null</code>.


**Parameters**:

* int **pos**

**Return type**: [IEditorRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.InsertRowAt"}]}`
-->

### Function AddRow

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a7a4b1663300efa48b1af005b71c5e6cc"></a>

![][public]


```csharp
IEditorRow ZOSAPI.Editors.IEditor.AddRow()
```


Adds a new row at the end of the editor.

**Returns**:

The newly added row.


**Return type**: [IEditorRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.AddRow"}]}`
-->

### Function DeleteRowAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1acc52182a5f56f3559c49af15351b9d7b"></a>

![][public]


```csharp
bool ZOSAPI.Editors.IEditor.DeleteRowAt(int pos)
```


Deletes a row at the specified index (0 to NumberOfRows-1). Note that all editors require at least one row, and some editors may require more than that.

**Parameters**:

* **pos**: The index of the row to remove.


**Returns**:

<code>true</code> if the specified row was removed; otherwise, <code>false</code>.


**Parameters**:

* int **pos**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.DeleteRowAt"}]}`
-->

### Function DeleteRowsAt

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a4b0d2919682f61f9bbfc2b1f4a8684ee"></a>

![][public]


```csharp
int ZOSAPI.Editors.IEditor.DeleteRowsAt(int pos, int numberOfRows)
```


Deletes one or more rows at the specified index (0 to NumberOfRows-1).

**Parameters**:

* **pos**: The index of the first row to remove.
* **numberOfRows**: The number of rows to remove.


**Returns**:

The number of rows removed from the editor.


**Parameters**:

* int **pos**
* int **numberOfRows**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.DeleteRowsAt"}]}`
-->

### Function DeleteAllRows

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a6a214f428fde561b408723563cb63d16"></a>

![][public]


```csharp
int ZOSAPI.Editors.IEditor.DeleteAllRows()
```


Deletes all rows from the current editor.

**Returns**:

The number of rows successfully removed.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.DeleteAllRows"}]}`
-->

### Function ShowEditor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1a9971ba810c39993f1693405663d109a3"></a>

![][public]


```csharp
bool ZOSAPI.Editors.IEditor.ShowEditor()
```


Shows this editor in the UI. Note that this only has an effect if the IOpticalSystem.Mode is ZOSAPI_Mode.Plugin.

**Returns**:


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.ShowEditor"}]}`
-->

### Function HideEditor

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_1aa27886e8ce393b3e7f3da903ad952ddd"></a>

![][public]


```csharp
void ZOSAPI.Editors.IEditor.HideEditor()
```


Closes this editor in the UI. Note that this only has an effect if the IOpticalSystem.Mode is ZOSAPI_Mode.Plugin.

**Returns**:


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditor.HideEditor"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
