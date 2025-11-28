---
category: utility
plugin: core
license: None
---

# utility:remove unnecessary labels

**Version: 0.0.0**

## Description

Removes the selected label from a fields container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -1</strong>|  permissive |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, the operator does not throw an error if the label to be removed has more than one entry. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields Container with the label to be removed. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_to_remove |[`string`](../../core-concepts/dpf-types.md#standard-types) | Label to be removed from the fields container. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: remove_unnecessary_labels

 **Full name**: utility.remove_unnecessary_labels

 **Internal name**: remove_unnecessary_label

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("remove_unnecessary_label"); // operator instantiation
op.connect(-1, my_permissive);
op.connect(0, my_fields_container);
op.connect(1, my_label_to_remove);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.remove_unnecessary_labels() # operator instantiation
op.inputs.permissive.connect(my_permissive)
op.inputs.fields_container.connect(my_fields_container)
op.inputs.label_to_remove.connect(my_label_to_remove)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.remove_unnecessary_labels() # operator instantiation
op.inputs.permissive.Connect(my_permissive)
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.label_to_remove.Connect(my_label_to_remove)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.