---
category: geo
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# geo:integrate over elements

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Integration of an input field over mesh.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Integrate the input field over a specific scoping. |
| <strong>Pin 2</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Mesh to integrate on. If not provided, the one from input field is employed. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: integrate_over_elements

 **Full name**: geo.integrate_over_elements

 **Internal name**: element::integrate

 **License**: any_dpf_supported_increments
 
