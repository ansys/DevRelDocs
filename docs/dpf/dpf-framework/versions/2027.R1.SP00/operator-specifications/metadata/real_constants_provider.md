---
category: metadata
plugin: core
license: None
---

# metadata:real constants provider

**Version: 0.0.0**

## Description

Reads real constants from the result files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp, rth 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [solver_real_constants_ids](#input_1) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [streams](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_1"></a>
### solver_real_constants_ids (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

Real Constant ids to recover used by the solver. If not set, all available real constants to be recovered.

<a id="input_3"></a>
### streams (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Result file container allowed to be kept open to cache data.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Result file path container, used if no streams are set.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [real_constants](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### real_constants (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: real_constants_provider

 **Full name**: metadata.real_constants_provider

 **Internal name**: real_constants_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("real_constants_provider"); // operator instantiation
op.connect(1, my_solver_real_constants_ids);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
ansys::dpf::Field my_real_constants = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.real_constants_provider() # operator instantiation
op.inputs.solver_real_constants_ids.connect(my_solver_real_constants_ids)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
my_real_constants = op.outputs.real_constants()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.real_constants_provider() # operator instantiation
op.inputs.solver_real_constants_ids.Connect(my_solver_real_constants_ids)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
my_real_constants = op.outputs.real_constants.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.