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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>7</strong> | [sector_meshed_region](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/metadata/cyclic_mesh_expansion) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>16</strong> | [cyclic_support](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/metadata/cyclic_mesh_expansion) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`cyclic_support`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>18</strong> | [sectors_to_expand](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/metadata/cyclic_mesh_expansion) |  |[`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_7"></a>
### sector_meshed_region (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`meshes_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_16"></a>
### cyclic_support (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`cyclic_support`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="input_18"></a>
### sectors_to_expand (Pin 18)

- **Required:** No
- **Expected type(s):** [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshed_region](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/metadata/cyclic_mesh_expansion) |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [cyclic_support](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/metadata/cyclic_mesh_expansion) |[`cyclic_support`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### meshed_region (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

expanded meshed region.

<a id="output_1"></a>
### cyclic_support (Pin 1)

- **Expected type(s):** [`cyclic_support`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

input cyclic support modified in place containing the new expanded meshed regions.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: cyclic_mesh_expansion

 **Full name**: metadata.cyclic_mesh_expansion

 **Internal name**: cyclic_expansion_mesh

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.