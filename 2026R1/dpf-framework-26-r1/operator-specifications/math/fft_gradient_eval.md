---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft gradient evaluation

**Version: 0.0.0**

## Description

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  time_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | if specified only the results at these set ids are used |
| <strong>Pin 2</strong>|  fs_ratio |[`int32`](../../core-concepts/dpf-types.md#standard-types) | default value = 20 |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| coefficients |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_gradient_eval

 **Full name**: math.fft_gradient_eval

 **Internal name**: fft_eval_gr

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.