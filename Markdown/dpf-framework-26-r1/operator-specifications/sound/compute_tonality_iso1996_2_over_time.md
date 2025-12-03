---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute tonality ISO1996-2:2007 over time

**Version: 0.0.0**

## Description

Compute the tonal audibility and tonal adjustment over time of a signal, where tonal audibility and tonal adjustment are defined in accordance with annex C of the ISO 1996-2:2007 standard.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the ISO 1996-2:2007 tonality over time. |
| <strong>Pin 1</strong>|  window_length |[`double`](../../core-concepts/dpf-types.md#standard-types) | Analysis window length in ms. Default: 1000 ms. |
| <strong>Pin 2</strong>|  overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | Percentage in % of each analysis window that overlaps with the next. Default: 75 %. |
| <strong>Pin 3</strong>|  noise_threshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Noise pause detection threshold (also referred to as level excess) in dB. Must be positive. Default: 1 dB. |
| <strong>Pin 4</strong>|  effective_analysis_bw |[`double`](../../core-concepts/dpf-types.md#standard-types) | Effective analysis bandwidth in Hz. Must be in the range ]0, 5]. Default: 5 Hz. |
| <strong>Pin 5</strong>|  noise_bandwidth |[`double`](../../core-concepts/dpf-types.md#standard-types) | Noise bandwidth, in proportion to the critical bandwidth, that is taken into account for the calculation of the masking noise level (the default value 0.75 means that the masking noise level is estimated in a band delimited by 75 % of the critical bandwidth on each side of the tone). Must be in the range [0.75, 2]. Default: 0.75. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| tonality_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonal audibility over time, in dB. |
|  **Pin 1**| tonal_adjustement_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonal ajdustment Kt over time, in dB. |
|  **Pin 2**| calculation_details |[`any_collection`](../../core-concepts/dpf-types.md#any-collection) | ISO 1996-2:2007 over time calculation details. These details are stored in a collection of ansys::dpf_sound::PsychoacousticIndicators_TonalityISO1996_2_OverTime_results.
Each element of the collection contains the computation details for a segment of the input signal.

For each segment, the computation details consists of the parameters that can be accessed, each as a double, using the following identifiers:

* **segment_start_time_s**: start time of the segment under consideration, in s
* **segment_end_time_s**: end time of the segment under consideration, in s
* **lower_critical_band_limit_Hz**: lower critical band limit in Hz of the main detected tone or group of tones
* **higher_critical_band_limit_Hz**: upper critical band limit in Hz of the main detected tone or group of tones
* **total_noise_level_dBA**: total tone level in dBA in the identified critical band
* **total_tonal_level_dBA**: total noise level in dBA in the identified critical band |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tonality_iso1996_2_over_time

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.