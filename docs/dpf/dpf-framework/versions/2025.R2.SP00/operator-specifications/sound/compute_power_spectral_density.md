---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute power spectral density

**Version: 0.0.0**

## Description

Compute the Power Spectral Density (PSD) of a signal. If the signal's unit is Unit, then the PSD's unit is Unit^2 / Hz.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | Input signal for PSD computation. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  window_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | The window used for the FFT computation, as a string. Supported values are: 'BLACKMAN', 'FLATTOP', 'GAUSS','HAMMING', 'HANN', 'RECTANGULAR', 'TRIANGULAR'. If no parameter is specified, the default value is 'HANN'. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  window_length |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Length of the analysis window in number of samples. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fft_size |[`int32`](../../core-concepts/dpf-types.md#standard-types) | FFT size in number of samples, must be a power of 2. Should be equal to or greater than window_length. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | Proportion of each window that overlaps with the next, must be in the range [0.0, 1.0[. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_signal |[`field`](../../core-concepts/dpf-types.md#field) | One-sided PSD of the input signal, in Unit^2/Hz. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_power_spectral_density

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.