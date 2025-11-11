---
category: mapping
plugin: core
license: None
---

# mapping:prepare mapping workflow

**Version: 0.0.0**

## Description

Generates a workflow that can map results from a support to another one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_support |[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_support |[`field`](../../core-concepts/dpf-types.md#field), [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  filter_radius |[`double`](../../core-concepts/dpf-types.md#standard-types) | Radius size for the RBF filter |
| <strong>Pin 3</strong>|  influence_box |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: prepare_mapping_workflow

 **Full name**: mapping.prepare_mapping_workflow

 **Internal name**: prepare_mapping_workflow

 **License**: None


## Changelog

- Version 0.0.0: Initial release.