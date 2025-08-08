---
category: utility
plugin: core
license: None
---

# utility:merge generic data container

**Version: 0.0.0**

## Description

Merges a list of generic data container. For each data entry, the merge operation is forwarded to the correct merge Operator. Primitive types cannot be merged, first instance found will be maintained in the result.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  generic_data_container |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container), `vector<shared_ptr<generic_data_container>>` | Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| generic_data_container |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_generic_data_container

 **Full name**: utility.merge_generic_data_container

 **Internal name**: merge::generic_data_container

 **License**: None


## Changelog

- Version 0.0.0: Initial release.