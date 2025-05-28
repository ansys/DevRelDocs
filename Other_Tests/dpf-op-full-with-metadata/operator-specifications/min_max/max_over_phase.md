---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:max over phase

## Description

Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  real_field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong>|  abs_value |[`bool`](../../getting-started/using-data-containers.md#bool) | Should use absolute value. |
| <strong>Pin 3</strong>|  phase_increment |[`double`](../../getting-started/using-data-containers.md#double) | Phase increment (default is 10.0 degrees). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: max_over_phase

 **License**: any_dpf_supported_increments
