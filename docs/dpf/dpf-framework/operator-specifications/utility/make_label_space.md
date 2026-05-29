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
| <strong>0</strong> | [base_label](/docs/dpf/dpf-framework/operator-specifications/utility/make_label_space) |  |[`label_space`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [label_name](/docs/dpf/dpf-framework/operator-specifications/utility/make_label_space) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [label_value](/docs/dpf/dpf-framework/operator-specifications/utility/make_label_space) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### base_label (Pin 0)

- **Required:** No
- **Expected type(s):** [`label_space`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values.

<a id="input_1"></a>
### label_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_2"></a>
### label_value (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [label](/docs/dpf/dpf-framework/operator-specifications/utility/make_label_space) |[`label_space`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### label (Pin 0)

- **Expected type(s):** [`label_space`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
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
<br />

## Changelog

- Version 0.0.0: Initial release.