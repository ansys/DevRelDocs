---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute tonality aures

**Version: 0.0.0**

## Description

Compute the tonality of a signal, according to the Aures model (W. Aures, 'Procedure for calculating the sensory pleasantness of various sounds', Acustica 59 (2), December 1985, pp. 130-141).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the Aures tonality. |
| <strong>Pin 1</strong>|  overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | Percentage in % of each window that overlaps with the next. Default: 90 %. |
| <strong>Pin 2</strong>|  account_w1 |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Enable (True) or disable (False) the bandwidth weighting w1. Default: False. |
| <strong>Pin 3</strong>|  bw_weighting_threshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Threshold in dB for the bandwidth weighting w1. The threshold value is ignored if input account_w1 is set to False. Default value: 3 dB. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| tonality |[`double`](../../core-concepts/dpf-types.md#standard-types) | Overall tonality in tonality units (tu). |
|  **Pin 1**| tonality_over_time_tu |[`field`](../../core-concepts/dpf-types.md#field) | Tonality over time in tu. |
|  **Pin 2**| wt_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonal component weighting wT over time.The tonal component weighting combines 3 weighting functions related to the bandwidth, the frequency, and the prominence of each detected tone. |
|  **Pin 3**| wGcr_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Relative loudness weighting wGr over time.The relative loudness weighting accounts for the relative contribution of the tonal loudness to the overall loudness. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tonality_aures

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.