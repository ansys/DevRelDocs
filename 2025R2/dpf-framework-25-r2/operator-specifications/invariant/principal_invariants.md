---
category: invariant
plugin: core
license: None
---

# invariant:principal invariants (field)

**Version: 0.0.0**

## Description

Computes the element-wise Eigen values of a tensor field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_eig_1 |[`field`](../../core-concepts/dpf-types.md#field) | first eigen value field |
|  **Pin 1**| field_eig_2 |[`field`](../../core-concepts/dpf-types.md#field) | second eigen value field |
|  **Pin 2**| field_eig_3 |[`field`](../../core-concepts/dpf-types.md#field) | third eigen value field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: principal_invariants

 **Full name**: invariant.principal_invariants

 **Internal name**: invariants

 **License**: None


## Changelog

- Version 0.0.0: Initial release.