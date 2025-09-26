---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:ascending sort

**Version: 0.0.0**

## Description

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  component_priority_table |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | component priority table (vector of int) |
| <strong>Pin 2</strong>|  sort_by_scoping |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true, uses scoping to sort the field (default is false) |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: ascending_sort

 **Full name**: logic.ascending_sort

 **Internal name**: ascending_sort

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.