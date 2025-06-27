---
category: serialization
plugin: core
license: None
Version: 0.0.0
---

# serialization:json to data tree

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Reads a json file or string to a DataTree


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_or_path |[`string`](../../core-concepts/dpf-types.md#standard-types), [`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_tree |[`abstract_data_tree`](../../core-concepts/dpf-types.md#abstract-data-tree) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: json_to_data_tree

 **License**: None
 
