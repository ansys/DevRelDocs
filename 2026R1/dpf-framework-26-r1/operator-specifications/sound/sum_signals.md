---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:sum of signals

**Version: 0.0.0**

## Description

Sample-by-sample sum of all the signals (fields) of an input fields_container, into a single field. If the signals have different sampling frequencies, all the signals are resampled to the maximum sampling frequency of the signals. If the signals have different length, the length of the output signal will be the length of the longest signal. The shortest signals are padded with zeros before the sum.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Input signals to sum: each signal is a field of input_signal. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_signal |[`field`](../../core-concepts/dpf-types.md#field) | Output signal: sample-by-sample sum ot the input signals. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sum_signals

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.