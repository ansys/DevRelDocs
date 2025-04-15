# filter:high pass (timefreq)

## Description

The high pass filter returns all the values above (but not equal to) the threshold value in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes |  |
| **Pin 1** | threshold |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field) | Yes | A threshold scalar or a field containing one value is expected. |
| **Pin 2** | both |[`bool`](../../getting-started/using-data-containers.md#bool) | No | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes |  |
| **Pin 1** | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **filter** | core | timefreq_high_pass | filter.timefreq_high_pass | core::timefreq::high_pass | any_dpf_supported_increments |
