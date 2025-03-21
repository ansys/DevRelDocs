# mapping:on coordinates

## Description

Evaluates a result on specified coordinates (interpolates results inside elements with shape functions).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** coordinates (type: ['field', 'fields_container', 'abstract_meshed_region', 'meshes_container']) (optional: False): 

- **Pin 2** create_support (type: ['bool']) (optional: True): if this pin is set to true, then, a support associated to the fields consisting of points is created

- **Pin 3** mapping_on_scoping (type: ['bool']) (optional: True): if this pin is set to true, then the mapping between the coordinates and the fields is created only on the first field scoping

- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container

- **Pin 200** use_quadratic_elements (type: ['bool']) (optional: True): If this pin is set to true, the element search for each coordinate is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: on_coordinates
- **full name**: mapping.on_coordinates
- **internal name**: mapping
- **license**: None