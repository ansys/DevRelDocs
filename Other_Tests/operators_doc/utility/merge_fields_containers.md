---
category: utility
plugin: core
license: None
---

# utility:merge fields containers

## Description

Assembles a set of fields containers into a unique one.

## Inputs


- **Pin -200** should_merge_named_selections (type: ['bool']) (optional: True): For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

- **Pin -3** sum_merge (type: ['bool']) (optional: True): Default is false. If true, redundant quantities are summed instead of being ignored.

- **Pin -2** merged_fields_support (type: ['abstract_field_support']) (optional: True): Already merged field support.

- **Pin -1** merged_fields_containers_support (type: ['abstract_field_support', 'umap<string,shared_ptr<abstract_field_support>>']) (optional: True): Already merged fields containers support.

- **Pin 0** fields_containers (type: ['vector<shared_ptr<fields_container>>', 'fields_container']) (optional: False): A vector of fields containers to merge or fields containers from pin 0 to ...


## Outputs


- **Pin 0** merged_fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_fields_containers
- **full name**: utility.merge_fields_containers
- **internal name**: merge::fields_container
- **license**: None