# averaging:elemental fraction (fields container)

## Description

Transforms Elemental Nodal fields into Elemental fields. Each elemental value is the fraction between the elemental difference and the entity average. The result is computed on a given element's scoping.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: True): The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

- **Pin 3** scoping (type: ['scoping']) (optional: True): Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

- **Pin 6** denominator (type: ['fields_container']) (optional: True): If a fields container is set in this pin, it is used as the denominator of the fraction instead of entity_average_fc.

- **Pin 10** collapse_shell_layers (type: ['bool']) (optional: True): The elemental difference and the entity average are taken through the different shell layers if true (default is false).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_fraction_fc
- **full name**: averaging.elemental_fraction_fc
- **internal name**: elemental_fraction_fc
- **license**: any_dpf_supported_increments