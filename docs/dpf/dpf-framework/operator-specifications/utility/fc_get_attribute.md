---
category: utility
plugin: core
license: None
---

# utility:fields container get attribute

**Version: 0.0.0**

## Description

Uses the FieldsContainer APIs to return a given attribute of the fields container in input.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/utility/fc_get_attribute) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [property_name](/docs/dpf/dpf-framework/operator-specifications/utility/fc_get_attribute) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [property_identifier](/docs/dpf/dpf-framework/operator-specifications/utility/fc_get_attribute) |  |[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Supported property names are: "label_scoping", "label_values", "time_freq_support", "labels", "field_scoping" and "field".

<a id="input_2"></a>
### property_identifier (Pin 2)

- **Required:** No
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Additional pin for some property : the label name for "label_scoping" or "label_values", the field index (default 0) for "field_scoping" or "field".


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](/docs/dpf/dpf-framework/operator-specifications/utility/fc_get_attribute) |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`label_space`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`time_freq_support`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`label_space`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Returns a Scoping for property: "label_scoping", a vector of int for "label_values", a time freq support for "time_freq_support", a vector of string for "labels", a LabelSpace for "field_scoping" and a "field" for "field".


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

 **Scripting name**: fc_get_attribute

 **Full name**: utility.fc_get_attribute

 **Internal name**: fieldscontainer::get_attribute

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fieldscontainer::get_attribute"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_property_name);
op.connect(2, my_property_identifier);
ansys::dpf::Scoping my_property = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.fc_get_attribute() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.property_name.connect(my_property_name)
op.inputs.property_identifier.connect(my_property_identifier)
my_property_as_scoping = op.outputs.property_as_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.fc_get_attribute() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.property_name.Connect(my_property_name)
op.inputs.property_identifier.Connect(my_property_identifier)
my_property = op.outputs.property.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.