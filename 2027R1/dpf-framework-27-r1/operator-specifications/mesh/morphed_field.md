---
category: mesh
plugin: N/A
license: any_dpf_supported_increments
---

# mesh:morphed field

**Version: 0.0.0**

## Description

Computes the displacement to apply on input coordinates (in 2) if a morphing field (in 0) is applied on coordinates (in 1)

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [displacement](#input_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong>|  [disp_coordinates](#input_1) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [coordinates](#input_2) |[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>4</strong>|  [morphing_type](#input_4) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong>|  [morphing_manager_data](#input_5) | |
| <strong>6</strong>|  [sliding_planes](#input_6) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>7</strong>|  [sliding_nodes](#input_7) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_0"></a>
### displacement (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

expects either a field or a fields container with one field

<a id="input_1"></a>
### disp_coordinates (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

coordinates on which the displacement field are applied

<a id="input_2"></a>
### coordinates (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

coordinates to evaluate

<a id="input_4"></a>
### morphing_type (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

morphing algorithm to use (0=PrimeRBF, 1=BSpline, 2=TetLinear, 3=TetRBF, 4=FFI) (default is 0)

<a id="input_5"></a>
### morphing_manager_data (Pin 5)

- **Required:** No
- **Expected type(s):** 

Morphing Manager Data from prepare_morphing_operator (needed if disp_coordinates not specified).

<a id="input_6"></a>
### sliding_planes (Pin 6)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Sliding planes

<a id="input_7"></a>
### sliding_nodes (Pin 7)

- **Required:** No
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

Sliding nodes


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [coordinates_displacement](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### coordinates_displacement (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

displacement of each point of the input coordinates


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 1



### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: mesh

 **Plugin**: N/A

 **Scripting name**: morphed_field

 **Full name**: mesh.morphed_field

 **Internal name**: morphed_field

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("morphed_field"); // operator instantiation
op.connect(0, my_displacement);
op.connect(1, my_disp_coordinates);
op.connect(2, my_coordinates);
op.connect(4, my_morphing_type);
op.connect(5, my_morphing_manager_data);
op.connect(6, my_sliding_planes);
op.connect(7, my_sliding_nodes);
ansys::dpf::Field my_coordinates_displacement = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.morphed_field() # operator instantiation
op.inputs.displacement.connect(my_displacement)
op.inputs.disp_coordinates.connect(my_disp_coordinates)
op.inputs.coordinates.connect(my_coordinates)
op.inputs.morphing_type.connect(my_morphing_type)
op.inputs.morphing_manager_data.connect(my_morphing_manager_data)
op.inputs.sliding_planes.connect(my_sliding_planes)
op.inputs.sliding_nodes.connect(my_sliding_nodes)
my_coordinates_displacement = op.outputs.coordinates_displacement()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.morphed_field() # operator instantiation
op.inputs.displacement.Connect(my_displacement)
op.inputs.disp_coordinates.Connect(my_disp_coordinates)
op.inputs.coordinates.Connect(my_coordinates)
op.inputs.morphing_type.Connect(my_morphing_type)
op.inputs.morphing_manager_data.Connect(my_morphing_manager_data)
op.inputs.sliding_planes.Connect(my_sliding_planes)
op.inputs.sliding_nodes.Connect(my_sliding_nodes)
my_coordinates_displacement = op.outputs.coordinates_displacement.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.