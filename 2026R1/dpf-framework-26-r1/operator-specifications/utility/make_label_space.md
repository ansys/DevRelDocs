---
category: utility
plugin: core
license: None
---

# utility:make label space

**Version: 0.0.0**

## Description

Assemble strings and integers to make a label space.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  base_label |[`label_space`](../../core-concepts/dpf-types.md#label-space), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_name |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_value |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| label |[`label_space`](../../core-concepts/dpf-types.md#label-space) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: make_label_space

 **Full name**: utility.make_label_space

 **Internal name**: make_label_space

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("make_label_space"); // operator instantiation
op.connect(0, my_base_label);
op.connect(1, my_label_name);
op.connect(2, my_label_value);
ansys::dpf::LabelSpace my_label = op.getOutput<ansys::dpf::LabelSpace>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.make_label_space() # operator instantiation
op.inputs.base_label.connect(my_base_label)
op.inputs.label_name.connect(my_label_name)
op.inputs.label_value1.connect(my_label_value1)
op.inputs.label_value2.connect(my_label_value2)
my_label = op.outputs.label()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.make_label_space() # operator instantiation
op.inputs.base_label.Connect(my_base_label)
op.inputs.label_name.Connect(my_label_name)
op.inputs.label_value.Connect(my_label_value)
my_label = op.outputs.label.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.