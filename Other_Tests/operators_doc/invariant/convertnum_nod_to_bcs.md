# invariant:convertnum nod to bcs

## Description

Converts a fields container from NOD to BCS ordering.

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
- **scripting name**: convertnum_nod_to_bcs
- **full name**: invariant.convertnum_nod_to_bcs
- **internal name**: convertnum_nod_to_bcs
- **license**: None