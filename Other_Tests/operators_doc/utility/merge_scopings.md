---
category: utility
plugin: core
license: None
---

# utility:merge scopings

## Description

Assembles a set of scopings into a unique one.

## Inputs


- **Pin 0** scopings (type: ['scoping', 'scopings_container', 'vector<shared_ptr<scoping>>']) (optional: False): Either a scopings container, a vector of scopings to merge, or scopings from pin 0 to ...


## Outputs


- **Pin 0** merged_scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_scopings
- **full name**: utility.merge_scopings
- **internal name**: merge::scoping
- **license**: None