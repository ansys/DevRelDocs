---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:incremental over field

**Version: 0.0.0**

## Description

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>17</strong>|  [domain_id](#input_17) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_17"></a>
### domain_id (Pin 17)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_min](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_max](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [domain_ids_min](#output_2) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **3**| [domain_ids_max](#output_3) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### field_min (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_2"></a>
### domain_ids_min (Pin 2)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="output_3"></a>
### domain_ids_max (Pin 3)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




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

 **Internal name**: min_max_inc

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_inc"); // operator instantiation
op.connect(0, my_field);
op.connect(17, my_domain_id);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Scoping my_domain_ids_min = op.getOutput<ansys::dpf::Scoping>(2);
ansys::dpf::Scoping my_domain_ids_max = op.getOutput<ansys::dpf::Scoping>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.domain_id.connect(my_domain_id)
my_field_min = op.outputs.field_min()
my_field_max = op.outputs.field_max()
my_domain_ids_min = op.outputs.domain_ids_min()
my_domain_ids_max = op.outputs.domain_ids_max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.domain_id.Connect(my_domain_id)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
my_domain_ids_min = op.outputs.domain_ids_min.GetData()
my_domain_ids_max = op.outputs.domain_ids_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.