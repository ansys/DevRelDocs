---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft gradient evaluation

**Version: 0.0.0**

## Description

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | if specified only the results at these set ids are used |
| <strong>Pin 2</strong>|  fs_ratio |[`int32`](../../core-concepts/dpf-types.md#standard-types) | default value = 20 |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| coefficients |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_gradient_eval

 **Full name**: math.fft_gradient_eval

 **Internal name**: fft_eval_gr

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft_eval_gr"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_time_scoping);
op.connect(2, my_fs_ratio);
ansys::dpf::FieldsContainer my_coefficients = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.fft_gradient_eval() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.fs_ratio.connect(my_fs_ratio)
my_coefficients = op.outputs.coefficients()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.fft_gradient_eval() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.fs_ratio.Connect(my_fs_ratio)
my_coefficients = op.outputs.coefficients.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.