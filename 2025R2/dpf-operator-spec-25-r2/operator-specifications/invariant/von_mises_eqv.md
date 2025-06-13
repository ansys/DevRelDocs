---
category: invariant
plugin: core
license: None
Version: 0.0.0
---

# invariant:von mises eqv (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the element-wise Von-Mises criteria on a tensor field.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](./../../getting-started/using-data-containers.md#field), [`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  poisson_ratio |[`double`](./../../getting-started/using-data-containers.md#double), [`int32`](./../../getting-started/using-data-containers.md#int32) | Poisson ratio to be used in equivalent strain calculation. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](./../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: von_mises_eqv

 **Full name**: invariant.von_mises_eqv

 **Internal name**: eqv

 **License**: None
 
