---
category: metadata
plugin: core
license: None
---

# metadata:property field provider by property name

**Version: 0.0.0**

## Description

Provides the property values for a set of elements for a defined property name.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | scoping that defines the set of elements to fetch the property values for. If not specified, applied on all the elements of the mesh. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) | optional if using a dataSources |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | optional if using a streamsContainer |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | property to read, that can be the following: elements_connectivity, nodes_connectivity, material, element_type, apdl_section_id, apdl_real_id, apdl_esys_id, mapdl_element_type, mapdl_element_type_id, harmonic_index, step, substep, keyopt_i (i = 1 -> 18). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property_field |[`property_field`](../../core-concepts/dpf-types.md#property-field) | property field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: property_field_provider_by_name

 **Full name**: metadata.property_field_provider_by_name

 **Internal name**: property_field_provider_by_name

 **License**: None


## Changelog

- Version 0.0.0: Initial release.