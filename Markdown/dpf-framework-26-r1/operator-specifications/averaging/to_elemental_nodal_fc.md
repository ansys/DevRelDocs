---
category: averaging
plugin: core
license: None
---

# averaging:to elemental nodal (fields container)

**Version: 0.0.0**

## Description

Transforms fields into Elemental Nodal fields using an averaging process. The result is computed on a given element's scoping.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: to_elemental_nodal_fc

 **Full name**: averaging.to_elemental_nodal_fc

 **Internal name**: to_elemental_nodal_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("to_elemental_nodal_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh_scoping);
op.connect(7, my_mesh);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.to_elemental_nodal_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.to_elemental_nodal_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.