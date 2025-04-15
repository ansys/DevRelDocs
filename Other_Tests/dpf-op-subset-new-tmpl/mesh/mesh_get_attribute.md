# mesh:mesh get attribute

## Description

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | abstract_meshed_region |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | Supported property names are: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), "coordinates", "named_selection", "num_named_selections", "named_selection_names", "named_selection_locations", "node_scoping", "element_scoping", ace_scoping"... |
| **Pin 2** | property_identifier |[`int32`](../getting-started/using-data-containers.md#int32), [`string`](../getting-started/using-data-containers.md#string) | No | Can be used to get a property at a given index, example: a named selection's number or by name, example: a named selection's name. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`scoping`](../getting-started/using-data-containers.md#scoping), [`field`](../getting-started/using-data-containers.md#field), [`property_field`](../getting-started/using-data-containers.md#property-field), [`int32`](../getting-started/using-data-containers.md#int32), [`string_field`](../getting-started/using-data-containers.md#string-field) | Yes | Returns a property field for properties: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), a field for property: "coordinates", a scoping for properties:"named_selection", "node_scoping", "element_scoping", ace_scoping", a string field for properties: "named_selection_names", "named_selection_locations" and an int for property: "num_named_selections". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_get_attribute | mesh.mesh_get_attribute | mesh::get_attribute | None |
