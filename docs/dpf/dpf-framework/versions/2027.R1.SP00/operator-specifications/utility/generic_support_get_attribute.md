---
category: utility
plugin: core
license: None
---

# utility:generic support get attribute

**Version: 0.0.0**

## Description

Uses the GenericSupport APIs to return a given attribute of the generic support in input.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [generic_support](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`class dataProcessing::GenericSupport` |
| <strong>1</strong> | [property_name](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### generic_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** `class dataProcessing::GenericSupport`

Generic Support.

<a id="input_1"></a>
### property_name (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Field, property field or string field name.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property](#output_0) |[`field`](../../core-concepts/dpf-types.md#field), [`property_field`](../../core-concepts/dpf-types.md#property-field), [`string_field`](../../core-concepts/dpf-types.md#string-field) |


<a id="output_0"></a>
### property (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`property_field`](../../core-concepts/dpf-types.md#property-field), [`string_field`](../../core-concepts/dpf-types.md#string-field)

Field, property field or string field.


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

 **Scripting name**: generic_support_get_attribute

 **Full name**: utility.generic_support_get_attribute

 **Internal name**: generic_support::get_attribute

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("generic_support::get_attribute"); // operator instantiation
op.connect(0, my_generic_support);
op.connect(1, my_property_name);
ansys::dpf::Field my_property = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.generic_support_get_attribute() # operator instantiation
op.inputs.generic_support.connect(my_generic_support)
op.inputs.property_name.connect(my_property_name)
my_property_as_field = op.outputs.property_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.generic_support_get_attribute() # operator instantiation
op.inputs.generic_support.Connect(my_generic_support)
op.inputs.property_name.Connect(my_property_name)
my_property = op.outputs.property.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.