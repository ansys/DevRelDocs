---
category: scoping
plugin: core
license: None
---

# scoping:connectivity ids

**Version: 0.0.0**

## Description

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Elemental scoping |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | the support of the scoping is expected if there is no mesh in input |
| <strong>Pin 10</strong>|  take_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | default is true |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 1**| elemental_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | same as the input scoping but with ids duplicated to have the same size as nodal output scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: connectivity_ids

 **Full name**: scoping.connectivity_ids

 **Internal name**: scoping::connectivity_ids

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping::connectivity_ids"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(7, my_mesh);
op.connect(10, my_take_mid_nodes);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
ansys::dpf::Scoping my_elemental_scoping = op.getOutput<ansys::dpf::Scoping>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.connectivity_ids() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
op.inputs.take_mid_nodes.connect(my_take_mid_nodes)
my_mesh_scoping = op.outputs.mesh_scoping()
my_elemental_scoping = op.outputs.elemental_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.connectivity_ids() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
op.inputs.take_mid_nodes.Connect(my_take_mid_nodes)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
my_elemental_scoping = op.outputs.elemental_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.