---
category: mesh
plugin: core
license: None
---

# mesh:wireframe

**Version: 0.0.0**

## Description

Take a mesh and extracts its sharp edges, using pin 1 value as a threshold angle.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [threshold](#input_1) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### threshold (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

angle threshold in radian that will trigger an edge detection.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [wireframe](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### wireframe (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: wireframe

 **Full name**: mesh.wireframe

 **Internal name**: wireframe

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("wireframe"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_threshold);
ansys::dpf::MeshedRegion my_wireframe = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.wireframe() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.threshold.connect(my_threshold)
my_wireframe = op.outputs.wireframe()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.wireframe() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.threshold.Connect(my_threshold)
my_wireframe = op.outputs.wireframe.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.