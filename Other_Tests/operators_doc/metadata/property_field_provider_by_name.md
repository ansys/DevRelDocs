---
category: metadata
plugin: core
license: None
---

# metadata:property field provider by property name

## Description

Provides the property values for a set of elements for a defined property name.

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): scoping that defines the set of elements to fetch the property values for. If not specified, applied on all the elements of the mesh.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): optional if using a dataSources

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): optional if using a streamsContainer

- **Pin 13** property_name (type: ['string']) (optional: False): property to read, that can be the following: elements_connectivity, nodes_connectivity, material, element_type, mapdl_element_type, mapdl_element_type_id harmonic_index, step, substep, keyopt_i (i = 1 -> 18).


## Outputs


- **Pin 0** property_field (type: ['property_field']): property field


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: property_field_provider_by_name
- **full name**: metadata.property_field_provider_by_name
- **internal name**: property_field_provider_by_name
- **license**: None