---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:create mechanical native mapping for kriging workflow

**Version: 0.0.0**

## Description

Prepares a workflow able to map data from an input mesh to a target mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh where the source data is defined. |
| <strong>Pin 1</strong>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh the data should be mapped on. |
| <strong>Pin 6</strong>|  target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh. |
| <strong>Pin 10</strong>|  options_data_tree |[`data_tree`](../../core-concepts/dpf-types.md#data-tree) | DataTree that contains a 'mapping_options' subtree with the mapping options, and a 'data_definition' subtree with 'dimensionality' int and 'location' string attributes that are required by the 'prepare mechanical native mapping' operator (see documentation of this operator to know more about the supported options). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) | Workflow with input pin 'source_data'; optionally 'source_mesh', 'target_mesh', 'target_scoping', and 'options_data_tree'; and output pins 'target_data','unmapped_nodes_data','outside_nodes_data','mapping_error_codes', 'source_mesh_id' and 'target_mesh_id. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: create_mech_kriging_workflow

 **Full name**: mapping.create_mech_kriging_workflow

 **Internal name**: mech_kriging_wf

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.