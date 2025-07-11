---
category: mesh
plugin: core
license: None
---

# mesh:mesh get attribute

**Version: 0.0.0**

## Description

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types}}) | Supported property names are: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), "coordinates", "named_selection", "num_named_selections", "named_selection_names", "named_selection_locations", "node_scoping", "element_scoping", "face_scoping"... |
| <strong>Pin 2</strong>|  property_identifier |[`int32`](../../core-concepts/dpf-types.md#standard-types}}), [`string`](../../core-concepts/dpf-types.md#standard-types}}) | Can be used to get a property at a given index, example: a named selection's number or by name, example: a named selection's name. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`field`](../../core-concepts/dpf-types.md#field), [`property_field`](../../core-concepts/dpf-types.md#property-field), [`int32`](../../core-concepts/dpf-types.md#standard-types}}), [`string_field`](../../core-concepts/dpf-types.md#string-field) | Returns a property field for properties: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), a field for property: "coordinates", a scoping for properties:"named_selection", "node_scoping", "element_scoping", "face_scoping", a string field for properties: "named_selection_names", "named_selection_locations" and an int for property: "num_named_selections". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types}}) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_get_attribute

 **Full name**: mesh.mesh_get_attribute

 **Internal name**: mesh::get_attribute

 **License**: None


## Changelog

- Version 0.0.0: Initial release.