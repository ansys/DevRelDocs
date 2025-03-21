---
category: math
plugin: core
license: None
---

# math:sqrt (fields container)

## Description

Computes element-wise sqrt(field1).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: sqrt_fc
- **license**: None