---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:resample

**Version: 0.0.0**

## Description

Resample a signal to a target sampling frequency.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  signal_to_resample |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Input signal(s) to resample, as a fields_container. Each signal (stored as a field) is resampled. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_fs |[`double`](../../core-concepts/dpf-types.md#standard-types) | Target sampling frequency, in Hz. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| resampled_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Resampled signal(s), whose sampling frequency is target_fs. The type of the output will be the same as the input on pin 0. For example, a Field as an input will result in a Field for the output. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: resample

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.