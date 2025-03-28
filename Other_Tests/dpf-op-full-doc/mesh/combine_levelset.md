# mesh:combine levelset

## Description

Takes two level sets and computes their binary union.

## Inputs


- **Pin 0** fieldA (type: ['field']) (optional: False): 

- **Pin 1** fieldB (type: ['field']) (optional: False): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: combine_levelset
- **full name**: mesh.combine_levelset
- **internal name**: levelset::combine
- **license**: None