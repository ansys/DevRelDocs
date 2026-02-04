---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:max over phase

**Version: 0.0.0**

## Description

Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  real_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong>|  abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Should use absolute value. |
| <strong>Pin 3</strong>|  phase_increment |[`double`](../../core-concepts/dpf-types.md#standard-types) | Phase increment (default is 10.0 degrees). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: max_over_phase

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("max_over_phase"); // operator instantiation
op.connect(0, my_real_field);
op.connect(1, my_imaginary_field);
op.connect(2, my_abs_value);
op.connect(3, my_phase_increment);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.real_field.connect(my_real_field)
op.inputs.imaginary_field.connect(my_imaginary_field)
op.inputs.abs_value.connect(my_abs_value)
op.inputs.phase_increment.connect(my_phase_increment)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.None() # operator instantiation
op.inputs.real_field.Connect(my_real_field)
op.inputs.imaginary_field.Connect(my_imaginary_field)
op.inputs.abs_value.Connect(my_abs_value)
op.inputs.phase_increment.Connect(my_phase_increment)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.