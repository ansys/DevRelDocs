---
category: serialization
plugin: core
license: None
---

# serialization:hdf5dpf custom read

## Description

Extract a custom result from an hdf5dpf file.

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 3** streams (type: ['streams_container']) (optional: True): Hdf5df file stream.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): Hdf5df file data source.

- **Pin 24** meta_data (type: ['abstract_data_tree']) (optional: True): meta_data that may be used to evaluate results or extract workflows.

- **Pin 60** result_name (type: []) (optional: False): Name of the result that must be extracted from the hdf5dpf file


## Outputs


- **Pin 0** field_or_fields_container (type: ['fields_container', 'field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: core
- **scripting name**: hdf5dpf_custom_read
- **full name**: serialization.hdf5dpf_custom_read
- **internal name**: hdf5::h5dpf::custom
- **license**: None