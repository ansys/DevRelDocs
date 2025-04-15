# result:cyclic analytic stress eqv max

## Description

Compute the maximum of the Von Mises equivalent stress that can be expected on 360 degrees

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | No |  |
| **Pin 1** | mesh_scoping |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container), [`scoping`](../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | No |  |
| **Pin 2** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field container with the base and duplicate sectors |
| **Pin 5** | bool_rotate_to_global |[`bool`](../getting-started/using-data-containers.md#bool) | No | default is true |
| **Pin 16** | cyclic_support |[`cyclic_support`](../getting-started/using-data-containers.md#cyclic-support) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | FieldsContainer filled in |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **Pin use_cache** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | cyclic_analytic_seqv_max | result.cyclic_analytic_seqv_max | cyclic_analytic_stress_eqv_max | None |
