---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:max over phase

## Description

Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.

## Inputs


- **Pin 0** real_field (type: ['field']) (optional: False): 

- **Pin 1** imaginary_field (type: ['field']) (optional: False): 

- **Pin 2** abs_value (type: ['bool']) (optional: True): Should use absolute value.

- **Pin 3** phase_increment (type: ['double']) (optional: True): Phase increment (default is 10.0 degrees).


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: max_over_phase
- **license**: any_dpf_supported_increments