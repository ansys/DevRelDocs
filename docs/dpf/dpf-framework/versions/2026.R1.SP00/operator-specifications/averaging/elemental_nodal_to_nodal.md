---
category: averaging
plugin: core
license: None
---

# averaging:elemental nodal to nodal (field)

**Version: 0.0.0**

## Description

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | average only on these entities |
| <strong>Pin 2</strong>|  should_average |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities). |
| <strong>Pin 4</strong>|  extend_to_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Compute mid nodes (when available) by averaging the neighbour primary nodes. |
| <strong>Pin 5</strong>|  extend_weights_to_mid_nodes |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Extends weights to mid nodes (when available). Default is false. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 1**| weight |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_nodal_to_nodal

 **Full name**: averaging.elemental_nodal_to_nodal

 **Internal name**: elemental_nodal_To_nodal

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elemental_nodal_To_nodal"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_mesh_scoping);
op.connect(2, my_should_average);
op.connect(4, my_extend_to_mid_nodes);
op.connect(5, my_extend_weights_to_mid_nodes);
op.connect(7, my_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::PropertyField my_weight = op.getOutput<ansys::dpf::PropertyField>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.elemental_nodal_to_nodal() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.should_average.connect(my_should_average)
op.inputs.extend_to_mid_nodes.connect(my_extend_to_mid_nodes)
op.inputs.extend_weights_to_mid_nodes.connect(my_extend_weights_to_mid_nodes)
op.inputs.mesh.connect(my_mesh)
my_field = op.outputs.field()
my_weight = op.outputs.weight()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.elemental_nodal_to_nodal() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.should_average.Connect(my_should_average)
op.inputs.extend_to_mid_nodes.Connect(my_extend_to_mid_nodes)
op.inputs.extend_weights_to_mid_nodes.Connect(my_extend_weights_to_mid_nodes)
op.inputs.mesh.Connect(my_mesh)
my_field = op.outputs.field.GetData()
my_weight = op.outputs.weight.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.