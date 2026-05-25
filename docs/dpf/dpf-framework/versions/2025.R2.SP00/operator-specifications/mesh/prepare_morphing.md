---
category: mesh
plugin: N/A
license: any_dpf_supported_increments
---

# mesh:prepare morphing

**Version: 0.0.0**

## Description

Prepare morphing on a meshed region depending on an input displacement field.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [displacement_scoping](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>1</strong> | [disp_mesh](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>2</strong> | [mesh](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_0"></a>
### displacement_scoping (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

expects either a scoping or a scopings container with one field

<a id="input_1"></a>
### disp_mesh (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

mesh on which displacement are scoped

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

mesh to morph


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [morphing_manager_data](#output_0) | |


<a id="output_0"></a>
### morphing_manager_data (Pin 0)

- **Expected type(s):** 

Morphing manager data (can be used as input of morphed_field or morphing operators.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: N/A

 **Scripting name**: prepare_morphing

 **Full name**: mesh.prepare_morphing

 **Internal name**: prepare_morphing

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("prepare_morphing"); // operator instantiation
op.connect(0, my_displacement_scoping);
op.connect(1, my_disp_mesh);
op.connect(2, my_mesh);
 my_morphing_manager_data = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.prepare_morphing() # operator instantiation
op.inputs.displacement_scoping.connect(my_displacement_scoping)
op.inputs.disp_mesh.connect(my_disp_mesh)
op.inputs.mesh.connect(my_mesh)
my_morphing_manager_data = op.outputs.morphing_manager_data()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.prepare_morphing() # operator instantiation
op.inputs.displacement_scoping.Connect(my_displacement_scoping)
op.inputs.disp_mesh.Connect(my_disp_mesh)
op.inputs.mesh.Connect(my_mesh)
my_morphing_manager_data = op.outputs.morphing_manager_data.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.