---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:time of min

## Description

Evaluates time/frequency of minimum.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 3</strong>|  abs_value |[`bool`](../../getting-started/using-data-containers.md#bool) | Should use absolute value. |
| <strong>Pin 4</strong>|  compute_amplitude |[`bool`](../../getting-started/using-data-containers.md#bool) | Do calculate amplitude. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: time_of_min_by_entity

 **License**: any_dpf_supported_increments
