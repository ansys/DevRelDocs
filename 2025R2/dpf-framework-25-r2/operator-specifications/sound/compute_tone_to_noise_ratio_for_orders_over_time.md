---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute TNR over time for orders

**Version: 0.0.0**

## Description

Compute the Tone-to-Noise Ratio (TNR) over time of a signal, for specific order(s), where TNR is defined in accordance with the ECMA-418-1 (formerly ECMA-74, Annex D) and ISO7779:1999 standards. This is applicable for tones whose frequencies are between 89.1 Hz and 11,220 Hz.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the TNR over time for the specified orders. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rpm_profile |[`field`](../../core-concepts/dpf-types.md#field) | Profile of RPM over time associated with the input signal. Must have the same length and same sampling frequency as the input signal. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  orders_numbers |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | List of the order numbers for which to compute TNR. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| orders_pr_over_time |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | TNR over time, in dB, for each order number specified in input orders_numbers. |
|  **Pin 1**| rpm_profile_resampled |[`field`](../../core-concepts/dpf-types.md#field) | RPM over time, resampled to match the TNR computation time steps. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tone_to_noise_ratio_for_orders_over_time

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.