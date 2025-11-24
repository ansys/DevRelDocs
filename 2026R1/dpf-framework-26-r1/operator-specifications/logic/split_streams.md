---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:splitter::streams

**Version: 0.0.0**

## Description

Splits a Streams into multiple coherent streams, actual number of outputs is always less or equal to the given desired number of ouputs.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams to split. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_count |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of desired outputs. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin -1**| output_count |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Actual number of outputs. |
|  **Pin 0**| outputs |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Streams outputs. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: split_streams

 **Full name**: logic.split_streams

 **Internal name**: splitter::streams

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("splitter::streams"); // operator instantiation
op.connect(0, my_streams);
op.connect(1, my_output_count);
int my_output_count = op.getOutput<int>(-1);
ansys::dpf::Streams my_outputs = op.getOutput<ansys::dpf::Streams>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.split_streams() # operator instantiation
op.inputs.streams.connect(my_streams)
op.inputs.output_count.connect(my_output_count)
my_output_count = op.outputs.output_count()
my_outputs = op.outputs.outputs()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.split_streams() # operator instantiation
op.inputs.streams.Connect(my_streams)
op.inputs.output_count.Connect(my_output_count)
my_output_count = op.outputs.output_count.GetData()
my_outputs = op.outputs.outputs.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.