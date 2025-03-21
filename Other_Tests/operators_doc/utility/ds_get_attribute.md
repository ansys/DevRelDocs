---
category: utility
plugin: core
license: None
---

# utility:data sources get attribute

## Description

A DataSources in pin 0 and a property name (string) in pin 1 are expected in input. An index refering to the property can also be provided.

## Inputs


- **Pin 0** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Accepted inputs are: 'file_path' (returns string), 'result_file_name' (returns string), 'domain_file_path' (returns string), 'domain_result_file_name' (returns string), 'num_keys' (returns int), num_result_key (returns int), num_file_path (returns int), 'num_result_file_path' (returns int), 'key_by_index' (returns string), 'result_key_by_index' (returns string), 'path_by_index' (returns string), 'path_key_by_index' (returns string).

- **Pin 2** property_index (type: ['int32']) (optional: True): Index for the property. Must be set for 'domain_file_path', 'domain_result_file_name' 'key_by_index', 'result_key_by_index', 'path_by_index' and 'path_key_by_index' properties.

- **Pin 3** property_key (type: ['string']) (optional: True): Key to look for. Must be set for 'file_path' and 'domain_file_path' properties.

- **Pin 4** property_result_key (type: ['string']) (optional: True): Result key to look for. Can be used for 'file_path', 'result_file_name', 'domain_file_path' and 'domain_result_file_name'.


## Outputs


- **Pin 0** property (type: ['string', 'int32']): Property value.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: ds_get_attribute
- **full name**: utility.ds_get_attribute
- **internal name**: datasources::get_attribute
- **license**: None