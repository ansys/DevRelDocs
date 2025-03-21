# utility:merge collections

## Description

Merges a set of collections into a unique one.

## Inputs


- **Pin 0** collections (type: ['vector<shared_ptr<any_collection>>', 'any_collection']) (optional: False): a vector of collections to merge or collections from pin 0 to ...


## Outputs


- **Pin 0** merged_collections (type: ['any_collection']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_collections
- **full name**: utility.merge_collections
- **internal name**: merge::any_collection
- **license**: None