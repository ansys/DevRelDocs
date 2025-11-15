---
category: utility
plugin: core
license: None
---

# utility:convert to scoping

**Version: 0.0.0**

## Description

Creates a scoping from integer data. Converts single integers, integer vectors, or existing scopings into a properly formatted DPF scoping.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  ids |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Integer ID(s) for the scoping: single int, vector of ints, or existing scoping |
| <strong>Pin 1</strong>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Location string for the scoping (e.g., 'Nodal', 'Elemental'). Default is empty |
| <strong>Pin 2</strong>|  upper_bound |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Upper bound for creating a range scoping. Creates IDs from pin 0 value to this upper bound (inclusive) |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Generated scoping with the specified IDs and location |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: ints_to_scoping

 **Full name**: utility.ints_to_scoping

 **Internal name**: scopingify

 **License**: None


## Changelog

- Version 0.0.0: Initial release.