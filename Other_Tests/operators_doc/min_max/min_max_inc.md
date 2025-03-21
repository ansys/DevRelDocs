---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:incremental over field

## Description

Compute the component-wise minimum (out 0) and maximum (out 1) over coming fields.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 17** domain_id (type: ['int32']) (optional: True): 


## Outputs


- **Pin 0** field_min (type: ['field']): 

- **Pin 1** field_max (type: ['field']): 

- **Pin 2** domain_ids_min (type: ['scoping']): 

- **Pin 3** domain_ids_max (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: min_max_inc
- **license**: any_dpf_supported_increments