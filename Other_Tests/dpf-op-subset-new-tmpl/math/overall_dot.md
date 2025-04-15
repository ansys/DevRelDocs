# math:overall dot

## Description

Computes a dot product between two fields (fields are seen like a single large vector) and returns a scalar.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fieldA |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | fieldB |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Field defined on over-all location, contains a unique scalar value |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | overall_dot | math.overall_dot | native::overall_dot | None |
