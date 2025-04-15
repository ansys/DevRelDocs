# math:svd

## Description

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | fields_container |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | s_svd |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Singular values of the input data, where A=U.S.Vt |
| **Pin 1** | u_svd |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | U of the input data, where A=U.S.Vt |
| **Pin 2** | vt_svd |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Vt of the input data, where A=U.S.Vt |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | svd | math.svd | svdOp | any_dpf_supported_increments |
