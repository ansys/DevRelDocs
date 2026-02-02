---
category: metadata
plugin: core
license: None
---

# metadata:mesh selection manager provider

**Version: 0.0.0**

## Description

Reads mesh properties from the results files contained in the streams or data sources, and makes those properties available through a mesh selection manager in output.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: dsub, rdsp, rfrq, rst, rstp, rth 

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>3</strong>|  [streams_container](#input_3) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

streams (result file container) (optional)

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

If the stream is null, retrieves the file path from the data sources.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_selection_manager](#output_0) |`mesh_selection_manager` |


<a id="output_0"></a>
### mesh_selection_manager (Pin 0)

- **Expected type(s):** `mesh_selection_manager`




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: mesh_selection_manager_provider

 **Full name**: metadata.mesh_selection_manager_provider

 **Internal name**: MeshSelectionManagerProvider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("MeshSelectionManagerProvider"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::MeshSelectionManager my_mesh_selection_manager = op.getOutput<ansys::dpf::MeshSelectionManager>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.mesh_selection_manager_provider() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_mesh_selection_manager = op.outputs.mesh_selection_manager()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.mesh_selection_manager_provider() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_mesh_selection_manager = op.outputs.mesh_selection_manager.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.