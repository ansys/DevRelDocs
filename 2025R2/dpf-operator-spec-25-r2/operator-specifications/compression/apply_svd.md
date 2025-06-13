---
category: compression
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# compression:apply svd

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the coefficients (=U*Sigma) and VT components from SVD.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_contaner_to_compress |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | fields container to be compressed |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scalar_int |[`int32`](./../../getting-started/using-data-containers.md#int32) | number of vectors (r) to keep for the future reconstraction of the matrix A, ex. A[m,n]=coef[m,r]*VT[r,n], where coef=U*Sigma |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scalar_double |[`double`](./../../getting-started/using-data-containers.md#double) | threshold (precision) as a double, default value is 1e-7 |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  boolean |[`bool`](./../../getting-started/using-data-containers.md#bool) | apply svd on the initial input data (true) or transposed (square matrix), default value is false |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| us_svd |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | the output entity is a field container (time dependant); it contains the multiplication of two matrices, U and S, where A=U.S.Vt |
|  **Pin 1**| vt_svd |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | the output entity is a field container (space dependant), containing the Vt, where A=U.S.Vt |
|  **Pin 2**| sigma |[`field`](./../../getting-started/using-data-containers.md#field), [`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | the output entity is a field (or a field container if input fc contains several labels, where field contains results per label), containing singular (S) values of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](./../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: compression

 **Plugin**: core

 **Scripting name**: apply_svd

 **Full name**: compression.apply_svd

 **Internal name**: svd_operator

 **License**: any_dpf_supported_increments
 
