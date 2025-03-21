---
category: math
plugin: core
license: None
---

# math:min/max over time

## Description

Evaluates minimum/maximum over time/frequency.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 5** int32 (type: ['int32']) (optional: False): Define min or max.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: mechanical::min_max_over_time
- **license**: None