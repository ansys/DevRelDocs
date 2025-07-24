---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - generate sound from a broadband noise (2 parameters) source

**Version: 0.0.0**

## Description

Generate a sound from a broadband noise model (2 parameters), according to a given evolution vs time of the two control parameters.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_bbn_two_parameters |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Broadband noise model (2 parameters), as a fields container. This fields container is obtained as the output of the operator 'sound_composer_load_source_bbn_two_parameters'. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  control_1 |[`field`](../../core-concepts/dpf-types.md#field) | First control parameter value vs time, as a field. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  control_2 |[`field`](../../core-concepts/dpf-types.md#field) | Second control parameter value vs time, as a field. |
| <strong>Pin 3</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency of the generated sound, in Hz. Default: 44100 Hz. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| generated_sound |[`field`](../../core-concepts/dpf-types.md#field) | Generated sound, as a field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_generate_sound_bbn_two_parameters

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.