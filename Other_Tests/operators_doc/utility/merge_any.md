---
category: utility
plugin: core
license: None
---

# utility:merge any objects

## Description

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.

## Inputs


- **Pin 0** any (type: ['any']) (optional: False): Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators.


## Outputs


- **Pin 0** any (type: ['any']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_any
- **full name**: utility.merge_any
- **internal name**: merge::any
- **license**: None