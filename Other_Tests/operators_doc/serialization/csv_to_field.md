# serialization:csv to field

## Description

transform csv file to a field or fields container

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): data sources containing a file with csv extension


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: csv
- **scripting name**: None
- **full name**: None
- **internal name**: csv_to_field
- **license**: any_dpf_supported_increments