---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:filter - filter a signal

**Version: 0.0.0**

## Description

Filters a 1D signal, using a linear, time-invariant digital filter. The filter is an Infinite Impulse Response (IIR) filter, defined by its vectors of coefficients B (numerator) and A (denominator) in the z-domain. If A contains only one coefficient, equal to 1, it is a Finite Impulse Response (FIR) filter. If A is not specified, it will be set to value 1. If the first value of the A coefficients (A[0]) is not set to 1.0, all coefficient values will be divided by A[0] to normalize the filter.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  signal_to_filter |[`field`](../../core-concepts/dpf-types.md#field) | Signal to filter. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filter_b_coefficients |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Coefficients B of the filter. |
| <strong>Pin 2</strong>|  filter_a_coefficients |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Coefficients A of the filter. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| filtered_signal |[`field`](../../core-concepts/dpf-types.md#field) | Filtered signal, as a field. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: filter_signal

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.