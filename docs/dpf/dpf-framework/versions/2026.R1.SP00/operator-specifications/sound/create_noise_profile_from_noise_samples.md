---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:xtract - Create noise profile from noise signal

**Version: 0.0.0**

## Description

Create a noise profile from an input signal which contains only noise. This profile can be used as an input for the XTRACT denoiser operator.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Signal (field) of noise. |
| <strong>Pin 1</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency of the signal to denoise (which can be different from the signal used for creating the noise profile). Default is the sampling frequency of the noise signal. |
| <strong>Pin 2</strong>|  window_length |[`int32`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Window length for the noise level estimation in ms. Default value is 50 ms. |

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

 **Internal name**: create_noise_profile_from_noise_samples

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.