---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:recombine cyclic harmonic indices

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Add the fields corresponding to different load steps with the same frequencies to compute the response.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **use_cache** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |
| **work_by_index** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, loops and comparisons by entity will be done by index instead of ids. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: recombine_harmonic_indeces_cyclic

 **Full name**: result.recombine_harmonic_indeces_cyclic

 **Internal name**: recombine_harmonic_indeces_cyclic

 **License**: None
 
