---
category: serialization
plugin: core
license: any_dpf_supported_increments
---

# serialization:import symbolic workflow

## Description

Reads a file or string holding a Symbolic Workflow and instantiate a WorkFlow with its data.

## Inputs


- **Pin 0** string_or_path (type: ['string', 'data_sources']) (optional: False): 

- **Pin 2** format (type: ['int32']) (optional: True): -1 is auto-detection, 0 is ASCII format, 1 is binary, 2 is json, default is -1 (auto-detection).


## Outputs


- **Pin 0** workflow (type: ['workflow']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: import_symbolic_workflow
- **license**: any_dpf_supported_increments