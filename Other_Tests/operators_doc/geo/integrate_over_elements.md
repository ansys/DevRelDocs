---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:integrate over elements

## Description

Integration of an input field over mesh.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 1** scoping (type: ['scoping']) (optional: True): Integrate the input field over a specific scoping.

- **Pin 2** mesh (type: ['abstract_meshed_region']) (optional: True): Mesh to integrate on. If not provided, the one from input field is employed.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: integrate_over_elements
- **full name**: geo.integrate_over_elements
- **internal name**: element::integrate
- **license**: any_dpf_supported_increments