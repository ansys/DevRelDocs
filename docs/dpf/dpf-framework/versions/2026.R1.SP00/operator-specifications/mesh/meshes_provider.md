---
category: mesh
plugin: core
license: None
---

# mesh:meshes provider

**Version: 0.0.0**

## Description

Reads meshes from result files. Meshes can be spatially or temporally varying.

The operator attempts to read mesh data from the provided data sources. When the `permissive` configuration is enabled, the operator silently skips result files that cannot be opened or have unsupported namespaces. If `permissive` is disabled (default), errors are thrown for invalid files.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- cff: cas, flprj 
- cgns: cgns 
- hdf5: h5dpf 
- lsdyna: binout, d3acp, d3acs, d3atv, d3plot, d3psd, d3spcm, d3ssd, moddynout 
- mapdl: cms, dsub, mode, rdsp, rfrq, rst 

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong>|  [time_scoping](#input_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [streams_container](#input_3) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>14</strong>|  [read_cyclic](#input_14) |`enum dataProcessing::ECyclicReading`, [`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>25</strong>|  [region_scoping](#input_25) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types)

Time/frequency set IDs required in output.

<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

result file container allowed to be kept open to cache data

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data sources describing one or more result files.

**Error conditions when `permissive` config is disabled:**
- Throws `std::runtime_error` with message "StreamProvider: empty namespace for result key '<key>'" if a result file has no namespace.
- Throws `std::runtime_error` with message "StreamProvider: operator <namespace>::stream_provider not found." if the namespace is not supported.
- If all result files are invalid, throws an error even in permissive mode.

<a id="input_14"></a>
### read_cyclic (Pin 14)

- **Required:** No
- **Expected type(s):** `enum dataProcessing::ECyclicReading`, [`int32`](../../core-concepts/dpf-types.md#standard-types)

if 1, cyclic symmetry is ignored. If 2, cyclic expansion is done (default is 1).

<a id="input_25"></a>
### region_scoping (Pin 25)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

region id (integer) or vector of region ids (vector) or region scoping (scoping) of the model (region corresponds to zone for Fluid results or part for LSDyna results).


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes](#output_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### meshes (Pin 0)

- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)




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

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: meshes_provider

 **Full name**: mesh.meshes_provider

 **Internal name**: meshes_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("meshes_provider"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(14, my_read_cyclic);
op.connect(25, my_region_scoping);
ansys::dpf::MeshesContainer my_meshes = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.meshes_provider() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.read_cyclic.connect(my_read_cyclic)
op.inputs.region_scoping.connect(my_region_scoping)
my_meshes = op.outputs.meshes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.meshes_provider() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.read_cyclic.Connect(my_read_cyclic)
op.inputs.region_scoping.Connect(my_region_scoping)
my_meshes = op.outputs.meshes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.