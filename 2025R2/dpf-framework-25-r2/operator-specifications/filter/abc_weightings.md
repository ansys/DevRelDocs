---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:abc weightings

**Version: 0.0.0**

## Description

Computes ABC-weightings for the amplitude spectrum in dB units.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | data to be weighted in dB units. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  weighting_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | if this pin is set to 0, the A-weighting is computed, 1 the B-weigting is computed and 2 the C-weightings is computed. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  shape_by_tf_scoping |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if this pin is set to true, each field of the input fields container is defined by time freq scoping and not by ids. Default is false |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| weightings |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | weighted data in dB units. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **inplace** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | The output is written over the input to save memory if this config is set to true. |
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: abc_weightings

 **Full name**: filter.abc_weightings

 **Internal name**: abc_weightings

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.