---
category: utility
plugin: core
license: None
---

# utility:hdf5dpf workflow provider

## Description

Extract a custom result from an hdf5dpf file as an executable workflow.

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 3** streams (type: ['streams_container']) (optional: True): Hdf5df file stream.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): Hdf5df file data source.

- **Pin 24** meta_data (type: ['abstract_data_tree']) (optional: True): meta_data that may be used to evaluate results or extract workflows.

- **Pin 60** result_name (type: []) (optional: False): Name of the result that must be extracted from the hdf5dpf file


## Outputs


- **Pin 0** field_or_fields_container (type: ['workflow']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: hdf5dpf_workglow_provider
- **full name**: utility.hdf5dpf_workglow_provider
- **internal name**: hdf5::h5dpf::workflow_provider
- **license**: None