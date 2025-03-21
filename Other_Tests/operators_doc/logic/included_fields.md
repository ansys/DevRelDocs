---
category: logic
plugin: core
license: None
---

# logic:fields included?

## Description

Checks if one field belongs to another.

## Inputs


- **Pin 0** fieldA (type: ['field']) (optional: False): 

- **Pin 1** fieldB (type: ['field']) (optional: False): 

- **Pin 2** double_value (type: ['double']) (optional: False): Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14).

- **Pin 3** double_tolerance (type: ['double']) (optional: True): Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical (v1-v2)/v2 < relativeTol (default is 0.001).


## Outputs


- **Pin 0** included (type: ['bool']): bool (true if belongs...)

- **Pin 1** message (type: ['string']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: included_fields
- **full name**: logic.included_fields
- **internal name**: Are_fields_included
- **license**: None