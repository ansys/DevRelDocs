---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:create a sound field

**Version: 0.0.0**

## Description

Create a DPF field from a vector of samples. This field can then be used as a 'signal' by the DPF Sound operators.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_data_vector |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Vector containing the signal's samples as double values. The first sample corresponds to time t = 0 s. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | Sampling frequency of the signal in Hz. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  in_unit |[`string`](../../core-concepts/dpf-types.md#standard-types) | Unit of the signal. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| out_field |[`field`](../../core-concepts/dpf-types.md#field) | Signal as a DPF field, in the format expected by DPF Sound for a signal. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: create_field_from_vector

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.