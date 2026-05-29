---
category: utility
plugin: core
license: None
---

# utility:field get attribute

**Version: 0.0.0**

## Description

Gets a property from an input field/field container. A Fieldin pin 0, a property name (string) in pin 1 are expected as inputs

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/operator-specifications/utility/field_get_attribute) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [property_name](/docs/dpf/dpf-framework/operator-specifications/utility/field_get_attribute) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Property to get. Accepted inputs are specific strings namely: 'unit, 'name','time_freq_support', 'scoping' and 'header'.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](/docs/dpf/dpf-framework/operator-specifications/utility/field_get_attribute) |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`abstract_data_tree`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`abstract_data_tree`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Property value that is returned. Accepted Outputs are: Field, PropertyField, CustomTypeField or their containers.


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

 **Scripting name**: field_get_attribute

 **Full name**: utility.field_get_attribute

 **Internal name**: field::get_attribute

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("field::get_attribute"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_property_name);
std::string my_property = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.field_get_attribute() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.property_name.connect(my_property_name)
my_property_as_string = op.outputs.property_as_string()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.field_get_attribute() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.property_name.Connect(my_property_name)
my_property = op.outputs.property.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.