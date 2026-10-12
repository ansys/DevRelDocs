---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:rotate cylindrical coordinates

**Version: 0.0.0**

## Description

Rotates a field to its corresponding values into the specified cylindrical coordinate system (corresponding to the field position). If a coordinate system is not set in the coordinate_system pin, the field is rotated on each node following the local polar coordinate system.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [coordinate_system](#input_1) |  |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> | [mesh](#input_2) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container with only one field is expected

<a id="input_1"></a>
### coordinate_system (Pin 1)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

3-3 rotation matrix and origin coordinates must be set here to define a coordinate system.

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh support of the input field.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: geo

 **Plugin**: core

 **Scripting name**: rotate_in_cylindrical_cs

 **Full name**: geo.rotate_in_cylindrical_cs

 **Internal name**: transform_cylindricalCS

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transform_cylindricalCS"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_coordinate_system);
op.connect(2, my_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.rotate_in_cylindrical_cs() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.coordinate_system.connect(my_coordinate_system)
op.inputs.mesh.connect(my_mesh)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.rotate_in_cylindrical_cs() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.coordinate_system.Connect(my_coordinate_system)
op.inputs.mesh.Connect(my_mesh)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.