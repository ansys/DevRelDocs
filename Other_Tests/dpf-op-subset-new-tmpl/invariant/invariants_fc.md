# invariant:scalar invariants (fields container)

## Description

Computes the element-wise invariants of all the tensor fields of a fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_int |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | stress intensity field |
| **Pin 1** | fields_eqv |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | stress equivalent intensity |
| **Pin 2** | fields_max_shear |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | max shear stress field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **invariant** | core | invariants_fc | invariant.invariants_fc | invariants_deriv_fc | None |
