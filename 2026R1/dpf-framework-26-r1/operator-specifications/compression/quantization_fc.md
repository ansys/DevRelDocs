---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:quantization fields container

**Version: 0.0.0**

## Description

Scales all the fields of a fields container to a given precision threshold, then rounds all the values to the unit.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_fc |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container to be quantized. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Precision threshold desired.<br>Case double : the threshold is applied on all the fields of the input fields container.<br>Case field with one, numComp or input size values : the threshold is used for each field of the input fields container.<br>Case fields container : the corresponding threshold field is found by matching label.<br> |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_fc |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Quantized fields container. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: quantization_fc

 **Full name**: compression.quantization_fc

 **Internal name**: quantization_fc

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.