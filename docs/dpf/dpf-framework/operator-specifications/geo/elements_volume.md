---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:elements volume

**Version: 0.0.0**

## Description

Compute the measure of the Elements (volume for 3D elements, surface for 2D elements or length for 1D elements) using default shape functions, except for polyhedrons.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](/docs/dpf/dpf-framework/operator-specifications/geo/elements_volume) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/geo/elements_volume) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If not provided, the measure of all elements for the mesh is computed. If provided, the Scoping needs to have "Elemental" location.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/operator-specifications/geo/elements_volume) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: geo

 **Plugin**: core

 **Scripting name**: elements_volume

 **Full name**: geo.elements_volume

 **Internal name**: element::volume

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("element::volume"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_mesh_scoping);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.elements_volume() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.elements_volume() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.