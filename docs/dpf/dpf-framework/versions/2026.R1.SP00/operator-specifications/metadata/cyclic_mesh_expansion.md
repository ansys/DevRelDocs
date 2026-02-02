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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong>|  sector_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) |  |
| <strong>Pin 18</strong>|  sectors_to_expand |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | expanded meshed region. |
|  **Pin 1**| cyclic_support |[`cyclic_support`](../../core-concepts/dpf-types.md#cyclic-support) | input cyclic support modified in place containing the new expanded meshed regions. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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