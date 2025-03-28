# logic:same meshes?

## Description

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).

## Inputs


- **Pin 0** meshA (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** meshB (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 2** small_value (type: ['double']) (optional: False): define what is a small value for numeric comparison.

- **Pin 3** tolerance (type: ['double']) (optional: False): define the relative tolerance ceil for numeric comparison.

- **Pin 4** compare_auxiliary (type: ['bool']) (optional: False): compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.


## Outputs


- **Pin 0** are_identical (type: ['bool']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: identical_meshes
- **full name**: logic.identical_meshes
- **internal name**: compare::mesh
- **license**: None