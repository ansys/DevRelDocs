# utility:change shell layers

## Description

Extract the expected shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and corresponding field in output will be empty. If permissive configuration input is set to true (default), carefully check the result.

## Inputs


- **Pin 0** fields_container (type: ['fields_container', 'field']) (optional: False): 

- **Pin 1** e_shell_layer (type: ['int32', 'enum dataProcessing::EShellLayers']) (optional: False): 0:Top, 1: Bottom, 2: BottomTop, 3:Mid, 4:BottomTopMid

- **Pin 2** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): Mesh support of the input fields_container, in case it does not have one defined. If the fields_container contains mixed shell/solid results, the mesh is required (either by connecting this pin or in the support).

- **Pin 26** merge (type: ['bool']) (optional: True): If set to true, merge shells and solids regarding the shell layer set in s_shell_layer pin (false by default).


## Outputs


- **Pin 0** fields_container (type: ['fields_container', 'field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: true): If permissive is set to false, the operator run will ensure the 'change shell layers' operation is allowed (for example, if asking mid layer for a field defined on top and bottom layers, the computed field will be empty). If permissive is set to true, the operator run will be done in a permissive way (no check). Default is true.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: change_shell_layers
- **full name**: utility.change_shell_layers
- **internal name**: change_shellLayers
- **license**: None