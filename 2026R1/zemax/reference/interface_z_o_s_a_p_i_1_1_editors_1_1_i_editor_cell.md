# Interface ZOSAPI::Editors::IEditorCell

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell"></a>

![][C#]
![][public]

**Definition**:

Interface used to get and set data for a specific cell in an editor. This interface can be accessed via:

IEditorRow


ILDERow


INCERow


[ZOSAPI.Editors.MCE.IMCERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_c_e_1_1_i_m_c_e_row)


[ZOSAPI.Editors.MFE.IMFERow](interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_m_f_e_1_1_i_m_f_e_row)


[ZOSAPI.Editors.TDE.ITDERow](interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_t_d_e_1_1_i_t_d_e_row)

## Members

* [Col](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a5a446d0edbf4605c82ba3a2cb3347e19)
* [CreateSolveType](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1aab9b45b0e5c224d1fb31bce66888d20d)
* [DataType](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ab67aa971d6a1b93ac816c9f1008975f2)
* [DoubleValue](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a448d127a24d2dee490864d76b84f94ed)
* [FillAvailableSolveTypes](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ad851036d1aea84f8a0de833deec57f22)
* [GetAvailableSolveTypes](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ac5dec896d11746368814951497684a41)
* [GetNumberOfSolveTypes](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a91705d24b2fab8a87bbf2fafce9a27fc)
* [GetSolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ae0c95f74b1e478f92ff2a97354b93af4)
* [Header](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1af94827ad6009db175dd6eda2d4d19971)
* [IntegerValue](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ae449d1e2d9af965fc6cec60f2a9334ce)
* [IsActive](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ae74e564207afa919d59841c9808c5010)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a765abfa384159cc595b1db0b7302f225)
* [IsSolveTypeSupported](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1aa5bc0f35fa6a33a3e452d4ed164ebe5d)
* [MakeSolveFixed](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1af38440e9a0652d4afce454efe7947e8d)
* [MakeSolveVariable](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a74076350d7578c5d5eabb0a35095f9d1)
* [Row](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a755a5358b106101db4a5fcb7140cfcca)
* [SetSolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a5c0cbba814207920589ee69ffcfc0d36)
* [Solve](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a37a16d3e7f8669bc707cb46416581f47)
* [Value](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a5332feff66987beb351ea0117b4c1b89)

## Properties

### Property Row

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a755a5358b106101db4a5fcb7140cfcca"></a>

![][public]

**Definition**:


```csharp
IEditorRow ZOSAPI.Editors.IEditorCell.Row
```


Gets the parent row for this cell.

The row.


**Return type**: [IEditorRow](interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_row)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.Row"}]}`
-->

### Property Col

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a5a446d0edbf4605c82ba3a2cb3347e19"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.IEditorCell.Col
```


Gets the column index for this cell.

The cell column index.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.Col"}]}`
-->

### Property IsActive

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ae74e564207afa919d59841c9808c5010"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.IEditorCell.IsActive
```


Gets a value indicating whether this cell is currently active (i.e. in use by the current system).

<code>true</code> if this instance is active; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.IsActive"}]}`
-->

### Property IsReadOnly

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a765abfa384159cc595b1db0b7302f225"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.IEditorCell.IsReadOnly
```


Gets a value indicating whether this cell can be modified.

<code>true</code> if this instance is read only; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.IsReadOnly"}]}`
-->

### Property Header

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1af94827ad6009db175dd6eda2d4d19971"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.IEditorCell.Header
```


Gets the column header for this cell.

The cell header.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.Header"}]}`
-->

### Property DataType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ab67aa971d6a1b93ac816c9f1008975f2"></a>

![][public]

**Definition**:


```csharp
CellDataType ZOSAPI.Editors.IEditorCell.DataType
```


Gets the data type of this cell.

The type of this cell.


**Return type**: [CellDataType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a8fa5d9cef0bd6de958233758f1b103da)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.DataType"}]}`
-->

