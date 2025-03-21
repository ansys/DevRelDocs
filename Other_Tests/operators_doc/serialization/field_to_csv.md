---
category: serialization
plugin: csv
license: any_dpf_supported_increments
---

# serialization:field to csv

## Description

Exports a field or a fields container into a csv file

## Inputs


- **Pin 0** field_or_fields_container (type: ['fields_container', 'field']) (optional: False): field_or_fields_container

- **Pin 1** file_path (type: ['string']) (optional: False): 

- **Pin 2** storage_type (type: ['int32']) (optional: True): storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0.


## Outputs



## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: csv
- **scripting name**: None
- **full name**: None
- **internal name**: field_to_csv
- **license**: any_dpf_supported_increments