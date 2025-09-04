---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute sharpness DIN 45692

**Version: 0.0.0**

## Description

Compute the overall sharpness and sharpness over time of a signal, where sharpness is defined in accordance with the DIN 45692 standard. The overall sharpness calculation uses the specific loudness computed according to the ISO 532-1 standard for stationary sounds as a basis. The sharpness over time calculation uses the specific loudness computed according to the ISO 532-1 standard for time-varying sounds as a basis.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input in Pa on which to compute the DIN 45692 sharpness. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions (supported values: 'Free', 'Diffuse'). Default: 'Free'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| sharpness |[`double`](../../core-concepts/dpf-types.md#standard-types) | Overall sharpness in acum (based on ISO 532-1 stationary specific loudness). |
|  **Pin 1**| max_sharpness |[`double`](../../core-concepts/dpf-types.md#standard-types) | Maximum sharpness over time in acum (based on ISO 532-1 time-varying specific loudness). |
|  **Pin 2**| sharpness_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Sharpness over time in acum (based on ISO 532-1 time-varying specific loudness). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_sharpness_din45692

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.