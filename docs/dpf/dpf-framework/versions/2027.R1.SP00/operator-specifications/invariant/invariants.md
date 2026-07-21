---
category: invariant
plugin: core
license: None
---

# invariant:scalar invariants (field)

**Version: 0.0.0**

## Description

Computes the element-wise invariants of a tensor field.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-1</strong> | [generate_principal_stress](#input_-1) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_-1"></a>
### generate_principal_stress (Pin -1)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

if true, generate principal stress in output pin 3/4/5 (default is false)

<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_int](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_eqv](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [field_max_shear](#output_2) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **3**| [field_eig_1](#output_3) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **4**| [field_eig_2](#output_4) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **5**| [field_eig_3](#output_5) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field_int (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

stress intensity field

<a id="output_1"></a>
### field_eqv (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

stress equivalent intensity

<a id="output_2"></a>
### field_max_shear (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

max shear stress field

<a id="output_3"></a>
### field_eig_1 (Pin 3)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

first eigen value field

<a id="output_4"></a>
### field_eig_2 (Pin 4)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

second eigen value field

<a id="output_5"></a>
### field_eig_3 (Pin 5)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

third eigen value field


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

 **Scripting name**: invariants

 **Full name**: invariant.invariants

 **Internal name**: invariants_deriv

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_deriv"); // operator instantiation
op.connect(-1, my_generate_principal_stress);
op.connect(0, my_field);
ansys::dpf::Field my_field_int = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_eqv = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_max_shear = op.getOutput<ansys::dpf::Field>(2);
ansys::dpf::Field my_field_eig_1 = op.getOutput<ansys::dpf::Field>(3);
ansys::dpf::Field my_field_eig_2 = op.getOutput<ansys::dpf::Field>(4);
ansys::dpf::Field my_field_eig_3 = op.getOutput<ansys::dpf::Field>(5);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.invariants() # operator instantiation
op.inputs.generate_principal_stress.connect(my_generate_principal_stress)
op.inputs.field.connect(my_field)
my_field_int = op.outputs.field_int()
my_field_eqv = op.outputs.field_eqv()
my_field_max_shear = op.outputs.field_max_shear()
my_field_eig_1 = op.outputs.field_eig_1()
my_field_eig_2 = op.outputs.field_eig_2()
my_field_eig_3 = op.outputs.field_eig_3()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.invariants() # operator instantiation
op.inputs.generate_principal_stress.Connect(my_generate_principal_stress)
op.inputs.field.Connect(my_field)
my_field_int = op.outputs.field_int.GetData()
my_field_eqv = op.outputs.field_eqv.GetData()
my_field_max_shear = op.outputs.field_max_shear.GetData()
my_field_eig_1 = op.outputs.field_eig_1.GetData()
my_field_eig_2 = op.outputs.field_eig_2.GetData()
my_field_eig_3 = op.outputs.field_eig_3.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.