# utility:merge fields by label

## Description

Merges the fields of a fields container that share the same label value.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** label (type: ['string']) (optional: False): Label identifier that should be merged.

- **Pin 2** merged_field_support (type: ['abstract_field_support']) (optional: True): The FieldsContainer's support that has already been merged.

- **Pin 3** sum_merge (type: ['bool']) (optional: True): Default is false. If true, redundant quantities are summed instead of being ignored.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 

- **Pin 1** merged_field_support (type: ['abstract_field_support']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_fields_by_label
- **full name**: utility.merge_fields_by_label
- **internal name**: merge::fields_container_label
- **license**: None