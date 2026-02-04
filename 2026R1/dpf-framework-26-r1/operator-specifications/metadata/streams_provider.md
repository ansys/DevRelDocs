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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


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

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [streams_container](#output_0) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |


<a id="output_0"></a>
### streams_container (Pin 0)

- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams created from the input data sources, including aggregated streams across namespaces and any upstream streams.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### permissive

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: streams_provider

 **Full name**: metadata.streams_provider

 **Internal name**: stream_provider

 **License**: None

## Examples

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