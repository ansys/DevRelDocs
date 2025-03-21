---
category: utility
plugin: core
license: None
---

# utility:forward meshes container

## Description

Returns the input mesh or meshes container into a meshes container.

## Inputs


- **Pin 0** meshes (type: ['meshes_container', 'abstract_meshed_region']) (optional: False): 

- **Pin 1** default_label (type: ['string']) (optional: True): this default label is used if a new meshes container needs to be created (default is unknown)


## Outputs


- **Pin 0** meshes_container (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: forward_meshes_container
- **full name**: utility.forward_meshes_container
- **internal name**: forward_meshes_container
- **license**: None