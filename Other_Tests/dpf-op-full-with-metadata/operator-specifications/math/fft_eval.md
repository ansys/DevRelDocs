---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft evaluation

## Description

Evaluate the fast fourier transforms at a given set of fields.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_t |[`field`](../../getting-started/using-data-containers.md#field) | field of values to evaluate |
| <strong>Pin 1</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | if specified only the results at these set ids are used |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | offset |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: math
- Plugin: core
- Scripting name: fft_eval
- Full name: math.fft_eval
- Internal name: fft_eval
- License: any_dpf_supported_increments
  