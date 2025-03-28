# utility:for each

## Description

Allows to write a loop over a chunk of operators.

## Inputs


- **Pin 0** iterable (type: []) (optional: False): Either the result of the make_iterable_info operator, or the operator that must be incremented.

- **Pin 1** iterable_values (type: []) (optional: True): 

- **Pin 2** pin_index (type: ['int32']) (optional: True): 

- **Pin 3** forward (type: []) (optional: False): 


## Outputs


- **Pin 0** empty (type: []): 

- **Pin 3** output (type: []): 


## Configurations


- **evaluate_inputs_before_run** (type: ['bool']) (default: false): If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: for_each
- **full name**: utility.for_each
- **internal name**: for_each
- **license**: None