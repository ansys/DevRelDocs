---
category: utility
plugin: core
license: None
---

# utility:merge any objects

**Version: 0.0.0**

## Description

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  any |[`any`](../../core-concepts/dpf-types.md#any) | Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| any |[`any`](../../core-concepts/dpf-types.md#any) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_any

 **Full name**: utility.merge_any

 **Internal name**: merge::any

 **License**: None


## Changelog

- Version 0.0.0: Initial release.