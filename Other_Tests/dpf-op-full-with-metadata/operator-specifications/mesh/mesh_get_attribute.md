---
category: mesh
plugin: core
license: None
---

# mesh:mesh get attribute

## Description

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abstract_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | Supported property names are: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), "coordinates", "named_selection", "num_named_selections", "named_selection_names", "named_selection_locations", "node_scoping", "element_scoping", ace_scoping"... |
| <strong>Pin 2</strong>|  property_identifier |[`int32`](../../getting-started/using-data-containers.md#int32), [`string`](../../getting-started/using-data-containers.md#string) | Can be used to get a property at a given index, example: a named selection's number or by name, example: a named selection's name. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | property |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`field`](../../getting-started/using-data-containers.md#field), [`property_field`](../../getting-started/using-data-containers.md#property-field), [`int32`](../../getting-started/using-data-containers.md#int32), [`string_field`](../../getting-started/using-data-containers.md#string-field) | Returns a property field for properties: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), a field for property: "coordinates", a scoping for properties:"named_selection", "node_scoping", "element_scoping", ace_scoping", a string field for properties: "named_selection_names", "named_selection_locations" and an int for property: "num_named_selections". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: mesh
- Plugin: core
- Scripting name: mesh_get_attribute
- Full name: mesh.mesh_get_attribute
- Internal name: mesh::get_attribute
- License: None
  