---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - generate sound from harmonics (1 parameter) source

**Version: 0.0.0**

## Description

Generate a sound from a harmonics (1 parameter) model, according to a given evolution vs time of the control parameter (the RPM).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_harmonics |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Harmonics (1 parameter) model, as a fields container. Each field contains the level of all orders (the harmonics), at a corresponding RPM value (control parameter). Each field contains the same number of orders, each with the same order numbers, as in the other fields of source_harmonics. The order numbers are stored in the time-frequency support of the field. The control parameter (RPM) vector is stored as the support of the fields container. Levels must be provided in Pa^2. The unit must be specified in each field's unit. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rpm_control |[`field`](../../core-concepts/dpf-types.md#field) | RPM value vs time, as a field. |
| <strong>Pin 2</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency of the generated sound, in Hz. Default: 44100 Hz |

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

 **Internal name**: sound_composer_generate_sound_harmonics

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.