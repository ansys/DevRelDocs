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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>3</strong> | [streams_container](#input_3) |  |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


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

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_selection_manager](#output_0) |`mesh_selection_manager` |


<a id="output_0"></a>
### mesh_selection_manager (Pin 0)

- **Expected type(s):** `mesh_selection_manager`




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

 **Scripting name**: mesh_selection_manager_provider

 **Full name**: metadata.mesh_selection_manager_provider

 **Internal name**: MeshSelectionManagerProvider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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