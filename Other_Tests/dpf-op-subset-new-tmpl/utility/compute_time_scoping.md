# utility:compute time scoping

## Description

Computes the time frequency scoping (made of set IDs) necessary to interpolate on a list of time or frequencies.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_values |[`double`](../getting-started/using-data-containers.md#double), [`vector<double>`](../getting-started/using-data-containers.md#vector<double>), [`field`](../getting-started/using-data-containers.md#field), [`time_freq_support`](../getting-started/using-data-containers.md#time-freq-support) | Yes | List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps". |
| **Pin 2** | step |[`int32`](../getting-started/using-data-containers.md#int32) | No |  |
| **Pin 4** | interpolation_type |[`int32`](../getting-started/using-data-containers.md#int32) | No | 1:ramped' or 2:stepped', default is ramped |
| **Pin 8** | time_freq_support |[`time_freq_support`](../getting-started/using-data-containers.md#time-freq-support) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes | time_scoping |
| **Pin 1** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes | time_freq_values |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | None | None | compute_time_scoping | None |
