---
category: mesh
plugin: mesh
license: None
---

# mesh:decimate mesh

**Version: 0.0.0**

## Description

Decimate a meshed region

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh to decimate |
| <strong>Pin 1</strong>|  preservation_ratio |[`double`](../../core-concepts/dpf-types.md#standard-types) | Target ratio of elements to preserve, the actual number of elements preserved might differ. Default value is 0.5. |
| <strong>Pin 2</strong>|  aggressiveness |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Quality measure for the resulting decimated mesh. Lower aggresiveness will provide a higher quality mesh with the tradeoff of higher execution time. Value range is 0 to 150, default is 0. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Decimated mesh with triangle elements |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: mesh

 **Scripting name**: None

 **Full name**: None

 **Internal name**: decimate_mesh

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("decimate_mesh"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_preservation_ratio);
op.connect(2, my_aggressiveness);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.preservation_ratio.connect(my_preservation_ratio)
op.inputs.aggressiveness.connect(my_aggressiveness)
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.preservation_ratio.Connect(my_preservation_ratio)
op.inputs.aggressiveness.Connect(my_aggressiveness)
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.