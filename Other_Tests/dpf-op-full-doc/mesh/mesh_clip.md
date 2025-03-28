# mesh:mesh clipper

## Description

Clips a volume mesh along an iso value x, and construct the volume mesh defined by v < x.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 1** iso_value (type: ['double']) (optional: False): iso value

- **Pin 2** closed_surface (type: ['int32']) (optional: False): 1: closed surface, 0: iso surface.

- **Pin 3** mesh (type: ['abstract_meshed_region']) (optional: True): 

- **Pin 4** slice_surfaces (type: ['bool']) (optional: False): True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.


## Outputs


- **Pin 0** field (type: ['field']): 

- **Pin 2** mesh (type: ['meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_clip
- **full name**: mesh.mesh_clip
- **internal name**: mesh_clip
- **license**: None