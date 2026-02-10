---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:phase of max

**Version: 0.0.0**

## Description

Evaluates phase of maximum.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [real_field](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [imaginary_field](#input_1) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong>|  [abs_value](#input_2) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [phase_increment](#input_3) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### real_field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_1"></a>
### imaginary_field (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_2"></a>
### abs_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Should use absolute value.

<a id="input_3"></a>
### phase_increment (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Phase increment.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: phase_of_max

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("phase_of_max"); // operator instantiation
op.connect(0, my_real_field);
op.connect(1, my_imaginary_field);
op.connect(2, my_abs_value);
op.connect(3, my_phase_increment);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.real_field.connect(my_real_field)
op.inputs.imaginary_field.connect(my_imaginary_field)
op.inputs.abs_value.connect(my_abs_value)
op.inputs.phase_increment.connect(my_phase_increment)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.real_field.Connect(my_real_field)
op.inputs.imaginary_field.Connect(my_imaginary_field)
op.inputs.abs_value.Connect(my_abs_value)
op.inputs.phase_increment.Connect(my_phase_increment)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.