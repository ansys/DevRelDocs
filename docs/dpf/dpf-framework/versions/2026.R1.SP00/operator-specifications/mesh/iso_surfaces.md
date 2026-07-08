---
category: mesh
plugin: core
license: None
---

# mesh:iso surfaces

**Version: 0.0.0**

## Description

Extract multiple iso-contours from mesh_cut operator and set it into a meshes container. If pin 1 is provided, "num_surfaces" iso-contours will be computed, ranging from "min_value" to "max_value" linearly. If pin 4 is provided, the iso-values are the one set by the user. The iso-values are stored into a FieldsContainer.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [num_surfaces](#input_1) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [mesh](#input_2) |  |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>3</strong> | [slice_surfaces](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [vector_iso_values](#input_4) |  |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

<a id="input_1"></a>
### num_surfaces (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** No
- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

<a id="input_3"></a>
### slice_surfaces (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.

<a id="input_4"></a>
### vector_iso_values (Pin 4)

- **Required:** No
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes](#output_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
|  **1**| [fields_container](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### meshes (Pin 0)

- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)



<a id="output_1"></a>
### fields_container (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: iso_surfaces

 **Full name**: mesh.iso_surfaces

 **Internal name**: iso_surfaces

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("iso_surfaces"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_num_surfaces);
op.connect(2, my_mesh);
op.connect(3, my_slice_surfaces);
op.connect(4, my_vector_iso_values);
ansys::dpf::MeshesContainer my_meshes = op.getOutput<ansys::dpf::MeshesContainer>(0);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.iso_surfaces() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.num_surfaces.connect(my_num_surfaces)
op.inputs.mesh.connect(my_mesh)
op.inputs.slice_surfaces.connect(my_slice_surfaces)
op.inputs.vector_iso_values.connect(my_vector_iso_values)
my_meshes = op.outputs.meshes()
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.iso_surfaces() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.num_surfaces.Connect(my_num_surfaces)
op.inputs.mesh.Connect(my_mesh)
op.inputs.slice_surfaces.Connect(my_slice_surfaces)
op.inputs.vector_iso_values.Connect(my_vector_iso_values)
my_meshes = op.outputs.meshes.GetData()
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.