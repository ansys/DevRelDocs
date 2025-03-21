# math:unit convert

## Description

Converts an input field/fields container or mesh of a given unit to another unit.

## Inputs


- **Pin 0** entity_to_convert (type: ['field', 'fields_container', 'abstract_meshed_region', 'meshes_container']) (optional: False): 

- **Pin 1** unit_name (type: ['string', 'int32']) (optional: False): unit as a string, ex 'm' for meter, 'Pa' for pascal,... Or ansys unit system's ID


## Outputs


- **Pin 0** converted_entity (type: ['field', 'fields_container', 'abstract_meshed_region', 'meshes_container']): the output entity is the same as the input (inplace operator)


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: unit_convert
- **license**: None