---
category: result
plugin: mapdl
license: None
---

# result:total mass

## Description

Reads total mass from mode file.

## Inputs


- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data sources (must contain at least one mode file).


## Outputs


- **Pin 0** mass (type: ['double']): the unit should be grabbed from the rst file


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: total_mass
- **full name**: result.total_mass
- **internal name**: mapdl::mode::total_mass
- **license**: None