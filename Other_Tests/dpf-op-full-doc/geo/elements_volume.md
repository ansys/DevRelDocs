# geo:elements volume

## Description

Compute the measure of the Elements (volume for 3D elements, surface for 2D elements or length for 1D elements) using default shape functions, except for polyhedrons.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: False): If not provided, the measure of all elements for the mesh is computed. If provided, the Scoping needs to have "Elemental" location.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: elements_volume
- **full name**: geo.elements_volume
- **internal name**: element::volume
- **license**: any_dpf_supported_increments