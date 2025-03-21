---
category: min_max
plugin: core
license: None
---

# min_max:min by component

## Description

Give the minimum for each element rank by comparing several fields.

## Inputs


- **Pin 0** use_absolute_value (type: ['bool']) (optional: False): use_absolute_value

- **Pin 1** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: min_by_component
- **license**: None