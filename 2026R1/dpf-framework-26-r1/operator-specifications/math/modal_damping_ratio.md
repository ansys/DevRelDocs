---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal damping ratio

**Version: 0.0.0**

## Description

Computes damping ratio for each mode shape as X_i = const + ratio_i + m_coefficient / (2*omega_i) + k_coefficient * omega_i/2.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [natural_freq](#input_0) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong>|  [const_ratio](#input_1) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [ratio_by_modes](#input_2) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [m_coefficient](#input_3) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [k_coefficient](#input_4) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### natural_freq (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

input vector expects natural frequencies.

<a id="input_1"></a>
### const_ratio (Pin 1)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

constant modal damping ratio

<a id="input_2"></a>
### ratio_by_modes (Pin 2)

- **Required:** No
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

modal damping ratio for each mode shape

<a id="input_3"></a>
### m_coefficient (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

global mass matrix multiplier

<a id="input_4"></a>
### k_coefficient (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

global stiffness matrix multiplier


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

field of modal damping ratio.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: modal_damping_ratio

 **Full name**: math.modal_damping_ratio

 **Internal name**: modal_damping_ratio

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("modal_damping_ratio"); // operator instantiation
op.connect(0, my_natural_freq);
op.connect(1, my_const_ratio);
op.connect(2, my_ratio_by_modes);
op.connect(3, my_m_coefficient);
op.connect(4, my_k_coefficient);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.modal_damping_ratio() # operator instantiation
op.inputs.natural_freq.connect(my_natural_freq)
op.inputs.const_ratio.connect(my_const_ratio)
op.inputs.ratio_by_modes.connect(my_ratio_by_modes)
op.inputs.m_coefficient.connect(my_m_coefficient)
op.inputs.k_coefficient.connect(my_k_coefficient)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.modal_damping_ratio() # operator instantiation
op.inputs.natural_freq.Connect(my_natural_freq)
op.inputs.const_ratio.Connect(my_const_ratio)
op.inputs.ratio_by_modes.Connect(my_ratio_by_modes)
op.inputs.m_coefficient.Connect(my_m_coefficient)
op.inputs.k_coefficient.Connect(my_k_coefficient)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.