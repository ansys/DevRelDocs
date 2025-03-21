---
category: utility
plugin: core
license: None
---

# utility:set property

## Description

Sets a property to an input field/field container.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Property to set

- **Pin 2** property_value (type: ['string', 'int32', 'double']) (optional: False): Property to set


## Outputs


- **Pin 0** field (type: ['field', 'fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: set_property
- **full name**: utility.set_property
- **internal name**: field::set_property
- **license**: None