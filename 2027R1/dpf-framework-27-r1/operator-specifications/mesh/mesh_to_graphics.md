---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics

**Version: 0.0.0**

## Description

Generate tessellation for input mesh

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>1</strong>|  [mesh_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong>|  [node_normals](#input_2) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_2"></a>
### node_normals (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

average element normals for node normals (default no, use element normals for node normals)

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [nodes](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [normals](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [connectivity](#output_2) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### nodes (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

node coordinates

<a id="output_1"></a>
### normals (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

node normals

<a id="output_2"></a>
### connectivity (Pin 2)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_to_graphics

 **Full name**: mesh.mesh_to_graphics

 **Internal name**: mesh_to_graphics

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_to_graphics"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(2, my_node_normals);
op.connect(7, my_mesh);
ansys::dpf::Field my_nodes = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_normals = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::PropertyField my_connectivity = op.getOutput<ansys::dpf::PropertyField>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_to_graphics() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.node_normals.connect(my_node_normals)
op.inputs.mesh.connect(my_mesh)
my_nodes = op.outputs.nodes()
my_normals = op.outputs.normals()
my_connectivity = op.outputs.connectivity()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_to_graphics() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.node_normals.Connect(my_node_normals)
op.inputs.mesh.Connect(my_mesh)
my_nodes = op.outputs.nodes.GetData()
my_normals = op.outputs.normals.GetData()
my_connectivity = op.outputs.connectivity.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.