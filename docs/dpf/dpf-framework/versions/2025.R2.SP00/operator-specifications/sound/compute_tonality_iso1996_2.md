---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute tonality ISO 1996-2:2007

**Version: 0.0.0**

## Description

Compute the tonal audibility and the tonal adjustment of a signal, according to annex C of the ISO 1996-2:2007 standard.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the ISO 1996-2:2007 tonality. |
| <strong>Pin 1</strong>|  noise_threshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Noise pause detection threshold (also referred to as level excess) in dB. Must be positive. Default: 1 dB. |
| <strong>Pin 2</strong>|  effective_analysis_bw |[`double`](../../core-concepts/dpf-types.md#standard-types) | Effective analysis bandwidth in Hz. Must be in the range ]0, 5]. Default: 5 Hz. |
| <strong>Pin 3</strong>|  noise_bandwidth |[`double`](../../core-concepts/dpf-types.md#standard-types) | Noise bandwidth, in proportion to the critical bandwidth, that is taken into account for the calculation of the masking noise level (the default value 0.75 means that the masking noise level is estimated in a band delimited by 75 % of the critical bandwidth on each side of the tone). Must be in the range [0.75, 2]. Default: 0.75. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| tonality |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonal audibility, in dB. |
|  **Pin 1**| tonal_adjustement |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonal adjustment Kt, in dB. |
|  **Pin 2**| calculation_details |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | ISO 1996-2:2007 calculation details. The DataTree elements can be accessed, each as a double, using the following identifiers: - 'Tonal audibility (dB)'; - 'Tonal adjustement (dB)'; - 'Lower critical band limit (Hz)'; - 'Higher critical band limit (Hz)'; - 'Total noise level (dBA)'; - 'Total tonal level (dBA)'. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tonality_iso1996_2

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.