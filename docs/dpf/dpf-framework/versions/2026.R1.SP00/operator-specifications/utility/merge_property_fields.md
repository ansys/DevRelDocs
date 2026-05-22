---
category: utility
plugin: core
license: None
---

# utility:merge property fields

**Version: 0.0.0**

## Description

Assembles a set of property fields into a unique one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-201</strong> | [naive_merge](#input_-201) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> | [property_fields](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<property_field>>`, [`property_field`](../../core-concepts/dpf-types.md#property-field), [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |


<a id="input_-201"></a>
### naive_merge (Pin -201)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, merge the input property fields assuming that there is no repetition in their scoping ids. Default is false.

<a id="input_0"></a>
### property_fields (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<property_field>>`, [`property_field`](../../core-concepts/dpf-types.md#property-field), [`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container)

Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [property_field](#output_0) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### property_field (Pin 0)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)




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

 **Scripting name**: merge_property_fields

 **Full name**: utility.merge_property_fields

 **Internal name**: merge::property_field

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::property_field"); // operator instantiation
op.connect(-201, my_naive_merge);
op.connect(0, my_property_fields);
ansys::dpf::PropertyField my_property_field = op.getOutput<ansys::dpf::PropertyField>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_property_fields() # operator instantiation
op.inputs.naive_merge.connect(my_naive_merge)
op.inputs.property_fields1.connect(my_property_fields1)
op.inputs.property_fields2.connect(my_property_fields2)
my_property_field = op.outputs.property_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_property_fields() # operator instantiation
op.inputs.naive_merge.Connect(my_naive_merge)
op.inputs.property_fields.Connect(my_property_fields)
my_property_field = op.outputs.property_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.