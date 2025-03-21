---
category: scoping
plugin: core
license: None
---

# scoping:scoping get attribute

## Description

Uses the Scoping APIs to return a given attribute of the scoping in input.

## Inputs


- **Pin 0** scoping (type: ['scoping']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Supported property names are: "ids", "location".


## Outputs


- **Pin 0** property (type: ['vector<int32>', 'string']): Returns a vector of int for property: "ids" and a string for property: "location".


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: scoping_get_attribute
- **full name**: scoping.scoping_get_attribute
- **internal name**: scoping::get_attribute
- **license**: None