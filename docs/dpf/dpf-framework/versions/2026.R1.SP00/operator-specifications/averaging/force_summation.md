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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](#input_0) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [nodal_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>2</strong> | [elemental_scoping](#input_2) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong> | [force_type](#input_5) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [spoint](#input_6) |  |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>9</strong> | [scoping_filter](#input_9) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

default = all time steps

<a id="input_1"></a>
### nodal_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Nodal Scoping or Scopings Container with a single label. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes)

<a id="input_2"></a>
### elemental_scoping (Pin 2)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Elemental Scoping or Scopings Container with a single label. Set of elements contributing to the force calculation. (default = all elements)

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams container. Optional if using data sources.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources. Optional if using a streams container.

<a id="input_5"></a>
### force_type (Pin 5)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Type of force to be processed (0: Total forces (static, damping, and inertia)., 1 (default): Static forces, 2: Damping forces, 3: Inertia forces)

<a id="input_6"></a>
### spoint (Pin 6)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0). If unitless, it is assumed to be in meters.

<a id="input_9"></a>
### scoping_filter (Pin 9)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Selected set of nodes.
                    
- 0 (default): Sum all nodal forces for all selected nodes, excluding contact elements
- 1: Sum all nodal forces for contact nodes only.
- 2: Sum all nodal forces for all selected nodes, including contact elements.



## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [force_accumulation](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [moment_accumulation](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [heat_accumulation](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **10**| [forces_on_nodes](#output_10) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **11**| [moments_on_nodes](#output_11) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **12**| [heats_on_nodes](#output_12) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### force_accumulation (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_1"></a>
### moment_accumulation (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_2"></a>
### heat_accumulation (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_10"></a>
### forces_on_nodes (Pin 10)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_11"></a>
### moments_on_nodes (Pin 11)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_12"></a>
### heats_on_nodes (Pin 12)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: force_summation

 **Full name**: averaging.force_summation

 **Internal name**: force_summation

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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