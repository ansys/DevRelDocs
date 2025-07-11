---
category: result
plugin: mapdl
license: None
Version: 0.0.0
---

# result:cyclic volume

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read mapdl::rst::ENG_VOL from an rst file.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainer already allocated modified inplace |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container), [`stream`](../../getting-started/using-data-containers.md#stream) | Streams containing the result file. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | data sources containing the result file. |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../getting-started/using-data-containers.md#bool) | if true the field is rotated to global coordinate system (default true) |
| <strong>Pin 6</strong>|  all_dofs |[`bool`](../../getting-started/using-data-containers.md#bool) | if this pin is set to true, all the dofs are retrieved. By default this pin is set to false and only the translational dofs are retrieved. |
| <strong>Pin 7</strong>|  sector_mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | mesh of the base sector (can be a skin). |
| <strong>Pin 14</strong>|  read_cyclic |[`enum dataProcessing::ECyclicReading`](../../getting-started/using-data-containers.md#enum-dataprocessing::ecyclicreading), [`int32`](../../getting-started/using-data-containers.md#int32) | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| <strong>Pin 15</strong>|  expanded_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | mesh expanded. |
| <strong>Pin 16</strong>|  cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainer filled in |
|  **Pin 1**| expanded_meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: cyclic_volume

 **Full name**: result.cyclic_volume

 **Internal name**: mapdl::rst::ENG_VOL_cyclic

 **License**: None
 
