---
category: metadata
plugin: core
license: None
---

# metadata:property field provider by property name

## Description

Provides the property values for a set of elements for a defined property name.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | scoping that defines the set of elements to fetch the property values for. If not specified, applied on all the elements of the mesh. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | optional if using a dataSources |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | optional if using a streamsContainer |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | property to read, that can be the following: elements_connectivity, nodes_connectivity, material, element_type, mapdl_element_type, mapdl_element_type_id harmonic_index, step, substep, keyopt_i (i = 1 -> 18). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | property_field |[`property_field`](../../getting-started/using-data-containers.md#property-field) | property field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: metadata
- Plugin: core
- Scripting name: property_field_provider_by_name
- Full name: metadata.property_field_provider_by_name
- Internal name: property_field_provider_by_name
- License: None
  