---
category: mapping
plugin: core
license: None
---

# mapping:solid to skin

**Version: 0.0.0**

## Description

Maps a field defined on solid elements to a field defined on skin elements. Three cases are possible, based on the solid field data location; (i) Elemental: The values associated with the solid elements are copied according to those underlying the skin, (ii) Nodal: The solid field is rescoped with respect to the nodes of the skin mesh, (iii) ElementalNodal: The values are copied from the solid mesh to the skin mesh for each element face and the nodes associated with it.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | skin mesh region expected |
| <strong>Pin 2</strong>|  solid_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Solid mesh support (optional). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: solid_to_skin

 **Full name**: mapping.solid_to_skin

 **Internal name**: solid_to_skin

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("solid_to_skin"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_mesh);
op.connect(2, my_solid_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.solid_to_skin() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.mesh.connect(my_mesh)
op.inputs.solid_mesh.connect(my_solid_mesh)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.solid_to_skin() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.mesh.Connect(my_mesh)
op.inputs.solid_mesh.Connect(my_solid_mesh)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.