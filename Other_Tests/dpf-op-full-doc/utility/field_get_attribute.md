# utility:field get attribute

## Description

A Field in pin 0 and a property name (string) in pin 1 are expected in input.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Accepted inputs are: 'time_freq_support' and 'scoping'.


## Outputs


- **Pin 0** property (type: ['time_freq_support', 'scoping']): Property value.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: field_get_attribute
- **full name**: utility.field_get_attribute
- **internal name**: field::get_attribute
- **license**: None