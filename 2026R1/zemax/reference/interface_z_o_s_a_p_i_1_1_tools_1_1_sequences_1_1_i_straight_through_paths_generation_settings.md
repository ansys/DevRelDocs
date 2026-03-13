# Interface ZOSAPI::Tools::Sequences::IStraightThroughPathsGenerationSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings"></a>

![][C#]
![][public]

**Definition**:

Sequence generation settings interface for the Straight Through Paths mode.


**Inherits from**:

* [ZOSAPI.Tools.Sequences.ISequenceGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings)

## Members

* [AddToGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a8c2e7535da4fe4415aa68612da6b3228)
* [DoAutoGrouping](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a2288cae7a7c9ac76c515314ccbcb51ef)
* [EndWithDetector](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings_1a6aea6fa41787a0703612a416bca66779)

## Properties

### Property EndWithDetector

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings_1a6aea6fa41787a0703612a416bca66779"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Sequences.IStraightThroughPathsGenerationSettings.EndWithDetector
```


Whether to enforce that all paths must end with a detector in order for the sequences to be generated. Defaults to false.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IStraightThroughPathsGenerationSettings.EndWithDetector"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
