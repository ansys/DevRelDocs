# utility:merge time freq supports

## Description

Assembles a set of time/frequency supports into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_supports |[`vector<shared_ptr<time_freq_support>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<time-freq-support>>), [`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes | A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_time_freq_supports | utility.merge_time_freq_supports | merge::time_freq_support | None |
