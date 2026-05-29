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
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [nodal_scoping](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [elemental_scoping](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>5</strong> | [force_type](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>6</strong> | [spoint](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>9</strong> | [scoping_filter](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

default = all time steps

<a id="input_1"></a>
### nodal_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Nodal Scoping or Scopings Container with a single label. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes)

<a id="input_2"></a>
### elemental_scoping (Pin 2)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Elemental Scoping or Scopings Container with a single label. Set of elements contributing to the force calculation. (default = all elements)

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Streams container. Optional if using data sources.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Data sources. Optional if using a streams container.

<a id="input_5"></a>
### force_type (Pin 5)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Type of force to be processed (0: Total forces (static, damping, and inertia)., 1 (default): Static forces, 2: Damping forces, 3: Inertia forces)

<a id="input_6"></a>
### spoint (Pin 6)

- **Required:** No
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Field or fields container of the coordinates of the point used for moment summations. Defaults to (0,0,0). If unitless, it is assumed to be in meters.

<a id="input_9"></a>
### scoping_filter (Pin 9)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

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
|  **0**| [force_accumulation](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [moment_accumulation](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **2**| [heat_accumulation](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **10**| [forces_on_nodes](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **11**| [moments_on_nodes](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **12**| [heats_on_nodes](/docs/dpf/dpf-framework/operator-specifications/averaging/force_summation) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### force_accumulation (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="output_1"></a>
### moment_accumulation (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="output_2"></a>
### heat_accumulation (Pin 2)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="output_10"></a>
### forces_on_nodes (Pin 10)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="output_11"></a>
### moments_on_nodes (Pin 11)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="output_12"></a>
### heats_on_nodes (Pin 12)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
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
<br />

## Changelog

- Version 0.0.0: Initial release.