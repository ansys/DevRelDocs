---
category: mapping
plugin: Ans.Dpf.MultiphysicsMapper
license: any_dpf_supported_increments
---

# mapping:apply mechanical native mapping

**Version: 0.0.0**

## Description


Applies pre-computed mapping weights to interpolate field data from a source mesh to a target mesh.
This is the second stage of the two-stage native mapping workflow; use `prepare_mechanical_native_mapping` (or a dedicated prepare operator) to compute the weights first.

For each target point $j$, the interpolated value is:

$$
u_{\text{target}}^{(j)} = \sum_{i \in S(j)} w_{ij} \cdot u_{\text{source}}^{(i)}
$$

where $S(j)$ is the set of source points influencing target point $j$, and $w_{ij}$ are algorithm-specific weights: shape function values (shape function algorithms), barycentric coordinates or inverse-distance values (point cloud algorithms), or optimal linear predictors (kriging).

For further details on the algorithms and their settings, see the Ansys Mechanical help page on
[Data Transfer Mesh Mapping](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v271/en/wb_sim/ds_appen_data_transfer.html).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [source_mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [source_mesh_id](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [target_mesh](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong> | [target_mesh_id](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [mapping_manager_data](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>| |
| <strong>5</strong> | [source_data](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>6</strong> | [target_scoping](#input_6) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>7</strong> | [unnamed](#input_7) |  | |
| <strong>9</strong> | [threads_user_requested](#input_9) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### source_mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)

Source mesh containing the entities where source data is defined.
Must be the same mesh used in the prepare stage. For point cloud and kriging algorithms,
a coordinate field can be provided instead (representing nodal positions).
When a coordinate field is provided, only nodal or element-centroidal source data can be
mapped; providing elemental (non-centroidal) data in that case raises an error.

<a id="input_1"></a>
### source_mesh_id (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Unique identifier for the source mesh. Must match the ID used in the prepare stage
so that the pre-computed data from that stage can be correctly associated with this call.

<a id="input_2"></a>
### target_mesh (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)

Target mesh where interpolated data will be computed. Must be the same mesh
used in the prepare stage. For point cloud and kriging algorithms, a coordinate field can be provided
instead (representing target points).

<a id="input_3"></a>
### target_mesh_id (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Unique identifier for the target mesh. Must match the ID used in the prepare stage
so that the pre-computed data from that stage can be correctly associated with this call.

<a id="input_4"></a>
### mapping_manager_data (Pin 4)

- **Required:** Yes
- **Expected type(s):** 

Pre-computed mapping data obtained from the prepare stage output. Contains
the interpolation weights and configuration needed to perform the weighted summation.

<a id="input_5"></a>
### source_data (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with source field data to be mapped. Each field must have a
scoping consistent with the source mesh (e.g., nodal or elemental location matching the mesh entities).
Multiple fields with different label spaces (e.g., time steps) can be provided and will be processed
together, potentially in parallel.

<a id="input_6"></a>
### target_scoping (Pin 6)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Optional target scoping to restrict the interpolation to a subset of target mesh
entities. If provided, only target nodes/elements within this scoping will have interpolated values computed.
Useful for limiting computational cost when only a region of interest is needed.

<a id="input_7"></a>
### unnamed (Pin 7)

- **Required:** No
- **Expected type(s):** 

Optional metadata dictionary from the prepare stage. If provided with key
'unmapped_nodes_data', specifies target nodes that could not be mapped (e.g., nodes outside the
source mesh influence region). These nodes will be excluded from the interpolation, avoiding
extrapolation or undefined values. Typically obtained from the prepare stage outputs.

<a id="input_9"></a>
### threads_user_requested (Pin 9)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of threads to use for parallel field interpolation. Default is 1
(serial execution). When multiple source fields are provided, they are distributed across threads for
concurrent processing. Optimal thread count depends on field count and system core availability.
Values greater than the number of fields will be clamped to the field count.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mapped_data](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [apply_output](#output_1) | |


<a id="output_0"></a>
### mapped_data (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with interpolated target field data. Output fields have the same
label spaces as input source fields (preserving time steps, frequencies, etc.) but are scoped on the
target mesh entities. Field values are computed via weighted summation using pre-computed interpolation
weights. If unmapped-nodes information is supplied via pin 7, the output scoping covers only the nodes
that were successfully mapped; the output may therefore contain fewer entities than the full target mesh.

<a id="output_1"></a>
### apply_output (Pin 1)

- **Expected type(s):** 

Dictionary containing interpolation diagnostics and metadata. Includes:
- **mapping_warning_codes** (int): Warning code indicating mapping quality issues such as unmapped
  target nodes (outside source mesh influence region), extrapolation warnings, or convergence issues
  from the underlying mapping algorithm.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mapping

 **Plugin**: Ans.Dpf.MultiphysicsMapper

 **Scripting name**: apply_mechanical_native_mapping

 **Full name**: mapping.apply_mechanical_native_mapping

 **Internal name**: mechanical_native_mapping::apply

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical_native_mapping::apply"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_source_mesh_id);
op.connect(2, my_target_mesh);
op.connect(3, my_target_mesh_id);
op.connect(4, my_mapping_manager_data);
op.connect(5, my_source_data);
op.connect(6, my_target_scoping);
op.connect(7, my_unnamed);
op.connect(9, my_threads_user_requested);
ansys::dpf::FieldsContainer my_mapped_data = op.getOutput<ansys::dpf::FieldsContainer>(0);
 my_apply_output = op.getOutput<>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.apply_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.source_mesh_id.connect(my_source_mesh_id)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.target_mesh_id.connect(my_target_mesh_id)
op.inputs.mapping_manager_data.connect(my_mapping_manager_data)
op.inputs.source_data.connect(my_source_data)
op.inputs.target_scoping.connect(my_target_scoping)
op.inputs.unnamed.connect(my_unnamed)
op.inputs.threads_user_requested.connect(my_threads_user_requested)
my_mapped_data = op.outputs.mapped_data()
my_apply_output = op.outputs.apply_output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.apply_mechanical_native_mapping() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.source_mesh_id.Connect(my_source_mesh_id)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.target_mesh_id.Connect(my_target_mesh_id)
op.inputs.mapping_manager_data.Connect(my_mapping_manager_data)
op.inputs.source_data.Connect(my_source_data)
op.inputs.target_scoping.Connect(my_target_scoping)
op.inputs.unnamed.Connect(my_unnamed)
op.inputs.threads_user_requested.Connect(my_threads_user_requested)
my_mapped_data = op.outputs.mapped_data.GetData()
my_apply_output = op.outputs.apply_output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.