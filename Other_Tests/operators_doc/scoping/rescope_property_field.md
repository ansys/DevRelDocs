# scoping:rescope property field

## Description

Rescopes a property field on the given scoping. If an ID does not exist in the original property field, the default value (in 2) is used when defined.

## Inputs


- **Pin 0** fields (type: ['property_fields_container', 'property_field']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping', 'vector<int32>']) (optional: True): 

- **Pin 2** default_value (type: ['int32', 'vector<int32>']) (optional: True): If pin 2 is used, the IDs not found in the property field are added with this default value.


## Outputs


- **Pin 0** fields (type: ['property_fields_container', 'property_field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: rescope_property_field
- **full name**: scoping.rescope_property_field
- **internal name**: Rescope_pf
- **license**: None