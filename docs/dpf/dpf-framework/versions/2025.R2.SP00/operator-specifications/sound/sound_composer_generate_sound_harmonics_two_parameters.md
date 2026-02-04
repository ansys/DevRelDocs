---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - generate sound from harmonics (2 parameters) source

**Version: 0.0.0**

## Description

Generate a sound from a Harmonic (2 parameters) model and the evolution of two control parameters vs time.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_bbn |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Harmonic (2 parameters), as a fields container. Each field contains the level vs orders of the model at a given RPM and control parameter value. Levels must be specified in Pa^2. The unit must be indicated in the field's unit. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rpm_control |[`field`](../../core-concepts/dpf-types.md#field) | RPM value vs time, as a field. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  control_2 |[`field`](../../core-concepts/dpf-types.md#field) | Second control parameter value vs time, as a field. |
| <strong>Pin 3</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency of the output generated sound, in Hz. Default: 44100 Hz. |

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

 **Internal name**: sound_composer_generate_sound_harmonics_two_parameters

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.