---
category: mesh
plugin: core
license: None
---

# mesh:skin

## Description

Extracts a skin of the mesh in a new meshed region. The material ID of initial elements are propagated to their facets.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping. |
| <strong>Pin 2</strong>|  duplicate_shell |[`bool`](../../getting-started/using-data-containers.md#bool) | If input mesh contains shell elements, output mesh shell elements (boolean = 1) are duplicated, one per each orientation, or (boolean = 0) remain unchanged. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Skin meshed region with facets and facets_to_ele property fields. |
|  **Pin 1**| nodes_mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
|  **Pin 2**| map_new_elements_to_old |[`umap<int32,int32>`](../../getting-started/using-data-containers.md#umap<int32,int32>) |  |
|  **Pin 3**| property_field_new_elements_to_old |[`property_field`](../../getting-started/using-data-containers.md#property-field) | This property field provides, for each new face element ID (in the scoping), the corresponding 3D volume element index (in the data) it has been extracted from. The 3D volume element ID can be found with the element scoping of the input mesh. |
|  **Pin 4**| facet_indices |[`property_field`](../../getting-started/using-data-containers.md#property-field) | This property field gives, for each new face element ID (in the scoping), the corresponding face index on the source 3D volume element. The 3D volume element can be extracted from the previous output. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: skin

 **Full name**: mesh.skin

 **Internal name**: meshed_skin_sector

 **License**: None
