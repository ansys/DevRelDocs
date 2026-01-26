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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>-1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [stream_type](#input_-1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [any_input](#input_1) |[`any`](../../core-concepts/dpf-types.md#any) |


<a id="input_-1"></a>
### stream_type (Pin -1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

0 for string (default), 1 for binary, 2 for binary with chunked output (the output string will be returned in several chunks to prevent string memory overflows).

<a id="input_1"></a>
### any_input (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)

any input


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **-1**| [nof_chunks](#output_-1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
|  **0**| [serialized_string](#output_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_-1"></a>
### nof_chunks (Pin -1)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of chunks when mode passed to input pin(-1) = 2.

<a id="output_0"></a>
### serialized_string (Pin 0)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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