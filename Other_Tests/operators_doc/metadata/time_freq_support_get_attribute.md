---
category: metadata
plugin: core
license: None
---

# metadata:time freq support get attribute

## Description

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

## Inputs


- **Pin 0** time_freq_support (type: ['time_freq_support']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs".

- **Pin 2** property_identifier (type: ['int32']) (optional: True): Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping.

- **Pin 3** property_identifier_2 (type: ['int32']) (optional: True): Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered).


## Outputs


- **Pin 0** property (type: ['double', 'field', 'scoping']): Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", and a Field otherwise.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: time_freq_support_get_attribute
- **full name**: metadata.time_freq_support_get_attribute
- **internal name**: timefreqsupport::get_attribute
- **license**: None