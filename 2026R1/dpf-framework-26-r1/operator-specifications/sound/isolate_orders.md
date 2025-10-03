---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:isolate orders

**Version: 0.0.0**

## Description

Isolate orders in a signal. This operator allows you to select the orders of a harmonic signal and create a signal that contains only those orders.
 An RPM (Revolutions Per Minute) signal is required, having the same size as the input signal.
 This operation is based on the following processing: Short-Time Fourier Transform (STFT), then isolation of the orders in the STFT matrix, then reconstruction of a temporal signal using the Inverse STFT (ISTFT) of the modified STFT matrix.
 Note: We recommend performing trials of orders isolation in Ansys Sound SAS, then using here the same parameters as the ones found to be the best in Ansys Sound SAS.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_time_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | The input signal(s) as a fields container or a field on which to isolate orders.<br> |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_rpm_signal |[`field`](../../core-concepts/dpf-types.md#field) | The RPM signal associated with the time signals, as a field. It is assumed that the signal's unit is 'RPM'. If this is not the case, inaccurate behavior might occur during the conversion from RPM to frequency. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  orders_to_extract |[`field`](../../core-concepts/dpf-types.md#field) | List of the order numbers you want to isolate. Must contain at least one value.<br> |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fft_size |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Size (as an integer) of the FFT used to compute the STFT. Use a power of 2 for better performance.<br> |
| <strong>Pin 4</strong>|  window_type |[`string`](../../core-concepts/dpf-types.md#standard-types) | The window used for the FFT computation, as a string.<br>Allowed input strings are:<br><br>* BLACKMAN<br>* FLATTOP<br>* GAUSS<br>* HAMMING<br>* HANN<br>* RECTANGULAR<br>* TRIANGULAR<br><br>If no parameter is specified, the default value is 'HANN'. |
| <strong>Pin 5</strong>|  window_overlap |[`double`](../../core-concepts/dpf-types.md#standard-types) | The overlap value for FFT computation (float value between 0 and 1). If no parameter is specified, the default value is 0.5.<br> |
| <strong>Pin 6</strong>|  width_order_selection |[`int32`](../../core-concepts/dpf-types.md#standard-types) | The width, in Hz, of the area used to select each individual order. This area is centered on each order. Note that its precision depends on the FFT size selected in pin 3. If no parameter is specified, the default value is 10 Hz.<br> |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Resulting output temporal signal as a field container or a field, depending on input type.
 |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: isolate_orders

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.