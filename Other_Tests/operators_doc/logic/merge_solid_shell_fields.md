---
category: logic
plugin: core
license: None
---

# logic:merge solid and shell fields

## Description

Merges shell and solid fields for each time step/frequency in the fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: merge::solid_shell_fields
- **full name**: logic.merge::solid_shell_fields
- **internal name**: merge::solid_shell_fields
- **license**: None