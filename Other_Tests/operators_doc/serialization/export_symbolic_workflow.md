---
category: serialization
plugin: core
license: any_dpf_supported_increments
---

# serialization:export symbolic workflow

## Description

Transforms a Workflow into a symbolic Workflow and writes it to a file (if a path is set in input) or string

## Inputs


- **Pin 0** workflow (type: ['workflow']) (optional: False): 

- **Pin 1** path (type: ['string']) (optional: True): 

- **Pin 2** format (type: ['int32']) (optional: True): 0 is ASCII format and 1 is binary, default is 0.

- **Pin 3** options (type: ['int32']) (optional: True): 1 copies connections with its data, 2 forwards named inputs and outputs names, 7 copies connections of named inputs and ouputs with their data. default is 7.


## Outputs


- **Pin 0** data_sources (type: ['data_sources', 'string']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: export_symbolic_workflow
- **license**: any_dpf_supported_increments