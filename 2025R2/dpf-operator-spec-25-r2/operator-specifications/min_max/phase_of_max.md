---
category: min_max
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# min_max:phase of max

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Evaluates phase of maximum.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  real_field |[`field`](./../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_field |[`field`](./../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong>|  abs_value |[`bool`](./../../getting-started/using-data-containers.md#bool) | Should use absolute value. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  phase_increment |[`double`](./../../getting-started/using-data-containers.md#double) | Phase increment. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: phase_of_max

 **License**: any_dpf_supported_increments
 
