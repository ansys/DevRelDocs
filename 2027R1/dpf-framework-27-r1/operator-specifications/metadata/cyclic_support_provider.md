---
category: metadata
plugin: core
license: None
---

# metadata:cyclic support provider

**Version: 0.0.0**

## Description

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.

## Supported file types

This operator supports the following keys ([file formats](../../index.md#overview-of-dpf)) for each listed namespace (plugin/solver):

- hdf5: h5dpf 
- mapdl: cms, dsub, mode, rdsp, rfrq, rst, rstp, rth 

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>3</strong>|  [streams_container](#input_3) |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_sources](#input_4) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>7</strong>|  [sector_meshed_region](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>15</strong>|  [expanded_meshed_region](#input_15) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>18</strong>|  [sectors_to_expand](#input_18) |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_3"></a>
### streams_container (Pin 3)

- **Required:** No
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)

Streams containing the result file.

<a id="input_4"></a>
### data_sources (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

data sources containing the result file.

<a id="input_7"></a>
### sector_meshed_region (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

mesh of the first sector.

<a id="input_15"></a>
### expanded_meshed_region (Pin 15)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

if this pin is set, expanding the mesh is not necessary.

<a id="input_18"></a>
### sectors_to_expand (Pin 18)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [cyclic_support](#output_0) |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |
|  **1**| [sector_meshes](#output_1) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### cyclic_support (Pin 0)

- **Expected type(s):** [`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support)



<a id="output_1"></a>
### sector_meshes (Pin 1)

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

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: cyclic_support_provider

 **Full name**: metadata.cyclic_support_provider

 **Internal name**: support_provider_cyclic

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("support_provider_cyclic"); // operator instantiation
op.connect(3, my_streams_container);
op.connect(4, my_data_sources);
op.connect(7, my_sector_meshed_region);
op.connect(15, my_expanded_meshed_region);
op.connect(18, my_sectors_to_expand);
ansys::dpf::CyclicSupport my_cyclic_support = op.getOutput<ansys::dpf::CyclicSupport>(0);
ansys::dpf::MeshesContainer my_sector_meshes = op.getOutput<ansys::dpf::MeshesContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.cyclic_support_provider() # operator instantiation
op.inputs.streams_container.connect(my_streams_container)
op.inputs.data_sources.connect(my_data_sources)
op.inputs.sector_meshed_region.connect(my_sector_meshed_region)
op.inputs.expanded_meshed_region.connect(my_expanded_meshed_region)
op.inputs.sectors_to_expand.connect(my_sectors_to_expand)
my_cyclic_support = op.outputs.cyclic_support()
my_sector_meshes = op.outputs.sector_meshes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.cyclic_support_provider() # operator instantiation
op.inputs.streams_container.Connect(my_streams_container)
op.inputs.data_sources.Connect(my_data_sources)
op.inputs.sector_meshed_region.Connect(my_sector_meshed_region)
op.inputs.expanded_meshed_region.Connect(my_expanded_meshed_region)
op.inputs.sectors_to_expand.Connect(my_sectors_to_expand)
my_cyclic_support = op.outputs.cyclic_support.GetData()
my_sector_meshes = op.outputs.sector_meshes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.