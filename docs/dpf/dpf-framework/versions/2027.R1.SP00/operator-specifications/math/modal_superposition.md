---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal superposition

**Version: 0.0.0**

## Description

Computes the solution in the time/frequency space from a modal solution by multiplying a modal basis (in 0)by the solution in this modal space (coefficients for each mode for each time/frequency) (in 1).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [modal_basis](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [solution_in_modal_space](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [incremental_fc](#input_2) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [time_scoping](#input_3) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [mesh_scoping](#input_4) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_0"></a>
### modal_basis (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

One field by mode with each field representing a mode shape on nodes or elements.

<a id="input_1"></a>
### solution_in_modal_space (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

One field by time/frequency with each field having a ponderating coefficient for each mode of the modal_basis pin.

<a id="input_2"></a>
### incremental_fc (Pin 2)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

If a non-empty fields container is introduced, it is modified, and sent to the output, to add the contribution of the requested expansion. The label spaces produced from the multiplication must be the same as the incremental ones.

<a id="input_3"></a>
### time_scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Compute the result on a subset of the time frequency domain defined in the solution_in_modal_space fields container.

<a id="input_4"></a>
### mesh_scoping (Pin 4)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Compute the result on a subset of the space domain defined in the modal_basis fields container.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [read_inputs_in_parallel](../../core-concepts/operator-configurations.md#read_inputs_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: modal_superposition

 **Full name**: math.modal_superposition

 **Internal name**: expansion::modal_superposition

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("expansion::modal_superposition"); // operator instantiation
op.connect(0, my_modal_basis);
op.connect(1, my_solution_in_modal_space);
op.connect(2, my_incremental_fc);
op.connect(3, my_time_scoping);
op.connect(4, my_mesh_scoping);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.modal_superposition() # operator instantiation
op.inputs.modal_basis.connect(my_modal_basis)
op.inputs.solution_in_modal_space.connect(my_solution_in_modal_space)
op.inputs.incremental_fc.connect(my_incremental_fc)
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.modal_superposition() # operator instantiation
op.inputs.modal_basis.Connect(my_modal_basis)
op.inputs.solution_in_modal_space.Connect(my_solution_in_modal_space)
op.inputs.incremental_fc.Connect(my_incremental_fc)
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.