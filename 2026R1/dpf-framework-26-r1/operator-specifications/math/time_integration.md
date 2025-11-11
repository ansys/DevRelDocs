---
category: math
plugin: core
license: None
---

# math:time integration

**Version: 0.0.0**

## Description

Integrates a field of time varying quantities over time

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | field |
| <strong>Pin 1</strong>|  resample_output |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Resample the output |
| <strong>Pin 2</strong>|  absolute_error |[`double`](../../core-concepts/dpf-types.md#standard-types) | Absolute error for the resampling |
| <strong>Pin 3</strong>|  minimum_step_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | Minimum time step size for the resamplig |
| <strong>Pin 4</strong>|  integration_constant |[`double`](../../core-concepts/dpf-types.md#standard-types) | Constant to be added to the integrated field |

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

 **Scripting name**: time_integration

 **Full name**: math.time_integration

 **Internal name**: TimeIntegration

 **License**: None


## Changelog

- Version 0.0.0: Initial release.