---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute loudness ISO 532-1 (time-varying)

**Version: 0.0.0**

## Description

Compute the loudness over time of an input signal, according to the ISO532-1 standard for time-varying sounds. Loudness over time computation includes the calculation of the instantaneous loudness and the percentile values N5 and N10, in sone, and the instantaneous loudness level and the percentile values L5 and L10, in phon.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute loundess over time. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions (supported values: 'Free', 'Diffuse'). Default: 'Free'. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_loudness_sone_vs_time |[`field`](../../core-concepts/dpf-types.md#field) | Instantaneous loudness in sone. |
|  **Pin 1**| output_N5 |[`double`](../../core-concepts/dpf-types.md#standard-types) | N5 indicator in sone, that is, the loudness value that is exceeded during a cumulated 5 % of the signal duration. |
|  **Pin 2**| output_N10 |[`double`](../../core-concepts/dpf-types.md#standard-types) | N10 indicator in sone, that is, the loudness value that is exceeded during a cumulated 10 % of the signal duration. |
|  **Pin 3**| output_loudness_phon_vs_time |[`field`](../../core-concepts/dpf-types.md#field) | Instantaneous loudness level in phon. |
|  **Pin 4**| output_L5 |[`double`](../../core-concepts/dpf-types.md#standard-types) | L5 indicator in phon, that is, the loudness level value that is exceeded during a cumulated 5 % of the signal duration. |
|  **Pin 5**| output_L10 |[`double`](../../core-concepts/dpf-types.md#standard-types) | L10 indicator in phon, that is, the loudness level value that is exceeded during a cumulated 10 % of the signal duration. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_loudness_iso532_1_vs_time

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.