# mapping:solid to skin

## Description

Maps a field defined on solid elements to a field defined on skin elements. Three cases are possible, based on the solid field data location; (i) Elemental: The values associated with the solid elements are copied according to those underlying the skin, (ii) Nodal: The solid field is rescoped with respect to the nodes of the skin mesh, (iii) ElementalNodal: The values are copied from the solid mesh to the skin mesh for each element face and the nodes associated with it.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: False): skin mesh region expected

- **Pin 2** solid_mesh (type: ['abstract_meshed_region']) (optional: True): Solid mesh support (optional).


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: solid_to_skin
- **full name**: mapping.solid_to_skin
- **internal name**: solid_to_skin
- **license**: None