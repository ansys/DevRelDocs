---
category: sound
plugin: sound
license: avrxp_snd_level1
---

# sound:xtract transient detection

**Version: 0.0.0**

## Description

Transient components detection and extraction using the XTRACT algorithm.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_signal |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Signal(s) from which we want to extract transient components, as a field or fields_container. When inputting a fields_container, each signal (each field of the fields_container) is processed individually. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_parameters |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) | Structure that contains the parameters of the algorithm: <br>						- Lower threshold (float), between 0 and 100<br>						- Upper threshold (float), between 0 and 100<br>						This structure is of type Xtract_transient_parameters (see this class for more details).<br>					 |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_transient_signals |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Transient signal(s), as a field or fields_container (depending on the input). |
|  **Pin 1**| output_non_transient_signals |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | Non-transient signal(s): original signal minus transient signal, as a field or fields_container (depending on the input). |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: sound

 **Plugin**: sound

 **Scripting name**: None

 **Full name**: None

 **Internal name**: xtract_transient

 **License**: avrxp_snd_level1


## Changelog

- Version 0.0.0: Initial release.