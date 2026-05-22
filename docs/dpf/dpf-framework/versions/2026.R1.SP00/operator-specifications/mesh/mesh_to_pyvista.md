---
category: mesh
plugin: vtk
license: None
---

# mesh:mesh to pyvista

**Version: 0.0.0**

## Description

Export a MeshedRegion in the pyVista format.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>2</strong> | [coordinates](#input_2) |  |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>6</strong> | [as_linear](#input_6) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>60</strong> | [vtk_updated](#input_60) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>200</strong> | [as_poly](#input_200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_2"></a>
### coordinates (Pin 2)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Node coordinates. If not set, the node coordinates of the mesh are employed.

<a id="input_6"></a>
### as_linear (Pin 6)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

mesh to export in pyVista format

<a id="input_60"></a>
### vtk_updated (Pin 60)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

True if the VTK version employed by pyVista is > VTK 9. Default true.

<a id="input_200"></a>
### as_poly (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Export elements as polyhedrons (cell-face-node representation). Default false.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [nodes](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [cells](#output_1) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
|  **2**| [cell_types](#output_2) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
|  **3**| [offsets](#output_3) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### nodes (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Node coordinates double vector

<a id="output_1"></a>
### cells (Pin 1)

- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Cell connectivity int vector

<a id="output_2"></a>
### cell_types (Pin 2)

- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Cell types property int vector

<a id="output_3"></a>
### offsets (Pin 3)

- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

If vtk_updated=false, offsets int vector


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mesh_to_pyvista

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_to_pyvista"); // operator instantiation
op.connect(2, my_coordinates);
op.connect(6, my_as_linear);
op.connect(7, my_mesh);
op.connect(60, my_vtk_updated);
op.connect(200, my_as_poly);
ansys::dpf::Field my_nodes = op.getOutput<ansys::dpf::Field>(0);
std::vector<int> my_cells = op.getOutput<std::vector<int>>(1);
std::vector<int> my_cell_types = op.getOutput<std::vector<int>>(2);
std::vector<int> my_offsets = op.getOutput<std::vector<int>>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.coordinates.connect(my_coordinates)
op.inputs.as_linear.connect(my_as_linear)
op.inputs.mesh.connect(my_mesh)
op.inputs.vtk_updated.connect(my_vtk_updated)
op.inputs.as_poly.connect(my_as_poly)
my_nodes = op.outputs.nodes()
my_cells = op.outputs.cells()
my_cell_types = op.outputs.cell_types()
my_offsets = op.outputs.offsets()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.coordinates.Connect(my_coordinates)
op.inputs.as_linear.Connect(my_as_linear)
op.inputs.mesh.Connect(my_mesh)
op.inputs.vtk_updated.Connect(my_vtk_updated)
op.inputs.as_poly.Connect(my_as_poly)
my_nodes = op.outputs.nodes.GetData()
my_cells = op.outputs.cells.GetData()
my_cell_types = op.outputs.cell_types.GetData()
my_offsets = op.outputs.offsets.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.