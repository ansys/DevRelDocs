---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to matrix fc

## Description

Take nine scalar fields container and assemble them as a 3x3 matrix fields. If the 'symmetrical' input is set to true, only six field containers are required (xx, yy, zz, xy, xz and yz).

## Inputs


- **Pin 0** xx (type: ['fields_container']) (optional: True): 

- **Pin 1** yy (type: ['fields_container']) (optional: True): 

- **Pin 2** zz (type: ['fields_container']) (optional: True): 

- **Pin 3** xy (type: ['fields_container']) (optional: True): 

- **Pin 4** yz (type: ['fields_container']) (optional: True): 

- **Pin 5** xz (type: ['fields_container']) (optional: True): 

- **Pin 6** yx (type: ['fields_container']) (optional: True): 

- **Pin 7** zy (type: ['fields_container']) (optional: True): 

- **Pin 8** zx (type: ['fields_container']) (optional: True): 

- **Pin 60** symmetrical (type: ['bool']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: assemble_scalars_to_matrices_fc
- **license**: None