---
category: math
plugin: core
license: None
---

# math:centroid (fields container)

## Description

Computes the centroid of all the matching fields of a fields container at a given time or frequency, using fieldOut = field1*(1.-fact)+field2*(fact).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** time_freq (type: ['double']) (optional: False): 

- **Pin 2** step (type: ['int32']) (optional: True): 

- **Pin 8** time_freq_support (type: ['time_freq_support']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: centroid_fc
- **license**: None