---
category: composite
plugin: composite
license: None
---

# composite:result_definition

**Version: 0.0.0**

## Description

Uses a simplified json config to create a result definition

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 100</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  criterion_configuration |[`string`](../../core-concepts/dpf-types.md#standard-types) | Simplified configuration (string of json dict) Currently limited to a single time step and a single file per type.Supports only irf evaluation. Example: {"files":{"rst_file": "example_path","material_file": "example_path","layup_file": "example_path","mapping_file": "example_path"},"ply_ids": ["example_ply_1", "example_ply_2"],"element_ids": [1,2,3,4],"write_data_for_full_element_scope": false,"failure_configuration": {}} |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| string |[`string`](../../core-concepts/dpf-types.md#standard-types) | Result Definition (string of json dict) that can be used for the composite_failure_operator |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: result_definition

 **Full name**: composite.result_definition

 **Internal name**: composite::result_definition

 **License**: None


## Changelog

- Version 0.0.0: Initial release.