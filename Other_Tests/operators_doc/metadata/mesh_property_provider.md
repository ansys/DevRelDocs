---
category: metadata
plugin: core
license: None
---

# metadata:mesh property provider

## Description

Reads a property related to the mesh, defined by its name, by calling the readers defined by the data sources. These properties can be used to fill in the mesh.

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Retrieves a property field on a subset of elements or nodes.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): streams (result file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): If the stream is null, retrieves the file path from the data sources.

- **Pin 13** property_name (type: ['string']) (optional: False): Supported property names are: "mat", "named_selection", "named_selection_names", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18".

- **Pin 17** property_identifier (type: ['int32', 'string']) (optional: True): Retrieves a property at a given index or by name. For example, a named selection's number or a named selection's name.


## Outputs


- **Pin 0** property (type: ['scoping', 'property_field', 'string_field']): Returns a property field for properties: "mat", "apdl_element_type", "section", "elprops", "keyopt_1" to "keyopt_18" (or any mesh's property field), a scoping for properties:"named_selection", a string field for properties: "named_selection_names".


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: mesh_property_provider
- **full name**: metadata.mesh_property_provider
- **internal name**: mesh_property_provider
- **license**: None