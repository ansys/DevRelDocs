# invariant:eigen vectors (on field)

## Description

Computes the element-wise Eigen vectors for each tensor in the field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`fields_container`](../getting-started/using-data-containers.md#fields-container), [`field`](../getting-started/using-data-containers.md#field) | Yes | field or fields container with only one field is expected |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **invariant** | mapdl | eigen_vectors | invariant.eigen_vectors | eig_vectors | None |
