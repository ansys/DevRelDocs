---
category: math
plugin: core
license: None
---

# math:linear combination

## Description

Computes aXY + bZ where a,b (in 0, in 3) are scalar and X,Y,Z (in 1,2,4) are complex numbers.

## Inputs


- **Pin 0** a (type: ['double']) (optional: False): Double

- **Pin 1** fields_containerA (type: ['fields_container']) (optional: False): 

- **Pin 2** fields_containerB (type: ['fields_container']) (optional: False): 

- **Pin 3** b (type: ['double']) (optional: False): Double

- **Pin 4** fields_containerC (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: linear_combination
- **full name**: math.linear_combination
- **internal name**: CplxOp
- **license**: None