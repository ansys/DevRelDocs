---
category: serialization
plugin: vtk
license: None
---

# serialization:migrate to vtu

**Version: 0.0.0**

## Description

Extract all results from a datasources and exports them into vtu format. All the connected inputs are forwarded to the result providers operators.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](#input_0) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>20</strong> | [directory](#input_20) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>21</strong> | [base_name](#input_21) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>30</strong> | [result](#input_30) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>100</strong> | [write_mode](#input_100) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

time sets to export, default is all

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

result file path container, used if no streams are set

<a id="input_20"></a>
### directory (Pin 20)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

directory path

<a id="input_21"></a>
### base_name (Pin 21)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

vtu base file name, (default is file)

<a id="input_30"></a>
### result (Pin 30)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

if Operator's names are connected to this Pin, only these results are exported (else all available results are exported)

<a id="input_100"></a>
### write_mode (Pin 100)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [path](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_0"></a>
### path (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

list of output vtu file path


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [permissive](../../core-concepts/operator-configurations.md#permissive)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

If this option is set to true, warning checks (like unit or data sizes) won't be done.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: migrate_to_vtu

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("migrate_to_vtu"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(20, my_directory);
op.connect(21, my_base_name);
op.connect(30, my_result);
op.connect(100, my_write_mode);
ansys::dpf::DataSources my_path = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.directory.connect(my_directory)
op.inputs.base_name.connect(my_base_name)
op.inputs.result1.connect(my_result1)
op.inputs.result2.connect(my_result2)
op.inputs.write_mode.connect(my_write_mode)
my_path = op.outputs.path()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.directory.Connect(my_directory)
op.inputs.base_name.Connect(my_base_name)
op.inputs.result.Connect(my_result)
op.inputs.write_mode.Connect(my_write_mode)
my_path = op.outputs.path.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.