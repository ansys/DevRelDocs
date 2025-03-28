# averaging:elemental difference (fields container)

## Description

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the unaveraged or averaged (depending on the input fields) computed result for all nodes in this element. The result is computed on a given element scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): The mesh region in this pin is used to perform the averaging, used if there is no fields support.

- **Pin 3** scoping (type: ['scoping', 'scopings_container']) (optional: True): Average only on these elements. If it is scoping container, the label must correspond to the one of the fields container.

- **Pin 10** collapse_shell_layers (type: ['bool']) (optional: True): The maximum elemental difference is taken through the different shell layers if true (default is false).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_difference_fc
- **full name**: averaging.elemental_difference_fc
- **internal name**: elemental_difference_fc
- **license**: any_dpf_supported_increments