---
category: mesh
plugin: core
license: None
---

# mesh:node coordinates

**Version: 0.0.0**

## Description

Returns the node coordinates of the mesh(es) in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| coordinates |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | if the input is a meshed region, a field of coordinates is the output, else if the input is a  meshes container, a fields container (one field by mesh) is the output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: node_coordinates

 **Full name**: mesh.node_coordinates

 **Internal name**: mesh::node_coordinates

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh::node_coordinates"); // operator instantiation
op.connect(7, my_mesh);
ansys::dpf::Field my_coordinates = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.node_coordinates() # operator instantiation
op.inputs.mesh.connect(my_mesh)
my_coordinates_as_field = op.outputs.coordinates_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.node_coordinates() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
my_coordinates = op.outputs.coordinates.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.