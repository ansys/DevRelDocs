# min_max:min max by entity over time

## Description

Evaluates minimum, maximum over time/frequency and returns those min max as well as the time/freq where they occurred

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 3** | compute_absolute_value |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Calculate the absolute value of field entities before computing the min/max. |
| **Pin 4** | compute_amplitude |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Do calculate amplitude. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | min |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | max |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | time_freq_of_min |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 3** | time_freq_of_max |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin incremental** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range. |
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **min_max** | core | None | None | min_max_over_time_by_entity | None |
