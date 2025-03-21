---
category: mapping
plugin: core
license: None
---

# mapping:on reduced coordinates

## Description

Evaluates a result on specified reduced coordinates of given elements (interpolates results inside elements with shape functions).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** reduced_coordinates (type: ['field', 'fields_container']) (optional: False): coordinates in the reference elements to find (found with the operator "find_reduced_coordinates")

- **Pin 2** element_ids (type: ['scopings_container']) (optional: False): Ids of the elements where each set of reduced coordinates is found (found with the operator "find_reduced_coordinates")

- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container

- **Pin 200** use_quadratic_elements (type: ['bool']) (optional: True): If this pin is set to true, the interpolation is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. To use only when results have mid side nodes values.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: on_reduced_coordinates
- **full name**: mapping.on_reduced_coordinates
- **internal name**: interpolation_operator
- **license**: None