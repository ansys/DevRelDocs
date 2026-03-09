# Interface ZOSAPI::SystemData::ISDTitleNotes

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Notes Data. This interface can be accessed via the ISystemData interface.

Usage (see [Example 12](page_ex12.md#page_ex12) for a full sample)


C# 
```csharp
            // Add Title and Notes
            ZOSAPI.SystemData.ISDTitleNotes sysTitleNotes = TheSystem.SystemData.TitleNotes;
            sysTitleNotes.Title = "Add here the title";
            sysTitleNotes.Notes = "Add here the notes";
```
 C++ 
```csharp
    // Add Title and Notes
    ZOSAPI_Interfaces::ISDTitleNotesPtr sysTitleNotes = TheSystem->SystemData->TitleNotes;
    sysTitleNotes->Title = "Add here the title";
    sysTitleNotes->Notes = "Add here the notes";
```
 Matlab 
```csharp
    % Add Title and Notes
    sysTitleNotes = TheSystem.SystemData.TitleNotes;
    sysTitleNotes.Title = 'Add here the title';
    sysTitleNotes.Notes = 'Add here the notes';
```
 Python 
```csharp
    # Add Title and Notes
    sysTitleNotes = TheSystem.SystemData.TitleNotes
    sysTitleNotes.Title = "Add Title Here"
    sysTitleNotes.Notes = "Add Notes Here"
```

## Members

* [Author](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes_1a8c8c8a7719f249904f6b4673a0863115)
* [Notes](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes_1a7b8c52bb0bd1126bc9b08728e266e40d)
* [Title](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes_1a0df9898f1c7fdd32d6bddf70ccb54419)

## Properties

### Property Title

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes_1a0df9898f1c7fdd32d6bddf70ccb54419"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDTitleNotes.Title
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDTitleNotes.Title"}]}`
-->

### Property Notes

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes_1a7b8c52bb0bd1126bc9b08728e266e40d"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDTitleNotes.Notes
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDTitleNotes.Notes"}]}`
-->

### Property Author

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes_1a8c8c8a7719f249904f6b4673a0863115"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.SystemData.ISDTitleNotes.Author
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDTitleNotes.Author"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)