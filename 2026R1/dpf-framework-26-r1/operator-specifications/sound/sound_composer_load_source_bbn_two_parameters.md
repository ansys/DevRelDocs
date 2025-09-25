---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - load broadband noise (2 parameters) source

**Version: 0.0.0**

## Description

Load a broadband noise (BBN) model (2 parameters) from a file. Supported files are text files with the header AnsysSound_BBN_MultipleParameters X, as created by Ansys Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the broadband noise (2 parameters) file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| source_bbn_two_parameters |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Broadband noise model (2 parameters) read from the file, as a fields container. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_load_source_bbn_two_parameters

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.