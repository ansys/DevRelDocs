---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute fluctuation strength

**Version: 0.0.0**

## Description

Compute the fluctuation strength of a signal based on the master thesis of A. Sontacchi, entitled 'Entwicklung eines Modulkonzeptes fur die psychoakustische Gerauschanalyse unter MATLAB' (Technischen Universitat Graz, 1998, pp 1-112).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute fluctuation strength. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_fluctuation_strength |[`double`](../../core-concepts/dpf-types.md#standard-types) | Fluctuation strength in vacil. |
|  **Pin 1**| output_specific_fluctuation_strength |[`field`](../../core-concepts/dpf-types.md#field) | Specific fluctuation strength in vacil, that is, the fluctuation strength values over Bark band indexes. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_fluctuation_strength

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.