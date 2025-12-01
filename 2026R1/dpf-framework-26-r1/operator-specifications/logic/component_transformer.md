---
category: logic
plugin: core
license: None
---

# logic:component transformer (field)

**Version: 0.0.0**

## Description

Takes the input field and creates a field with overriden value on given components.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  component_number |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | One or several component index that will be modified from the initial field. |
| <strong>Pin 2</strong>|  default_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Set a default value for components selected. |

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

 **Scripting name**: component_transformer

 **Full name**: logic.component_transformer

 **Internal name**: component_transformer

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("component_transformer"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_component_number);
op.connect(2, my_default_value);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.component_transformer() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.component_number.connect(my_component_number)
op.inputs.default_value.connect(my_default_value)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.component_transformer() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.component_number.Connect(my_component_number)
op.inputs.default_value.Connect(my_default_value)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.