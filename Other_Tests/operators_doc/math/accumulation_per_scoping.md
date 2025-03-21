---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:accumulation per scoping

## Description

This operator calculates the sum and the percentage of total sum of the input fields container for each scoping of the scopings container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Master scoping. All scopings in the Scopings Container will be intersected with this scoping.

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 5** scopings_container (type: ['scopings_container']) (optional: False): The intersection between the of the first will be used.


## Outputs


- **Pin 0** accumulation_per_scoping (type: ['fields_container']): 

- **Pin 1** accumulation_per_scoping_percentage (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: accumulation_per_scoping
- **full name**: math.accumulation_per_scoping
- **internal name**: accumulation_per_scoping
- **license**: any_dpf_supported_increments