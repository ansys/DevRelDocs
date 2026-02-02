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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_contaner_to_compress |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Fields container with data to be compressed |
| <strong>Pin 1</strong>|  scalar_int |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of vectors (r) to keep for the future reconstraction of the matrix A, ex.A[m,n] = coef[m,r] * VT[r,n], where coef = U * Sigma |
| <strong>Pin 2</strong>|  scalar_double |[`double`](../../core-concepts/dpf-types.md#standard-types) | Threshold (precision) as a double (Default : 1e-7). If both pin1 and pin2 are provided, choose the min r-vectors |
| <strong>Pin 3</strong>|  boolean |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Apply SVD on the initial data (Default : false), otherwise use reduced data (square matrix with the smallest dimensions). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| us_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The output entity is a fields container (time dependant); it contains the product of two matrices, U and S, where A=U.S.Vt |
|  **Pin 1**| vt_svd |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The output entity is a field container (space dependant), containing the Vt, where A=U.S.Vt |
|  **Pin 2**| sigma |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The output entity is a field (or a field container if input fc contains several labels, where field contains results per label), containing singular (S) values of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 |  |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: compression

 **Plugin**: N/A

 **Scripting name**: apply_svd

 **Full name**: compression.apply_svd

 **Internal name**: svd_operator

 **License**: any_dpf_supported_increments

## Examples

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