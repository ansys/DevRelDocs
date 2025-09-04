---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute spectral centroid

**Version: 0.0.0**

## Description

Compute the spectral centroid of a signal.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the spectral centroid. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_spectral_centroid |[`double`](../../core-concepts/dpf-types.md#standard-types) | The spectral centroid value in Hz. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_spectral_centroid

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.