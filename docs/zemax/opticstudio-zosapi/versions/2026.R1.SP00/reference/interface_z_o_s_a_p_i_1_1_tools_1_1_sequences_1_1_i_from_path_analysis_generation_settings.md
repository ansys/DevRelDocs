# Interface ZOSAPI::Tools::Sequences::IFromPathAnalysisGenerationSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings"></a>

![][C#]
![][public]

**Definition**:

Sequence generation settings interface for the From Path Analysis Filters mode.


**Inherits from**:

* [ZOSAPI.Tools.Sequences.ISequenceGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings)

## Members

* [AddToGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a8c2e7535da4fe4415aa68612da6b3228)
* [DoAutoGrouping](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a2288cae7a7c9ac76c515314ccbcb51ef)
* [FilterNumber](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings_1a16832fbf2196c48bb2b0c3040bbac6c2)
* [IncludeAllUpToFilterNumber](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings_1adfe32c7ace70fa589556aec1d95937cc)

## Properties

### Property FilterNumber

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings_1a16832fbf2196c48bb2b0c3040bbac6c2"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Tools.Sequences.IFromPathAnalysisGenerationSettings.FilterNumber
```


The number of the Path Analysis generated filter to generate sequence(s) from / up to. Setting this to zero (which is the default), or a negative number, results in sequences for all path filters being generated.

If IncludeAllUpToFilterNumber is true, then sequences will be generated from all path filters up to and including this number. Otherwise, only the path at this exact filter number.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IFromPathAnalysisGenerationSettings.FilterNumber"}]}`
-->

### Property IncludeAllUpToFilterNumber

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_from_path_analysis_generation_settings_1adfe32c7ace70fa589556aec1d95937cc"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Tools.Sequences.IFromPathAnalysisGenerationSettings.IncludeAllUpToFilterNumber
```


Whether to generate sequences from all Path Analysis filters up to and including FilterNumber. Defaults to true.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IFromPathAnalysisGenerationSettings.IncludeAllUpToFilterNumber"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
