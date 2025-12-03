---
category: metadata
plugin: core
license: None
---

# metadata:coordinate system data provider

**Version: 0.0.0**

## Description

Reads coordinate systems data from the result files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- mapdl: rst, rstp, rth 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  solver_coordinate_system_ids |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Coorfinate System ids to recover used by the solver. If not set, all available materials to be recovered. |
| <strong>Pin 3</strong>|  streams |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | Result file container allowed to be kept open to cache data. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Result file path container, used if no streams are set. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| coordinate_system_data |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: coordinate_system_data_provider

 **Full name**: metadata.coordinate_system_data_provider

 **Internal name**: coordinate_systems_data_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("coordinate_systems_data_provider"); // operator instantiation
op.connect(1, my_solver_coordinate_system_ids);
op.connect(3, my_streams);
op.connect(4, my_data_sources);
ansys::dpf::GenericDataContainer my_coordinate_system_data = op.getOutput<ansys::dpf::GenericDataContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.coordinate_system_data_provider() # operator instantiation
op.inputs.solver_coordinate_system_ids.connect(my_solver_coordinate_system_ids)
op.inputs.streams.connect(my_streams)
op.inputs.data_sources.connect(my_data_sources)
my_coordinate_system_data = op.outputs.coordinate_system_data()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.coordinate_system_data_provider() # operator instantiation
op.inputs.solver_coordinate_system_ids.Connect(my_solver_coordinate_system_ids)
op.inputs.streams.Connect(my_streams)
op.inputs.data_sources.Connect(my_data_sources)
my_coordinate_system_data = op.outputs.coordinate_system_data.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.