---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute TNR

**Version: 0.0.0**

## Description

Compute the Tone-to-Noise Ratio (TNR) according to the ECMA-418-1 (former ECMA-74, Annex D) and ISO7779:1999 standards, using a power spectral density (PSD) as input. This is applicable for tones whose frequencies are between 89.1 Hz and 11,220 Hz.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_levels |[`field`](../../core-concepts/dpf-types.md#field) | Input PSD levels in Pa^2/Hz on which to compute PR, as a field. The PSD's frequencies must be regularly spaced. If the PSD's lowest frequency is not 0 Hz, values between 0 Hz and the PSD's lowest frequency are set to 0. |
| <strong>Pin 1</strong>|  frequency_list |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | (Optional) list of the frequencies of the tones (peaks in the spectrum) for which to compute PR. If this input is empty (not specified), a peak detection method is applied to automatically find the tones in the input spectrum. Then, the PR is calculated for each detected tone. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_TNR |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Tone-to-Noise Ratio data. This data container contains the final TNR value (in dB), as well as TNR details for each specified frequency (if input frequency_list is populated) or each detected tone (if input frequency_list is omitted or empty). These details are stored in the class ansys::dpf_sound::PsychoacousticIndicators_TNR_results. Use the following identifiers to retrieve each data. - 'TNR_max': Maximum (final) TNR value in dB, as a double; - 'TNR_dB': TNR value in dB for each tone, as a field; - 'frequency_Hz': Frequency of each tone in Hz, as a field; - 'level_dB': Level of each tone in dB, as a field; - 'bandwidth_lower_Hz': Lower frequency in Hz of each tone's bandwidth, as a field; - 'bandwidth_higher_Hz': Upper frequency in Hz of each tone's bandwidth, as a field. These data stored in the class PsychoacousticIndicators_TNR_results can be accessed using the method GetProperty(property_name). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_TNR

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.