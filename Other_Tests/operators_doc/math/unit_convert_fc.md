---
category: math
plugin: core
license: None
---

# math:unit convert (fields container)

## Description

Converts an input fields container of a given unit to another unit.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** unit_name (type: ['string']) (optional: False): unit as a string, ex 'm' for meter, 'Pa' for pascal,...


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
- **internal name**: unit_convert_fc
- **license**: None