---
category: math
plugin: core
license: None
---

# math:cos (fields container)

**Version: 0.0.0**

## Description

Computes element-wise cosine function on field data: cos(field[i]).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Field or fields container containing numeric data for cosine calculation |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Field with cosine values applied element-wise to input data |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: cos_fc

 **License**: None


## Changelog

- Version 0.0.0: Initial release.