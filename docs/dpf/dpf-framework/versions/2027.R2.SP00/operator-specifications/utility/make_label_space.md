---
category: utility
plugin: core
license: None
---

# utility:make label space

**Version: 0.0.0**

## Description

Assemble strings and integers to make a label space.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [base_label](#input_0) |  |[`label_space`](../../core-concepts/dpf-types.md#label-space), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>1</strong> | [label_name](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [label_value](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### base_label (Pin 0)

- **Required:** No
- **Expected type(s):** [`label_space`](../../core-concepts/dpf-types.md#label-space), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values.

<a id="input_1"></a>
### label_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_2"></a>
### label_value (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [label](#output_0) |[`label_space`](../../core-concepts/dpf-types.md#label-space) |


<a id="output_0"></a>
### label (Pin 0)

- **Expected type(s):** [`label_space`](../../core-concepts/dpf-types.md#label-space)




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

 **Scripting name**: make_label_space

 **Full name**: utility.make_label_space

 **Internal name**: make_label_space

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("make_label_space"); // operator instantiation
op.connect(0, my_base_label);
op.connect(1, my_label_name);
op.connect(2, my_label_value);
ansys::dpf::LabelSpace my_label = op.getOutput<ansys::dpf::LabelSpace>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.make_label_space() # operator instantiation
op.inputs.base_label.connect(my_base_label)
op.inputs.label_name.connect(my_label_name)
op.inputs.label_value1.connect(my_label_value1)
op.inputs.label_value2.connect(my_label_value2)
my_label = op.outputs.label()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.make_label_space() # operator instantiation
op.inputs.base_label.Connect(my_base_label)
op.inputs.label_name.Connect(my_label_name)
op.inputs.label_value.Connect(my_label_value)
my_label = op.outputs.label.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.