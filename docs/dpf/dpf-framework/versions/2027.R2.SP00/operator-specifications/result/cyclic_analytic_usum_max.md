---
category: result
plugin: core
license: None
---

# result:cyclic analytic disp max

**Version: 0.0.0**

## Description

Compute the maximum of the total deformation that can be expected on 360 degrees

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](#input_0) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [fields_container](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>5</strong> | [bool_rotate_to_global](#input_5) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>16</strong> | [cyclic_support](#input_16) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_2"></a>
### fields_container (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field container with the base and duplicate sectors

<a id="input_5"></a>
### bool_rotate_to_global (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

default is true

<a id="input_16"></a>
### cyclic_support (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support)




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

FieldsContainer filled in


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

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.

### [use_cache](../../core-concepts/operator-configurations.md#use_cache)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: cyclic_analytic_usum_max

 **Full name**: result.cyclic_analytic_usum_max

 **Internal name**: cyclic_analytic_usum_max

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cyclic_analytic_usum_max"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_fields_container);
op.connect(5, my_bool_rotate_to_global);
op.connect(16, my_cyclic_support);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.cyclic_analytic_usum_max() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.bool_rotate_to_global.connect(my_bool_rotate_to_global)
op.inputs.cyclic_support.connect(my_cyclic_support)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.cyclic_analytic_usum_max() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.bool_rotate_to_global.Connect(my_bool_rotate_to_global)
op.inputs.cyclic_support.Connect(my_cyclic_support)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.