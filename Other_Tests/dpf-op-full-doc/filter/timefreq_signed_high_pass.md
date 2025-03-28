# filter:signed high pass (timefreq)

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

## Inputs


- **Pin 0** time_freq_support (type: ['time_freq_support']) (optional: False): 

- **Pin 1** threshold (type: ['double', 'field']) (optional: False): A threshold scalar or a field containing one value is expected.

- **Pin 2** both (type: ['bool']) (optional: True): The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1.


## Outputs


- **Pin 0** time_freq_support (type: ['time_freq_support']): 

- **Pin 1** scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: filter
- **plugin**: core
- **scripting name**: timefreq_signed_high_pass
- **full name**: filter.timefreq_signed_high_pass
- **internal name**: core::timefreq::signed_high_pass
- **license**: any_dpf_supported_increments