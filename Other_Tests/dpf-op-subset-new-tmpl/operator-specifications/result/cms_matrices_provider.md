# result:cms matrices provider

## Description

Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | Data_sources (must contain at list one subfile). |
| **Pin 200** | matrix_form |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | If this pin i set to true, data are return as matrix form. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Fields container containing in this order : stiffness, damping, mass matrices, and then load vector. But if pin 200 is set to true, it's in matrix form. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | cms_matrices_provider | result.cms_matrices_provider | cms_matrices_provider | None |
