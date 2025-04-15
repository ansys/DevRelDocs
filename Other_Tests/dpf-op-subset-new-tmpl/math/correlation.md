# math:correlation

## Description

Takes two fields and a weighting and computes their correlation: aMb/(||aMa||.||bMb||). If several b fields are provided (via a fields container), correlation is computed for each of them.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fieldA |[`field`](../getting-started/using-data-containers.md#field), [`double`](../getting-started/using-data-containers.md#double), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>) | Yes | Field a. The reference field. |
| **Pin 1** | fieldB |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Field b. If a fields container is provided, correlation is computed for each field. |
| **Pin 2** | ponderation |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Field M, optional weighting for correclation computation. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Correlation factor for each input field b. |
| **Pin 1** | index |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | If several b are provided, this output contains the index of the highest correlation factor. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | correlation | math.correlation | correlation | any_dpf_supported_increments |
