# result:workflow energy per harmonic

## Description

Calculates the cumulated energy per harmonic in a multistage multiharmonic model.

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Master scoping. All harmonics will be intersected with this scoping.

- **Pin 2** energy_type (type: ['int32']) (optional: True): Type of energy to be processed: (0: Strain + Kinetic energy (default), 1: Strain energy, 2: Kinetic energy)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** harmonic_energy (type: ['fields_container']): 

- **Pin 1** harmonic_energy_percentage (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: workflow_energy_per_harmonic
- **full name**: result.workflow_energy_per_harmonic
- **internal name**: workflow_energy_per_harmonic
- **license**: any_dpf_supported_increments