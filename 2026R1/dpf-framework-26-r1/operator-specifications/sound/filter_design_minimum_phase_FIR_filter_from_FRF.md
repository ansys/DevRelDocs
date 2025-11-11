---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:filter - design minimum phase filter (FIR) from FRF

**Version: 0.0.0**

## Description

Design a minimum-phase Finite Impulse Response (FIR) filter from a Frequency Response Function (FRF). Note that prior to the filter design operation itself, the input FRF is interpolated between 0 Hz and sampling_frequency/2 Hz, at a frequency step of 1 Hz (or less, in the case that the minimum frequency step in the input FRF is lower than 1 Hz).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  frequency_response_function |[`field`](../../core-concepts/dpf-types.md#field) | Frequency response function (FRF) from which to design the minimum-phase filter.  The FRF is expected as a field which contains the gain in dB for each frequency. The frequencies are specified as the time support of the field. |
| <strong>Pin 1</strong>|  sampling_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Sampling frequency of the coefficients of the returned minimum-phase filter. If no value is specified, the sampling frequency is set to 2 * maximum frequency of the input FRF. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| filter_b_coefficients |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | Coefficients B of the minimum-phase FIR filter designed from the input FRF. |
|  **Pin 1**| filter_a_coefficients |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | (Optional) Coefficient A of the minimum-phase FIR filter designed from the input FRF. Note: as it is a FIR filter, A is always filled with the single value 1.0. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: filter_design_minimum_phase_FIR_filter_from_FRF

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.