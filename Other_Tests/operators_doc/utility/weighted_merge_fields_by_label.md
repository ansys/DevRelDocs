---
category: utility
plugin: core
license: None
---

# utility:weighted merge fields by label

## Description

Performs a weighted merge on fields of a fields container that share the same label value.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** label (type: ['string']) (optional: False): Label identifier that should be merged.

- **Pin 2** merged_field_support (type: ['abstract_field_support']) (optional: True): The FieldsContainer's support that has already been merged.

- **Pin 3** sum_merge (type: ['bool']) (optional: True): Default is false. If true, redundant quantities are summed instead of being ignored.

- **Pin 1000** weights (type: ['vector<shared_ptr<class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>>>', 'property_field']) (optional: False): Weights to apply to each field from pin 1000 to ...


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: weighted_merge_fields_by_label
- **full name**: utility.weighted_merge_fields_by_label
- **internal name**: merge::weighted_fields_container_label
- **license**: None