---
category: math
plugin: core
license: None
---

# math:sweeping phase (fields container)

**Version: 0.0.0**

## Description

Shifts the phase of all the corresponding real and imaginary fields of a fields container for a given angle (in 2) of a unit (in 4). An output field is computed for each pair of real and imaginary fields in the input fields_container as field_out = real_field`*`cos(angle) - imaginary_field`*`sin(angle).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  angle |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 3</strong>|  unit_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | String Unit. Supported values: "deg" or "rad". Default: "rad". |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sweeping_phase_fc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("sweeping_phase_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(2, my_angle);
op.connect(3, my_unit_name);
op.connect(4, my_abs_value);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.angle.connect(my_angle)
op.inputs.unit_name.connect(my_unit_name)
op.inputs.abs_value.connect(my_abs_value)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.angle.Connect(my_angle)
op.inputs.unit_name.Connect(my_unit_name)
op.inputs.abs_value.Connect(my_abs_value)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.