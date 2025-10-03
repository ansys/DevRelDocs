---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:get frequency weighting (A, B, C)

**Version: 0.0.0**

## Description

Retrieve the A-, B-, or C-weighting values, in dB, at the specified frequencies.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  frequencies |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Array of frequencies where weightings shall be returned. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  frequency_weighting |[`string`](../../core-concepts/dpf-types.md#standard-types) | Frequency weighting.<br><br>Supported values are:<br><br>* **"A"**: A-weighting,<br>* **"B"**: B-weighting,<br>* **"C"**: C-weighting. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| weights |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Values of the required weighting in dB, at the specified frequencies. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: get_frequency_weighting

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.