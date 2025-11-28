---
category: logic
plugin: core
license: None
---

# logic:elementary data selector (field)

**Version: 0.0.0**

## Description

Creates a scalar/vector field based on the selected elementary data.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  elementary_data_index |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | One or several elementary data index that will be extracted from the initial field. For field with nature matrix, this is the line indices to extract. |
| <strong>Pin 2</strong>|  default_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Set a default value for elementary data that do not exist. |
| <strong>Pin 3</strong>|  elementary_data_index_2 |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | For field with nature matrix, this is the column indices to extract. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: elementary_data_selector

 **Full name**: logic.elementary_data_selector

 **Internal name**: elementary_data_selector

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elementary_data_selector"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_elementary_data_index);
op.connect(2, my_default_value);
op.connect(3, my_elementary_data_index_2);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.elementary_data_selector() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.elementary_data_index.connect(my_elementary_data_index)
op.inputs.default_value.connect(my_default_value)
op.inputs.elementary_data_index_2.connect(my_elementary_data_index_2)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.elementary_data_selector() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.elementary_data_index.Connect(my_elementary_data_index)
op.inputs.default_value.Connect(my_default_value)
op.inputs.elementary_data_index_2.Connect(my_elementary_data_index_2)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.