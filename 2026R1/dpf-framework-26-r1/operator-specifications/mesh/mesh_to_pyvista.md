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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 2</strong>|  coordinates |[`field`](../../core-concepts/dpf-types.md#field) | Node coordinates. If not set, the node coordinates of the mesh are employed. |
| <strong>Pin 6</strong>|  as_linear |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh to export in pyVista format |
| <strong>Pin 60</strong>|  vtk_updated |[`bool`](../../core-concepts/dpf-types.md#standard-types) | True if the VTK version employed by pyVista is > VTK 9. Default true. |
| <strong>Pin 200</strong>|  as_poly |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Export elements as polyhedrons (cell-face-node representation). Default false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| nodes |[`field`](../../core-concepts/dpf-types.md#field) | Node coordinates double vector |
|  **Pin 1**| cells |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Cell connectivity int vector |
|  **Pin 2**| cell_types |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Cell types property int vector |
|  **Pin 3**| offsets |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | If vtk_updated=false, offsets int vector |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mesh_to_pyvista

 **License**: None

## Examples

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