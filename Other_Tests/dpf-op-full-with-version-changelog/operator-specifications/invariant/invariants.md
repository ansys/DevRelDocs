---
category: invariant
plugin: core
license: None
Version: 0.0.0
---

# invariant:scalar invariants (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the element-wise invariants of a tensor field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_int |[`field`](../../getting-started/using-data-containers.md#field) | stress intensity field |
|  **Pin 1**| field_eqv |[`field`](../../getting-started/using-data-containers.md#field) | stress equivalent intensity |
|  **Pin 2**| field_max_shear |[`field`](../../getting-started/using-data-containers.md#field) | max shear stress field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: invariants

 **Full name**: invariant.invariants

 **Internal name**: invariants_deriv

 **License**: None
 
