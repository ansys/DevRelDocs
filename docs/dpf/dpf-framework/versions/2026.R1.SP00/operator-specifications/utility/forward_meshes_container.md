---
category: utility
plugin: core
license: None
---

# utility:forward meshes container

**Version: 0.0.0**

## Description

Returns the input mesh or meshes container into a meshes container.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [meshes](#input_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong>|  [default_label](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### meshes (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### default_label (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

this default label is used if a new meshes container needs to be created (default is unknown)


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes_container](#output_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### meshes_container (Pin 0)

- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: forward_meshes_container

 **Full name**: utility.forward_meshes_container

 **Internal name**: forward_meshes_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("forward_meshes_container"); // operator instantiation
op.connect(0, my_meshes);
op.connect(1, my_default_label);
ansys::dpf::MeshesContainer my_meshes_container = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.forward_meshes_container() # operator instantiation
op.inputs.meshes.connect(my_meshes)
op.inputs.default_label.connect(my_default_label)
my_meshes_container = op.outputs.meshes_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.forward_meshes_container() # operator instantiation
op.inputs.meshes.Connect(my_meshes)
op.inputs.default_label.Connect(my_default_label)
my_meshes_container = op.outputs.meshes_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.