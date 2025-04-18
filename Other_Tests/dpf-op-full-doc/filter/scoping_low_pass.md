# filter:low pass (scoping)

## Description

The low pass filter returns all the values below (but not equal to) the threshold value in input.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** threshold (type: ['double', 'field']) (optional: False): a threshold scalar or a field containing one value is expected

- **Pin 2** both (type: ['bool']) (optional: True): The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.


## Outputs


- **Pin 0** scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: filter
- **plugin**: core
- **scripting name**: scoping_low_pass
- **full name**: filter.scoping_low_pass
- **internal name**: core::scoping::low_pass
- **license**: any_dpf_supported_increments