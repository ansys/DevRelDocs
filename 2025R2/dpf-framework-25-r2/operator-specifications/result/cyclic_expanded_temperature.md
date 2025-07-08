---
category: result
plugin: mapdl
license: None
Version: 0.0.0
---

# result:cyclic expanded temperature

Version: 0.0.0


## Description

Read temperature from an rst file and expand it with cyclic symmetry.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> | time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1</strong> | mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong> | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainer already allocated modified inplace |
| <strong>Pin 3</strong> | streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container), [`stream`](../../core-concepts/dpf-types.md#stream) | Streams containing the result file. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | data sources containing the result file. |
| <strong>Pin 5</strong> | bool_rotate_to_global |[`bool`](../../core-concepts/dpf-types.md#standard-types) | default is true |
| <strong>Pin 6</strong> | all_dofs |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if this pin is set to true, all the dofs are retrieved. By default this pin is set to false and only the translational dofs are retrieved. |
| <strong>Pin 7</strong> | sector_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | mesh of the base sector (can be a skin). |
| <strong>Pin 9</strong> | requested_location |[`string`](../../core-concepts/dpf-types.md#string) | location needed in output |
| <strong>Pin 14</strong> | read_cyclic |enum dataProcessing::ECyclicReading, [`int32`](../../core-concepts/dpf-types.md#standard-types) | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| <strong>Pin 15</strong> | expanded_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | mesh expanded. |
| <strong>Pin 16</strong> | cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |  |
| <strong>Pin 18</strong> | sectors_to_expand |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |
| <strong>Pin 19</strong> | phi |[`double`](../../core-concepts/dpf-types.md#double) | angle phi in degrees (default value 0.0) |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainer filled in |
| **Pin 1** | expanded_meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **use_cache** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |


## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cyclic_expanded_temperature

 **Full name**: result.cyclic_expanded_temperature

 **Internal name**: mapdl::rth::TEMP_cyclic

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.