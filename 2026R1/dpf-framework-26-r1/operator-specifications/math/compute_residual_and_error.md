---
category: math
plugin: core
license: None
---

# math:compute residual and error

**Version: 0.0.0**

## Description

Computes the Lp-norm of a field or a field container.
													When a second entry is provided, the residual (the difference between the first and second entry) is calculated along with the error as the Lp-norm of the difference. 
													When a second input is not provided, the calculation is only completed for the first entry.
													The type of calculation performed is based on the specifications provided for pin 1, pin 2 defines the type of error norm (L1 vs L2), and
													pin 3 which entity to use as a reference

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field_or_fields_container1](#input_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong>|  [normalization_type](#input_1) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong>|  [norm_calculation_type](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [field_reference](#input_3) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong>|  [field_or_fields_container2](#input_4) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### field_or_fields_container1 (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container - compulsory

<a id="input_1"></a>
### normalization_type (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

type of normalization applied to the residuals and norm  calculation (optional, defaut: absolute): 
														0 for absolute, 
														1 for relative to the first entry, 
														2 for normalized by the max of each field of the first entry or residuals depending on the reference field option, 
														3 for normalized by the max over all fields of the first entry or residuals depending on the reference field option

<a id="input_2"></a>
### norm_calculation_type (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

type for norm calculation (optional, default: L2) - It is normalized depending on Pin2 selection
														1 for L1, ie sum(abs(xi)), 
														2 for L2, ie sqrt(sum((xi^2))

<a id="input_3"></a>
### field_reference (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Field reference for the normalization step, default: 0 for entry 1, 1 for residuals - optional

<a id="input_4"></a>
### field_or_fields_container2 (Pin 4)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container of same dimensionality as entry 1 - optional


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [residuals](#output_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [error](#output_1) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [residuals_normalization_factor](#output_2) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **3**| [error_normalization_factor](#output_3) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### residuals (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

0: normalized residuals (aka field 1 - field 2) as a field or field container, normalized depending on the normalization type

<a id="output_1"></a>
### error (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

1: error as a field or a field container depending on the entry's type.

<a id="output_2"></a>
### residuals_normalization_factor (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

2: factor used for residual normalization

<a id="output_3"></a>
### error_normalization_factor (Pin 3)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

3: factor used for error norm normalization


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### permissive

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

If this option is set to true, warning checks (like unit or data sizes) won't be done.



## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: compute_residual_and_error

 **Full name**: math.compute_residual_and_error

 **Internal name**: error_norm_calc

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("error_norm_calc"); // operator instantiation
op.connect(0, my_field_or_fields_container1);
op.connect(1, my_normalization_type);
op.connect(2, my_norm_calculation_type);
op.connect(3, my_field_reference);
op.connect(4, my_field_or_fields_container2);
ansys::dpf::Field my_residuals = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_error = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_residuals_normalization_factor = op.getOutput<ansys::dpf::Field>(2);
ansys::dpf::Field my_error_normalization_factor = op.getOutput<ansys::dpf::Field>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.compute_residual_and_error() # operator instantiation
op.inputs.field_or_fields_container1.connect(my_field_or_fields_container1)
op.inputs.normalization_type.connect(my_normalization_type)
op.inputs.norm_calculation_type.connect(my_norm_calculation_type)
op.inputs.field_reference.connect(my_field_reference)
op.inputs.field_or_fields_container2.connect(my_field_or_fields_container2)
my_residuals_as_field = op.outputs.residuals_as_field()
my_error_as_field = op.outputs.error_as_field()
my_residuals_normalization_factor_as_field = op.outputs.residuals_normalization_factor_as_field()
my_error_normalization_factor_as_field = op.outputs.error_normalization_factor_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.compute_residual_and_error() # operator instantiation
op.inputs.field_or_fields_container1.Connect(my_field_or_fields_container1)
op.inputs.normalization_type.Connect(my_normalization_type)
op.inputs.norm_calculation_type.Connect(my_norm_calculation_type)
op.inputs.field_reference.Connect(my_field_reference)
op.inputs.field_or_fields_container2.Connect(my_field_or_fields_container2)
my_residuals = op.outputs.residuals.GetData()
my_error = op.outputs.error.GetData()
my_residuals_normalization_factor = op.outputs.residuals_normalization_factor.GetData()
my_error_normalization_factor = op.outputs.error_normalization_factor.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.