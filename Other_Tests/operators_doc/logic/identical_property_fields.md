---
category: logic
plugin: core
license: None
---

# logic:same property fields?

## Description

Takes two property fields and compares them.

## Inputs


- **Pin 0** property_fieldA (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** property_fieldB (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** are_identical (type: ['bool']): 

- **Pin 1** information (type: ['string']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: identical_property_fields
- **full name**: logic.identical_property_fields
- **internal name**: compare::property_field
- **license**: None