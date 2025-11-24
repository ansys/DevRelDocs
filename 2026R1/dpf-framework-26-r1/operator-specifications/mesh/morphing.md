---
category: mesh
plugin: N/A
license: any_dpf_supported_increments
---

# mesh:morphing

**Version: 0.0.0**

## Description

Applies morphing on a meshed region depending on an input displacement field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  displacement |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | expects either a field or a fields container with one field |
| <strong>Pin 1</strong>|  disp_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh on which displacement are scoped |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh to morph |
| <strong>Pin 3</strong>|  in_place |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Apply in place morhing (the input mesh is changed instead of copied) (default is true) |
| <strong>Pin 4</strong>|  morphing_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | morphing algorithm to use (0=PrimeRBF, 1=BSpline, 2=TetLinear, 3=TetRBF, 4=FFI) (default is 0) |
| <strong>Pin 5</strong>|  morphing_manager_data | | Morphing Manager Data from prepare_morphing_operator (needed if disp_coordinates not specified). |
| <strong>Pin 6</strong>|  sliding_planes |[`field`](../../core-concepts/dpf-types.md#field) | Sliding planes |
| <strong>Pin 7</strong>|  sliding_nodes |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Sliding nodes |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | morphed mesh |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 1 |  |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: mesh

 **Plugin**: N/A

 **Scripting name**: morphing

 **Full name**: mesh.morphing

 **Internal name**: morphing

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("morphing"); // operator instantiation
op.connect(0, my_displacement);
op.connect(1, my_disp_mesh);
op.connect(2, my_mesh);
op.connect(3, my_in_place);
op.connect(4, my_morphing_type);
op.connect(5, my_morphing_manager_data);
op.connect(6, my_sliding_planes);
op.connect(7, my_sliding_nodes);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.morphing() # operator instantiation
op.inputs.displacement.connect(my_displacement)
op.inputs.disp_mesh.connect(my_disp_mesh)
op.inputs.mesh.connect(my_mesh)
op.inputs.in_place.connect(my_in_place)
op.inputs.morphing_type.connect(my_morphing_type)
op.inputs.morphing_manager_data.connect(my_morphing_manager_data)
op.inputs.sliding_planes.connect(my_sliding_planes)
op.inputs.sliding_nodes.connect(my_sliding_nodes)
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.morphing() # operator instantiation
op.inputs.displacement.Connect(my_displacement)
op.inputs.disp_mesh.Connect(my_disp_mesh)
op.inputs.mesh.Connect(my_mesh)
op.inputs.in_place.Connect(my_in_place)
op.inputs.morphing_type.Connect(my_morphing_type)
op.inputs.morphing_manager_data.Connect(my_morphing_manager_data)
op.inputs.sliding_planes.Connect(my_sliding_planes)
op.inputs.sliding_nodes.Connect(my_sliding_nodes)
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.