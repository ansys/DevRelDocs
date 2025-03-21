---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:abc weightings

## Description

Computes ABC-weightings for the amplitude spectrum in dB units.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): data to be weighted in dB units.

- **Pin 1** weighting_type (type: ['int32']) (optional: False): if this pin is set to 0, the A-weighting is computed, 1 the B-weigting is computed and 2 the C-weightings is computed.

- **Pin 2** shape_by_tf_scoping (type: ['bool']) (optional: False): if this pin is set to true, each field of the input fields container is defined by time freq scoping and not by ids. Default is false


## Outputs


- **Pin 0** weightings (type: ['fields_container']): weighted data in dB units.


## Configurations


- **inplace** (type: ['bool']) (default: false): The output is written over the input to save memory if this config is set to true.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: filter
- **plugin**: core
- **scripting name**: abc_weightings
- **full name**: filter.abc_weightings
- **internal name**: abc_weightings
- **license**: any_dpf_supported_increments