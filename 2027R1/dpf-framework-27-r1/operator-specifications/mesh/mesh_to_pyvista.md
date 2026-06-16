---
category: mesh
plugin: vtk
license: None
---

# mesh:mesh to pyvista

**Version: 0.0.0**

## Description


										Export a MeshedRegion to the pyVista format.
					The mesh type is auto-detected and controls which pins are respected:

					| Mesh has Elements | Mesh has Faces | Detected type | Pins `as_poly`, `as_modified_connectivity`, `as_linear` handled? |
					|-------------------|----------------|---------------|--------------------------------------------------------------------|
					| yes               | yes            | FVM Mesh      | No - the output is always built with the `as_poly=True` behavior.  |
					| no                | yes            | Face Mesh     | No - the output is always built with the `as_poly=False` behavior  |
					| yes               | no             | FEM Mesh      | Yes                                                                |

					For **FEM Mesh** only, the build behaviour depends on the input pins:

					| `as_poly`         | `as_modified_connectivity` | `vtk_updated` | `as_linear` | Notes                                                                        |
					|-------------------|----------------------------|---------------|-------------|------------------------------------------------------------------------------|
					| true              | any                        | false         | any         | `as_modified_connectivity` and `as_linear` ignored; offsets written to pin 3 |
					| true              | any                        | true          | any         | `as_modified_connectivity` and `as_linear` ignored; no pin 3                 |
					| false             | true                       | any           | true        | `vtk_updated` has no effect; quadratic elements are linearized               |
					| false             | true                       | any           | false       | `vtk_updated` has no effect; quadratic elements kept quadratic               |
					| false             | false                      | true          | true        | quadratic elements are linearized                                            |
					| false             | false                      | true          | false       | quadratic elements kept quadratic                                            |
					| false             | false                      | false         | true        | quadratic elements are linearized; offsets written to pin 3                  |
					| false             | false                      | false         | false       | quadratic elements kept quadratic; offsets written to pin 3                  |

					Output pins:
					
					| Pin | Content                                                             | Condition                                                    |
					|-----|---------------------------------------------------------------------|--------------------------------------------------------------|
					| 0   | Node coordinates                                                    | always                                                       |
					| 1   | Modified connectivity (no node-count prefix) 						| `as_modified_connectivity = true`                            |
					| 1   | Classic connectivity (legacy VTK flat format with node-count prefix)| `as_modified_connectivity = false`                           |
					| 2   | Cell types array                                                    | always 													   |
					| 3   | Legacy offsets array                                                | `vtk_updated = false` and `as_modified_connectivity = false` |
					| 4   | Offsets into modified connectivity (CSR-style, size = nCells+1)     | `as_modified_connectivity = true`                            |
					

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [coordinates](#input_2) |  |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>6</strong> | [as_linear](#input_6) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>60</strong> | [vtk_updated](#input_60) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>200</strong> | [as_poly](#input_200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>201</strong> | [as_modified_connectivity](#input_201) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

if mesh scoping is connected then the output vtk mesh is build on the subset of the input mesh scoped on it. If not set, the whole input mesh is converted to the final vtk mesh.

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

True if the VTK version employed by pyVista is > VTK 9. Default true.If false, an offset array to the cell connectivity is returned on pin 3.Incompatible with as_modified_connectivity=true. 

<a id="input_200"></a>
### as_poly (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Export elements as polyhedrons (cell-face-node representation). Default false.

<a id="input_201"></a>
### as_modified_connectivity (Pin 201)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Returns VTK version>9 compatible connectivity representation consisting of an array of concatenated node indices for cells without node count headers and an offset array to it. Default false. Works only for FEM meshes with VTK version>9 and as poly=false.If as_linear is True, quadratic elements are linearized (dropping midside nodes) 


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
|  **4**| [offsets_concatenated_node_indices](#output_4) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


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

<a id="output_4"></a>
### offsets_concatenated_node_indices (Pin 4)

- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Offsets to concatenated cell connectivity without node count headers, type int vector


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
op.connect(1, my_mesh_scoping);
op.connect(2, my_coordinates);
op.connect(6, my_as_linear);
op.connect(7, my_mesh);
op.connect(60, my_vtk_updated);
op.connect(200, my_as_poly);
op.connect(201, my_as_modified_connectivity);
ansys::dpf::Field my_nodes = op.getOutput<ansys::dpf::Field>(0);
std::vector<int> my_cells = op.getOutput<std::vector<int>>(1);
std::vector<int> my_cell_types = op.getOutput<std::vector<int>>(2);
std::vector<int> my_offsets = op.getOutput<std::vector<int>>(3);
std::vector<int> my_offsets_concatenated_node_indices = op.getOutput<std::vector<int>>(4);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.coordinates.connect(my_coordinates)
op.inputs.as_linear.connect(my_as_linear)
op.inputs.mesh.connect(my_mesh)
op.inputs.vtk_updated.connect(my_vtk_updated)
op.inputs.as_poly.connect(my_as_poly)
op.inputs.as_modified_connectivity.connect(my_as_modified_connectivity)
my_nodes = op.outputs.nodes()
my_cells = op.outputs.cells()
my_cell_types = op.outputs.cell_types()
my_offsets = op.outputs.offsets()
my_offsets_concatenated_node_indices = op.outputs.offsets_concatenated_node_indices()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.coordinates.Connect(my_coordinates)
op.inputs.as_linear.Connect(my_as_linear)
op.inputs.mesh.Connect(my_mesh)
op.inputs.vtk_updated.Connect(my_vtk_updated)
op.inputs.as_poly.Connect(my_as_poly)
op.inputs.as_modified_connectivity.Connect(my_as_modified_connectivity)
my_nodes = op.outputs.nodes.GetData()
my_cells = op.outputs.cells.GetData()
my_cell_types = op.outputs.cell_types.GetData()
my_offsets = op.outputs.offsets.GetData()
my_offsets_concatenated_node_indices = op.outputs.offsets_concatenated_node_indices.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.