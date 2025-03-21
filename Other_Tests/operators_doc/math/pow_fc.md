---
category: math
plugin: core
license: None
---

# math:^ (fields container)

## Description

Computes element-wise field[i]^p.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** factor (type: ['double']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: pow_fc
- **full name**: math.pow_fc
- **internal name**: Pow_fc
- **license**: None