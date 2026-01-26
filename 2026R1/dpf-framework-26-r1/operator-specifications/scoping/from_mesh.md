---
category: scoping
plugin: core
license: None
---

# scoping:from mesh

**Version: 0.0.0**

## Description

Provides the entire mesh scoping based on the requested location

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mesh](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong>|  [requested_location](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### requested_location (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

if nothing the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: from_mesh

 **Full name**: scoping.from_mesh

 **Internal name**: MeshScopingProvider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("MeshScopingProvider"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_requested_location);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.from_mesh() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.requested_location.connect(my_requested_location)
my_scoping = op.outputs.scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.from_mesh() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.requested_location.Connect(my_requested_location)
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.