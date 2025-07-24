---
category: composite
plugin: composite
license: None
---

# composite:add_default_data

**Version: 0.0.0**

## Description

Adds the defaults to the elements which were removed by the lay-up provider from the requested scope. It also checks if the requested scope contains invalid elements. Call run() to add the defaults because this operator has no direct output.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | requested_time_id |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_element_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | requested_element_scoping |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh |
| <strong>Pin 300</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | fields container to which default values are added |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: add_default_data

 **Full name**: composite.add_default_data

 **Internal name**: composite::add_default_data

 **License**: None


## Changelog

- Version 0.0.0: Initial release.