# averaging:elemental nodal to nodal (fields container)

## Description

Transforms Elemental Nodal fields into Nodal fields using an averaging process. The result is computed on a given node's scoping. If the input fields are mixed shell/solid, then the fields are split by element shape and the output fields container has an elshape label.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.

- **Pin 2** should_average (type: ['bool']) (optional: True): Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities).

- **Pin 3** scoping (type: ['scoping', 'scopings_container']) (optional: True): Average only on these nodes. If it is a scoping container, the label must correspond to the one of the fields containers.

- **Pin 4** extend_to_mid_nodes (type: ['bool']) (optional: True): Compute mid nodes (when available) by averaging the neighbour primary nodes.

- **Pin 5** extend_weights_to_mid_nodes (type: ['bool']) (optional: True): Extends weights to mid nodes (when available). Default is false.

- **Pin 26** merge_solid_shell (type: ['bool']) (optional: True): For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default).

- **Pin 27** shell_layer (type: ['int32']) (optional: True): If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 

- **Pin 1** weights (type: ['class dataProcessing::DpfTypeCollection<class dataProcessing::CPropertyField>']): Gives for each node, the number of times it was found in the Elemental Nodal field. Can be used to average later.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_nodal_to_nodal_fc
- **full name**: averaging.elemental_nodal_to_nodal_fc
- **internal name**: elemental_nodal_To_nodal_fc
- **license**: None