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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [displacement](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>1</strong> | [disp_mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>2</strong> | [mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>3</strong> | [in_place](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>4</strong> | [morphing_type](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>5</strong> | [morphing_manager_data](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  | |
| <strong>6</strong> | [sliding_planes](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>7</strong> | [sliding_nodes](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |  |[`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### displacement (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

expects either a field or a fields container with one field

<a id="input_1"></a>
### disp_mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

mesh on which displacement are scoped

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

mesh to morph

<a id="input_3"></a>
### in_place (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Apply in place morhing (the input mesh is changed instead of copied) (default is true)

<a id="input_4"></a>
### morphing_type (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

morphing algorithm to use (0=PrimeRBF, 1=BSpline, 2=TetLinear, 3=TetRBF, 4=FFI) (default is 0)

<a id="input_5"></a>
### morphing_manager_data (Pin 5)

- **Required:** No
- **Expected type(s):** 

Morphing Manager Data from prepare_morphing_operator (needed if disp_coordinates not specified).

<a id="input_6"></a>
### sliding_planes (Pin 6)

- **Required:** No
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Sliding planes

<a id="input_7"></a>
### sliding_nodes (Pin 7)

- **Required:** No
- **Expected type(s):** [`scopings_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Sliding nodes


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/morphing) |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

morphed mesh


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** 1



### [run_in_parallel](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: N/A

 **Scripting name**: morphing

 **Full name**: mesh.morphing

 **Internal name**: morphing

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.