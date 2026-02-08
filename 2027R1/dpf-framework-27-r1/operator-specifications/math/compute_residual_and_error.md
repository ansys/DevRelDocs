---
category: math
plugin: core
license: None
---

# math:compute residual and error

**Version: 0.0.0**

## Description

Computes the $L_p$ norm of a normalized field or a field container.
When a second entry is provided, the calculation is done on the residual (the difference between the first and second entry).
When a second entry is not provided, the calculation is only completed for the first entry.

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

Field or fields container to be normalized (\\(FC_1\\))

<a id="input_1"></a>
### normalization_type (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Type of normalization applied to the residual and the norm (\\(norm\\)) :
- 0 for absolute (default)
- 1 for relative to the first entry
- 2 for normalized by the max of each field of the reference field
- 3 for normalized by the max over all fields of the reference field
			

<a id="input_2"></a>
### norm_calculation_type (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Type for norm calculation (\\(p\\)) :
- 1 for \\( L_1 \\) norm
- 2 for \\( L_2 \\) norm (default)
			

<a id="input_3"></a>
### field_reference (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Reference for the normalization step (\\(r\\)) :
- 0 for pin 0 (default)
- 1 for residual
\\[ ref = \begin{cases} FC_1 &\text{ if } r = 0 \\\\ Res &\text{ if } r = 1 \end{cases} \\]
			

<a id="input_4"></a>
### field_or_fields_container2 (Pin 4)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Field or fields container of the exact same dimensions as pin 0 to be used for residual computation  (\\(FC_2\\))
\\[ Res = \begin{cases} FC_1 - FC_2 &\text{ if } FC_2 \\\\ FC_1 &\text{ if not } FC_2 \end{cases} \\]
			


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [residual](#output_0) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [error](#output_1) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [residual_normalization_factor](#output_2) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **3**| [error_normalization_factor](#output_3) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### residual (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Normalized residual :
For each field of the input fields container, for \\(norm \in \\{0, 1, 2, 3\\}\\) : \\[ \overline{Res} = \frac{Res}{k_{Res}} \\]
			

<a id="output_1"></a>
### error (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Normalized error :
For each field of the input fields container, for \\(norm \in \\{0, 1, 2, 3\\}\\) : \\[ \overline{Err} = \frac{\\|Res\\|\_{L\_p}}{k_{Err}} \\]
			

<a id="output_2"></a>
### residual_normalization_factor (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Residual scaling factor :
- \\(norm = 0\\) : \\[ k_{Res} = 1 \\]
- \\(norm = 1\\) : \\[ k_{Res} = |ref| \\]
- \\(norm = 2\\) : \\[ k_{Res} = \underset{i\in\{1,\ldots,n_{entity}\}}{\max}\left(|ref_i|\right) \\]
- \\(norm = 3\\) : \\[ k_{Res} = \underset{i\in\{1,\ldots,n_{comp}\}}{\max}\left(\underset{j\in\{1,\ldots,n_{entity}\}}{\max}\left(|ref_{ij}|\right)\right) \\]
			

<a id="output_3"></a>
### error_normalization_factor (Pin 3)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Error scaling factor :
- \\(norm = 0\\) : \\[ k_{Err} = 1 \\]
- \\(norm = 1\\) : \\[ k_{Err} = \\|ref\\|_{L_p} \\]
- \\(norm = 2\\) : \\[ k_{Err} = \underset{i\in\{1,\ldots,n_{entity}\}}{\max}\left(\\|ref_i\\|_{L_p}\right) \\]
- \\(norm = 3\\) : \\[ k_{Err} = \underset{i\in\{1,\ldots,n_{comp}\}}{\max}\left(\underset{j\in\{1,\ldots,n_{entity}\}}{\max}\left(\\|ref_{ij}\\|_{L_p}\right)\right) \\]
			


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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
ansys::dpf::Field my_residual = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_error = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_residual_normalization_factor = op.getOutput<ansys::dpf::Field>(2);
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
my_residual_as_field = op.outputs.residual_as_field()
my_error_as_field = op.outputs.error_as_field()
my_residual_normalization_factor_as_field = op.outputs.residual_normalization_factor_as_field()
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
my_residual = op.outputs.residual.GetData()
my_error = op.outputs.error.GetData()
my_residual_normalization_factor = op.outputs.residual_normalization_factor.GetData()
my_error_normalization_factor = op.outputs.error_normalization_factor.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.