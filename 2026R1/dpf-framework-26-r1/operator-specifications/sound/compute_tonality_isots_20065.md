---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute tonality ISO/TS 20065

**Version: 0.0.0**

## Description

Computes tonality according to the ISO/TS 20065:2022 standard

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the tonality ISO/TS 20065:2022. |
| <strong>Pin 1</strong>|  window_length |[`double`](../../core-concepts/dpf-types.md#standard-types) | Analysis window length in s. Default: 3. |
| <strong>Pin 2</strong>|  overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | Percentage in % of each analysis window that overlaps with the next. Default: 0 %. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_mean_audibility_dl |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonality (mean audibility DL) in dB. |
|  **Pin 1**| output_mean_audibility_uncertainty |[`double`](../../core-concepts/dpf-types.md#standard-types) | Tonality's uncertainty in dB. |
|  **Pin 2**| output_decisive_audibility_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonality over time (decisive audibility over time DLj) in dB. |
|  **Pin 3**| output_decisive_audibility_uncertainty_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Tonality's uncertainty over time in dB. |
|  **Pin 4**| output_decisive_frequency_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Decisive frequency over time in Hz. |
|  **Pin 5**| output_calculation_details |[`any_collection`](../../core-concepts/dpf-types.md#any-collection) | ISO/TS 20065:2022 calculation details. This data container contains a collection of the computation details for each analyzed spectrum.
For each spectrum, stored details is organized in fields, where each field corresponds to one of the following output parameters, and provides its values for all detected tones:

* **audibility**: Decisive audibilities DLj in dB
* **uncertainties**: Uncertainty in dB
* **frequencies**: Decisive frequency in Hz
* **types**: Tone type ('' for individual tones, or '**FG**' for groups of tones)
* **critical_band_lower_limits**: Critical band lower limit, in Hz
* **critical_band_upper_limits**: Critical band upper limit, in Hz
* **mean_narrowband_masking_noise_levels**: Mean narrow-band masking noise level Ls, in dBA
* **tone_levels**: Tone level Lt, in dBA
* **masking_noise_levels**: Masking noise level Lg, in dBA
* **masking_indices**: Masking index av, in dB |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tonality_isots_20065

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.