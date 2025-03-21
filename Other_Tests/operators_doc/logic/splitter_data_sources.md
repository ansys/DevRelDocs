---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:splitter::data_sources

## Description

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.

## Inputs


- **Pin 0** data_sources (type: ['data_sources']) (optional: False): Data sources to split.

- **Pin 1** output_count (type: ['int32']) (optional: False): Number of desired outputs.


## Outputs


- **Pin -1** output_count (type: ['int32']): Actual number of outputs.

- **Pin 0** outputs (type: ['data_sources']): Data sources outputs.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: splitter::data_sources
- **full name**: logic.splitter::data_sources
- **internal name**: splitter::data_sources
- **license**: any_dpf_supported_increments