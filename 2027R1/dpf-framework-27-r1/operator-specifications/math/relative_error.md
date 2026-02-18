---
category: math
plugin: core
license: None
---

# math:relative error

**Version: 0.0.0**

## Description

Computes the relative error between a reference scalar field and another scalar field.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [value](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [reference](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### value (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

field or fields container with only one field is expected

<a id="input_1"></a>
### reference (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

field or fields container with only one field is expected


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [zero_ref_scoping](#output_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **2**| [no_ref_scoping](#output_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_1"></a>
### zero_ref_scoping (Pin 1)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Ids of entities where reference value is zero.

<a id="output_2"></a>
### no_ref_scoping (Pin 2)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Ids of entities where there are no reference value.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [binary_operation](../../core-concepts/operator-configurations.md#binary_operation)

- **Expected type(s):** `binary_operation_enum`, [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 1

This option allows to choose how two inputs will be treated together. eOnlyIntersection (0) means that the output will only contain the entities shared by all the inputs. eUnion (1) means that the output will contain all the entities contained in at least one of the inputs.

### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [permissive](../../core-concepts/operator-configurations.md#permissive)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.

### [use_cache](../../core-concepts/operator-configurations.md#use_cache)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.

### [work_by_index](../../core-concepts/operator-configurations.md#work_by_index)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, loops and comparisons by entity will be done by index instead of ids.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: relative_error

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("relative_error"); // operator instantiation
op.connect(0, my_value);
op.connect(1, my_reference);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Scoping my_zero_ref_scoping = op.getOutput<ansys::dpf::Scoping>(1);
ansys::dpf::Scoping my_no_ref_scoping = op.getOutput<ansys::dpf::Scoping>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.value.connect(my_value)
op.inputs.reference.connect(my_reference)
my_field = op.outputs.field()
my_zero_ref_scoping = op.outputs.zero_ref_scoping()
my_no_ref_scoping = op.outputs.no_ref_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.value.Connect(my_value)
op.inputs.reference.Connect(my_reference)
my_field = op.outputs.field.GetData()
my_zero_ref_scoping = op.outputs.zero_ref_scoping.GetData()
my_no_ref_scoping = op.outputs.no_ref_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.