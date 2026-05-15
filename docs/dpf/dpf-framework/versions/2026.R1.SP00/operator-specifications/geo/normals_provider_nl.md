---
category: geo
plugin: core
license: None
---

# geo:normals provider nl (nodes, faces, or elements)

**Version: 0.0.0**

## Description

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong>|  [mesh_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>9</strong>|  [requested_location](#input_9) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Skin, face, or shell mesh region.

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Elemental, ElementalNodal, or Nodal scoping. Location derived from this.

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

If no scoping, specifies location. If scoping is Elemental or ElementalNodal this overrides scoping. Default is Elemental.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: normals_provider_nl

 **Full name**: geo.normals_provider_nl

 **Internal name**: normals_provider_nl

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("normals_provider_nl"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_mesh_scoping);
op.connect(9, my_requested_location);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.normals_provider_nl() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.requested_location.connect(my_requested_location)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.normals_provider_nl() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.requested_location.Connect(my_requested_location)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.