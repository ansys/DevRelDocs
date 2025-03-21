---
category: mesh
plugin: core
license: None
---

# mesh:mesh get attribute

## Description

Uses the MeshedRegion APIs to return a given attribute of the mesh in input.

## Inputs


- **Pin 0** abstract_meshed_region (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Supported property names are: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), "coordinates", "named_selection", "num_named_selections", "named_selection_names", "named_selection_locations", "node_scoping", "element_scoping", ace_scoping"...

- **Pin 2** property_identifier (type: ['int32', 'string']) (optional: True): Can be used to get a property at a given index, example: a named selection's number or by name, example: a named selection's name.


## Outputs


- **Pin 0** property (type: ['scoping', 'field', 'property_field', 'int32', 'string_field']): Returns a property field for properties: "connectivity", "reverse_connectivity", "mat", "faces_nodes_connectivity", "elements_faces_connectivity" (or any mesh's property field), a field for property: "coordinates", a scoping for properties:"named_selection", "node_scoping", "element_scoping", ace_scoping", a string field for properties: "named_selection_names", "named_selection_locations" and an int for property: "num_named_selections".


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_get_attribute
- **full name**: mesh.mesh_get_attribute
- **internal name**: mesh::get_attribute
- **license**: None