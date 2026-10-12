---
category: invariant
plugin: core
license: None
---

# invariant:principal invariants (fields container)

**Version: 0.0.0**

## Description

Computes the element-wise Eigen values of all the tensor fields of a fields container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_eig_1](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [fields_eig_2](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [fields_eig_3](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_eig_1 (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

first eigen value fields

<a id="output_1"></a>
### fields_eig_2 (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

second eigen value fields

<a id="output_2"></a>
### fields_eig_3 (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

third eigen value fields


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



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: principal_invariants_fc

 **Full name**: invariant.principal_invariants_fc

 **Internal name**: invariants_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_fc"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::FieldsContainer my_fields_eig_1 = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_fields_eig_2 = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_fields_eig_3 = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.principal_invariants_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
my_fields_eig_1 = op.outputs.fields_eig_1()
my_fields_eig_2 = op.outputs.fields_eig_2()
my_fields_eig_3 = op.outputs.fields_eig_3()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.principal_invariants_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_fields_eig_1 = op.outputs.fields_eig_1.GetData()
my_fields_eig_2 = op.outputs.fields_eig_2.GetData()
my_fields_eig_3 = op.outputs.fields_eig_3.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.