# filter:high pass (fields container)

## Description

The high pass filter returns all the values above (but not equal to) the threshold value in input.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** threshold (type: ['double', 'field']) (optional: False): A threshold scalar or a field containing one value is expected.

- **Pin 2** both (type: ['bool']) (optional: True): The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: filter
- **plugin**: core
- **scripting name**: field_high_pass_fc
- **full name**: filter.field_high_pass_fc
- **internal name**: core::field::high_pass_fc
- **license**: any_dpf_supported_increments