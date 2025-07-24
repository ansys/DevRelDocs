---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute roughness

**Version: 0.0.0**

## Description

Compute the roughness of a signal, based on the reference paper from Daniel and Weber, entitled 'Psychoacoustical roughness: implementation of an optimized model' (Acta Acustica united with Acustica, 83, 1997, pp. 113-123).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute roughness. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| overall_roughness |[`double`](../../core-concepts/dpf-types.md#standard-types) | Overall roughness in asper. |
|  **Pin 1**| specific_roughness |[`field`](../../core-concepts/dpf-types.md#field) | Specific roughness in asper/Bark, that is, the roughness values over Bark band indexes. |
|  **Pin 2**| roughness_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Roughness over time in asper. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_roughness

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.