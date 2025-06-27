---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:plastic strain Z

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read/compute element nodal component plastic strains ZZ normal component (22 component) by calling the readers defined by the datasources. Regarding the requested location and the input mesh scoping, the result location can be Nodal/ElementalNodal/Elemental.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types#scoping), [`int32`](../../core-concepts/dpf-types#standard-types), [`vector<int32>`](../../core-concepts/dpf-types#standard-types), [`double`](../../core-concepts/dpf-types#standard-types), [`field`](../../core-concepts/dpf-types#field), [`vector<double>`](../../core-concepts/dpf-types#standard-types) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types#scopings-container), [`scoping`](../../core-concepts/dpf-types#scoping) | nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains |
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) | FieldsContainer already allocated modified inplace |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../core-concepts/dpf-types#standard-types) | if true the field is rotated to global coordinate system (default true) |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types#meshes-container) | prevents from reading the mesh in the result files |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types#standard-types) | requested location, default is Nodal |
| <strong>Pin 14</strong>|  read_cyclic |[`enum dataProcessing::ECyclicReading`](../../core-concepts/dpf-types#enum-dataprocessing::ecyclicreading), [`int32`](../../core-concepts/dpf-types#standard-types) | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| <strong>Pin 22</strong>|  read_beams |[`bool`](../../core-concepts/dpf-types#standard-types) | elemental nodal beam results are read if this pin is set to true (default is false) |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: plastic_strain_Z

 **Full name**: result.plastic_strain_Z

 **Internal name**: EPPLZ

 **License**: None
 
