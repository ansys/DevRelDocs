---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:quantization fields container

**Version: 0.0.0**

## Description

Applies scaling to precision to all the values from fields container input, then rounding to the unit.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_fc |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Input fields container |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Threshold (precision) desired. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_fc |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Scaled and rounded fields container |

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