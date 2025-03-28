# utility:assemble scalars to vector fc

## Description

Takes three scalar fields container and assembles them as a 3D vector fields container.

## Inputs


- **Pin 0** x (type: ['fields_container']) (optional: True): 

- **Pin 1** y (type: ['fields_container']) (optional: True): 

- **Pin 2** z (type: ['fields_container']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: assemble_scalars_to_vectors_fc
- **license**: None