---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - generate sound from spectrum source

**Version: 0.0.0**

## Description

Generate a sound from a spectrum (as a Field), given the duration and the method (IFFT or Hybrid) to use for the sound generation.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_spectrum |[`field`](../../core-concepts/dpf-types.md#field) | Spectrum, as a Field, from which the sound is generated. The expected unit of this spectrum is Pa^2/Hz. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  duration |[`double`](../../core-concepts/dpf-types.md#standard-types) | Duration in seconds of the generated sound. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  method |[`string`](../../core-concepts/dpf-types.md#standard-types) | Method to use for the sound generation. Supported input strings are: 'IFFT', 'Hybrid'. |
| <strong>Pin 3</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency in Hz of the generated sound. Default: 44100 Hz. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| generated_sound |[`field`](../../core-concepts/dpf-types.md#field) | Generated sound, as a Field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_generate_sound_spectrum

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.