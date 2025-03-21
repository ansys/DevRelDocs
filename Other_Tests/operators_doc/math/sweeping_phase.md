---
category: math
plugin: core
license: None
---

# math:sweeping phase

## Description

Shifts the phase of a real and an imaginary field (in 0 and 1) of a given angle (in 3) of a unit (in 4).

## Inputs


- **Pin 0** real_field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** imaginary_field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 2** angle (type: ['double']) (optional: False): 

- **Pin 3** unit_name (type: ['string']) (optional: True): String Unit. Supported values: "deg" or "rad". Default: "rad".

- **Pin 4** abs_value (type: ['bool']) (optional: False): 

- **Pin 5** imaginary_part_null (type: ['bool']) (optional: False): If the imaginary part field is empty and this pin is true, then the imaginary part is supposed to be 0 (default is false).


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: sweeping_phase
- **license**: None