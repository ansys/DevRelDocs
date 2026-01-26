---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:split mesh wrt property

**Version: 0.0.0**

## Description

Split the input mesh into several meshes based on a given property (material property be default)

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>1</strong>|  [mesh_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>13</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [property](#input_13) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Scoping

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_13"></a>
### property (Pin 13)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes](#output_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### meshes (Pin 0)

- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: split_mesh

 **Full name**: mesh.split_mesh

 **Internal name**: split_mesh

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("split_mesh"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(7, my_mesh);
op.connect(13, my_property);
ansys::dpf::MeshesContainer my_meshes = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.split_mesh() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
op.inputs.property.connect(my_property)
my_meshes = op.outputs.meshes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.split_mesh() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
op.inputs.property.Connect(my_property)
my_meshes = op.outputs.meshes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.