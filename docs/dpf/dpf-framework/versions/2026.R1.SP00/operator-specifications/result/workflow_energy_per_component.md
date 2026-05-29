---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per component

**Version: 0.0.0**

## Description

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [energy_type](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |  |[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [streams_container](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>5</strong> | [named_selection](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |  |[`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed.

<a id="input_2"></a>
### energy_type (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy, 3: All energy types)

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`streams_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_5"></a>
### named_selection (Pin 5)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Named Selections. Intersection of all  Named Selections with the master scoping will be done.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [component_energy](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [component_energy_percentage](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **2**| [component_total_energy](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **3**| [component_total_energy_percentage](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **4**| [component_strain_energy](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **5**| [component_strain_energy_percentage](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **6**| [component_kinetic_energy](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **7**| [component_kinetic_energy_percentage](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_component) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### component_energy (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_1"></a>
### component_energy_percentage (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_2"></a>
### component_total_energy (Pin 2)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_3"></a>
### component_total_energy_percentage (Pin 3)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_4"></a>
### component_strain_energy (Pin 4)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_5"></a>
### component_strain_energy_percentage (Pin 5)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_6"></a>
### component_kinetic_energy (Pin 6)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_7"></a>
### component_kinetic_energy_percentage (Pin 7)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: workflow_energy_per_component

 **Full name**: result.workflow_energy_per_component

 **Internal name**: workflow_energy_per_component

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow_energy_per_component"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_energy_type);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(5, my_named_selection);
ansys::dpf::FieldsContainer my_component_energy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_component_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_component_total_energy = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_component_total_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(3);
ansys::dpf::FieldsContainer my_component_strain_energy = op.getOutput<ansys::dpf::FieldsContainer>(4);
ansys::dpf::FieldsContainer my_component_strain_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(5);
ansys::dpf::FieldsContainer my_component_kinetic_energy = op.getOutput<ansys::dpf::FieldsContainer>(6);
ansys::dpf::FieldsContainer my_component_kinetic_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(7);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.workflow_energy_per_component() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.energy_type.connect(my_energy_type)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.named_selection1.connect(my_named_selection1)
op.inputs.named_selection2.connect(my_named_selection2)
my_component_energy = op.outputs.component_energy()
my_component_energy_percentage = op.outputs.component_energy_percentage()
my_component_total_energy = op.outputs.component_total_energy()
my_component_total_energy_percentage = op.outputs.component_total_energy_percentage()
my_component_strain_energy = op.outputs.component_strain_energy()
my_component_strain_energy_percentage = op.outputs.component_strain_energy_percentage()
my_component_kinetic_energy = op.outputs.component_kinetic_energy()
my_component_kinetic_energy_percentage = op.outputs.component_kinetic_energy_percentage()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.workflow_energy_per_component() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.energy_type.Connect(my_energy_type)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.named_selection.Connect(my_named_selection)
my_component_energy = op.outputs.component_energy.GetData()
my_component_energy_percentage = op.outputs.component_energy_percentage.GetData()
my_component_total_energy = op.outputs.component_total_energy.GetData()
my_component_total_energy_percentage = op.outputs.component_total_energy_percentage.GetData()
my_component_strain_energy = op.outputs.component_strain_energy.GetData()
my_component_strain_energy_percentage = op.outputs.component_strain_energy_percentage.GetData()
my_component_kinetic_energy = op.outputs.component_kinetic_energy.GetData()
my_component_kinetic_energy_percentage = op.outputs.component_kinetic_energy_percentage.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.