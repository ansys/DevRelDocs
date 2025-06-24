---
category: math
plugin: core
license: None
Version: 0.0.0
---

# math:sweeping phase (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Shifts the phase of all the corresponding real and imaginary fields of a fields container for a given angle (in 2) of a unit (in 4).


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  angle |[`double`](./../../getting-started/using-data-containers.md#double) |  |
| <strong>Pin 3</strong>|  unit_name |[`string`](./../../getting-started/using-data-containers.md#string) | String Unit. Supported values: "deg" or "rad". Default: "rad". |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abs_value |[`bool`](./../../getting-started/using-data-containers.md#bool) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sweeping_phase_fc

 **License**: None
 
