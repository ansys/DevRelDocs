---
category: utility
plugin: core
license: None
---

# utility:merge string fields

**Version: 0.0.0**

## Description

Assembles a set of string fields into a unique one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [string_fields](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<string_field>>`, [`string_field`](../../core-concepts/dpf-types.md#string-field) |


<a id="input_0"></a>
### string_fields (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<string_field>>`, [`string_field`](../../core-concepts/dpf-types.md#string-field)

Either a a vector of string fields to merge or string fields from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [string_field](#output_0) |[`string_field`](../../core-concepts/dpf-types.md#string-field) |


<a id="output_0"></a>
### string_field (Pin 0)

- **Expected type(s):** [`string_field`](../../core-concepts/dpf-types.md#string-field)




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

 **Scripting name**: merge_string_fields

 **Full name**: utility.merge_string_fields

 **Internal name**: merge::string_field

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::string_field"); // operator instantiation
op.connect(0, my_string_fields);
ansys::dpf::StringField my_string_field = op.getOutput<ansys::dpf::StringField>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_string_fields() # operator instantiation
op.inputs.string_fields1.connect(my_string_fields1)
op.inputs.string_fields2.connect(my_string_fields2)
my_string_field = op.outputs.string_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_string_fields() # operator instantiation
op.inputs.string_fields.Connect(my_string_fields)
my_string_field = op.outputs.string_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.