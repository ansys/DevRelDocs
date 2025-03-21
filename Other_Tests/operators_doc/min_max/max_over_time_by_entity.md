---
category: min_max
plugin: core
license: None
---

# min_max:max over time

## Description

Evaluates maximum over time/frequency.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 3** abs_value (type: ['bool']) (optional: True): Should use absolute value.

- **Pin 4** compute_amplitude (type: ['bool']) (optional: True): Do calculate amplitude.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **incremental** (type: ['bool']) (default: true): This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: max_over_time_by_entity
- **license**: None