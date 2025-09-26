---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - save project

**Version: 0.0.0**

## Description

Save a Sound Composer project in a .scn file. This file can be opened in Ansys Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the file to save. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  sound_composer_project |[`any_collection`](../../core-concepts/dpf-types.md#any-collection) | DPF object that contains the Sound Composer project to save. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  sound_composer_project_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Name of the Sound Composer project to save. |

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

 **Internal name**: sound_composer_save_project

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.