---
category: math
plugin: core
license: None
---

# math:modulus (fields container)

## Description

Computes amplitude of a real and an imaginary field.

## Inputs


- **Pin 0** fieldA (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** fieldB (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: amplitude
- **license**: None