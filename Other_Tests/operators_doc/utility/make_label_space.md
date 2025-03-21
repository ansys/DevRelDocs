---
category: utility
plugin: core
license: None
---

# utility:make label space

## Description

Assemble strings and integers to make a label space.

## Inputs


- **Pin 0** base_label (type: ['label_space', 'fields_container', 'scopings_container']) (optional: True): Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values.

- **Pin 1** label_name (type: ['string']) (optional: False): 

- **Pin 2** label_value (type: ['int32']) (optional: False): 


## Outputs


- **Pin 0** label (type: ['label_space']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: make_label_space
- **full name**: utility.make_label_space
- **internal name**: make_label_space
- **license**: None