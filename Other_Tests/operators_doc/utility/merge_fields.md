---
category: utility
plugin: core
license: None
---

# utility:merge fields

## Description

Assembles a set of fields into a unique one.

## Inputs


- **Pin -2** sum_merge (type: ['bool']) (optional: True): Default is false. If true, redundant quantities are summed instead of being ignored.

- **Pin -1** merged_support (type: ['abstract_field_support']) (optional: True): Already merged field support.

- **Pin 0** fields (type: ['vector<shared_ptr<field>>', 'field', 'fields_container']) (optional: False): Either a fields container, a vector of fields to merge, or fields from pin 0 to ...


## Outputs


- **Pin 0** merged_field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_fields
- **full name**: utility.merge_fields
- **internal name**: merge::field
- **license**: None