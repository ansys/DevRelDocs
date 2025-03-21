# utility:assemble scalars to matrix

## Description

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).

## Inputs


- **Pin 0** xx (type: ['field']) (optional: True): 

- **Pin 1** yy (type: ['field']) (optional: True): 

- **Pin 2** zz (type: ['field']) (optional: True): 

- **Pin 3** xy (type: ['field']) (optional: True): 

- **Pin 4** yz (type: ['field']) (optional: True): 

- **Pin 5** xz (type: ['field']) (optional: True): 

- **Pin 6** yx (type: ['field']) (optional: True): 

- **Pin 7** zy (type: ['field']) (optional: True): 

- **Pin 8** zx (type: ['field']) (optional: True): 

- **Pin 60** symmetrical (type: ['bool']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: assemble_scalars_to_matrices
- **license**: None