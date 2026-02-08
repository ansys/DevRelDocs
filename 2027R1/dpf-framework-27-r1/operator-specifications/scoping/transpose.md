---
category: scoping
plugin: core
license: None
---

# scoping:transpose

**Version: 0.0.0**

## Description

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh_scoping](#input_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [meshed_region](#input_1) |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>2</strong>|  [inclusive](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>9</strong>|  [requested_location](#input_9) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh_scoping (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Scoping or scopings container (the input type is the output type)

<a id="input_1"></a>
### meshed_region (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)



<a id="input_2"></a>
### inclusive (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

<a id="input_9"></a>
### requested_location (Pin 9)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Output scoping location for meshes with nodes, faces and elements. By default, elemental and faces scopings transpose to nodal, and nodal scopings transpose to elemental.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Scoping or scopings container (the input type is the output type)


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: transpose

 **Full name**: scoping.transpose

 **Internal name**: transpose_scoping

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transpose_scoping"); // operator instantiation
op.connect(0, my_mesh_scoping);
op.connect(1, my_meshed_region);
op.connect(2, my_inclusive);
op.connect(9, my_requested_location);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.transpose() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.meshed_region.connect(my_meshed_region)
op.inputs.inclusive.connect(my_inclusive)
op.inputs.requested_location.connect(my_requested_location)
my_mesh_scoping_as_scoping = op.outputs.mesh_scoping_as_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.transpose() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.meshed_region.Connect(my_meshed_region)
op.inputs.inclusive.Connect(my_inclusive)
op.inputs.requested_location.Connect(my_requested_location)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.