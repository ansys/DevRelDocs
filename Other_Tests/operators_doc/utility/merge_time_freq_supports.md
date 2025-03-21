---
category: utility
plugin: core
license: None
---

# utility:merge time freq supports

## Description

Assembles a set of time/frequency supports into a unique one.

## Inputs


- **Pin 0** time_freq_supports (type: ['vector<shared_ptr<time_freq_support>>', 'time_freq_support']) (optional: False): A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ...


## Outputs


- **Pin 0** merged_support (type: ['time_freq_support']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_time_freq_supports
- **full name**: utility.merge_time_freq_supports
- **internal name**: merge::time_freq_support
- **license**: None