# scoping:transpose

## Description

Transposes the input scoping or scopings container (Elemental/Faces --> Nodal, or Nodal ---> Elemental/Faces), based on the input mesh region.

## Inputs


- **Pin 0** mesh_scoping (type: ['scoping', 'scopings_container']) (optional: False): Scoping or scopings container (the input type is the output type)

- **Pin 1** meshed_region (type: ['meshed_region', 'meshes_container']) (optional: False): 

- **Pin 2** inclusive (type: ['int32']) (optional: True): if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included

- **Pin 9** requested_location (type: ['string']) (optional: True): Output scoping location for meshes with nodes, faces and elements. By default, elemental and faces scopings transpose to nodal, and nodal scopings transpose to elemental.


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping', 'scopings_container']): Scoping or scopings container (the input type is the output type)


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: transpose
- **full name**: scoping.transpose
- **internal name**: transpose_scoping
- **license**: None