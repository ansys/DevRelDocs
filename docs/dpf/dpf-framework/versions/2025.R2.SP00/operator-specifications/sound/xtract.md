---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:xtract

**Version: 0.0.0**

## Description

XTRACT processing: in the same way as in Sound SAS, this operator chains a denoising step, followed by a tonal extraction step and then a transient extraction step. It returns the individual signals processed at each step, as well as the remainder.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Signal(s) on which to apply the XTRACT processing, as a field or fields_container. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  parameters_denoiser |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Structure that contains the parameters of the denoising step:<br>						- Noise levels (Field): level vs frequency of the noise.<br>						This structure is of type Xtract_denoiser_parameters (see this class for more details).<br>					 |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  parameters_tonal |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Structure that contains the parameters of the tonal extraction step:<br>						- Nfft (int) in number of samples<br>						- Regularity setting (float) in percent<br>						- Maximum slope (float) in dB/Hz<br>						- Minimum duration (float) in seconds<br>						- Intertonal gap (float) in Hz<br>						- Local emergence (float) in dB<br>						This structure is of type Xtract_tonal_parameters (see this class for more details).<br>					 |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  parameters_transient |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Structure that contains the parameters of the transient extraction step: <br>						- Lower threshold (float), between 0 and 100 percent<br>						- Upper threshold (float), between 0 and 100 percent<br>						This structure is of type Xtract_transient_parameters (see this class for more details).<br>					 |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| noise_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Noise signal: signal that contains the noise component, as a field or fields_container (depending on the input). |
|  **Pin 1**| tonal_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Tonal signal: signal that contains the tonal components, as a field or fields_container (depending on the input). |
|  **Pin 2**| transient_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Tonal signal: signal that contains the transient components, as a field or fields_container (depending on the input). |
|  **Pin 3**| remainder_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Remainder: signal that contains everything that has not been classified as noise, tonal or transient signals, as a field or fields_container (depending on the input). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: xtract

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.