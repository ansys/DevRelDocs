# invariant:principal invariants (field)

## Description

Computes the element-wise Eigen values of a tensor field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_eig_1 |[`field`](../../getting-started/using-data-containers.md#field) | Yes | first eigen value field |
| **Pin 1** | field_eig_2 |[`field`](../../getting-started/using-data-containers.md#field) | Yes | second eigen value field |
| **Pin 2** | field_eig_3 |[`field`](../../getting-started/using-data-containers.md#field) | Yes | third eigen value field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **invariant** | core | principal_invariants | invariant.principal_invariants | invariants | None |
