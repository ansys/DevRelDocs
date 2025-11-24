---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics_edges

**Version: 0.0.0**

## Description

Generate edges of surface elements for input mesh

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 6</strong>|  include_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| nodes |[`field`](../../core-concepts/dpf-types.md#field) | node coordinates |
|  **Pin 2**| connectivity |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_to_graphics_edges

 **Full name**: mesh.mesh_to_graphics_edges

 **Internal name**: mesh_to_graphics_edges

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_to_graphics_edges"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(6, my_include_mid_nodes);
op.connect(7, my_mesh);
ansys::dpf::Field my_nodes = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::PropertyField my_connectivity = op.getOutput<ansys::dpf::PropertyField>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_to_graphics_edges() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.include_mid_nodes.connect(my_include_mid_nodes)
op.inputs.mesh.connect(my_mesh)
my_nodes = op.outputs.nodes()
my_connectivity = op.outputs.connectivity()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_to_graphics_edges() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.include_mid_nodes.Connect(my_include_mid_nodes)
op.inputs.mesh.Connect(my_mesh)
my_nodes = op.outputs.nodes.GetData()
my_connectivity = op.outputs.connectivity.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.