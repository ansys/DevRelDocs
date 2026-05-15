---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:from scoping

**Version: 0.0.0**

## Description

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields whose scoping location is 'Elemental', 'Faces', and 'Nodal', they are scoped to the elements, faces or nodes of the output mesh. The ones whose scoping location is 'Global' are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong>|  [inclusive](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [nodes_only](#input_3) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_1"></a>
### scoping (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

if nodal/face scoping, then the scoping is transposed respecting the inclusive pin

<a id="input_2"></a>
### inclusive (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

<a id="input_3"></a>
### nodes_only (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

returns mesh with nodes only (without any elements or property fields). Default is false.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: from_scoping

 **Full name**: mesh.from_scoping

 **Internal name**: mesh::by_scoping

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh::by_scoping"); // operator instantiation
op.connect(1, my_scoping);
op.connect(2, my_inclusive);
op.connect(3, my_nodes_only);
op.connect(7, my_mesh);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.from_scoping() # operator instantiation
op.inputs.scoping.connect(my_scoping)
op.inputs.inclusive.connect(my_inclusive)
op.inputs.nodes_only.connect(my_nodes_only)
op.inputs.mesh.connect(my_mesh)
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.from_scoping() # operator instantiation
op.inputs.scoping.Connect(my_scoping)
op.inputs.inclusive.Connect(my_inclusive)
op.inputs.nodes_only.Connect(my_nodes_only)
op.inputs.mesh.Connect(my_mesh)
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.