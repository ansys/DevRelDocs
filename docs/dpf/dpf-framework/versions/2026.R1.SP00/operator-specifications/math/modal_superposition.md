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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  modal_basis |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | One field by mode with each field representing a mode shape on nodes or elements. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  solution_in_modal_space |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | One field by time/frequency with each field having a ponderating coefficient for each mode of the modal_basis pin. |
| <strong>Pin 2</strong>|  incremental_fc |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | If a non-empty fields container is introduced, it is modified, and sent to the output, to add the contribution of the requested expansion. The label spaces produced from the multiplication must be the same as the incremental ones. |
| <strong>Pin 3</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Compute the result on a subset of the time frequency domain defined in the solution_in_modal_space fields container. |
| <strong>Pin 4</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Compute the result on a subset of the space domain defined in the modal_basis fields container. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: modal_superposition

 **Full name**: math.modal_superposition

 **Internal name**: expansion::modal_superposition

 **License**: any_dpf_supported_increments

## Examples

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