---
category: mapping
plugin: core
license: None
Version: 0.0.0
---

# mapping:prepare mapping workflow

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Generates a workflow that can map results from a support to another one.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_support |[`field`](./../../getting-started/using-data-containers.md#field), [`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_support |[`field`](./../../getting-started/using-data-containers.md#field), [`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filter_radius |[`double`](./../../getting-started/using-data-containers.md#double) | Radius size for the RBF filter |
| <strong>Pin 3</strong>|  influence_box |[`double`](./../../getting-started/using-data-containers.md#double) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](./../../getting-started/using-data-containers.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: prepare_mapping_workflow

 **Full name**: mapping.prepare_mapping_workflow

 **Internal name**: prepare_mapping_workflow

 **License**: None
 
