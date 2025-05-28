---
category: utility
plugin: core
license: None
---

# utility:make label space

## Description

Assemble strings and integers to make a label space.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  base_label |[`label_space`](../../getting-started/using-data-containers.md#label-space), [`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_name |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label_value |[`int32`](../../getting-started/using-data-containers.md#int32) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | label |[`label_space`](../../getting-started/using-data-containers.md#label-space) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: make_label_space
- Full name: utility.make_label_space
- Internal name: make_label_space
- License: None
  