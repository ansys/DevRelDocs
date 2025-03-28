# averaging:nodal difference (fields container)

## Description

Transforms Elemental Nodal fields into Nodal fields. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

- **Pin 3** scoping (type: ['scoping', 'scopings_container']) (optional: True): Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: nodal_difference_fc
- **full name**: averaging.nodal_difference_fc
- **internal name**: nodal_difference_fc
- **license**: any_dpf_supported_increments