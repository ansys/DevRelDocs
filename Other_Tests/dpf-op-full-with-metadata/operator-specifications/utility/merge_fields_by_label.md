---
category: utility
plugin: core
license: None
---

# utility:merge fields by label

## Description

Merges the fields of a fields container that share the same label value.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label |[`string`](../../getting-started/using-data-containers.md#string) | Label identifier that should be merged. |
| <strong>Pin 2</strong>|  merged_field_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | The FieldsContainer's support that has already been merged. |
| <strong>Pin 3</strong>|  sum_merge |[`bool`](../../getting-started/using-data-containers.md#bool) | Default is false. If true, redundant quantities are summed instead of being ignored. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_field_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_fields_by_label
- Full name: utility.merge_fields_by_label
- Internal name: merge::fields_container_label
- License: None
  