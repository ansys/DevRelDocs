---
category: serialization
plugin: core
license: None
---

# serialization:serializer to string

**Version: 0.0.0**

## Description

Take any input and serialize them in a string.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  stream_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 for string (default), 1 for binary, 2 for binary with chunked output (the output string will be returned in several chunks to prevent string memory overflows). |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  any_input |[`any`](../../core-concepts/dpf-types.md#any) | any input |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin -1**| nof_chunks |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of chunks when mode passed to input pin(-1) = 2. |
|  **Pin 0**| serialized_string |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: serializer_to_string

 **Full name**: serialization.serializer_to_string

 **Internal name**: serializer_to_string

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("serializer_to_string"); // operator instantiation
op.connect(-1, my_stream_type);
op.connect(1, my_any_input);
int my_nof_chunks = op.getOutput<int>(-1);
std::string my_serialized_string = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.serializer_to_string() # operator instantiation
op.inputs.stream_type.connect(my_stream_type)
op.inputs.any_input1.connect(my_any_input1)
op.inputs.any_input2.connect(my_any_input2)
my_nof_chunks = op.outputs.nof_chunks()
my_serialized_string = op.outputs.serialized_string()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.serializer_to_string() # operator instantiation
op.inputs.stream_type.Connect(my_stream_type)
op.inputs.any_input.Connect(my_any_input)
my_nof_chunks = op.outputs.nof_chunks.GetData()
my_serialized_string = op.outputs.serialized_string.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.