---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute loudness ISO 532-1 (stationary)

**Version: 0.0.0**

## Description

Compute loudness according to the ISO532-1 standard for stationary sounds.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute loudness. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions (supported values: 'Free', 'Diffuse'). Default: 'Free'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_loudness_sone |[`double`](../../core-concepts/dpf-types.md#standard-types) | Loudness in sone. |
|  **Pin 1**| output_loudness_phon |[`double`](../../core-concepts/dpf-types.md#standard-types) | Loudness level in phon. |
|  **Pin 2**| output_specific_loudness |[`field`](../../core-concepts/dpf-types.md#field) | Specific loudness in sone/Bark, that is, the loudness values over Bark band indexes. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_loudness_iso532_1

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.