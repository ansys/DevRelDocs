# logic:enrich materials

## Description

Takes a MaterialContainer and a stream and enriches the MaterialContainer using stream data.

## Inputs


- **Pin 0** MaterialContainer (type: []) (optional: False): 

- **Pin 1** streams (type: ['streams_container', 'fields_container']) (optional: False): 

- **Pin 2** streams_mapping (type: ['property_fields_container']) (optional: False): 


## Outputs


- **Pin 0** MaterialContainer (type: ['bool']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: enrich_materials
- **full name**: logic.enrich_materials
- **internal name**: enrich_materials
- **license**: any_dpf_supported_increments