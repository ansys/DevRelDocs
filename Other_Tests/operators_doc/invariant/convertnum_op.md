---
category: invariant
plugin: mapdl
license: None
---

# invariant:convertnum operator

## Description

Converts a fields container from one mapdl ordering to another mapdl ordering. Supported mapdl ordering are BCS=0, FUL=1, NOD=2.

## Inputs


- **Pin 0** input_ordering (type: ['int32']) (optional: False): Input ordering number

- **Pin 1** output_ordering (type: ['int32']) (optional: False): Output ordering number

- **Pin 2** fields_container (type: ['fields_container']) (optional: False): Expect fields container

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data_sources (must contain the full file).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: invariant
- **plugin**: mapdl
- **scripting name**: convertnum_op
- **full name**: invariant.convertnum_op
- **internal name**: convertnum_op
- **license**: None