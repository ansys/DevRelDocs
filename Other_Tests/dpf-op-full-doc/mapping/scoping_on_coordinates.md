# mapping:scoping on coordinates

## Description

Finds the Elemental scoping of a set of coordinates.

## Inputs


- **Pin 0** coordinates (type: ['field']) (optional: False): 

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: scoping_on_coordinates
- **full name**: mapping.scoping_on_coordinates
- **internal name**: scoping::on_coordinates
- **license**: None