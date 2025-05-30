---
category: invariant
plugin: mapdl
license: None
---

# invariant:convertnum bcs to nod

## Description

Converts a fields container from BCS to NOD ordering.

## Inputs


- **Pin 2** fields_container (type: ['fields_container']) (optional: False): fields_container

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data_sources (must contain the full file).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: invariant
- **plugin**: mapdl
- **scripting name**: convertnum_bcs_to_nod
- **full name**: invariant.convertnum_bcs_to_nod
- **internal name**: convertnum_bcs_to_nod
- **license**: None