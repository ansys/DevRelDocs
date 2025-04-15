# result:recombine cyclic harmonic indices

## Description

Add the fields corresponding to different load steps with the same frequencies to compute the response.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |
| **Pin use_cache** |[`bool`](../getting-started/using-data-containers.md#bool) | true | Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run. |
| **Pin work_by_index** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, loops and comparisons by entity will be done by index instead of ids. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | recombine_harmonic_indeces_cyclic | result.recombine_harmonic_indeces_cyclic | recombine_harmonic_indeces_cyclic | None |
