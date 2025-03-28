# result:transient rayleigh integration

## Description

Computes the transient Rayleigh integral

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): the input field container expects acceleration fields

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: False): The meshes region in this pin has to be boundary or skin mesh. This is the source meshes.

- **Pin 2** time_scoping (type: ['int32', 'vector<int32>', 'scoping']) (optional: False): Load step number (if it's specified, the Transient rayleigh integration is computed only on the substeps of this step) or time scoping

- **Pin 3** field (type: ['field']) (optional: False): The field represents the coordinates of the observation position. It should be specified if not observation mesh is provided. 

- **Pin 4** observation_mesh (type: ['abstract_meshed_region']) (optional: False): This is the observation mesh region

- **Pin 5** mass_density (type: ['double']) (optional: False): Mass density (if it's not specified, default value of the air is applied).

- **Pin 6** speed_of_sound (type: ['double']) (optional: False): Speed of sound (if it's not specified, default value of the speed of sound in the air is applied).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: transient_rayleigh_integration
- **full name**: result.transient_rayleigh_integration
- **internal name**: transient_rayleigh_integration
- **license**: any_dpf_supported_increments