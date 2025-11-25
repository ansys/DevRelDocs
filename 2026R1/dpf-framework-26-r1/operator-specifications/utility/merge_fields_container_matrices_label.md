---
category: utility
plugin: core
license: None
---

# utility:merge fc to fc field matrices

**Version: 0.0.0**

## Description

Merge fields of fields container into field matrices. The output is a fields container of field matrices.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | fields container to be merged |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label |[`string`](../../core-concepts/dpf-types.md#standard-types) | Label where the merge is required |
| <strong>Pin 2</strong>|  time_scoping |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) | if it's specified, fields container of field matrices is constructed only on the specified time scoping |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | fields container of field matrices obtained after merging. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge::fields_container_matrices_label

 **Full name**: utility.merge::fields_container_matrices_label

 **Internal name**: merge::fields_container_matrices_label

 **License**: None


## Changelog

- Version 0.0.0: Initial release.