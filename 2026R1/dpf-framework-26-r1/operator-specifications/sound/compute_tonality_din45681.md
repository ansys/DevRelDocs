---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute tonality DIN 45681

**Version: 0.0.0**

## Description

Compute the tonality of a signal, according to the DIN 45681 standard.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the DIN 45681 tonality. |
| <strong>Pin 1</strong>|  window_length |[`double`](../../core-concepts/dpf-types.md#standard-types) | Analysis window length in seconds. Default: 3 s. |
| <strong>Pin 2</strong>|  overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | Percentage of each analysis window that overlaps with the next, in %. Default: 0 %. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_mean_difference_dl |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonality (mean difference DL) in dB. |
|  **Pin 1**| output_mean_difference_uncertainty |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonality's uncertainty in dB. |
|  **Pin 2**| output_tonal_adjustment_kt |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonal adjustment (Kt) in dB. |
|  **Pin 3**| output_decisive_difference_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonality over time (decisive difference over time DLj) in dB. |
|  **Pin 4**| output_decisive_difference_uncertainty_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonality's uncertainty over time in dB. |
|  **Pin 5**| output_decisive_frequency_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Decisive frequency over time in Hz. |
|  **Pin 6**| output_tonal_adjustment_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonal adjustment (Kt) over time in dB. |
|  **Pin 7**| output_calculation_details |[`any_collection`](../../core-concepts/dpf-types.md#any-collection) | DIN 45681 calculation details. This data container contains a collection of the computation details for each analyzed spectrum.
For each spectrum, stored details is organized in fields, where each field corresponds to one of the following output parameters, and provides its values for all detected tones:

* **differences**: Decisive difference DLj in dB
* **uncertainties**: Uncertainty in dB
* **frequencies**: Decisive frequency in Hz
* **typesv**: Tone type ('' for individual tones, or '**FG**' for groups of tones)
* **critical_band_lower_limits**: Critical band lower limit, in Hz
* **critical_band_upper_limits**: Critical band upper limit, in Hz
* **mean_narrowband_masking_noise_levels**: Mean narrow-band masking noise level Ls, in dBA
* **tone_levels**: Tone level Lt, in dBA
* **masking_noise_levels**: Masking noise level Lg, in dBA
* **masking_indices**: Masking index av, in dB. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tonality_din45681

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.