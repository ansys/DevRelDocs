---
category: mapping
plugin: core
license: None
---

# mapping:find reduced coordinates

## Description

Finds the elements corresponding to the given coordinates in input and computes their reduced coordinates in those elements.

## Inputs


- **Pin 1** coordinates (type: ['field', 'fields_container', 'abstract_meshed_region', 'meshes_container']) (optional: False): 

- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): If the first field in input has no mesh in support, then the mesh in this pin is expected (default is false). If a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container.

- **Pin 200** use_quadratic_elements (type: ['bool']) (optional: True): If this pin is set to true, reduced coordinates are computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false.


## Outputs


- **Pin 0** reduced_coordinates (type: ['fields_container']): coordinates in the reference elements

- **Pin 1** element_ids (type: ['scopings_container']): Ids of the elements where each set of reduced coordinates is found


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: find_reduced_coordinates
- **full name**: mapping.find_reduced_coordinates
- **internal name**: find_reduced_coordinates
- **license**: None