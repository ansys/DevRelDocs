---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:equivalent radiated power

**Version: 0.0.0**

## Description

Compute the Equivalent Radiated Power (ERP)

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [mesh](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |
| <strong>2</strong> | [time_scoping](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>3</strong> | [mass_density](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [speed_of_sound](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong> | [erp_type](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [boolean](#input_6) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [factor](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

the input field container expects displacements fields

<a id="input_1"></a>
### mesh (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)

the mesh region in this pin has to be boundary or skin mesh

<a id="input_2"></a>
### time_scoping (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping)

load step number (if it's specified, the ERP is computed only on the substeps of this step) or time scoping

<a id="input_3"></a>
### mass_density (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

mass density (if it's not specified, default value of the air is applied).

<a id="input_4"></a>
### speed_of_sound (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

speed of sound (if it's not specified, default value of the speed of sound in the air is applied).

<a id="input_5"></a>
### erp_type (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

if this pin is set to 0, the classical ERP is computed, 1 the corrected ERP is computed (a mesh of one face has to be given in the pin 1) and 2 the enhanced ERP is computed. Default is 0.

<a id="input_6"></a>
### boolean (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

if this pin is set to true, the ERP level in dB is computed

<a id="input_7"></a>
### factor (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

erp reference value. Default is 1E-12


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: equivalent_radiated_power

 **Full name**: result.equivalent_radiated_power

 **Internal name**: ERP

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("ERP"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(2, my_time_scoping);
op.connect(3, my_mass_density);
op.connect(4, my_speed_of_sound);
op.connect(5, my_erp_type);
op.connect(6, my_boolean);
op.connect(7, my_factor);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.equivalent_radiated_power() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mass_density.connect(my_mass_density)
op.inputs.speed_of_sound.connect(my_speed_of_sound)
op.inputs.erp_type.connect(my_erp_type)
op.inputs.boolean.connect(my_boolean)
op.inputs.factor.connect(my_factor)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.equivalent_radiated_power() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mass_density.Connect(my_mass_density)
op.inputs.speed_of_sound.Connect(my_speed_of_sound)
op.inputs.erp_type.Connect(my_erp_type)
op.inputs.boolean.Connect(my_boolean)
op.inputs.factor.Connect(my_factor)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.