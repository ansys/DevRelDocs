# Interface ZOSAPI::Tools::Sequences::ISequenceGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group"></a>

![][C#]
![][public]

**Definition**:

A group of sequence data copies.


## Members

* [GetSequenceAt](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1a1c77bc13d6295e84384d9601eb309efb)
* [Name](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1a50d0e3beab6a85b8aa554886067faaba)
* [NumberOfSequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1afd8393ede6906e43f290361361e12e05)
* [Sequences](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1a5078dcdeef8b6b5cd4f04f53c55eb047)

## Properties

### Property Name

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1a50d0e3beab6a85b8aa554886067faaba"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Sequences.ISequenceGroup.Name
```


Name of the sequence group.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceGroup.Name"}]}`
-->

### Property NumberOfSequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1afd8393ede6906e43f290361361e12e05"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Sequences.ISequenceGroup.NumberOfSequences
```


The number of sequences that the group consists of.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceGroup.NumberOfSequences"}]}`
-->

### Property Sequences

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1a5078dcdeef8b6b5cd4f04f53c55eb047"></a>

![][public]

**Definition**:


```csharp
List<ISequence> ZOSAPI.Tools.Sequences.ISequenceGroup.Sequences
```


All the sequences in the group as a list.


**Return type**: [List](namespace_z_o_s_a_p_i_1_1_tools.md#namespace_z_o_s_a_p_i_1_1_tools_1aa0eba80920a97b8b2b3d256e0fe63201a4ee29ca12c7d126654bd0e5275de6135)< [ISequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceGroup.Sequences"}]}`
-->

## Public functions

### Function GetSequenceAt

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group_1a1c77bc13d6295e84384d9601eb309efb"></a>

![][public]


```csharp
ISequence ZOSAPI.Tools.Sequences.ISequenceGroup.GetSequenceAt(int index)
```


Get the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to retrieve.


**Returns**:

A copy of the sequence data.


**Exceptions**:

* **IndexOutOfRangeException**: If index not in [0, NumberOfSequences)/>


**Parameters**:

* int **index**

**Return type**: [ISequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceGroup.GetSequenceAt"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
