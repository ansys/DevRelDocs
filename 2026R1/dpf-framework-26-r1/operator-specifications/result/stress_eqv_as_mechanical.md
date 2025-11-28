---
category: result
plugin: mechanical_results
license: None
---

# result:von mises stresses as mechanical

**Version: 0.0.0**

## Description

Computes the equivalent (Von Mises) stresses and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids use scoping with TimeFreq_steps location) required in output. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | nodes or elements scoping required in output. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | result file path container. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | prevents from reading the mesh in the results file. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | average the elemental nodal result to the requested location (default is nodal). |
| <strong>Pin 14</strong>|  read_cyclic |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true, cyclic expansion is done. If false, it's ignored.. |
| <strong>Pin 200</strong>|  average_across_bodies |[`bool`](../../core-concepts/dpf-types.md#standard-types) | for multibody simulations, the stresses are averaged across bodies if true or not if false (default). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| meshes_container |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mechanical_results

 **Scripting name**: None

 **Full name**: None

 **Internal name**: stress_eqv_as_mechanical

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("stress_eqv_as_mechanical"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(7, my_mesh);
op.connect(9, my_requested_location);
op.connect(14, my_read_cyclic);
op.connect(200, my_average_across_bodies);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::MeshesContainer my_meshes_container = op.getOutput<ansys::dpf::MeshesContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.None() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.mesh.connect(my_mesh)
op.inputs.requested_location.connect(my_requested_location)
op.inputs.read_cyclic.connect(my_read_cyclic)
op.inputs.average_across_bodies.connect(my_average_across_bodies)
my_fields_container = op.outputs.fields_container()
my_meshes_container = op.outputs.meshes_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.None() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.mesh.Connect(my_mesh)
op.inputs.requested_location.Connect(my_requested_location)
op.inputs.read_cyclic.Connect(my_read_cyclic)
op.inputs.average_across_bodies.Connect(my_average_across_bodies)
my_fields_container = op.outputs.fields_container.GetData()
my_meshes_container = op.outputs.meshes_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.