# compression:apply svd

## Description

Computes the coefficients (=U*Sigma) and VT components from SVD.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_contaner_to_compress |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | fields container to be compressed |
| **Pin 1** | scalar_int |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | number of vectors (r) to keep for the future reconstraction of the matrix A, ex. A[m,n]=coef[m,r]*VT[r,n], where coef=U*Sigma |
| **Pin 2** | scalar_double |[`double`](../getting-started/using-data-containers.md#double) | Yes | threshold (precision) as a double, default value is 1e-7 |
| **Pin 3** | boolean |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | apply svd on the initial input data (true) or transposed (square matrix), default value is false |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | us_svd |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | the output entity is a field container (time dependant); it contains the multiplication of two matrices, U and S, where A=U.S.Vt |
| **Pin 1** | vt_svd |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | the output entity is a field container (space dependant), containing the Vt, where A=U.S.Vt |
| **Pin 2** | sigma |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | the output entity is a field (or a field container if input fc contains several labels, where field contains results per label), containing singular (S) values of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **compression** | core | apply_svd | compression.apply_svd | svd_operator | any_dpf_supported_increments |
