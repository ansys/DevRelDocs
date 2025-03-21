# math:overall dot

## Description

Computes a dot product between two fields (fields are seen like a single large vector) and returns a scalar.

## Inputs


- **Pin 0** fieldA (type: ['field']) (optional: False): 

- **Pin 1** fieldB (type: ['field']) (optional: False): 


## Outputs


- **Pin 0** field (type: ['field']): Field defined on over-all location, contains a unique scalar value


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: overall_dot
- **full name**: math.overall_dot
- **internal name**: native::overall_dot
- **license**: None