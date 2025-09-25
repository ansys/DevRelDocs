---
category: composite
plugin: composite
license: None
---

# composite:nearest_neighbor_operator

**Version: 0.0.0**

## Description

Go through all elements of the source mesh and find the n nearest neighbors in the target mesh. The distance is computed from element center to element center.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Meshed region with the elements for which the nearest neighbors should be found. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh with the target elements. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  number_of_neighbors |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of neighbors to be found. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| neighbors_source_to_target |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Property field with an entry for each element ID of the source mesh with the element ID(s) of the neighbors of the target mesh. See output neighbors_target_to_source for the inverse result (Pin 1). |
|  **Pin 1**| neighbors_target_to_source |[`property_field`](../../core-concepts/dpf-types.md#property-field) | Property field with an entry for each element ID of the target mesh with the element ID(s) of the neighbors of the source mesh. The field contains only the elements which have neighbors. See output neighbors_source_to_target for the inverse result (Pin 0) |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: composite

 **Plugin**: composite

 **Scripting name**: nearest_neighbor_operator

 **Full name**: composite.nearest_neighbor_operator

 **Internal name**: composite::nearest_neighbor_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.