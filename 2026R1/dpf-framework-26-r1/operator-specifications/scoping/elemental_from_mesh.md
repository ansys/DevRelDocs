---
category: scoping
plugin: core
license: None
---

# scoping:elements in mesh

**Version: 0.0.0**

## Description

Retrieves the elemental scoping from a mesh, containing all element IDs with elemental location.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh from which to extract the elemental scoping


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Scoping containing all element IDs in the mesh with 'Elemental' location


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: elemental_from_mesh

 **Full name**: scoping.elemental_from_mesh

 **Internal name**: GetElementScopingFromMesh

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("GetElementScopingFromMesh"); // operator instantiation
op.connect(0, my_mesh);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.elemental_from_mesh() # operator instantiation
op.inputs.mesh.connect(my_mesh)
my_mesh_scoping = op.outputs.mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.elemental_from_mesh() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.