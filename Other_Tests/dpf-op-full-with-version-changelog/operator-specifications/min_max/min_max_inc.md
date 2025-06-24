---
category: min_max
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# min_max:incremental over field

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 17</strong>|  domain_id |[`int32`](../../getting-started/using-data-containers.md#int32) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_min |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 1**| field_max |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 2**| domain_ids_min |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
|  **Pin 3**| domain_ids_max |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_inc

 **License**: any_dpf_supported_increments
 
