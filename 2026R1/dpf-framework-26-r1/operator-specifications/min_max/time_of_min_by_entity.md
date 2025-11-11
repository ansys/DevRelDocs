---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:time of min

**Version: 0.0.0**

## Description

Evaluates time/frequency of minimum.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 3</strong>|  abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Should use absolute value. |
| <strong>Pin 4</strong>|  compute_amplitude |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Do calculate amplitude. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: time_of_min_by_entity

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.