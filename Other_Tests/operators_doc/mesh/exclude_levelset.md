---
category: mesh
plugin: core
license: None
---

# mesh:exclude levelset

## Description

Takes two level sets and excludes the second one from the first.

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
- **scripting name**: exclude_levelset
- **full name**: mesh.exclude_levelset
- **internal name**: levelset::exclude
- **license**: None