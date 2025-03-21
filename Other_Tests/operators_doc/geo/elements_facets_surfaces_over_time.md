---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:elements facets surfaces over time

## Description

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

## Inputs


- **Pin 1** scoping (type: ['scoping']) (optional: True): 

- **Pin 2** displacement (type: ['fields_container']) (optional: True): Displacement field's container.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): Surfaces field.

- **Pin 1** mesh (type: ['abstract_meshed_region']): Mesh made of surface elements only.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: elements_facets_surfaces_over_time
- **full name**: geo.elements_facets_surfaces_over_time
- **internal name**: surfaces_provider
- **license**: any_dpf_supported_increments