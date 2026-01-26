---
category: invariant
plugin: core
license: None
---

# invariant:scalar invariants (fields container)

**Version: 0.0.0**

## Description

Computes the element-wise invariants of all the tensor fields of a fields container.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_int](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [fields_eqv](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [fields_max_shear](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_int (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

stress intensity field

<a id="output_1"></a>
### fields_eqv (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

stress equivalent intensity

<a id="output_2"></a>
### fields_max_shear (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

max shear stress field


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

 **Scripting name**: invariants_fc

 **Full name**: invariant.invariants_fc

 **Internal name**: invariants_deriv_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("invariants_deriv_fc"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::FieldsContainer my_fields_int = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_fields_eqv = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_fields_max_shear = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.invariant.invariants_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
my_fields_int = op.outputs.fields_int()
my_fields_eqv = op.outputs.fields_eqv()
my_fields_max_shear = op.outputs.fields_max_shear()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.invariant.invariants_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_fields_int = op.outputs.fields_int.GetData()
my_fields_eqv = op.outputs.fields_eqv.GetData()
my_fields_max_shear = op.outputs.fields_max_shear.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.