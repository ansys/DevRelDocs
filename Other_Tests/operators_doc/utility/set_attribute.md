---
category: utility
plugin: core
license: None
---

# utility:set attribute

## Description

Uses the FieldsContainer APIs to modify it.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Supported property names are: "labels".

- **Pin 2** property_identifier (type: ['vector<string>', 'label_space']) (optional: True): Value of the property to be set : vector of string or LabelSpace for "labels".


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): Returns the modified FieldsContainer.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: set_attribute
- **full name**: utility.set_attribute
- **internal name**: fieldscontainer::set_attribute
- **license**: None