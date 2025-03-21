---
category: logic
plugin: core
license: None
---

# logic:same string fields?

## Description

Takes two string fields and compares them.

## Inputs


- **Pin 0** string_fieldA (type: ['string_field']) (optional: False): 

- **Pin 1** string_fieldB (type: ['string_field']) (optional: False): 


## Outputs


- **Pin 0** are_identical (type: ['bool']): 

- **Pin 1** information (type: ['string']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: identical_string_fields
- **full name**: logic.identical_string_fields
- **internal name**: compare::string_field
- **license**: None