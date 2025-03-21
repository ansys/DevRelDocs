---
category: mesh
plugin: core
license: None
---

# mesh:mesh to tetra

## Description

Converts 3D meshes of arbitrary 3D element types into a tetrahedral mesh, output at pin (0). Non 3D elements are ignored. Scopings providing the mapping from resulting nodes & elements to their original ID in the input mesh are provided, output pins (1) & (2) respectively.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): Mesh with arbitrary element types.


## Outputs


- **Pin 0** mesh (type: ['meshed_region']): Tetrahedralized mesh.

- **Pin 1** node_mapping (type: ['scoping']): Node mapping.

- **Pin 2** element_mapping (type: ['scoping']): Element mapping.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_to_tetra
- **full name**: mesh.mesh_to_tetra
- **internal name**: mesh_to_tetra
- **license**: None