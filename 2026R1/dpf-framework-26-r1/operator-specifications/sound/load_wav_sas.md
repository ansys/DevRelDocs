---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:load an SAS wav file

**Version: 0.0.0**

## Description

Read a wav file created by Ansys Sound SAS, and store the signal(s) in a fields_container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_wav_file |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Path to the wav file to read. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| out_multichannel_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Multichannel signal: container, with each channel as a field. |
|  **Pin 1**| sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | Sampling frequency in Hz. |
|  **Pin 2**| format |[`string`](../../core-concepts/dpf-types.md#standard-types) | Format (including bit depth).
Supported values are 'float32', 'int32', 'int16' and 'int8'.
These mean that the wav file samples are coded using 32-bit floats (32-bit IEEE Float), 32-bit integers, 16-bit integers, and 8-bit integers, respectively. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: load_wav_sas

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.