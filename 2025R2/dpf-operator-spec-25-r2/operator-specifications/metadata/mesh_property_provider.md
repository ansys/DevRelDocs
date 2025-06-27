---
category: metadata
plugin: core
license: None
Version: 0.0.0
---

# metadata:mesh property provider

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Reads a property related to the mesh, defined by its name, by calling the readers defined by the data sources. These properties can be used to fill in the mesh.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types#scoping) | Retrieves a property field on a subset of elements or nodes. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types#data-sources) | If the stream is null, retrieves the file path from the data sources. |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types#standard-types) | Supported property names are: "mat", "named_selection", "named_selection_names", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18". |
| <strong>Pin 17</strong>|  property_identifier |[`int32`](../../core-concepts/dpf-types#standard-types), [`string`](../../core-concepts/dpf-types#standard-types) | Retrieves a property at a given index or by name. For example, a named selection's number or a named selection's name. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`scoping`](../../core-concepts/dpf-types#scoping), [`property_field`](../../core-concepts/dpf-types#property-field), [`string_field`](../../core-concepts/dpf-types#string-field) | Returns a property field for properties: "mat", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18" (or any mesh's property field), a scoping for properties:"named_selection", a string field for properties: "named_selection_names". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: mesh_property_provider

 **Full name**: metadata.mesh_property_provider

 **Internal name**: mesh_property_provider

 **License**: None
 
