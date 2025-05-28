---
category: utility
plugin: core
license: None
---

# utility:merge supports

## Description

Assembles a set of supports into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -200</strong>|  should_merge_named_selections |[`bool`](../../getting-started/using-data-containers.md#bool) | For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  supports |[`vector<shared_ptr<abstract_field_support>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<abstract-field-support>>), [`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) | A vector of supports to merge or supports from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_support |[`abstract_field_support`](../../getting-started/using-data-containers.md#abstract-field-support) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_supports
- Full name: utility.merge_supports
- Internal name: merge::abstract_support
- License: None
  