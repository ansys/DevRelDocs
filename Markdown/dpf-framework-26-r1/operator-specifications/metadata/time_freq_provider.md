---
category: metadata
plugin: core
license: None
---

# metadata:time freq provider

**Version: 0.0.0**

## Description

Reads the time/frequency support from the results files contained in the streams or data sources.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- cff: cas, flprj 
- cgns: cgns 
- hdf5: h5dpf 
- lsdyna: binout, d3acp, d3acs, d3atv, d3plot, d3psd, d3ssd, lsda, moddynout 
- mapdl: cms, dsub, mode, rdsp, rfrq, rst, rstp, rth 

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | If the stream is null, retrieves the file path from the data sources. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: time_freq_provider

 **Full name**: metadata.time_freq_provider

 **Internal name**: time_freq_support_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("time_freq_support_provider"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
ansys::dpf::TimeFreqSupport my_time_freq_support = op.getOutput<ansys::dpf::TimeFreqSupport>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.time_freq_provider() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
my_time_freq_support = op.outputs.time_freq_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.time_freq_provider() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
my_time_freq_support = op.outputs.time_freq_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.