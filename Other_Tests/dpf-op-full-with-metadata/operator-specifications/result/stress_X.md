---
category: result
plugin: core
license: None
---

# result:stress X

## Description

Read/compute element nodal component stresses XX normal component (00 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field), [`vector<double>`](../../getting-started/using-data-containers.md#vector<double>) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container), [`scoping`](../../getting-started/using-data-containers.md#scoping) | nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains |
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | FieldsContainer already allocated modified inplace |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../getting-started/using-data-containers.md#bool) | if true the field is rotated to global coordinate system (default true) |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | prevents from reading the mesh in the result files |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../getting-started/using-data-containers.md#string) | requested location, default is Nodal |
| <strong>Pin 14</strong>|  read_cyclic |[`enum dataProcessing::ECyclicReading`](../../getting-started/using-data-containers.md#enum-dataprocessing::ecyclicreading), [`int32`](../../getting-started/using-data-containers.md#int32) | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| <strong>Pin 22</strong>|  read_beams |[`bool`](../../getting-started/using-data-containers.md#bool) | elemental nodal beam results are read if this pin is set to true (default is false) |


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

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: stress_X

 **Full name**: result.stress_X

 **Internal name**: SX

 **License**: None
