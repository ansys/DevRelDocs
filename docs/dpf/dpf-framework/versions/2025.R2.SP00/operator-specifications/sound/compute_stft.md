---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:compute stft

**Version: 0.0.0**

## Description

Compute Short-Time Fourier Transform (STFT) from a temporal signal.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`field`](../../core-concepts/dpf-types.md#field) | The input signal as a field on which to compute the STFT.<br> |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fft_size |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Size (as an integer) of the FFT to compute the STFT. Use a power of 2 for better performance.<br> |
| <strong>Pin 2</strong>|  window_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | The window used for the FFT computation, as a string. Allowed input strings are: 'BLACKMAN', 'FLATTOP', 'GAUSS','HAMMING', 'HANN', 'RECTANGULAR', 'TRIANGULAR'. If no parameter is specified, the default value is 'HANN'. |
| <strong>Pin 3</strong>|  window_overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | The overlap value between two successive FFT computations (value between 0 and 1). 0 means no overlap, 0.5 means 50 % overlap. If no parameter is specified, default value is 0.5. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_stft |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Output STFT (complex), fields container of 2D Matrices. The fields container is indexed by labels "channel_number", time and complex. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_stft

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.