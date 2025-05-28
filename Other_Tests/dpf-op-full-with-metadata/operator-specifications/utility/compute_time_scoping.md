---
category: utility
plugin: core
license: None
---

# utility:compute time scoping

## Description

Computes the time frequency scoping (made of set IDs) necessary to interpolate on a list of time or frequencies.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_values |[`double`](../../getting-started/using-data-containers.md#double), [`vector<double>`](../../getting-started/using-data-containers.md#vector<double>), [`field`](../../getting-started/using-data-containers.md#field), [`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps". |
| <strong>Pin 2</strong>|  step |[`int32`](../../getting-started/using-data-containers.md#int32) |  |
| <strong>Pin 4</strong>|  interpolation_type |[`int32`](../../getting-started/using-data-containers.md#int32) | 1:ramped' or 2:stepped', default is ramped |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | time_scoping |
|  **Pin 1**| field |[`field`](../../getting-started/using-data-containers.md#field) | time_freq_values |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_time_scoping

 **License**: None
