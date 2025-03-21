---
category: scoping
plugin: core
license: None
---

# scoping:on property

## Description

Provides a scoping at a given location based on a given property name and a property number.

## Inputs


- **Pin 0** requested_location (type: ['string']) (optional: False): Nodal or Elemental location are expected

- **Pin 1** property_name (type: ['string']) (optional: False): ex "mapdl_element_type", "mapdl_element_type_id", "apdl_type_index", "mapdl_type_id", "material", "apdl_section_id", "apdl_real_id", "apdl_esys_id", "shell_axi", "volume_axi"...

- **Pin 2** property_id (type: ['int32']) (optional: False): 

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 5** inclusive (type: ['int32']) (optional: True): If element scoping is requested on a nodal named selection, if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping']): Scoping


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: on_property
- **full name**: scoping.on_property
- **internal name**: scoping_provider_by_prop
- **license**: None