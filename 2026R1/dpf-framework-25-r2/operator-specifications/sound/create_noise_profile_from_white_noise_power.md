---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:xtract - Create XTRACT noise profile from white noise power

**Version: 0.0.0**

## Description

Create a noise profile for XTRACT, given the power level of the white noise.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_white_noise_power |[`double`](../../core-concepts/dpf-types.md#standard-types) | Power of the white noise (dB SPL). |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | Sampling frequency of the signal to denoise (which can be different from the signal used for creating the noise profile). |
| <strong>Pin 2</strong>|  window_length |[`int32`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Window length for the noise level estimation in ms. Default is 50 ms. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| noise_profile |[`field`](../../core-concepts/dpf-types.md#field) | Noise profile (field), to be used as input for the XTRACT denoiser operator. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: create_noise_profile_from_white_noise_power

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.