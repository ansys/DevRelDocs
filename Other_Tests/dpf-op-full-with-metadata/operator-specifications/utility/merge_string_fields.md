---
category: utility
plugin: core
license: None
---

# utility:merge string fields

## Description

Assembles a set of string fields into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  vector<shared_ptr<string_field>> |[`vector<shared_ptr<string_field>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<string-field>>), [`string_field`](../../getting-started/using-data-containers.md#string-field) | Either a a vector of string fields to merge or string fields from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | string_field |[`string_field`](../../getting-started/using-data-containers.md#string-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_string_fields
- Full name: utility.merge_string_fields
- Internal name: merge::string_field
- License: None
  