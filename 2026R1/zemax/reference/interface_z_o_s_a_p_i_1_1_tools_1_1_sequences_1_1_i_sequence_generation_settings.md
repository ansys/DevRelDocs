# Interface ZOSAPI::Tools::Sequences::ISequenceGenerationSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings"></a>

![][C#]
![][public]

**Definition**:

Base interface for sequence generation settings.


**Inherited by**:

* [ZOSAPI.Tools.Sequences.IFromPathAnalysisGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings)
* [ZOSAPI.Tools.Sequences.IStraightThroughPathsGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_straight_through_paths_generation_settings)
* [ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings)

## Members

* [AddToGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a8c2e7535da4fe4415aa68612da6b3228)
* [DoAutoGrouping](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a2288cae7a7c9ac76c515314ccbcb51ef)

## Properties

### Property AddToGroup

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a8c2e7535da4fe4415aa68612da6b3228"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Sequences.ISequenceGenerationSettings.AddToGroup
```


The name of a group to add all generated sequences to. If the group does not yet exist, then it will be created.

Note that if DoAutoGrouping is true then this property will be ignored.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceGenerationSettings.AddToGroup"}]}`
-->

### Property DoAutoGrouping

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a2288cae7a7c9ac76c515314ccbcb51ef"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Sequences.ISequenceGenerationSettings.DoAutoGrouping
```


Whether to execute automatic grouping of generated sequences.

Note that if this is true then AddToGroup will be ignored.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.ISequenceGenerationSettings.DoAutoGrouping"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)