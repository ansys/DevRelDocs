---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:incremental over field

**Version: 0.0.0**

## Description

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 17</strong>|  domain_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_min |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 1**| field_max |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 2**| domain_ids_min |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 3**| domain_ids_max |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_inc

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.