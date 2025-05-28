---
category: utility
plugin: core
license: None
---

# utility:merge fields

## Description

Assembles a set of fields into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -2</strong>|  sum_merge |[`bool`](../../getting-started/using-data-containers.md#bool) | Default is false. If true, redundant quantities are summed instead of being ignored. |
| <strong>Pin -1</strong>|  merged_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | Already merged field support. |
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`vector<shared_ptr<field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<field>>), [`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Either a fields container, a vector of fields to merge, or fields from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_fields
- Full name: utility.merge_fields
- Internal name: merge::field
- License: None
  