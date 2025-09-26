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


## Changelog

- Version 0.0.0: Initial release.