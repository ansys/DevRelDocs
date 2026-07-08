---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:write SAS wav file

**Version: 0.0.0**

## Description

Writes signal(s) (fields_container) to a wav file (Ansys Sound SAS wav format).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_multi_channel_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Signal to save: fields_container with each channel as a field. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  out_path_and_file_name |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Path of the wav file to save. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Bit depth. Supported values are: 'float32', 'int32', 'int16', 'int8'.<br>This means that the samples will be respectively coded into the wav file using 32 bits (32-bit IEEE Float), 32 bits (int), 16 bits (int) or 8 bits (int). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: write_wav_sas

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.