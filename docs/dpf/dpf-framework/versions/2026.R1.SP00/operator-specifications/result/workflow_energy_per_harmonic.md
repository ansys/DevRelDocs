---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per harmonic

**Version: 0.0.0**

## Description

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [energy_type](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |  |[`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>3</strong> | [stream](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`stream` |
| <strong>4</strong> | [data_sources](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Master scoping. All harmonics will be intersected with this scoping.

<a id="input_2"></a>
### energy_type (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy)

<a id="input_3"></a>
### stream (Pin 3)

- **Required:** Yes
- **Expected type(s):** `stream`



<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [harmonic_energy](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [harmonic_energy_percentage](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/result/workflow_energy_per_harmonic) |[`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### harmonic_energy (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_1"></a>
### harmonic_energy_percentage (Pin 1)

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

 **Scripting name**: workflow_energy_per_harmonic

 **Full name**: result.workflow_energy_per_harmonic

 **Internal name**: workflow_energy_per_harmonic

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow_energy_per_harmonic"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_energy_type);
op.connect(3, my_stream);
op.connect(4, my_data_sources);
ansys::dpf::FieldsContainer my_harmonic_energy = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_harmonic_energy_percentage = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.workflow_energy_per_harmonic() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.energy_type.connect(my_energy_type)
op.inputs.stream.connect(my_stream)
op.inputs.data_sources.connect(my_data_sources)
my_harmonic_energy = op.outputs.harmonic_energy()
my_harmonic_energy_percentage = op.outputs.harmonic_energy_percentage()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.workflow_energy_per_harmonic() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.energy_type.Connect(my_energy_type)
op.inputs.stream.Connect(my_stream)
op.inputs.data_sources.Connect(my_data_sources)
my_harmonic_energy = op.outputs.harmonic_energy.GetData()
my_harmonic_energy_percentage = op.outputs.harmonic_energy_percentage.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.