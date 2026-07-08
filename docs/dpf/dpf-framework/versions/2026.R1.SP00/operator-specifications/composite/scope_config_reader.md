---
category: composite
plugin: composite
license: None
---

# composite:scope_config_reader

**Version: 0.0.0**

## Description

Reads scope configuration from inputs and outputs a CompositeScopeConfig object.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 108</strong>|  ply_ids |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types) | Vector of selected plies. |
| <strong>Pin 307</strong>|  scope_configuration |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | DataTree with scope configuration: These properties are available: requested_times: optional[double]. Default: Last time step/ load step selected. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scope_configuration |`struct dataProcessing::composite::CompositeScopeConfig` | Scope configuration |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: scope_config_reader

 **Full name**: composite.scope_config_reader

 **Internal name**: composite::scope_config_reader

 **License**: None


## Changelog

- Version 0.0.0: Initial release.