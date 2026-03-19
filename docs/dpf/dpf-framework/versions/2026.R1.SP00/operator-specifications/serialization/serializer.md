---
category: serialization
plugin: core
license: None
---

# serialization:serializer

**Version: 0.0.0**

## Description

Take any input and serialize them in a file.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>-1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [stream_type](#input_-1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [file_path](#input_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [any_input](#input_1) |[`any`](../../core-concepts/dpf-types.md#any) |


<a id="input_-1"></a>
### stream_type (Pin -1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

0 for ASCII (default), and 1 for binary

<a id="input_0"></a>
### file_path (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1"></a>
### any_input (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)

any input


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [file_path](#output_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### file_path (Pin 0)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: serializer

 **Full name**: serialization.serializer

 **Internal name**: serializer

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("serializer"); // operator instantiation
op.connect(-1, my_stream_type);
op.connect(0, my_file_path);
op.connect(1, my_any_input);
std::string my_file_path = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.serializer() # operator instantiation
op.inputs.stream_type.connect(my_stream_type)
op.inputs.file_path.connect(my_file_path)
op.inputs.any_input1.connect(my_any_input1)
op.inputs.any_input2.connect(my_any_input2)
my_file_path = op.outputs.file_path()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.serializer() # operator instantiation
op.inputs.stream_type.Connect(my_stream_type)
op.inputs.file_path.Connect(my_file_path)
op.inputs.any_input.Connect(my_any_input)
my_file_path = op.outputs.file_path.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.