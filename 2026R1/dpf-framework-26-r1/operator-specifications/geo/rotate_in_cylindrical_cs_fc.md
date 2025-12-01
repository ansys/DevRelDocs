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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  coordinate_system |[`field`](../../core-concepts/dpf-types.md#field) | 3-3 rotation matrix and origin coordinates must be set here to define a coordinate system. |
| <strong>Pin 2</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh support of the input fields_container, in case it does not have one defined. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

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