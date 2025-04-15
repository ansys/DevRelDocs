# metadata:mesh property provider

## Description

Reads a property related to the mesh, defined by its name, by calling the readers defined by the data sources. These properties can be used to fill in the mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 1** | mesh_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | Retrieves a property field on a subset of elements or nodes. |
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | streams (result file container) (optional) |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | If the stream is null, retrieves the file path from the data sources. |
| **Pin 13** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | Supported property names are: "mat", "named_selection", "named_selection_names", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18". |
| **Pin 17** | property_identifier |[`int32`](../getting-started/using-data-containers.md#int32), [`string`](../getting-started/using-data-containers.md#string) | No | Retrieves a property at a given index or by name. For example, a named selection's number or a named selection's name. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`scoping`](../getting-started/using-data-containers.md#scoping), [`property_field`](../getting-started/using-data-containers.md#property-field), [`string_field`](../getting-started/using-data-containers.md#string-field) | Yes | Returns a property field for properties: "mat", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18" (or any mesh's property field), a scoping for properties:"named_selection", a string field for properties: "named_selection_names". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **metadata** | core | mesh_property_provider | metadata.mesh_property_provider | mesh_property_provider | None |
