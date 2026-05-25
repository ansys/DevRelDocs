---
category: utility
plugin: core
license: None
---

# utility:custom type field get attribute

**Version: 0.0.0**

## Description

Gets a property from an input field/field container. A CustomTypeFieldin pin 0, a property name (string) in pin 1 are expected as inputs

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [custom_type_field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field), [`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container) |
| <strong>1</strong> | [property_name](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### custom_type_field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`custom_type_field`](../../core-concepts/dpf-types.md#custom-type-field), [`custom_type_fields_container`](../../core-concepts/dpf-types.md#custom-type-fields-container)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Property to get. Accepted inputs are specific strings namely: 'unit, 'name','time_freq_support', 'scoping' and 'header'.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](#output_0) |[`string`](../../core-concepts/dpf-types.md#standard-types), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree)

Property value that is returned. Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.


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

 **Scripting name**: customtypefield_get_attribute

 **Full name**: utility.customtypefield_get_attribute

 **Internal name**: customtypefield::get_attribute

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("customtypefield::get_attribute"); // operator instantiation
op.connect(0, my_custom_type_field);
op.connect(1, my_property_name);
std::string my_property = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.customtypefield_get_attribute() # operator instantiation
op.inputs.custom_type_field.connect(my_custom_type_field)
op.inputs.property_name.connect(my_property_name)
my_property_as_string = op.outputs.property_as_string()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.customtypefield_get_attribute() # operator instantiation
op.inputs.custom_type_field.Connect(my_custom_type_field)
op.inputs.property_name.Connect(my_property_name)
my_property = op.outputs.property.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.