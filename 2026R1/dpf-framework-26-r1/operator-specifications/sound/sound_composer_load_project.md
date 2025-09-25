---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - load project

**Version: 0.0.0**

## Description

Load a Sound Composer project from a .scn file.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the project file to load. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| sound_composer_project |[`any_collection`](../../core-concepts/dpf-types.md#any-collection) | DPF object that contains the loaded Sound Composer project. |
|  **Pin 1**| sound_composer_project_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Name of the loaded Sound Composer project. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_load_project

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.