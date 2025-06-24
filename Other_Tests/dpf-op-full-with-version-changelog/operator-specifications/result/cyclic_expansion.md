---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:cyclic expansion

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field container with the base and duplicate sectors |
| <strong>Pin 3</strong>|  harmonic_index |[`int32`](../../getting-started/using-data-containers.md#int32) |  |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../getting-started/using-data-containers.md#bool) | default is true |
| <strong>Pin 6</strong>|  map_size_scoping_out |[`umap<int32,int32>`](../../getting-started/using-data-containers.md#umap<int32,int32>) | map provider by scoping adapter |
| <strong>Pin 7</strong>|  normalization_factor |[`double`](../../getting-started/using-data-containers.md#double) |  |
| <strong>Pin 14</strong>|  merge_stages |[`bool`](../../getting-started/using-data-containers.md#bool) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) |  |
| <strong>Pin 18</strong>|  sectors_to_expand |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |
| <strong>Pin 19</strong>|  phi |[`double`](../../getting-started/using-data-containers.md#double) | angle phi in degrees (default value 0.0) |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainer filled in |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **use_cache** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: cyclic_expansion

 **Full name**: result.cyclic_expansion

 **Internal name**: cyclic_expansion

 **License**: None
 
