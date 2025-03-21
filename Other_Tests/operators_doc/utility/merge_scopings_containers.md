---
category: utility
plugin: core
license: None
---

# utility:merge scopings containers

## Description

Assembles a set of scopings containers into a unique one.

## Inputs


- **Pin 0** scopings_containers (type: ['vector<shared_ptr<scopings_container>>', 'scopings_container']) (optional: False): A vector of scopings containers to merge or scopings containers from pin 0 to ...


## Outputs


- **Pin 0** merged_scopings_container (type: ['scopings_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_scopings_containers
- **full name**: utility.merge_scopings_containers
- **internal name**: merge::scopings_container
- **license**: None