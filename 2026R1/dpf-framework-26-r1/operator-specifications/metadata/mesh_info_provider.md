---
category: metadata
plugin: core
license: None
---

# metadata:mesh info provider

**Version: 0.0.0**

## Description

Reads the mesh information, such as number of elements (common property), number of faces (Cff plugins) or scoping of parts (LSDYNA plugins) on files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- cff: cas, flprj 
- cgns: cgns 
- lsdyna: d3plot 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Optional time/frequency set ID of the mesh. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | streams (mesh file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | If the stream is null, retrieves the file path from the data sources. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_info |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: mesh_info_provider

 **Full name**: metadata.mesh_info_provider

 **Internal name**: mesh_info_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_info_provider"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::GenericDataContainer my_mesh_info = op.getOutput<ansys::dpf::GenericDataContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.mesh_info_provider() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_mesh_info = op.outputs.mesh_info()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.mesh_info_provider() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_mesh_info = op.outputs.mesh_info.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.