---
category: scoping
plugin: core
license: None
---

# scoping:split on property type

**Version: 0.0.0**

## Description

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material, since 2025R1 it supports any scalar property field name contained in the mesh property fields) and returns a scopings container with those split scopings.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh region |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | location (default is elemental) |
| <strong>Pin 12</strong>|  skin_case |[`int32`](../../core-concepts/dpf-types.md#standard-types) | set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default) |
| <strong>Pin 13</strong>|  label |[`string`](../../core-concepts/dpf-types.md#standard-types), [`vector<string>`](../../core-concepts/dpf-types.md#standard-types) | properties to apply the filtering 'mat' and/or 'elshape' (since 2025R1 it supports any property name contained in the mesh property fields) (default is 'elshape') |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: split_on_property_type

 **Full name**: scoping.split_on_property_type

 **Internal name**: scoping::by_property

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping::by_property"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(7, my_mesh);
op.connect(9, my_requested_location);
op.connect(12, my_skin_case);
op.connect(13, my_label);
ansys::dpf::ScopingsContainer my_mesh_scoping = op.getOutput<ansys::dpf::ScopingsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.split_on_property_type() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
op.inputs.requested_location.connect(my_requested_location)
op.inputs.skin_case.connect(my_skin_case)
op.inputs.label1.connect(my_label1)
op.inputs.label2.connect(my_label2)
my_mesh_scoping = op.outputs.mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.split_on_property_type() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.skin_case.Connect(my_skin_case)
op.inputs.label.Connect(my_label)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.