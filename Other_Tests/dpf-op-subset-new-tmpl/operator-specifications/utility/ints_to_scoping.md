# utility:convert to scoping

## Description

take a int or a vector of int and transform it in a one entity field of location "numeric".

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | int_or_vector_int |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes | int or vector of int |
| **Pin 1** | location |[`string`](../../getting-started/using-data-containers.md#string) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | ints_to_scoping | utility.ints_to_scoping | scopingify | None |
