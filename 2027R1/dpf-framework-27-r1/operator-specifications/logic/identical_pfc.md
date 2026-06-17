---
category: logic
plugin: core
license: None
---

# logic:same  property fields container?

**Version: 0.0.0**

## Description

Checks if two property_fields_container are identical.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [property_fields_containerA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |
| <strong>1</strong> | [property_fields_containerB](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |


<a id="input_0"></a>
### property_fields_containerA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container)



<a id="input_1"></a>
### property_fields_containerB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [boolean](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
|  **1**| [message](#output_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### boolean (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

bool (true if identical...)

<a id="output_1"></a>
### message (Pin 1)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_pfc

 **Full name**: logic.identical_pfc

 **Internal name**: compare::property_fields_container

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::property_fields_container"); // operator instantiation
op.connect(0, my_property_fields_containerA);
op.connect(1, my_property_fields_containerB);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_pfc() # operator instantiation
op.inputs.property_fields_containerA.connect(my_property_fields_containerA)
op.inputs.property_fields_containerB.connect(my_property_fields_containerB)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_pfc() # operator instantiation
op.inputs.property_fields_containerA.Connect(my_property_fields_containerA)
op.inputs.property_fields_containerB.Connect(my_property_fields_containerB)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.