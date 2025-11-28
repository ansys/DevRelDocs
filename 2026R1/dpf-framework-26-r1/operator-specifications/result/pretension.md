---
category: result
plugin: mapdl
license: None
---

# result:pretension

**Version: 0.0.0**

## Description

Reads the pretension adjustment and tension force. Rotation is not allowed for these results.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 2</strong>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container), `stream` |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | mesh. If cylic expansion is to be done, mesh of the base sector |
| <strong>Pin 14</strong>|  read_cyclic |`enum dataProcessing::ECyclicReading`, [`int32`](../../core-concepts/dpf-types.md#standard-types) | if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1) |
| <strong>Pin 15</strong>|  expanded_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | mesh expanded, use if cyclic expansion is to be done. |
| <strong>Pin 18</strong>|  sectors_to_expand |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label, use if cyclic expansion is to be done. |
| <strong>Pin 19</strong>|  phi |[`double`](../../core-concepts/dpf-types.md#standard-types) | angle phi in degrees (default value 0.0), use if cyclic expansion is to be done. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| adjustment |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Adjustment |
|  **Pin 1**| tension_force |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Tension Force |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: pretension

 **Full name**: result.pretension

 **Internal name**: mapdl::pretension

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mapdl::pretension"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_fields_container);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(7, my_mesh);
op.connect(14, my_read_cyclic);
op.connect(15, my_expanded_meshed_region);
op.connect(18, my_sectors_to_expand);
op.connect(19, my_phi);
ansys::dpf::FieldsContainer my_adjustment = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_tension_force = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.pretension() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.mesh.connect(my_mesh)
op.inputs.read_cyclic.connect(my_read_cyclic)
op.inputs.expanded_meshed_region.connect(my_expanded_meshed_region)
op.inputs.sectors_to_expand.connect(my_sectors_to_expand)
op.inputs.phi.connect(my_phi)
my_adjustment = op.outputs.adjustment()
my_tension_force = op.outputs.tension_force()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.pretension() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.mesh.Connect(my_mesh)
op.inputs.read_cyclic.Connect(my_read_cyclic)
op.inputs.expanded_meshed_region.Connect(my_expanded_meshed_region)
op.inputs.sectors_to_expand.Connect(my_sectors_to_expand)
op.inputs.phi.Connect(my_phi)
my_adjustment = op.outputs.adjustment.GetData()
my_tension_force = op.outputs.tension_force.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.