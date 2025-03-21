---
category: result
plugin: core
license: None
---

# result:material property of element

## Description

Loads the appropriate operator based on the data sources and retrieves material properties.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** material_properties (type: ['field']): material properties


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: material_property_of_element
- **full name**: result.material_property_of_element
- **internal name**: MaterialPropertyOfElement
- **license**: None