---
category: metadata
plugin: core
license: None
---

# metadata:cyclic analysis?

## Description

Reads if the model is cyclic from the result file.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): streams (result file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): If the stream is null, retrieves the file path from the data sources.


## Outputs


- **Pin 0** file_path (type: ['string']): returns 'single_stage' or 'multi_stage' or an empty string for non cyclic model


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: is_cyclic
- **full name**: metadata.is_cyclic
- **internal name**: is_cyclic
- **license**: None