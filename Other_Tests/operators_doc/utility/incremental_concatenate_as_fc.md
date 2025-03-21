---
category: utility
plugin: core
license: None
---

# utility:incremental concantenate as fields container.

## Description

Assemble fields in a fields container.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 1** label (type: ['label_space']) (optional: True): Label space value that must be applied to the added field.


## Outputs


- **Pin 0** output (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: incremental_concatenate_as_fc
- **full name**: utility.incremental_concatenate_as_fc
- **internal name**: incremental::concatenate_as_fc
- **license**: None