### Property IntegerValue

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ae449d1e2d9af965fc6cec60f2a9334ce"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.IEditorCell.IntegerValue
```


Gets or sets the integer value of this cell. Note that if DataType is not CellDataType.Integer, attempting to get or set a value in this way will result in an exception.

Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Set 1st object as a Source File
            INCERow Object_1 = TheNCE.GetObjectAt(1);
            IObjectTypeSettings Typeset_SourceFile = Object_1.GetObjectTypeSettings(ObjectType.SourceFile);
            Typeset_SourceFile.FileName1 = "RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT";
            Object_1.ChangeType(Typeset_SourceFile);
            Object_1.GetObjectCell(ObjectColumn.Par1).IntegerValue = 5;
            Object_1.GetObjectCell(ObjectColumn.Par2).IntegerValue = 1000;
            Object_1.GetObjectCell(ObjectColumn.Par3).DoubleValue = 2.485572;
            Object_1.GetObjectCell(ObjectColumn.Par8).DoubleValue = 0.47;
            Object_1.GetObjectCell(ObjectColumn.Par9).DoubleValue = 0.47;
```
 C++ 
```csharp
    // Set 1st object as a Source File
    INCERowPtr Object_1 = TheNCE->GetObjectAt(1);
    IObjectTypeSettingsPtr Typeset_SourceFile = Object_1->GetObjectTypeSettings(ObjectType_SourceFile);
    Typeset_SourceFile->FileName1 = "RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT";
    Object_1->ChangeType(Typeset_SourceFile);
    Object_1->GetObjectCell(ObjectColumn_Par1)->IntegerValue = 5;
    Object_1->GetObjectCell(ObjectColumn_Par2)->IntegerValue = 1000;
    Object_1->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 2.485572;
    Object_1->GetObjectCell(ObjectColumn_Par8)->DoubleValue = 0.47;
    Object_1->GetObjectCell(ObjectColumn_Par9)->DoubleValue = 0.47;
```
 Matlab 
```csharp
    % Set 1st object as a Source File
    Object_1 = TheNCE.GetObjectAt(1);
    Typeset_SourceFile = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceFile);
    Typeset_SourceFile.FileName1 = 'RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT';
    Object_1.ChangeType(Typeset_SourceFile);
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 5;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1000;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 2.485572;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 0.47;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 0.47;
```
 Python 
```csharp
    # Set 1st object as a Source File
    Object_1 = TheNCE.GetObjectAt(1)
    Typeset_SourceFile = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceFile)
    Typeset_SourceFile.FileName1 = 'RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT'
    Object_1.ChangeType(Typeset_SourceFile)
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 5
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1000
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 2.485572
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 0.47
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 0.47
```
 


The integer value. 


**Exceptions**:

* **ArgumentException**:


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.IntegerValue"}]}`
-->

### Property DoubleValue

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a448d127a24d2dee490864d76b84f94ed"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.IEditorCell.DoubleValue
```


Gets or sets the double precision value of this cell. Note that if DataType is not CellDataType.Double, attempting to get or set a value in this way will result in an exception.

Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Set 1st object as a Source File
            INCERow Object_1 = TheNCE.GetObjectAt(1);
            IObjectTypeSettings Typeset_SourceFile = Object_1.GetObjectTypeSettings(ObjectType.SourceFile);
            Typeset_SourceFile.FileName1 = "RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT";
            Object_1.ChangeType(Typeset_SourceFile);
            Object_1.GetObjectCell(ObjectColumn.Par1).IntegerValue = 5;
            Object_1.GetObjectCell(ObjectColumn.Par2).IntegerValue = 1000;
            Object_1.GetObjectCell(ObjectColumn.Par3).DoubleValue = 2.485572;
            Object_1.GetObjectCell(ObjectColumn.Par8).DoubleValue = 0.47;
            Object_1.GetObjectCell(ObjectColumn.Par9).DoubleValue = 0.47;
```
 C++ 
