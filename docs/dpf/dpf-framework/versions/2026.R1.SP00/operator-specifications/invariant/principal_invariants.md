---
category: invariant
plugin: core
license: None
---

# invariant:principal invariants (field)

**Version: 0.0.0**

## Description

Computes the element-wise Eigen values of a tensor field.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_eig_1](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_eig_2](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [field_eig_3](#output_2) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field_eig_1 (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

first eigen value field

<a id="output_1"></a>
### field_eig_2 (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

second eigen value field

<a id="output_2"></a>
### field_eig_3 (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

third eigen value field


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: invariant

 **Plugin**: core

 **Scripting name**: principal_invariants

 **Full name**: invariant.principal_invariants

 **Internal name**: invariants

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants"); // operator instantiation
op.connect(0, my_field);
ansys::dpf::Field my_field_eig_1 = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_eig_2 = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_eig_3 = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.principal_invariants() # operator instantiation
op.inputs.field.connect(my_field)
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

op = dpf.operators.invariant.principal_invariants() # operator instantiation
op.inputs.field.Connect(my_field)
my_field_eig_1 = op.outputs.field_eig_1.GetData()
my_field_eig_2 = op.outputs.field_eig_2.GetData()
my_field_eig_3 = op.outputs.field_eig_3.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.