# utility:convert to scoping

## Description

take a int or a vector of int and transform it in a one entity field of location "numeric".

## Inputs


- **Pin 0** int_or_vector_int (type: ['int32', 'vector<int32>']) (optional: False): int or vector of int

- **Pin 1** location (type: ['string']) (optional: True): 


## Outputs


- **Pin 0** scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: ints_to_scoping
- **full name**: utility.ints_to_scoping
- **internal name**: scopingify
- **license**: None