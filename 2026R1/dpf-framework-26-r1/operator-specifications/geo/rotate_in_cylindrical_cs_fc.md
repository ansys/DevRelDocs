---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:rotate in cylindrical coordinates (fields container)

**Version: 0.0.0**

## Description

Rotates all the fields of a fields container (not defined with a cynlindrical coordinate system) to its corresponding values into the specified cylindrical coordinate system (corresponding to the field position). If a coordinate system is not set in the coordinate_system pin, the field is rotated on each node following the local polar coordinate system.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field](#input_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong>|  [coordinate_system](#input_1) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong>|  [mesh](#input_2) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### coordinate_system (Pin 1)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

3-3 rotation matrix and origin coordinates must be set here to define a coordinate system.

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh support of the input fields_container, in case it does not have one defined.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### num_threads

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### run_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: rotate_in_cylindrical_cs_fc

 **Full name**: geo.rotate_in_cylindrical_cs_fc

 **Internal name**: transform_cylindrical_cs_fc

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transform_cylindrical_cs_fc"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_coordinate_system);
op.connect(2, my_mesh);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.rotate_in_cylindrical_cs_fc() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.coordinate_system.connect(my_coordinate_system)
op.inputs.mesh.connect(my_mesh)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.rotate_in_cylindrical_cs_fc() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.coordinate_system.Connect(my_coordinate_system)
op.inputs.mesh.Connect(my_mesh)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.