# math:make one on component

## Description

Takes the input field's scoping and creates a field full of zeros, except for the indexes from pin 1 that will hold 1.0.

## Inputs


- **Pin 0** fieldA (type: ['field']) (optional: False): 

- **Pin 1** scalar_int (type: ['int32']) (optional: False): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: make_one_on_comp
- **full name**: math.make_one_on_comp
- **internal name**: make_one_on_comp
- **license**: None