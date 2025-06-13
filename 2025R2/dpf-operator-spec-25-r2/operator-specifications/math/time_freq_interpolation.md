---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:time freq interpolation

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Interpolates between all the matching fields of a fields container at given times or frequencies, using ramped: fieldOut = field1*(1.-fact)+field2*(fact), or stepped: fieldOut=field2. If the time freq is higher than the max available, the field at the max time freq is taken. Computes the output time freq support to support the fields container


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_values |[`double`](./../../getting-started/using-data-containers.md#double), [`vector<double>`](./../../getting-started/using-data-containers.md#vector<double>), [`field`](./../../getting-started/using-data-containers.md#field) | list of frequencies or times needed. To specify load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". |
| <strong>Pin 2</strong>|  step |[`int32`](./../../getting-started/using-data-containers.md#int32) | if a Field is set as input, the step ids should be its scoping. |
| <strong>Pin 3</strong>|  interpolation_type |[`int32`](./../../getting-started/using-data-containers.md#int32) | 1 is ramped, 2 is stepped, default is 1. |
| <strong>Pin 4</strong>|  force_new_time_freq_support |[`bool`](./../../getting-started/using-data-containers.md#bool) | If set to true, the output fields container will always have a new time freq support rescoped to the output time_freq_values (default is false). If set to false, the time freq support is only recreated when time or frequency values are between existing ones. |
| <strong>Pin 8</strong>|  time_freq_support |[`time_freq_support`](./../../getting-started/using-data-containers.md#time-freq-support) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: time_freq_interpolation

 **License**: None
 
