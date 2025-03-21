---
category: scoping
plugin: core
license: None
---

# scoping:intersect scopings

## Description

Intersect 2 scopings and return the intersection and the difference between the intersection and the first scoping.

## Inputs


- **Pin 0** scopingA (type: ['scoping']) (optional: False): 

- **Pin 1** scopingB (type: ['scoping']) (optional: False): 


## Outputs


- **Pin 0** intersection (type: ['scoping']): 

- **Pin 1** scopingA_min_intersection (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: intersect
- **full name**: scoping.intersect
- **internal name**: scoping::intersect
- **license**: None