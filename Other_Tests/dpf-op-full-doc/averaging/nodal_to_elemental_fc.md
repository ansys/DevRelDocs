# averaging:nodal to elemental (fields container)

## Description

Transforms Nodal fields into Elemental fields using an averaging process. The result is computed on a given element's scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

- **Pin 3** scoping (type: ['scoping', 'scopings_container']) (optional: True): Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers.

- **Pin 10** collapse_shell_layers (type: ['bool']) (optional: True): If true, shell layers are averaged as well (default is false).

- **Pin 26** merge_solid_shell (type: ['bool']) (optional: True): For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default).

- **Pin 27** shell_layer (type: ['int32']) (optional: True): If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: nodal_to_elemental_fc
- **full name**: averaging.nodal_to_elemental_fc
- **internal name**: nodal_to_elemental_fc
- **license**: None