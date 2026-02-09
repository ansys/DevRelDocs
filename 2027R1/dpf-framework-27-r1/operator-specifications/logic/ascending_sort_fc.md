---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:ascending sort (fields container)

**Version: 0.0.0**

## Description

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong>|  [component_priority_table](#input_1) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [sort_by_scoping](#input_2) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

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

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: ascending_sort_fc

 **Full name**: logic.ascending_sort_fc

 **Internal name**: ascending_sort_fc

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("ascending_sort_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_component_priority_table);
op.connect(2, my_sort_by_scoping);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.ascending_sort_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.component_priority_table.connect(my_component_priority_table)
op.inputs.sort_by_scoping.connect(my_sort_by_scoping)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.ascending_sort_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.component_priority_table.Connect(my_component_priority_table)
op.inputs.sort_by_scoping.Connect(my_sort_by_scoping)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.