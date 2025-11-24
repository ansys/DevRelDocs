---
category: utility
plugin: core
license: None
---

# utility:extract sub scopings container

**Version: 0.0.0**

## Description

Creates a new scopings container with all the scopings corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | scopings_container |
| <strong>Pin 1</strong>|  label_space |[`label_space`](../../core-concepts/dpf-types.md#label-space), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs) |
| <strong>Pin 2</strong>|  collapse_labels |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If set to true (default) the input label space (scoping location) is suppressed from the output scopings container, otherwise, label space is kept. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | scopings_container |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: extract_sub_sc

 **Full name**: utility.extract_sub_sc

 **Internal name**: extract_sub_sc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("extract_sub_sc"); // operator instantiation
op.connect(0, my_scopings_container);
op.connect(1, my_label_space);
op.connect(2, my_collapse_labels);
ansys::dpf::ScopingsContainer my_scopings_container = op.getOutput<ansys::dpf::ScopingsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.extract_sub_sc() # operator instantiation
op.inputs.scopings_container.connect(my_scopings_container)
op.inputs.label_space.connect(my_label_space)
op.inputs.collapse_labels.connect(my_collapse_labels)
my_scopings_container = op.outputs.scopings_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.extract_sub_sc() # operator instantiation
op.inputs.scopings_container.Connect(my_scopings_container)
op.inputs.label_space.Connect(my_label_space)
op.inputs.collapse_labels.Connect(my_collapse_labels)
my_scopings_container = op.outputs.scopings_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.