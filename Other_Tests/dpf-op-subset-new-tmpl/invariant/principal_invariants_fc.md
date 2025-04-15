# invariant:principal invariants (fields container)

## Description

Computes the element-wise Eigen values of all the tensor fields of a fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_eig_1 |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | first eigen value fields |
| **Pin 1** | fields_eig_2 |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | second eigen value fields |
| **Pin 2** | fields_eig_3 |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | third eigen value fields |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **invariant** | core | principal_invariants_fc | invariant.principal_invariants_fc | invariants_fc | None |
