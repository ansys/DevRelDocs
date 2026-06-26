---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:splitter::data_sources

**Version: 0.0.0**

## Description

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [data_sources](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>1</strong> | [output_count](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### data_sources (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources to split.

<a id="input_1"></a>
### output_count (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of desired outputs.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **-1**| [output_count](#output_-1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
|  **0**| [outputs](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_-1"></a>
### output_count (Pin -1)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Actual number of outputs.

<a id="output_0"></a>
### outputs (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources outputs.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: logic

 **Plugin**: core

 **Scripting name**: split_data_sources

 **Full name**: logic.split_data_sources

 **Internal name**: splitter::data_sources

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("splitter::data_sources"); // operator instantiation
op.connect(0, my_data_sources);
op.connect(1, my_output_count);
int my_output_count = op.getOutput<int>(-1);
ansys::dpf::DataSources my_outputs = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.split_data_sources() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
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

op = dpf.operators.logic.split_data_sources() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.output_count.Connect(my_output_count)
my_output_count = op.outputs.output_count.GetData()
my_outputs = op.outputs.outputs.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.