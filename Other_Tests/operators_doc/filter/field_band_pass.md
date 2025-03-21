---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:band pass (field)

## Description

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** min_threshold (type: ['double', 'field']) (optional: False): A minimum threshold scalar or a field containing one value is expected.

- **Pin 2** max_threshold (type: ['double', 'field']) (optional: True): A maximum threshold scalar or a field containing one value is expected.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: filter
- **plugin**: core
- **scripting name**: field_band_pass
- **full name**: filter.field_band_pass
- **internal name**: core::field::band_pass
- **license**: any_dpf_supported_increments