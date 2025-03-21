# utility:delegate to operator

## Description

Delegate the run to an Operator instantiated by the name in input (forwards all the input of this Operator to the sub Operator).

## Inputs


- **Pin -1** operator_name (type: ['string']) (optional: False): 


## Outputs


- **Pin 0** any (type: ['any']): inputs


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: delegate_to_operator
- **full name**: utility.delegate_to_operator
- **internal name**: delegate_to_operator
- **license**: None