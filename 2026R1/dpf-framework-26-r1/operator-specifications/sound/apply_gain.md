---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:apply gain to a signal

**Version: 0.0.0**

## Description

Apply gain on each channel of a signal (fields_container).  Note: The gain is applied to every channel of the signal.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | The input signal. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  gain |[`double`](../../core-concepts/dpf-types.md#standard-types) | Gain value in decibels (dB) or linear unit. By default, gain is specified in decibels. If gain is given in a linear unit, set is_gain_dB to false. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  is_gain_dB |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If value is true, the gain is specified in dB. If value is false, the gain is in a linear unit. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Signal(s) with the gain applied. The type of the output will be the same as the input on pin 0. For example, a Field as an input will result in a Field for the output. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: apply_gain

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.