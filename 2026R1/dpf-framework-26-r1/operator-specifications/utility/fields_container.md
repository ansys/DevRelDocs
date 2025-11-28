---
category: utility
plugin: core
license: None
---

# utility:incremental fields container

**Version: 0.0.0**

## Description

Incrementaly merge the input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| incremented_result | |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: fields_container

 **Full name**: utility.fields_container

 **Internal name**: incremental::merge::fields_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("incremental::merge::fields_container"); // operator instantiation
op.connect(0, my_input);
 my_incremented_result = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.fields_container() # operator instantiation
op.inputs.input.connect(my_input)
my_incremented_result = op.outputs.incremented_result()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.fields_container() # operator instantiation
op.inputs.input.Connect(my_input)
my_incremented_result = op.outputs.incremented_result.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.