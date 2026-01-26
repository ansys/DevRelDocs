---
category: metadata
plugin: core
license: None
---

# metadata:cyclic mesh expansion

**Version: 0.0.0**

## Description

Expand the mesh.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>7</strong>|  [sector_meshed_region](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>16</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [cyclic_support](#input_16) |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |
| <strong>18</strong>|  [sectors_to_expand](#input_18) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_7"></a>
### sector_meshed_region (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)



<a id="input_16"></a>
### cyclic_support (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support)



<a id="input_18"></a>
### sectors_to_expand (Pin 18)

- **Required:** No
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshed_region](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
|  **1**| [cyclic_support](#output_1) |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |


<a id="output_0"></a>
### meshed_region (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

expanded meshed region.

<a id="output_1"></a>
### cyclic_support (Pin 1)

- **Expected type(s):** [`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support)

input cyclic support modified in place containing the new expanded meshed regions.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: cyclic_mesh_expansion

 **Full name**: metadata.cyclic_mesh_expansion

 **Internal name**: cyclic_expansion_mesh

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cyclic_expansion_mesh"); // operator instantiation
op.connect(7, my_sector_meshed_region);
op.connect(16, my_cyclic_support);
op.connect(18, my_sectors_to_expand);
ansys::dpf::MeshedRegion my_meshed_region = op.getOutput<ansys::dpf::MeshedRegion>(0);
ansys::dpf::CyclicSupport my_cyclic_support = op.getOutput<ansys::dpf::CyclicSupport>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.metadata.cyclic_mesh_expansion() # operator instantiation
op.inputs.sector_meshed_region.connect(my_sector_meshed_region)
op.inputs.cyclic_support.connect(my_cyclic_support)
op.inputs.sectors_to_expand.connect(my_sectors_to_expand)
my_meshed_region = op.outputs.meshed_region()
my_cyclic_support = op.outputs.cyclic_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.metadata.cyclic_mesh_expansion() # operator instantiation
op.inputs.sector_meshed_region.Connect(my_sector_meshed_region)
op.inputs.cyclic_support.Connect(my_cyclic_support)
op.inputs.sectors_to_expand.Connect(my_sectors_to_expand)
my_meshed_region = op.outputs.meshed_region.GetData()
my_cyclic_support = op.outputs.cyclic_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.