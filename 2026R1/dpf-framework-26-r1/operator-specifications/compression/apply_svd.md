---
category: compression
plugin: N/A
license: any_dpf_supported_increments
---

# compression:apply svd

**Version: 0.0.0**

## Description

Computes the coefficients (=U*Sigma) and VT components from SVD.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field_contaner_to_compress](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [scalar_int](#input_1) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [scalar_double](#input_2) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [boolean](#input_3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field_contaner_to_compress (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with data to be compressed

<a id="input_1"></a>
### scalar_int (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of vectors (r) to keep for the future reconstraction of the matrix A, ex.A[m,n] = coef[m,r] * VT[r,n], where coef = U * Sigma

<a id="input_2"></a>
### scalar_double (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Threshold (precision) as a double (Default : 1e-7). If both pin1 and pin2 are provided, choose the min r-vectors

<a id="input_3"></a>
### boolean (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Apply SVD on the initial data (Default : false), otherwise use reduced data (square matrix with the smallest dimensions).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [us_svd](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [vt_svd](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [sigma](#output_2) |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### us_svd (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

The output entity is a fields container (time dependant); it contains the product of two matrices, U and S, where A=U.S.Vt

<a id="output_1"></a>
### vt_svd (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

The output entity is a field container (space dependant), containing the Vt, where A=U.S.Vt

<a id="output_2"></a>
### sigma (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

The output entity is a field (or a field container if input fc contains several labels, where field contains results per label), containing singular (S) values of the input data, where A=U.S.Vt


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0



### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: apply_svd

 **Full name**: compression.apply_svd

 **Internal name**: svd_operator

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("svd_operator"); // operator instantiation
op.connect(0, my_field_contaner_to_compress);
op.connect(1, my_scalar_int);
op.connect(2, my_scalar_double);
op.connect(3, my_boolean);
ansys::dpf::FieldsContainer my_us_svd = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_vt_svd = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::Field my_sigma = op.getOutput<ansys::dpf::Field>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.compression.apply_svd() # operator instantiation
op.inputs.field_contaner_to_compress.connect(my_field_contaner_to_compress)
op.inputs.scalar_int.connect(my_scalar_int)
op.inputs.scalar_double.connect(my_scalar_double)
op.inputs.boolean.connect(my_boolean)
my_us_svd = op.outputs.us_svd()
my_vt_svd = op.outputs.vt_svd()
my_sigma_as_field = op.outputs.sigma_as_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.compression.apply_svd() # operator instantiation
op.inputs.field_contaner_to_compress.Connect(my_field_contaner_to_compress)
op.inputs.scalar_int.Connect(my_scalar_int)
op.inputs.scalar_double.Connect(my_scalar_double)
op.inputs.boolean.Connect(my_boolean)
my_us_svd = op.outputs.us_svd.GetData()
my_vt_svd = op.outputs.vt_svd.GetData()
my_sigma = op.outputs.sigma.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.