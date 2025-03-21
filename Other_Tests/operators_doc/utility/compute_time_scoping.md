---
category: utility
plugin: core
license: None
---

# utility:compute time scoping

## Description

Computes the time frequency scoping (made of set IDs) necessary to interpolate on a list of time or frequencies.

## Inputs


- **Pin 0** time_freq_values (type: ['double', 'vector<double>', 'field', 'time_freq_support']) (optional: False): List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps".

- **Pin 2** step (type: ['int32']) (optional: True): 

- **Pin 4** interpolation_type (type: ['int32']) (optional: True): 1:ramped' or 2:stepped', default is ramped

- **Pin 8** time_freq_support (type: ['time_freq_support']) (optional: False): 


## Outputs


- **Pin 0** scoping (type: ['scoping']): time_scoping

- **Pin 1** field (type: ['field']): time_freq_values


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: compute_time_scoping
- **license**: None