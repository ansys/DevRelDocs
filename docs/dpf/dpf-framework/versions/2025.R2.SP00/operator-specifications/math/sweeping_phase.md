---
category: math
plugin: core
license: None
---

# math:sweeping phase

**Version: 0.0.0**

## Description

Shifts the phase of a real and an imaginary field (in 0 and 1) of a given angle (in 3) of a unit (in 4).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  real_field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  angle |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 3</strong>|  unit_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | String Unit. Supported values: "deg" or "rad". Default: "rad". |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_part_null |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If the imaginary part field is empty and this pin is true, then the imaginary part is supposed to be 0 (default is false). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: sweeping_phase

 **License**: None


## Changelog

- Version 0.0.0: Initial release.