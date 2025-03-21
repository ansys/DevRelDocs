---
category: utility
plugin: core
license: None
---

# utility:merge property fields

## Description

Assembles a set of property fields into a unique one.

## Inputs


- **Pin 0** vector<shared_ptr<property_field>> (type: ['vector<shared_ptr<property_field>>', 'property_field', 'property_fields_container']) (optional: False): Either a property fields container, a vector of property fields to merge or property fields from pin 0 to ...


## Outputs


- **Pin 0** property_field (type: ['property_field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_property_fields
- **full name**: utility.merge_property_fields
- **internal name**: merge::property_field
- **license**: None