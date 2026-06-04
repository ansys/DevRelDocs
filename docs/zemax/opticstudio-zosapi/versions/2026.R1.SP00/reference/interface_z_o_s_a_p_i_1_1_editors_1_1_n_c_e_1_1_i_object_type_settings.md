# Interface ZOSAPI::Editors::NCE::IObjectTypeSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings"></a>

![][C#]
![][public]

**Definition**:

This interface is used for selecting any files required by a object, and for changing object types. This interface can be accessed via the INCERow interface.


## Members

* [FileName1](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1ad361d032b227c7e00e2343dee3d224bc)
* [FileName2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a214499477b6e25d3fa4e7b59b2c6c78e)
* [GetFileNames1](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a2736902f3b94699608a7e350e31d4122)
* [GetFileNames2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a53f2f8c252157a21760ebe703424677b)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a0e3b6f7909b934ba676aadda5da43410)
* [RequiresFile1](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1acdf692e8dc25835fa1bf8d320418b2e0)
* [RequiresFile2](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a0dd21deb96d21708584afef0ae8dcfe4)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a56b153a3629dd8500a9f95a325a8e9d3)

## Properties

### Property Type

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a56b153a3629dd8500a9f95a325a8e9d3"></a>

![][public]

**Definition**:


```csharp
ObjectType ZOSAPI.Editors.NCE.IObjectTypeSettings.Type
```


Gets the object type for this interface.

Usage (see [Example 24](../apiexamples/example_24.md) for a full sample)


C# 
```csharp
            // Changes Object Type
            TheNCE.GetObjectAt(1).ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceEllipse));
            o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.AsphericSurface2));
            o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens));
            o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor));
            o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle));
```
 C++ 
```csharp
    // Changes Object Type
    IObjectTypeSettingsPtr oType_1 = o1->GetObjectTypeSettings(ObjectType_SourceEllipse);
    o1->ChangeType(oType_1);
    o2->ChangeType((IObjectTypeSettingsPtr)o2->GetObjectTypeSettings(ObjectType_AsphericSurface2));
    o3->ChangeType((IObjectTypeSettingsPtr)o3->GetObjectTypeSettings(ObjectType_StandardLens));
    o4->ChangeType((IObjectTypeSettingsPtr)o4->GetObjectTypeSettings(ObjectType_DetectorColor));
    o5->ChangeType((IObjectTypeSettingsPtr)o5->GetObjectTypeSettings(ObjectType_DetectorRectangle));
```
 Matlab 
```csharp
    % Changes Object Type
    TheNCE.GetObjectAt(1).ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceEllipse));
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.AsphericSurface2));
    o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens));
    o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor));
    o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle));
```
 Python 
```csharp
    # Changes Object Type
    TheNCE.GetObjectAt(1).ChangeType(o1.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.SourceEllipse))
    o2.ChangeType(o2.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.AsphericSurface2))
    o3.ChangeType(o3.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.StandardLens))
    o4.ChangeType(o4.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorColor))
    o5.ChangeType(o5.GetObjectTypeSettings(ZOSAPI.Editors.NCE.ObjectType.DetectorRectangle))
```
 


The type.


**Return type**: [ObjectType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afaeb02568d1df3bbfabfe7d8f9b59285)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.Type"}]}`
-->

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a0e3b6f7909b934ba676aadda5da43410"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IObjectTypeSettings.IsValid
```


Gets a value indicating whether all settings are valid.

<code>true</code> if this instance is valid; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.IsValid"}]}`
-->

### Property RequiresFile1

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1acdf692e8dc25835fa1bf8d320418b2e0"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IObjectTypeSettings.RequiresFile1
```


Gets a value indicating whether this object type requires an external file to function.

<code>true</code> if a file is required; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.RequiresFile1"}]}`
-->

### Property FileName1

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1ad361d032b227c7e00e2343dee3d224bc"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IObjectTypeSettings.FileName1
```


Gets or sets the currently selected file name.

Usage (see [Example 21](../apiexamples/example_21.md) for a full sample)


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
 


The name of the file. Note that only files returned by GetFileNames1 are allowed.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.FileName1"}]}`
-->

### Property RequiresFile2

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a0dd21deb96d21708584afef0ae8dcfe4"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IObjectTypeSettings.RequiresFile2
```


Gets a value indicating whether this object type requires an secondary external file to function (such as ObjectType.GridSagFrontBack).

<code>true</code> if a file is required; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.RequiresFile2"}]}`
-->

### Property FileName2

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a214499477b6e25d3fa4e7b59b2c6c78e"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IObjectTypeSettings.FileName2
```


Gets or sets the currently selected secondary file name.

The name of the file. Note that only files returned by GetFileNames2 are allowed.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.FileName2"}]}`
-->

## Public functions

### Function GetFileNames1

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a2736902f3b94699608a7e350e31d4122"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IObjectTypeSettings.GetFileNames1()
```


Gets all available files for this type.

**Returns**:


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.GetFileNames1"}]}`
-->

### Function GetFileNames2

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_type_settings_1a53f2f8c252157a21760ebe703424677b"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IObjectTypeSettings.GetFileNames2()
```


Gets all available secondary files for this type.

**Returns**:


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IObjectTypeSettings.GetFileNames2"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
