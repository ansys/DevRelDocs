---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:time of min

## Description

Evaluates time/frequency of minimum.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 3** abs_value (type: ['bool']) (optional: True): Should use absolute value.

- **Pin 4** compute_amplitude (type: ['bool']) (optional: True): Do calculate amplitude.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: time_of_min_by_entity
- **license**: any_dpf_supported_increments