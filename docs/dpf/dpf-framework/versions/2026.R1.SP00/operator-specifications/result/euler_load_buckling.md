---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:euler load buckling

**Version: 0.0.0**

## Description

Computing Euler's Critical Load. Formula: Ncr = n*E*I*pi*pi /(L*L) 

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field_beam_end_condition](#input_5) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field_beam_moment_inertia](#input_6) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field_beam_young_modulus](#input_7) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field_beam_length](#input_8) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_5"></a>
### field_beam_end_condition (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`field`](../../core-concepts/dpf-types.md#field)

This pin contains file csv or field of beam's end condition added by the user. If there's no file added, it would take value of all beam's end condition as 1.

<a id="input_6"></a>
### field_beam_moment_inertia (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of beam's moment inertia

<a id="input_7"></a>
### field_beam_young_modulus (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of beam's young modulus

<a id="input_8"></a>
### field_beam_length (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of beam's length


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_euler_critical_load](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_euler_critical_load_yy](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [field_euler_critical_load_zz](#output_2) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field_euler_critical_load (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

This field contains Euler's Critical Load about the principle axis of the cross section having the least moment of inertia.

<a id="output_1"></a>
### field_euler_critical_load_yy (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

This field contains Euler's Critical Load on axis y.

<a id="output_2"></a>
### field_euler_critical_load_zz (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

This field contains Euler's Critical Load on axis z.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: euler_load_buckling

 **Full name**: result.euler_load_buckling

 **Internal name**: euler_load_buckling

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("euler_load_buckling"); // operator instantiation
op.connect(5, my_field_beam_end_condition);
op.connect(6, my_field_beam_moment_inertia);
op.connect(7, my_field_beam_young_modulus);
op.connect(8, my_field_beam_length);
ansys::dpf::Field my_field_euler_critical_load = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_euler_critical_load_yy = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_field_euler_critical_load_zz = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.euler_load_buckling() # operator instantiation
op.inputs.field_beam_end_condition.connect(my_field_beam_end_condition)
op.inputs.field_beam_moment_inertia.connect(my_field_beam_moment_inertia)
op.inputs.field_beam_young_modulus.connect(my_field_beam_young_modulus)
op.inputs.field_beam_length.connect(my_field_beam_length)
my_field_euler_critical_load = op.outputs.field_euler_critical_load()
my_field_euler_critical_load_yy = op.outputs.field_euler_critical_load_yy()
my_field_euler_critical_load_zz = op.outputs.field_euler_critical_load_zz()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.euler_load_buckling() # operator instantiation
op.inputs.field_beam_end_condition.Connect(my_field_beam_end_condition)
op.inputs.field_beam_moment_inertia.Connect(my_field_beam_moment_inertia)
op.inputs.field_beam_young_modulus.Connect(my_field_beam_young_modulus)
op.inputs.field_beam_length.Connect(my_field_beam_length)
my_field_euler_critical_load = op.outputs.field_euler_critical_load.GetData()
my_field_euler_critical_load_yy = op.outputs.field_euler_critical_load_yy.GetData()
my_field_euler_critical_load_zz = op.outputs.field_euler_critical_load_zz.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.