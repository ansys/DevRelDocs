---
category: utility
plugin: core
license: None
---

# utility:merge generic data container

## Description

Merges a list of generic data container. For each data entry, the merge operation is forwarded to the correct merge Operator. Primitive types cannot be merged, first instance found will be maintained in the result.

## Inputs


- **Pin 0** generic_data_container (type: ['generic_data_container', 'vector<shared_ptr<generic_data_container>>']) (optional: False): Either a vector of generic data containers (sharing the same data types) or generic data containers from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.


## Outputs


- **Pin 0** generic_data_container (type: ['generic_data_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_generic_data_container
- **full name**: utility.merge_generic_data_container
- **internal name**: merge::generic_data_container
- **license**: None