---
category: result
plugin: mapdl
license: None
---

# result:pres to field

## Description

Read the presol generated file from mapdl.

## Inputs


- **Pin 0** filepath (type: ['string']) (optional: False): filepath

- **Pin 1** columns_to_read (type: ['int32']) (optional: True): columns_to_read


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl.pres_to_field
- **full name**: result.mapdl.pres_to_field
- **internal name**: PRES_Reader
- **license**: None