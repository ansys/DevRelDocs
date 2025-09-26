---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:load sound samples from txt file

**Version: 0.0.0**

## Description

Return a signal (in a field) created with the samples vs time loaded from a txt file. Supported files are text files with the header AnsysSound_SoundSamples, as in Ansys Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to text file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| signal |[`field`](../../core-concepts/dpf-types.md#field) | The signal loaded from the file, as a Field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: load_sound_samples_from_txt

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.