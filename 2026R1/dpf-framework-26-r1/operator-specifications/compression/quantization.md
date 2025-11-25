---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:quantization (field)

**Version: 0.0.0**

## Description

Scales a field to a given precision threshold, then rounds all the values to the unit.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_field |[`field`](../../core-concepts/dpf-types.md#field) | Field to quantize. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) | Precision threshold desired.<br>Case double : the threshold is applied on all the input field.<br>Case field with one value : the threshold is applied on all the input field.<br>Case field with "numComp" values : each threhsold is applied to the corresponding component of the input field.<br>Case field with the same number of values than the input field : quantization is performed component-wise.<br> |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output_field |[`field`](../../core-concepts/dpf-types.md#field) | Scaled and rounded field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: quantization

 **Full name**: compression.quantization

 **Internal name**: quantization

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.