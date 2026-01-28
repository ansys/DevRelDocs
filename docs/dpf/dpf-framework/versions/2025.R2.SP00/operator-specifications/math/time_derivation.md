---
category: math
plugin: core
license: None
---

# math:time derivation

**Version: 0.0.0**

## Description

Derives a field of time varying quantities with respect to time

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | field |
| <strong>Pin 1</strong>|  spline_fitting |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Uses spline fitting on the input field to compute smooth derivatives |

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

 **Scripting name**: time_derivation

 **Full name**: math.time_derivation

 **Internal name**: TimeDerivation

 **License**: None


## Changelog

- Version 0.0.0: Initial release.