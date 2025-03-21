# utility:merge fc to fc field matrices

## Description

Merge fields of fields container into field matrices. The output is a fields container of field matrices.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): fields container to be merged

- **Pin 1** label (type: ['string']) (optional: False): Label where the merge is required

- **Pin 2** time_scoping (type: ['int32', 'vector<int32>', 'scoping']) (optional: True): if it's specified, fields container of field matrices is constructed only on the specified time scoping


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): fields container of field matrices obtained after merging.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge::fields_container_matrices_label
- **full name**: utility.merge::fields_container_matrices_label
- **internal name**: merge::fields_container_matrices_label
- **license**: None