---
category: logic
plugin: core
license: None
---

# logic:elementary data selector (fields container)

**Version: 0.0.0**

## Description

Creates a scalar fields container based on the selected elementary data for each field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  elementary_data_index |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | one or several elementary data indices that will be extracted from the initial field. For a field with a nature matrix, this extracts the line indices. |
| <strong>Pin 3</strong>|  elementary_data_index_2 |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | For a field with nature matrix, this extracts the column indices. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: elementary_data_selector_fc

 **Full name**: logic.elementary_data_selector_fc

 **Internal name**: elementary_data_selector_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elementary_data_selector_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_elementary_data_index);
op.connect(3, my_elementary_data_index_2);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.elementary_data_selector_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.elementary_data_index.connect(my_elementary_data_index)
op.inputs.elementary_data_index_2.connect(my_elementary_data_index_2)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.elementary_data_selector_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.elementary_data_index.Connect(my_elementary_data_index)
op.inputs.elementary_data_index_2.Connect(my_elementary_data_index_2)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.