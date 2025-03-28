# averaging:to nodal (field)

## Description

Transforms a field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 26** merge_solid_shell (type: ['bool']) (optional: True): For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default).

- **Pin 27** shell_layer (type: ['int32']) (optional: True): If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer).


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: to_nodal
- **full name**: averaging.to_nodal
- **internal name**: to_nodal
- **license**: None