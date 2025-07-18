---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - load harmonics (1 parameter) source

**Version: 0.0.0**

## Description

Load a harmonics (1 parameter) model from a file. Supported files are text files with the header AnsysSound_Orders X, and XML Harmonics files coming from Ansys Mechanical acoustics simulation, as in Ansys Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the harmonics (1 parameter) file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| source_harmonics |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The harmonics (1 parameter) model, as a fields container. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_load_source_harmonics

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.