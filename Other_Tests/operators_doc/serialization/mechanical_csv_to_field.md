---
category: serialization
plugin: csv
license: None
---

# serialization:mechanical csv to field

## Description

Reads mechanical exported csv file

## Inputs


- **Pin 0** unit (type: ['class dataProcessing::unit::CUnit']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 9** requested_location (type: ['string', 'field_definition']) (optional: False): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: csv
- **scripting name**: None
- **full name**: None
- **internal name**: mechanical_csv_to_field
- **license**: None