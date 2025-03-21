---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:change cs (meshes)

## Description

Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.

## Inputs


- **Pin 0** meshes (type: ['meshed_region', 'meshes_container']) (optional: False): 

- **Pin 1** coordinate_system (type: ['field']) (optional: False): 3-3 rotation matrix + 3 translations (X, Y, Z)


## Outputs


- **Pin 0** meshed_region (type: ['meshed_region', 'meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: change_cs
- **full name**: mesh.change_cs
- **internal name**: mesh::change_cs
- **license**: any_dpf_supported_increments