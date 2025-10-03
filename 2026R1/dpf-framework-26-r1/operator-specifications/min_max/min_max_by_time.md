---
category: min_max
plugin: core
license: None
---

# min_max:min max over time

**Version: 0.0.0**

## Description

Evaluates minimum, maximum by time or frequency over all the entities of each field

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 2</strong>|  compute_absolute_value |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Calculate the absolute value of field entities before computing the min/max. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| min |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| max |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **incremental** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range. |
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: min_max_by_time

 **License**: None


## Changelog

- Version 0.0.0: Initial release.