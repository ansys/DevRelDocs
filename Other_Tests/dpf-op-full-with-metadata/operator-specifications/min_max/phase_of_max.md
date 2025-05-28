---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:phase of max

## Description

Evaluates phase of maximum.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  real_field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  imaginary_field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong>|  abs_value |[`bool`](../../getting-started/using-data-containers.md#bool) | Should use absolute value. |
| <strong>Pin 3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  phase_increment |[`double`](../../getting-started/using-data-containers.md#double) | Phase increment. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: min_max
- Plugin: core
- Scripting name: None
- Full name: None
- Internal name: phase_of_max
- License: any_dpf_supported_increments
  