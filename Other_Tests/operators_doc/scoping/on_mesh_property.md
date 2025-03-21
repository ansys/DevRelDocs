---
category: scoping
plugin: core
license: None
---

# scoping:on mesh property

## Description

Provides a scoping on a given property name and a property number.

## Inputs


- **Pin 0** requested_location (type: ['string']) (optional: True): Nodal or Elemental location are expected

- **Pin 1** property_name (type: ['string']) (optional: False): ex "apdl_element_type", "elprops", "mat", "eltype", "connectivity", "shell_elements", "solid_elements", "skin_elements", "beam_elements", "point_elements"...

- **Pin 2** property_id (type: ['vector<int32>', 'int32']) (optional: True): 

- **Pin 5** inclusive (type: ['int32']) (optional: True): Default is 1 (inclusive is true). Only used if 'shape_values' property is requested. If inclusive is set to 1 and 'elprops' property field is available, it will select all elements that are set on the corresponding property. If inclusive is set to 0 (exclusive) and 'elprops' property field is available, it will select the elements that are only set on this property.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping']): Scoping


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: on_mesh_property
- **full name**: scoping.on_mesh_property
- **internal name**: meshscoping_provider_by_prop
- **license**: None