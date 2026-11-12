# Interface ZOSAPI::NSC::INSCSequences

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences"></a>

![][C#]
![][public]

**Definition**:

Read-only view of the NSC sequences and sequence groups stored in the current system. This interface is always available — even while [ZOSAPI.Tools.Sequences.ISequenceSelector](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector) is open — and returns cached (non-revalidated) data. In sequential mode every member returns an empty result. Use [ZOSAPI.Tools.Sequences.ISequenceSelector](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_selector) for mutations and to trigger revalidation.


## Members

* [ContainsGroup](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1adc5767b95693dd7d8015504b3e83bc78)
* [ContainsSequenceName](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a555b2b93eb5a169b6c405560a9390386)
* [FindSequenceByName](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a329e0ab57405ce659635a84d86646499)
* [GetGroupNameAt](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a80a98bf20ef2d8c304f9dd147f58c9a2)
* [GetIndexOfSequenceByName](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a062dbb33cf18a15cd6ab4ad9607c9b75)
* [GetSequenceAt](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a661b6573bb547f9069fc0a7346c7554b)
* [GetSequenceGroup](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a20f7ae44b605fc63ec47cba053436d36)
* [GroupNames](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1ae9beddf9884538debe75ac72e3829313)
* [NumberOfGroups](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a0ebf17d629ac8db319438d952a733749)
* [NumberOfSequences](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1adf7b1b7ee0d1cbbe52abad1c7dccaae0)

## Properties

### Property NumberOfSequences

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1adf7b1b7ee0d1cbbe52abad1c7dccaae0"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.NSC.INSCSequences.NumberOfSequences
```


The number of sequences currently defined in the sequence list.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.NumberOfSequences"}]}`
-->

### Property NumberOfGroups

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a0ebf17d629ac8db319438d952a733749"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.NSC.INSCSequences.NumberOfGroups
```


The number of currently defined sequence groups.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.NumberOfGroups"}]}`
-->

### Property GroupNames

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1ae9beddf9884538debe75ac72e3829313"></a>

![][public]

**Definition**:


```csharp
List<string> ZOSAPI.NSC.INSCSequences.GroupNames
```


Names of all the currently defined sequence groups.


**Return type**: List< string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.GroupNames"}]}`
-->

## Public functions

### Function ContainsSequenceName

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a555b2b93eb5a169b6c405560a9390386"></a>

![][public]


```csharp
bool ZOSAPI.NSC.INSCSequences.ContainsSequenceName(string name)
```


Whether the sequence list holds a sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

True if the sequence exists, false otherwise.


**Parameters**:

* string **name**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.ContainsSequenceName"}]}`
-->

### Function GetIndexOfSequenceByName

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a062dbb33cf18a15cd6ab4ad9607c9b75"></a>

![][public]


```csharp
int ZOSAPI.NSC.INSCSequences.GetIndexOfSequenceByName(string name)
```


Get the index of the sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

The sequence index if it exists, otherwise -1.


**Parameters**:

* string **name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.GetIndexOfSequenceByName"}]}`
-->

### Function GetSequenceAt

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a661b6573bb547f9069fc0a7346c7554b"></a>

![][public]


```csharp
ISequence ZOSAPI.NSC.INSCSequences.GetSequenceAt(int index)
```


Get the sequence at the specified index.

**Parameters**:

* **index**: Index (zero-based) of the sequence to retrieve.


**Returns**:

A copy of the sequence data. Null if the index is out of range.


**Parameters**:

* int **index**

**Return type**: [ISequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.GetSequenceAt"}]}`
-->

### Function FindSequenceByName

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a329e0ab57405ce659635a84d86646499"></a>

![][public]


```csharp
ISequence ZOSAPI.NSC.INSCSequences.FindSequenceByName(string name)
```


Get the sequence with the specified name.

**Parameters**:

* **name**: Name of the sequence to search for.


**Returns**:

A copy of the sequence data. Null if the sequence is not found.


**Parameters**:

* string **name**

**Return type**: [ISequence](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.FindSequenceByName"}]}`
-->

### Function GetGroupNameAt

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a80a98bf20ef2d8c304f9dd147f58c9a2"></a>

![][public]


```csharp
string ZOSAPI.NSC.INSCSequences.GetGroupNameAt(int index)
```


Get the name of the group at the specified group index.

**Parameters**:

* **index**: Index (zero-based) of the group name to retrieve.


**Returns**:

Name of the group at the given index. Null if the index is out of range.


**Parameters**:

* int **index**

**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.GetGroupNameAt"}]}`
-->

### Function ContainsGroup

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1adc5767b95693dd7d8015504b3e83bc78"></a>

![][public]


```csharp
bool ZOSAPI.NSC.INSCSequences.ContainsGroup(string groupName)
```


Whether a sequence group with the specified name exists.

**Parameters**:

* **name**: Name of the sequence group to search for.


**Returns**:

True if the sequence group exists, false otherwise.


**Parameters**:

* string **groupName**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.ContainsGroup"}]}`
-->

### Function GetSequenceGroup

<a id="interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences_1a20f7ae44b605fc63ec47cba053436d36"></a>

![][public]


```csharp
ISequenceGroup ZOSAPI.NSC.INSCSequences.GetSequenceGroup(string groupName)
```


Retrieve a list of all the sequences which are present within a specified group.

**Parameters**:

* **groupName**: Name of the group to retrieve.


**Returns**:

An object consisting of the sequence data in the group. Null if the group is not found.


**Parameters**:

* string **groupName**

**Return type**: [ISequenceGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_group)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.NSC.INSCSequences.GetSequenceGroup"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
