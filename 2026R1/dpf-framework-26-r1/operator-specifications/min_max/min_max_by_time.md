---
category: min_max
plugin: core
license: None
---

# min_max:min max over time

**Version: 0.0.0**

## Description

Evaluates minimum, maximum by time or frequency over all the entities of each field

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong>|  [compute_absolute_value](#input_2) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_2"></a>
### compute_absolute_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Calculate the absolute value of field entities before computing the min/max.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [min](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [max](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### min (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_1"></a>
### max (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### incremental

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range.

### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_by_time

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_by_time"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(2, my_compute_absolute_value);
ansys::dpf::FieldsContainer my_min = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_max = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.compute_absolute_value.connect(my_compute_absolute_value)
my_min = op.outputs.min()
my_max = op.outputs.max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.compute_absolute_value.Connect(my_compute_absolute_value)
my_min = op.outputs.min.GetData()
my_max = op.outputs.max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.