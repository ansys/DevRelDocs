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
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |


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
op.connect(0, my_field);
ansys::dpf::Field my_field_int = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_eqv = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_max_shear = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.invariants() # operator instantiation
op.inputs.field.connect(my_field)
my_field_int = op.outputs.field_int()
my_field_eqv = op.outputs.field_eqv()
my_field_max_shear = op.outputs.field_max_shear()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.invariants() # operator instantiation
op.inputs.field.Connect(my_field)
my_field_int = op.outputs.field_int.GetData()
my_field_eqv = op.outputs.field_eqv.GetData()
my_field_max_shear = op.outputs.field_max_shear.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.