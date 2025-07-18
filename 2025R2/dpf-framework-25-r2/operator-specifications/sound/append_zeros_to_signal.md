---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:append zeros to signal

**Version: 0.0.0**

## Description

Append samples with value zero at the end of the signal, to extend its duration. Note: Append applies to every channel of the signal.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Input signal. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  duration_to_append |[`double`](../../core-concepts/dpf-types.md#standard-types) | Duration, in seconds, of the zeros to append to the input signal. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Output signal with appended zeros. The type of the output will be the same as the input on pin 0. For example, a Field as an input will result in a Field for the output. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: append_zeros_to_signal

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.