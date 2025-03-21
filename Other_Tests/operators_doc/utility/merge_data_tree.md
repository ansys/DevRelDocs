---
category: utility
plugin: core
license: None
---

# utility:merge data tree

## Description

Merges a list of data trees. Attributes names shouldn't be shared accross data tree instances.

## Inputs


- **Pin 0** data_tree (type: ['data_tree', 'vector<shared_ptr<data_tree>>']) (optional: False): Either a vector of data trees or data trees from pin 0 to ... to merge.


## Outputs


- **Pin 0** any (type: ['any']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_data_tree
- **full name**: utility.merge_data_tree
- **internal name**: merge::data_tree
- **license**: None