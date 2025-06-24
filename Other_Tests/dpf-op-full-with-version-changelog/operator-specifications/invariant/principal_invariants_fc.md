---
category: invariant
plugin: core
license: None
Version: 0.0.0
---

# invariant:principal invariants (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the element-wise Eigen values of all the tensor fields of a fields container.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_eig_1 |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | first eigen value fields |
|  **Pin 1**| fields_eig_2 |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | second eigen value fields |
|  **Pin 2**| fields_eig_3 |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | third eigen value fields |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: principal_invariants_fc

 **Full name**: invariant.principal_invariants_fc

 **Internal name**: invariants_fc

 **License**: None
 
