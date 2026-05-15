# Interface ZOSAPI::Tools::Sequences::IViaZRDOrPAFGenerationSettings

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings"></a>

![][C#]
![][public]

**Definition**:

Sequence generation settings interface for the Via ZRD or PAF File mode.


**Inherits from**:

* [ZOSAPI.Tools.Sequences.ISequenceGenerationSettings](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings)

## Members

* [AddToGroup](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a8c2e7535da4fe4415aa68612da6b3228)
* [DoAutoGrouping](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_sequence_generation_settings_1a2288cae7a7c9ac76c515314ccbcb51ef)
* [FilterString](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1a98d34d0e8d0a1c3ffb79d56a2b07ebc5)
* [RayDatabaseFile](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1a04471592aeb99827ed86c80f0cfb761e)
* [RelativeMinimumFlux](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1ac9360ab8537ddf1d8aa3a14779594f40)
* [SortBy](interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings.md#interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1ab15fc5bf3231863a0cd2f9437e25ebf6)

## Properties

### Property RayDatabaseFile

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1a04471592aeb99827ed86c80f0cfb761e"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.RayDatabaseFile
```


The name (with extension, but not including path) of the ray file to process. Can be either a ZRD or PAF file which is present in the same directory as the lens file.

If a ZRD / PAF file exists with the same name as the lens file, in the same directory, then this will be set as the default for this property when creating this settings interface via ISequenceSelector.SelectViaZRDOrPAFGeneration.


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.RayDatabaseFile"}]}`
-->

### Property FilterString

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1a98d34d0e8d0a1c3ffb79d56a2b07ebc5"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.FilterString
```


Optional filter string to apply when reading the ray file. Only applicable when the RayDatabaseFile is a ZRD file. Defaults to an empty string (no filter).


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.FilterString"}]}`
-->

### Property SortBy

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1ab15fc5bf3231863a0cd2f9437e25ebf6"></a>

![][public]

**Definition**:


```csharp
Analysis.RayTracing.PathAnalysisSortType ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.SortBy
```


Metric by which to sort the resulting generated paths.

The default value, when creating this settings interface, will be Analysis.RayTracing.PathAnalysisSortType.TotalEndingFlux.


**Return type**: [Analysis.RayTracing.PathAnalysisSortType](namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing.md#namespace_z_o_s_a_p_i_1_1_analysis_1_1_ray_tracing_1a4762143cc34e1bc8ca57136a898c5ed3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.SortBy"}]}`
-->

### Property RelativeMinimumFlux

<a id="interface_z_o_s_a_p_i_1_1_tools_1_1_sequences_1_1_i_via_z_r_d_or_p_a_f_generation_settings_1ac9360ab8537ddf1d8aa3a14779594f40"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.RelativeMinimumFlux
```


Optional minimum flux value, as a fraction of the initial ray flux, which paths must satisfy in order for sequences to be generated. Defaults to 0.


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Tools.Sequences.IViaZRDOrPAFGenerationSettings.RelativeMinimumFlux"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
