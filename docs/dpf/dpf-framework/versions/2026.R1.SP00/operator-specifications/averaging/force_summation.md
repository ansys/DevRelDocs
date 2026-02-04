---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:force_summation

**Version: 0.0.0**

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System. Equivalent to MAPDL FSUM & NFORCE commands. Supports Static, Transient, Modal & Harmonic analysis for thermal and structural degrees of freedom. The moment is computed in the unit system of the data source.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | default = all time steps |
| <strong>Pin 1</strong>|  nodal_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Nodal Scoping or Scopings Container with a single label. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes) |
| <strong>Pin 2</strong>|  elemental_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Elemental Scoping or Scopings Container with a single label. Set of elements contributing to the force calculation. (default = all elements) |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams container. Optional if using data sources. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources. Optional if using a streams container. |
| <strong>Pin 5</strong>|  force_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Type of force to be processed (0: Total forces (static, damping, and inertia)., 1 (default): Static forces, 2: Damping forces, 3: Inertia forces) |
| <strong>Pin 6</strong>|  spoint |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0). If unitless, it is assumed to be in meters. |
| <strong>Pin 9</strong>|  scoping_filter |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Selected set of nodes.<br>                    <br>- 0 (default): Sum all nodal forces for all selected nodes, excluding contact elements<br>- 1: Sum all nodal forces for contact nodes only.<br>- 2: Sum all nodal forces for all selected nodes, including contact elements.<br> |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| force_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| moment_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 2**| heat_accumulation |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 10**| forces_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 11**| moments_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 12**| heats_on_nodes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: force_summation

 **Full name**: averaging.force_summation

 **Internal name**: force_summation

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("force_summation"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_nodal_scoping);
op.connect(2, my_elemental_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_force_type);
op.connect(6, my_spoint);
op.connect(9, my_scoping_filter);
ansys::dpf::FieldsContainer my_force_accumulation = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_moment_accumulation = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_heat_accumulation = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_forces_on_nodes = op.getOutput<ansys::dpf::FieldsContainer>(10);
ansys::dpf::FieldsContainer my_moments_on_nodes = op.getOutput<ansys::dpf::FieldsContainer>(11);
ansys::dpf::FieldsContainer my_heats_on_nodes = op.getOutput<ansys::dpf::FieldsContainer>(12);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.force_summation() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.nodal_scoping.connect(my_nodal_scoping)
op.inputs.elemental_scoping.connect(my_elemental_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.force_type.connect(my_force_type)
op.inputs.spoint.connect(my_spoint)
op.inputs.scoping_filter.connect(my_scoping_filter)
my_force_accumulation = op.outputs.force_accumulation()
my_moment_accumulation = op.outputs.moment_accumulation()
my_heat_accumulation = op.outputs.heat_accumulation()
my_forces_on_nodes = op.outputs.forces_on_nodes()
my_moments_on_nodes = op.outputs.moments_on_nodes()
my_heats_on_nodes = op.outputs.heats_on_nodes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.force_summation() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.nodal_scoping.Connect(my_nodal_scoping)
op.inputs.elemental_scoping.Connect(my_elemental_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.force_type.Connect(my_force_type)
op.inputs.spoint.Connect(my_spoint)
op.inputs.scoping_filter.Connect(my_scoping_filter)
my_force_accumulation = op.outputs.force_accumulation.GetData()
my_moment_accumulation = op.outputs.moment_accumulation.GetData()
my_heat_accumulation = op.outputs.heat_accumulation.GetData()
my_forces_on_nodes = op.outputs.forces_on_nodes.GetData()
my_moments_on_nodes = op.outputs.moments_on_nodes.GetData()
my_heats_on_nodes = op.outputs.heats_on_nodes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.