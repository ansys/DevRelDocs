---
category: result
plugin: mapdl
license: None
---

# result:euler nodes

## Description

Reads a field made of 3 coordinates and 3 Euler angles (6 dofs) by node from the result file.

## Inputs


- **Pin 3** streams_container (type: ['streams_container', 'stream']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 6** coord_and_euler (type: ['bool']) (optional: False): if true, then the field has ncomp=6 with 3 coordinates and 3 Euler angles, else there is only the Euler angles (default is true).

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: euler_nodes
- **full name**: result.euler_nodes
- **internal name**: coords_and_euler_nodes
- **license**: None