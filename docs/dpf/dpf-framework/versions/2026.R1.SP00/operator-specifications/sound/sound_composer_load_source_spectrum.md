---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sound composer - load spectrum source

**Version: 0.0.0**

## Description

Load a source of type Spectrum from a file. Supported files are XML files and text files with the header AnsysSound_Spectrum X, as in Ansys Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | Path to the spectrum source file. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| source_spectrum |[`field`](../../core-concepts/dpf-types.md#field) | The spectrum read from the file, as a Field, with unit Pa^2/Hz. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sound_composer_load_source_spectrum

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.