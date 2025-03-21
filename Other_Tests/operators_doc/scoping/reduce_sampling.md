---
category: scoping
plugin: core
license: None
---

# scoping:reduce sampling scoping

## Description

Take a scoping and remove half of it's content.

## Inputs


- **Pin 0** mesh_scoping (type: ['scoping']) (optional: False): 

- **Pin 1** denominator (type: ['int32']) (optional: True): Set the number of time the scoping is reduced (default is 2). Must be integer value above 1.


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: reduce_sampling
- **full name**: scoping.reduce_sampling
- **internal name**: scoping::reduce_sampling
- **license**: None