---
category: result
plugin: core
license: None
---

# result:plastic strain eqv

**Version: 0.0.0**

## Description

Read/compute element nodal equivalent plastic strain by calling the readers defined by the datasources.
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


## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- hdf5: h5dpf 
- lsdyna: d3plot 
- mapdl: rst, rstp 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](#input_0) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [fields_container](#input_2) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>7</strong> | [mesh](#input_7) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>9</strong> | [requested_location](#input_9) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>22</strong> | [read_beams](#input_22) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>26</strong> | [split_shells](#input_26) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>27</strong> | [shell_layer](#input_27) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>28</strong> | [extend_to_mid_nodes](#input_28) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. To get all data for all time/freq sets, connect an int with value -1.

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping)

nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains

<a id="input_2"></a>
### fields_container (Pin 2)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container already allocated modified inplace

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

result file path container, used if no streams are set

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

prevents from reading the mesh in the result files

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

requested location Nodal, Elemental or ElementalNodal

<a id="input_22"></a>
### read_beams (Pin 22)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

elemental nodal beam results are read if this pin is set to true (default is false)

<a id="input_26"></a>
### split_shells (Pin 26)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, this pin forces the results to be split by element shape, indicated by the presence of the 'elshape' label in the output. If false, the results for all elements shapes are combined. Default value is false if averaging is not required and true if averaging is required.

<a id="input_27"></a>
### shell_layer (Pin 27)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

If connected, this pin allows you to extract the result only on the selected shell layer(s). The available values are: 0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid.

<a id="input_28"></a>
### extend_to_mid_nodes (Pin 28)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Compute mid nodes (when available) by averaging the neighbour corner nodes. Default: True


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: plastic_strain_eqv

 **Full name**: result.plastic_strain_eqv

 **Internal name**: EPPL_EQV

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("EPPL_EQV"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_fields_container);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(7, my_mesh);
op.connect(9, my_requested_location);
op.connect(22, my_read_beams);
op.connect(26, my_split_shells);
op.connect(27, my_shell_layer);
op.connect(28, my_extend_to_mid_nodes);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.plastic_strain_eqv() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.mesh.connect(my_mesh)
op.inputs.requested_location.connect(my_requested_location)
op.inputs.read_beams.connect(my_read_beams)
op.inputs.split_shells.connect(my_split_shells)
op.inputs.shell_layer.connect(my_shell_layer)
op.inputs.extend_to_mid_nodes.connect(my_extend_to_mid_nodes)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.plastic_strain_eqv() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.mesh.Connect(my_mesh)
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.read_beams.Connect(my_read_beams)
op.inputs.split_shells.Connect(my_split_shells)
op.inputs.shell_layer.Connect(my_shell_layer)
op.inputs.extend_to_mid_nodes.Connect(my_extend_to_mid_nodes)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.