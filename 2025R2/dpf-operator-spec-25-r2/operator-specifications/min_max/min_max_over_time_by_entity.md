---
category: min_max
plugin: core
license: None
Version: 0.0.0
---

# min_max:min max by entity over time

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Evaluates minimum, maximum over time/frequency and returns those min max as well as the time/freq where they occurred


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 3</strong>|  compute_absolute_value |[`bool`](./../../getting-started/using-data-containers.md#bool) | Calculate the absolute value of field entities before computing the min/max. |
| <strong>Pin 4</strong>|  compute_amplitude |[`bool`](./../../getting-started/using-data-containers.md#bool) | Do calculate amplitude. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| min |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 1**| max |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 2**| time_freq_of_min |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 3**| time_freq_of_max |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **incremental** |[`bool`](./../../getting-started/using-data-containers.md#bool) | true | This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range. |
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_over_time_by_entity

 **License**: None
 