```csharp
    // Set 1st object as a Source File
    INCERowPtr Object_1 = TheNCE->GetObjectAt(1);
    IObjectTypeSettingsPtr Typeset_SourceFile = Object_1->GetObjectTypeSettings(ObjectType_SourceFile);
    Typeset_SourceFile->FileName1 = "RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT";
    Object_1->ChangeType(Typeset_SourceFile);
    Object_1->GetObjectCell(ObjectColumn_Par1)->IntegerValue = 5;
    Object_1->GetObjectCell(ObjectColumn_Par2)->IntegerValue = 1000;
    Object_1->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 2.485572;
    Object_1->GetObjectCell(ObjectColumn_Par8)->DoubleValue = 0.47;
    Object_1->GetObjectCell(ObjectColumn_Par9)->DoubleValue = 0.47;
```
 Matlab 
```csharp
    % Set 1st object as a Source File
    Object_1 = TheNCE.GetObjectAt(1);
    Typeset_SourceFile = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceFile);
    Typeset_SourceFile.FileName1 = 'RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT';
    Object_1.ChangeType(Typeset_SourceFile);
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 5;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1000;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 2.485572;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 0.47;
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 0.47;
```
 Python 
```csharp
    # Set 1st object as a Source File
    Object_1 = TheNCE.GetObjectAt(1)
    Typeset_SourceFile = Object_1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceFile)
    Typeset_SourceFile.FileName1 = 'RAYFILE_LB_T67C_100K_190608_ZEMAX.DAT'
    Object_1.ChangeType(Typeset_SourceFile)
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).IntegerValue = 5
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).IntegerValue = 1000
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 2.485572
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par8).DoubleValue = 0.47
    Object_1.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par9).DoubleValue = 0.47
```
 


The double precision value. 


**Exceptions**:

* **ArgumentException**:


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.DoubleValue"}]}`
-->

### Property Value

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a5332feff66987beb351ea0117b4c1b89"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.IEditorCell.Value
```


Gets or sets the value of this cell. Note that this method can be used regardless of the DataType.

Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Set 3rd object as Cylinder Volume
            INCERow Object_3 = TheNCE.GetObjectAt(3);
            IObjectTypeSettings Typeset_CylinderVolume = Object_3.GetObjectTypeSettings(ObjectType.CylinderVolume);
            Object_3.ChangeType(Typeset_CylinderVolume);
            // Set positions, material and parameters
            Object_3.GetObjectCell(ObjectColumn.ZPosition).DoubleValue = 0.8;
            Object_3.GetObjectCell(ObjectColumn.Material).Value = "PMMA";
            Object_3.GetObjectCell(ObjectColumn.Par1).DoubleValue = 1.2;
            Object_3.GetObjectCell(ObjectColumn.Par2).DoubleValue = 0.1;
            Object_3.GetObjectCell(ObjectColumn.Par3).DoubleValue = 1.2;
```
 C++ 
```csharp
    // Set 3rd object as Cylinder Volume
    INCERowPtr Object_3 = TheNCE->GetObjectAt(3);
    IObjectTypeSettingsPtr Typeset_CylinderVolume = Object_3->GetObjectTypeSettings(ObjectType_CylinderVolume);
    Object_3->ChangeType(Typeset_CylinderVolume);
    // Set positions, material and parameters
    Object_3->GetObjectCell(ObjectColumn_ZPosition)->DoubleValue = 0.8;
    Object_3->GetObjectCell(ObjectColumn_Material)->Value = "PMMA";
    Object_3->GetObjectCell(ObjectColumn_Par1)->DoubleValue = 1.2;
    Object_3->GetObjectCell(ObjectColumn_Par2)->DoubleValue = 0.1;
    Object_3->GetObjectCell(ObjectColumn_Par3)->DoubleValue = 1.2;
```
 Matlab 
```csharp
    % Set 3rd object as Cylinder Volume
    Object_3 = TheNCE.GetObjectAt(3);
    Typeset_CylinderVolume = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CylinderVolume);
    Object_3.ChangeType(Typeset_CylinderVolume);
    % Set positions, material and parameters
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.8;
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).Value = 'PMMA';
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 1.2;
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 0.1;
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2;
```
 Python 
