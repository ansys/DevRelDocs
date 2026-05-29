---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:gauss to node (field)

**Version: 0.0.0**

## Description

Extrapolating results available at Gauss or quadrature points to nodal points for one field. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/operator-specifications/geo/gauss_to_node) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [scoping](/docs/dpf/dpf-framework/operator-specifications/geo/gauss_to_node) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/operator-specifications/geo/gauss_to_node) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Scoping to integrate on, if not provided, the one from input field is provided.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Mesh to integrate on.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/operator-specifications/geo/gauss_to_node) |[`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: geo

 **Plugin**: core

 **Scripting name**: gauss_to_node

 **Full name**: geo.gauss_to_node

 **Internal name**: gauss_to_node

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("gauss_to_node"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_scoping);
op.connect(7, my_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.gauss_to_node() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.scoping.connect(my_scoping)
op.inputs.mesh.connect(my_mesh)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.gauss_to_node() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.scoping.Connect(my_scoping)
op.inputs.mesh.Connect(my_mesh)
my_field = op.outputs.field.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.