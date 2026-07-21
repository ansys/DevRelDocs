---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:descending sort

**Version: 0.0.0**

## Description

Sort a field (in 0) in descending order, with an optional component priority table or a boolean to enable sort by scoping (in 1). This operator doesn't support multiple elementary data per entity.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [component_priority_table](#input_1) |  |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [sort_by_scoping](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container with only one field is expected

<a id="input_1"></a>
### component_priority_table (Pin 1)

- **Required:** No
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

component priority table (vector of int)

<a id="input_2"></a>
### sort_by_scoping (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

if true, uses scoping to sort the field (default is false)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




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

 **Scripting name**: descending_sort

 **Full name**: logic.descending_sort

 **Internal name**: descending_sort

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("descending_sort"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_component_priority_table);
op.connect(2, my_sort_by_scoping);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.descending_sort() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.component_priority_table.connect(my_component_priority_table)
op.inputs.sort_by_scoping.connect(my_sort_by_scoping)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.descending_sort() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.component_priority_table.Connect(my_component_priority_table)
op.inputs.sort_by_scoping.Connect(my_sort_by_scoping)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.