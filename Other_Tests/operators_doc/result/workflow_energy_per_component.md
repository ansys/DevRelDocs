---
category: result
plugin: mapdl
license: any_dpf_supported_increments
---

# result:workflow energy per component

## Description

Calculates the cumulated energy per component (Named Selection). For cyclic and multistage models, the expansion will be automatically done.

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scoping', 'scopings_container']) (optional: True): When the input is a scoping, it is treated as the master scoping. All named selections will intersect with it. When the input is a scopings container, named selections will not be needed.

- **Pin 2** energy_type (type: ['int32']) (optional: True): Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 5** named_selection (type: ['string']) (optional: True): Named Selections. Intersection of all  Named Selections with the master scoping will be done.


## Outputs


- **Pin 0** component_energy (type: ['fields_container']): 

- **Pin 1** component_energy_percentage (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: workflow_energy_per_component
- **full name**: result.workflow_energy_per_component
- **internal name**: workflow_energy_per_component
- **license**: any_dpf_supported_increments