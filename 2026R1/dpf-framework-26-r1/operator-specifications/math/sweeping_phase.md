---
category: math
plugin: core
license: None
---

# math:sweeping phase

**Version: 0.0.0**

## Description

Shifts the phase of a real and an imaginary field (in 0 and 1) of a given angle (in 3) of a unit (in 4). The resulting field is computed as field_out = real_field`*`cos(angle) - imaginary_field`*`sin(angle).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  real_field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  angle |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 3</strong>|  unit_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | String Unit. Supported values: "deg" or "rad". Default: "rad". |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_part_null |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If the imaginary part field is empty and this pin is true, then the imaginary part is supposed to be 0 (default is false). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sweeping_phase

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("sweeping_phase"); // operator instantiation
op.connect(0, my_real_field);
op.connect(1, my_imaginary_field);
op.connect(2, my_angle);
op.connect(3, my_unit_name);
op.connect(4, my_abs_value);
op.connect(5, my_imaginary_part_null);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.real_field.connect(my_real_field)
op.inputs.imaginary_field.connect(my_imaginary_field)
op.inputs.angle.connect(my_angle)
op.inputs.unit_name.connect(my_unit_name)
op.inputs.abs_value.connect(my_abs_value)
op.inputs.imaginary_part_null.connect(my_imaginary_part_null)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.real_field.Connect(my_real_field)
op.inputs.imaginary_field.Connect(my_imaginary_field)
op.inputs.angle.Connect(my_angle)
op.inputs.unit_name.Connect(my_unit_name)
op.inputs.abs_value.Connect(my_abs_value)
op.inputs.imaginary_part_null.Connect(my_imaginary_part_null)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.