---
category: utility
plugin: core
license: None
---

# utility:split in for each range

**Version: 0.0.0**

## Description

Split a scoping into several pieces so you can iterate it with a for_each loop.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [iterable](#input_0) |  | |
| <strong>1</strong> | [operator_to_iterate](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`operator`](../../core-concepts/dpf-types.md#operator) |
| <strong>2</strong> | [pin_index](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [scoping](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>4</strong> | [chunk_size](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### iterable (Pin 0)

- **Required:** No
- **Expected type(s):** 

Iterable that can be combined with the one currently generated.

<a id="input_1"></a>
### operator_to_iterate (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`operator`](../../core-concepts/dpf-types.md#operator)

Operator that must be reconnected with the range values.

<a id="input_2"></a>
### pin_index (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_3"></a>
### scoping (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_4"></a>
### chunk_size (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [output](#output_0) | |


<a id="output_0"></a>
### output (Pin 0)

- **Expected type(s):** 




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: split_in_for_each_range

 **Full name**: utility.split_in_for_each_range

 **Internal name**: chunk_in_for_each_range

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("chunk_in_for_each_range"); // operator instantiation
op.connect(0, my_iterable);
op.connect(1, my_operator_to_iterate);
op.connect(2, my_pin_index);
op.connect(3, my_scoping);
op.connect(4, my_chunk_size);
 my_output = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.split_in_for_each_range() # operator instantiation
op.inputs.iterable.connect(my_iterable)
op.inputs.operator_to_iterate.connect(my_operator_to_iterate)
op.inputs.pin_index.connect(my_pin_index)
op.inputs.scoping.connect(my_scoping)
op.inputs.chunk_size.connect(my_chunk_size)
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.split_in_for_each_range() # operator instantiation
op.inputs.iterable.Connect(my_iterable)
op.inputs.operator_to_iterate.Connect(my_operator_to_iterate)
op.inputs.pin_index.Connect(my_pin_index)
op.inputs.scoping.Connect(my_scoping)
op.inputs.chunk_size.Connect(my_chunk_size)
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.