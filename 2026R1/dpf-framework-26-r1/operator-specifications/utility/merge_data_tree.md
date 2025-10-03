---
category: utility
plugin: core
license: None
---

# utility:merge data tree

**Version: 0.0.0**

## Description

Merges a list of data trees. Attributes names shouldn't be shared accross data tree instances.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_tree |[`data_tree`](../../core-concepts/dpf-types.md#data-tree), `vector<shared_ptr<data_tree>>` | Either a vector of data trees or data trees from pin 0 to ... to merge. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| any |[`any`](../../core-concepts/dpf-types.md#any) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_data_tree

 **Full name**: utility.merge_data_tree

 **Internal name**: merge::data_tree

 **License**: None


## Changelog

- Version 0.0.0: Initial release.