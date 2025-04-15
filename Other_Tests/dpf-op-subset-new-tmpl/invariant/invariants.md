# invariant:scalar invariants (field)

## Description

Computes the element-wise invariants of a tensor field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_int |[`field`](../getting-started/using-data-containers.md#field) | Yes | stress intensity field |
| **Pin 1** | field_eqv |[`field`](../getting-started/using-data-containers.md#field) | Yes | stress equivalent intensity |
| **Pin 2** | field_max_shear |[`field`](../getting-started/using-data-containers.md#field) | Yes | max shear stress field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **invariant** | core | invariants | invariant.invariants | invariants_deriv | None |
