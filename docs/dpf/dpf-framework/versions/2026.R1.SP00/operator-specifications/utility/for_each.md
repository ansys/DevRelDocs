---
category: utility
plugin: core
license: None
---

# utility:for each

**Version: 0.0.0**

## Description

Allows to write a loop over a chunk of operators.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [iterable](#input_0) | |
| <strong>1</strong>|  [iterable_values](#input_1) | |
| <strong>2</strong>|  [pin_index](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [forward](#input_3) | |


<a id="input_0"></a>
### iterable (Pin 0)

- **Required:** Yes
- **Expected type(s):** 

Either the result of the make_iterable_info operator, or the operator that must be incremented.

<a id="input_1"></a>
### iterable_values (Pin 1)

- **Required:** No
- **Expected type(s):** 



<a id="input_2"></a>
### pin_index (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_3"></a>
### forward (Pin 3)

- **Required:** Yes
- **Expected type(s):** 




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [empty](#output_0) | |
|  **3**| [output](#output_3) | |


<a id="output_0"></a>
### empty (Pin 0)

- **Expected type(s):** 



<a id="output_3"></a>
### output (Pin 3)

- **Expected type(s):** 




## Configurations


### evaluate_inputs_before_run

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status.

### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: for_each

 **Full name**: utility.for_each

 **Internal name**: for_each

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("for_each"); // operator instantiation
op.connect(0, my_iterable);
op.connect(1, my_iterable_values);
op.connect(2, my_pin_index);
op.connect(3, my_forward);
 my_empty = op.getOutput<>(0);
 my_output = op.getOutput<>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.for_each() # operator instantiation
op.inputs.iterable.connect(my_iterable)
op.inputs.iterable_values.connect(my_iterable_values)
op.inputs.pin_index.connect(my_pin_index)
op.inputs.forward1.connect(my_forward1)
op.inputs.forward2.connect(my_forward2)
my_empty = op.outputs.empty()
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.for_each() # operator instantiation
op.inputs.iterable.Connect(my_iterable)
op.inputs.iterable_values.Connect(my_iterable_values)
op.inputs.pin_index.Connect(my_pin_index)
op.inputs.forward.Connect(my_forward)
my_empty = op.outputs.empty.GetData()
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.