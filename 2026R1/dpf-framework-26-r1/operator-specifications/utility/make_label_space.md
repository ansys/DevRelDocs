---
category: utility
plugin: core
license: None
---

# utility:make label space

**Version: 0.0.0**

## Description

Assemble strings and integers to make a label space.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  base_label |[`label_space`](../../core-concepts/dpf-types.md#label-space), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_name |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_value |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| label |[`label_space`](../../core-concepts/dpf-types.md#label-space) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: make_label_space

 **Full name**: utility.make_label_space

 **Internal name**: make_label_space

 **License**: None


## Changelog

- Version 0.0.0: Initial release.