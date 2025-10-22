---
category: result
plugin: core
license: None
---

# result:temperature gradient

**Version: 0.0.0**

## Description

Read/compute Temperature Gradient by calling the readers defined by the datasources.
- The 'requested_location' and 'mesh_scoping' inputs are processed to see if they need scoping transposition or result averaging. The resulting output fields have a 'Nodal', 'ElementalNodal' or 'Elemental' location.
- Once the need for averaging has been detected, the behavior of the combined connection of the 'split_shells' and 'shell_layer' pins is:

| Averaging is needed | 'split_shells'      | 'shell_layer' | Expected output |
|---------------------|---------------------|---------------|-----------------|
| No                  | Not connected/false | Not connected | Location as in the result file. Fields with all element shapes combined. All shell layers present. |
| No                  | true                | Not connected | Location as in the result file. Fields split according to element shapes. All shell layers present. |
| No                  | true                | Connected     | Location as in the result file. Fields split according to element shapes. Only the requested shell layer present. |
| No                  | Not connected/false | Connected     | Location as in the result file. Fields with all element shapes combined. Only the requested shell layer present. |
| Yes                 | Not connected/true  | Not connected | Location as requested. Fields split according to element shapes. All shell layers present. |
| Yes                 | false               | Not connected | Location as requested. Fields with all element shapes combined. All shell layers present. |
| Yes                 | false               | Connected     | Location as requested. Fields with all element shapes combined. Only the requested shell layer present. |
| Yes                 | Not connected/true  | Connected     | Location as requested. Fields split according to element shapes. Only the requested shell layer present. |
- The available 'elshape' values are:

| elshape | Related elements |
|---------|------------------|
| 1       | Shell (generic)  |
| 2       | Solid            |
| 3       | Beam             |
| 4       | Skin             |
| 5       | Contact          |
| 6       | Load             |
| 7       | Point            |
| 8       | Shell with 1 result across thickness (membrane) |
| 9       | Shell with 2 results across thickness (top/bottom) |
| 10      | Shell with 3 results across thickness (top/bottom/mid) |
| 11      | Gasket          |
| 12      | Multi-Point Constraint |
| 13      | Pretension      |


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping) | nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains |
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container already allocated modified inplace |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 5</strong>|  bool_rotate_to_global |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true the field is rotated to global coordinate system (default true). Please check your results carefully if 'false' is used for Elemental or ElementalNodal results averaged to the Nodes when adjacent elements do not share the same coordinate system, as results may be incorrect. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | prevents from reading the mesh in the result files |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | requested location Nodal, Elemental or ElementalNodal |
| <strong>Pin 22</strong>|  read_beams |[`bool`](../../core-concepts/dpf-types.md#standard-types) | elemental nodal beam results are read if this pin is set to true (default is false) |
| <strong>Pin 26</strong>|  split_shells |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, this pin forces the results to be split by element shape, indicated by the presence of the 'elshape' label in the output. If false, the results for all elements shapes are combined. Default value is false if averaging is not required and true if averaging is required. |
| <strong>Pin 27</strong>|  shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If connected, this pin allows you to extract the result only on the selected shell layer(s). The available values are: 0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. |
| <strong>Pin 28</strong>|  extend_to_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Compute mid nodes (when available) by averaging the neighbour corner nodes. Default: True |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: temperature_grad

 **Full name**: result.temperature_grad

 **Internal name**: TG

 **License**: None


## Changelog

- Version 0.0.0: Initial release.