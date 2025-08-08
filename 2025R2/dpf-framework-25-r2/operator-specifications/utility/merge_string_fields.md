---
category: utility
plugin: core
license: None
---

# utility:merge string fields

**Version: 0.0.0**

## Description

Assembles a set of string fields into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_fields |`vector<shared_ptr<string_field>>`, [`string_field`](../../core-concepts/dpf-types.md#string-field) | Either a a vector of string fields to merge or string fields from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| string_field |[`string_field`](../../core-concepts/dpf-types.md#string-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_string_fields

 **Full name**: utility.merge_string_fields

 **Internal name**: merge::string_field

 **License**: None


## Changelog

- Version 0.0.0: Initial release.