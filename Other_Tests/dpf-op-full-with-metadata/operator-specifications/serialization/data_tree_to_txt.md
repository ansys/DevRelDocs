---
category: serialization
plugin: core
license: None
---

# serialization:data tree to txt

## Description

Writes a txt file or string from a DataTree


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_tree |[`abstract_data_tree`](../../getting-started/using-data-containers.md#abstract-data-tree) |  |
| <strong>Pin 1</strong>|  path |[`string`](../../getting-started/using-data-containers.md#string) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources), [`string`](../../getting-started/using-data-containers.md#string) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: data_tree_to_txt

 **License**: None