```csharp
    # Set 3rd object as Cylinder Volume
    Object_3 = TheNCE.GetObjectAt(3)
    Typeset_CylinderVolume = Object_3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.CylinderVolume)
    Object_3.ChangeType(Typeset_CylinderVolume)
    # Set positions, material and parameters
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.ZPosition).DoubleValue = 0.8
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Material).Value = 'PMMA'
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par1).DoubleValue = 1.2
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par2).DoubleValue = 0.1
    Object_3.GetObjectCell(ZOSAPI.Editors.NCE.ObjectColumn.Par3).DoubleValue = 1.2
```
 


The cell value.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.Value"}]}`
-->

### Property Solve

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a37a16d3e7f8669bc707cb46416581f47"></a>

![][public]

**Definition**:


```csharp
SolveType ZOSAPI.Editors.IEditorCell.Solve
```


Gets the type of the current solve.

The solve.


**Return type**: [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.Solve"}]}`
-->

## Public functions

### Function GetSolveData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ae0c95f74b1e478f92ff2a97354b93af4"></a>

![][public]


```csharp
ISolveData ZOSAPI.Editors.IEditorCell.GetSolveData()
```


Gets the current solve data. Use CreateSolveType to retrieve an interface that can be used to change the solve type. Note that the solve will not be updated until SetSolveData is called with the new settings.

**Returns**:


**Return type**: [ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.GetSolveData"}]}`
-->

### Function GetNumberOfSolveTypes

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a91705d24b2fab8a87bbf2fafce9a27fc"></a>

![][public]


```csharp
int ZOSAPI.Editors.IEditorCell.GetNumberOfSolveTypes()
```


Gets the number of solve types allowed for this specific editor cell.

**Returns**:


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.GetNumberOfSolveTypes"}]}`
-->

### Function IsSolveTypeSupported

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1aa5bc0f35fa6a33a3e452d4ed164ebe5d"></a>

![][public]


```csharp
bool ZOSAPI.Editors.IEditorCell.IsSolveTypeSupported(SolveType st)
```


Determines whether the specified solve type is supported by this specific cell.

**Parameters**:

* **st**: The solve type.


**Returns**:

<code>true</code> if the input solve type can be used; otherwise <code>false</code>.


**Parameters**:

* [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec) **st**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.IsSolveTypeSupported"}]}`
-->

### Function GetAvailableSolveTypes

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ac5dec896d11746368814951497684a41"></a>

![][public]


```csharp
SolveType[] ZOSAPI.Editors.IEditorCell.GetAvailableSolveTypes()
```


Gets the available solve types for this cell.

**Returns**:


**Return type**: [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.GetAvailableSolveTypes"}]}`
-->

### Function FillAvailableSolveTypes

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1ad851036d1aea84f8a0de833deec57f22"></a>

![][public]


```csharp
void ZOSAPI.Editors.IEditorCell.FillAvailableSolveTypes(int Length, [MarshalAs(UnmanagedType.LPArray, SizeParamIndex=0)][In, Out]SolveType[] solves)
```


Alternate method of retrieving available cell types, accessible via COM.

**Parameters**:

* **Length**: The length of the input array (must be equal to GetNumberOfSolveTypes.
* **solves**: The solve type array to fill. Note that this must be allocated before calling this method.


**Parameters**:

* int **Length**
* _[In, Out]_ [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec)[] **solves**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.FillAvailableSolveTypes"}]}`
-->

### Function CreateSolveType

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1aab9b45b0e5c224d1fb31bce66888d20d"></a>

![][public]


```csharp
ISolveData ZOSAPI.Editors.IEditorCell.CreateSolveType(SolveType type)
```


Creates the solve type settings for the specified solve type. Note that SetSolveData must be used to actually update the system with the solve settings.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            // remove all variables and add a F# solve on last surface radius
            ILensDataEditor TheLDE = TheSystem.LDE;
            IOpticalSystemTools tools = TheSystem.Tools;
            tools.RemoveAllVariables();
            ILDERow Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
            ISolveData Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
            Solver._S_FNumber.FNumber = 3.1415;
            Surface_Last.RadiusCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile1.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // remove all variables and add a F# solve on last surface radius
    ILensDataEditorPtr TheLDE = TheSystem->LDE;
    //IOpticalSystemTools
    IOpticalSystemToolsPtr tools = TheSystem->Tools;
    tools->RemoveAllVariables();
    ILDERowPtr Surface_Last = TheLDE->GetSurfaceAt(TheLDE->NumberOfSurfaces - 2);
    ISolveDataPtr Solver = Surface_Last->RadiusCell->CreateSolveType(SolveType::SolveType_FNumber);
    Solver->_S_FNumber->FNumber = 3.1415;
    Surface_Last->RadiusCell->SetSolveData(Solver);
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\\Seq_Optimization\\\OptimizedFile1.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    % remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE;
    tools = TheSystem.Tools;
    tools.RemoveAllVariables();
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.S_FNumber_.FNumber = 3.1415;
    Surface_Last.RadiusCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile1.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE
    #IOpticalSystemTools
    tools = TheSystem.Tools
    tools.RemoveAllVariables()
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2)
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    Solver._S_FNumber.FNumber = 3.1415
    Surface_Last.RadiusCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile1.zos'
    TheSystem.SaveAs(SampleFile)
```
 


**Parameters**:

* **type**: The solve type.


**Returns**:


**Parameters**:

* [SolveType](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a0e4579c2bd01e606f5ba9e7f7ad1b0ec) **type**

**Return type**: [ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.CreateSolveType"}]}`
-->

### Function SetSolveData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a5c0cbba814207920589ee69ffcfc0d36"></a>

![][public]


```csharp
SolveStatus ZOSAPI.Editors.IEditorCell.SetSolveData(ISolveData Data)
```


Updates the system with the new solve type settings (see also CreateSolveType and GetSolveData).

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            // remove all variables and add a F# solve on last surface radius
            ILensDataEditor TheLDE = TheSystem.LDE;
            IOpticalSystemTools tools = TheSystem.Tools;
            tools.RemoveAllVariables();
            ILDERow Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
            ISolveData Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
            Solver._S_FNumber.FNumber = 3.1415;
            Surface_Last.RadiusCell.SetSolveData(Solver);
            SampleFile = System.IO.Path.Combine(TheApplication.SamplesDir, @"API\CS\e15_Seq_Optimization\OptimizedFile1.zos");
            TheSystem.SaveAs(SampleFile);
```
 C++ 
```csharp
    // remove all variables and add a F# solve on last surface radius
    ILensDataEditorPtr TheLDE = TheSystem->LDE;
    //IOpticalSystemTools
    IOpticalSystemToolsPtr tools = TheSystem->Tools;
    tools->RemoveAllVariables();
    ILDERowPtr Surface_Last = TheLDE->GetSurfaceAt(TheLDE->NumberOfSurfaces - 2);
    ISolveDataPtr Solver = Surface_Last->RadiusCell->CreateSolveType(SolveType::SolveType_FNumber);
    Solver->_S_FNumber->FNumber = 3.1415;
    Surface_Last->RadiusCell->SetSolveData(Solver);
    SampleFile = _bstr_t(TheApplication->SamplesDir) + "\\API\\\Seq_Optimization\\\OptimizedFile1.zos";
    TheSystem->SaveAs(SampleFile);
```
 Matlab 
```csharp
    % remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE;
    tools = TheSystem.Tools;
    tools.RemoveAllVariables();
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2);
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber);
    Solver.S_FNumber_.FNumber = 3.1415;
    Surface_Last.RadiusCell.SetSolveData(Solver);
    SampleFile = System.String.Concat(TheApplication.SamplesDir, '\API\Matlab\e15_Seq_Optimization\OptimizedFile1.zos');
    TheSystem.SaveAs(SampleFile);
```
 Python 
```csharp
    # remove all variables and add a F# solve on last surface radius
    TheLDE = TheSystem.LDE
    #IOpticalSystemTools
    tools = TheSystem.Tools
    tools.RemoveAllVariables()
    Surface_Last = TheLDE.GetSurfaceAt(TheLDE.NumberOfSurfaces - 2)
    Solver = Surface_Last.RadiusCell.CreateSolveType(ZOSAPI.Editors.SolveType.FNumber)
    Solver._S_FNumber.FNumber = 3.1415
    Surface_Last.RadiusCell.SetSolveData(Solver)
    SampleFile = TheApplication.SamplesDir + '\\API\\Python\\e15_Seq_Optimization\\OptimizedFile1.zos'
    TheSystem.SaveAs(SampleFile)
```
 


**Parameters**:

* **Data**: The new solve settings.


**Returns**:

A value indicating whether or not changing the solve settings was successful.


**Parameters**:

* [ISolveData](interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_i_solve_data) **Data**

**Return type**: [SolveStatus](namespace_z_o_s_a_p_i_1_1_editors.md#namespace_z_o_s_a_p_i_1_1_editors_1a1d1faeb4b46e7b0cc51f47bbb04c55f7)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.SetSolveData"}]}`
-->

### Function MakeSolveVariable

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1a74076350d7578c5d5eabb0a35095f9d1"></a>

![][public]


```csharp
bool ZOSAPI.Editors.IEditorCell.MakeSolveVariable()
```


Sets the solve type to SolveType.Variable.

Usage (see [Example 15](page_ex15.md#page_ex15) for a full sample)


C# 
```csharp
            //Thickness 2, 5, 6, 9, and 11 variable
            Surface2.ThicknessCell.MakeSolveVariable();
            Surface5.ThicknessCell.MakeSolveVariable();
            Surface6.ThicknessCell.MakeSolveVariable();
            Surface9.ThicknessCell.MakeSolveVariable();
            Surface11.ThicknessCell.MakeSolveVariable();
```
 C++ 
```csharp
    // Thickness 2, 5, 6, 9, and 11 variable
    Surface2->ThicknessCell->MakeSolveVariable();
    Surface5->ThicknessCell->MakeSolveVariable();
    Surface6->ThicknessCell->MakeSolveVariable();
    Surface9->ThicknessCell->MakeSolveVariable();
    Surface11->ThicknessCell->MakeSolveVariable();
```
 Matlab 
```csharp
    %Thickness 2, 5, 6, 9, and 11 variable
    Surface2.ThicknessCell.MakeSolveVariable();
    Surface5.ThicknessCell.MakeSolveVariable();
    Surface6.ThicknessCell.MakeSolveVariable();
    Surface9.ThicknessCell.MakeSolveVariable();
    Surface11.ThicknessCell.MakeSolveVariable();
```
 Python 
```csharp
    # Thickness 2, 5, 6, 9, and 11 variable
    Surface2.ThicknessCell.MakeSolveVariable()
    Surface5.ThicknessCell.MakeSolveVariable()
    Surface6.ThicknessCell.MakeSolveVariable()
    Surface9.ThicknessCell.MakeSolveVariable()
    Surface11.ThicknessCell.MakeSolveVariable()
```
 


**Returns**:

<code>true</code> if the change succeeded; otherwise, <code>false</code>


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.MakeSolveVariable"}]}`
-->

### Function MakeSolveFixed

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_i_editor_cell_1af38440e9a0652d4afce454efe7947e8d"></a>

![][public]


```csharp
bool ZOSAPI.Editors.IEditorCell.MakeSolveFixed()
```


Sets the solve type to SolveType.Fixed.

**Returns**:

<code>true</code> if the change succeeded; otherwise, <code>false</code>


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.IEditorCell.MakeSolveFixed"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)