---
category: mesh
plugin: core
license: None
---

# mesh:skin

**Version: 0.0.0**

## Description

Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping. |
| <strong>Pin 2</strong>|  duplicate_shell |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If input mesh contains shell elements, output mesh shell elements (boolean = 1) are duplicated, one per each orientation, or (boolean = 0) remain unchanged. |
| <strong>Pin 3</strong>|  add_beam_point |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If input mesh contains beam or point elements, output mesh beam point elements (boolean = 1) are added or (boolean = 0) are ignored. Default: False |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Skin meshed region with facets and facets_to_ele property fields. |
|  **Pin 1**| nodes_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 2**| map_new_elements_to_old |`umap<int32,int32>` |  |
|  **Pin 3**| property_field_new_elements_to_old |[`property_field`](../../core-concepts/dpf-types.md#property-field) | This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh. |
|  **Pin 4**| facet_indices |[`property_field`](../../core-concepts/dpf-types.md#property-field) | This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: skin

 **Full name**: mesh.skin

 **Internal name**: meshed_skin_sector

 **License**: None


## Changelog

- Version 0.0.0: Initial release.