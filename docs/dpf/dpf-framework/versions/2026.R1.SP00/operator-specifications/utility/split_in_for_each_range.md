---
category: utility
plugin: core
license: None
---

# utility:split in for each range

**Version: 0.0.0**

## Description

Split a scoping into several pieces so you can iterate it with a for_each loop.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  iterable | | Iterable that can be combined with the one currently generated. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  operator_to_iterate |[`operator`](../../core-concepts/dpf-types.md#operator) | Operator that must be reconnected with the range values. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  pin_index |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  chunk_size |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| output | |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: split_in_for_each_range

 **Full name**: utility.split_in_for_each_range

 **Internal name**: chunk_in_for_each_range

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("chunk_in_for_each_range"); // operator instantiation
op.connect(0, my_iterable);
op.connect(1, my_operator_to_iterate);
op.connect(2, my_pin_index);
op.connect(3, my_scoping);
op.connect(4, my_chunk_size);
 my_output = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.split_in_for_each_range() # operator instantiation
op.inputs.iterable.connect(my_iterable)
op.inputs.operator_to_iterate.connect(my_operator_to_iterate)
op.inputs.pin_index.connect(my_pin_index)
op.inputs.scoping.connect(my_scoping)
op.inputs.chunk_size.connect(my_chunk_size)
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.split_in_for_each_range() # operator instantiation
op.inputs.iterable.Connect(my_iterable)
op.inputs.operator_to_iterate.Connect(my_operator_to_iterate)
op.inputs.pin_index.Connect(my_pin_index)
op.inputs.scoping.Connect(my_scoping)
op.inputs.chunk_size.Connect(my_chunk_size)
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.