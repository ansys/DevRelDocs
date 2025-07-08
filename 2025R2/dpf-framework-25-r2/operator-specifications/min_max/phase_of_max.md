---
category: min_max
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# min_max:phase of max

Version: 0.0.0


## Description

Evaluates phase of maximum.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | real_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | imaginary_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong> | abs_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Should use absolute value. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | phase_increment |[`double`](../../core-concepts/dpf-types.md#double) | Phase increment. |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: phase_of_max

 **License**: any_dpf_supported_increments
 

## Changelog

- Version 0.0.0: Initial release.