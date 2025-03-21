---
category: utility
plugin: core
license: None
---

# utility:unitary field

## Description

Takes a field and returns another field of scalars in the same location and scoping as the input field.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: unitary_field
- **full name**: utility.unitary_field
- **internal name**: make_unit
- **license**: None