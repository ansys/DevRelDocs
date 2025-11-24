---
category: serialization
plugin: core
license: any_dpf_supported_increments
---

# serialization:export symbolic workflow

**Version: 0.0.0**

## Description

Transforms a Workflow into a symbolic Workflow and writes it to a file (if a path is set in input) or string

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |
| <strong>Pin 1</strong>|  path |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong>|  format |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 is ASCII format and 1 is binary, default is 0. |
| <strong>Pin 3</strong>|  options |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 1 copies connections with its data, 2 forwards named inputs and outputs names, 7 copies connections of named inputs and ouputs with their data. default is 7. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: export_symbolic_workflow

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("export_symbolic_workflow"); // operator instantiation
op.connect(0, my_workflow);
op.connect(1, my_path);
op.connect(2, my_format);
op.connect(3, my_options);
ansys::dpf::DataSources my_data_sources = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow.connect(my_workflow)
op.inputs.path.connect(my_path)
op.inputs.format.connect(my_format)
op.inputs.options.connect(my_options)
my_data_sources_as_data_sources = op.outputs.data_sources_as_data_sources()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow.Connect(my_workflow)
op.inputs.path.Connect(my_path)
op.inputs.format.Connect(my_format)
op.inputs.options.Connect(my_options)
my_data_sources = op.outputs.data_sources.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.