---
category: metadata
plugin: core
license: None
---

# metadata:streams provider

**Version: 0.0.0**

## Description

Create streams (cached file handles) based on provided data sources.

- When the data sources contain a single result key, an internal provider is instantiated for that namespace to create streams.
- When multiple result keys are present, streams are aggregated from each namespace-specific internal provider.
- Upstream data sources (if defined) are opened and attached to the output as upstream streams.

When the `permissive` configuration is enabled, the operator silently skips result files that cannot be opened or have unsupported namespaces, continuing with valid files. 
If `permissive` is disabled (default), errors are thrown for invalid files.

Throws a runtime error if data sources are missing or if all result files are invalid.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources describing one or more result files. Supports single or multiple result keys; may include upstream data sources.

**Error conditions when `permissive` config is disabled:**
- Throws `std::runtime_error` with message "StreamProvider: empty namespace for result key '<key>'" if a result file has no namespace.
- Throws `std::runtime_error` with message "StreamProvider: operator <namespace>::stream_provider not found." if the namespace is not supported.
- If all result files are invalid, throws an error even in permissive mode.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [streams_container](#output_0) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |


<a id="output_0"></a>
### streams_container (Pin 0)

- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams created from the input data sources, including aggregated streams across namespaces and any upstream streams.


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

### [permissive](../../core-concepts/operator-configurations.md#permissive)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: streams_provider

 **Full name**: metadata.streams_provider

 **Internal name**: stream_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("stream_provider"); // operator instantiation
op.connect(4, my_data_sources);
ansys::dpf::Streams my_streams_container = op.getOutput<ansys::dpf::Streams>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.streams_provider() # operator instantiation
op.inputs.data_sources.connect(my_data_sources)
my_streams_container = op.outputs.streams_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.streams_provider() # operator instantiation
op.inputs.data_sources.Connect(my_data_sources)
my_streams_container = op.outputs.streams_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.