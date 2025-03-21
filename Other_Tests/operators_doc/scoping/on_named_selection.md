---
category: scoping
plugin: core
license: None
---

# scoping:on named selection

## Description

provides a scoping at a given location based on a given named selection

## Inputs


- **Pin 0** requested_location (type: ['string']) (optional: False): 

- **Pin 1** named_selection_name (type: ['string']) (optional: False): the string is expected to be in upper case

- **Pin 2** int_inclusive (type: ['int32']) (optional: True): If element scoping is requested on a nodal named selection, if Inclusive == 1 then add all the elements adjacent to the nodes.If Inclusive == 0, only the elements which have all their nodes in the named selection are included

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: on_named_selection
- **full name**: scoping.on_named_selection
- **internal name**: scoping_provider_by_ns
- **license**: None