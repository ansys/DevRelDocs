---
category: utility
plugin: core
license: None
---

# utility:merge string fields

## Description

Assembles a set of string fields into a unique one.

## Inputs


- **Pin 0** vector<shared_ptr<string_field>> (type: ['vector<shared_ptr<string_field>>', 'string_field']) (optional: False): Either a a vector of string fields to merge or string fields from pin 0 to ...


## Outputs


- **Pin 0** string_field (type: ['string_field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_string_fields
- **full name**: utility.merge_string_fields
- **internal name**: merge::string_field
- **license**: None