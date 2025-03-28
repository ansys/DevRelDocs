# utility:merge fields into field matrix

## Description

Assembles a set of fields into a field matrix.

## Inputs


- **Pin 0** fields (type: ['vector<shared_ptr<field>>', 'field', 'fields_container']) (optional: False): Either a fields container, a vector of fields to merge, or fields from pin 0 to ...


## Outputs


- **Pin 0** merged_field_matrix (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_to_field_matrix
- **full name**: utility.merge_to_field_matrix
- **internal name**: merge::to_field_matrix
- **license**: None