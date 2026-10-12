---
category: serialization
plugin: core
license: any_dpf_supported_increments
---

# serialization:import symbolic workflow

**Version: 0.0.0**

## Description

Reads a file or string holding a Symbolic Workflow and instantiates a WorkFlow with its data. Pin 'workflow_path' refers to a file path, either as a string or as DataSources. Pin 'workflow_as_string' refers to the string representation of the workflow itself. Both pins are mutually exclusive.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [workflow_path](#input_0) |  |[`string`](../../core-concepts/dpf-types.md#standard-types), [`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>1</strong> | [workflow_as_string](#input_1) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [format](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### workflow_path (Pin 0)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types), [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

File path (string) or DataSources pointing to a workflow file. Pin 'format' is used only if this pin is connected.

<a id="input_1"></a>
### workflow_as_string (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

String representation of the workflow as provided by the 'export_symbolic_workflow' operator with string output or the 'writeToString' Workflow API.

<a id="input_2"></a>
### format (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

-1 is auto-detection, 0 is ASCII format, 1 is binary, 2 is json, default is -1 (auto-detection).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [workflow](#output_0) |[`workflow`](../../core-concepts/dpf-types.md#workflow) |


<a id="output_0"></a>
### workflow (Pin 0)

- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: import_symbolic_workflow

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("import_symbolic_workflow"); // operator instantiation
op.connect(0, my_workflow_path);
op.connect(1, my_workflow_as_string);
op.connect(2, my_format);
ansys::dpf::Workflow my_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow_path.connect(my_workflow_path)
op.inputs.workflow_as_string.connect(my_workflow_as_string)
op.inputs.format.connect(my_format)
my_workflow = op.outputs.workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow_path.Connect(my_workflow_path)
op.inputs.workflow_as_string.Connect(my_workflow_as_string)
op.inputs.format.Connect(my_format)
my_workflow = op.outputs.workflow.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.