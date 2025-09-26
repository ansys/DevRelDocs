---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute tonality ECMA-418-2

**Version: 0.0.0**

## Description

Compute the psychoacoustic tonality of a signal according to the ECMA-418-2 standard (Hearing Model of Sottek). This standard is also know as ECMA74 Annex G.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal in Pa on which to compute the ECMA-418-2 psychoacoustic tonality. |
| <strong>Pin 1</strong>|  field_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | Field type associated with the recording conditions (supported values: 'Free', 'Diffuse'). Default: 'Free'. |
| <strong>Pin 2</strong>|  edition |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Identifier of the standard edition (supported values: 1, for 1st edition, 2020, and 3, for 3rd edition, 2024). Default: 1 |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| tonality |[`double`](../../core-concepts/dpf-types.md#standard-types) | Psychoacoustic tonality in tuHMS. |
|  **Pin 1**| tonality_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Psychoacoustic tonality over time in tuHMS. |
|  **Pin 2**| tone_frequency_over_time |[`field`](../../core-concepts/dpf-types.md#field) | Frequency of the most prominent tone over time, in Hz. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_tonality_ecma418_2

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.