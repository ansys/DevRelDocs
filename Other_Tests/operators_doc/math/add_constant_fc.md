---
category: math
plugin: core
license: None
---

# math:+ constant (fields container)

## Description

Computes the sum of a field (in 0) and a scalar (in 1).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** ponderation (type: ['double', 'vector<double>']) (optional: False): double or vector of double


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: add_constant_fc
- **full name**: math.add_constant_fc
- **internal name**: add_constant_fc
- **license**: None