---
category: mesh
plugin: vtk
license: None
---

# mesh:mesh to pyvista

## Description

Export a MeshedRegion in the pyVista format.

## Inputs


- **Pin 2** coordinates (type: ['field']) (optional: True): Node coordinates. If not set, the node coordinates of the mesh are employed.

- **Pin 6** as_linear (type: ['bool']) (optional: True): Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): mesh to export in pyVista format

- **Pin 60** vtk_updated (type: ['bool']) (optional: True): True if the VTK version employed by pyVista is > VTK 9. Default true.

- **Pin 200** as_poly (type: ['bool']) (optional: True): Export elements as polyhedrons (cell-face-node representation). Default false.


## Outputs


- **Pin 0** nodes (type: ['field']): Node coordinates double vector

- **Pin 1** cells (type: ['vector<int32>']): Cell connectivity int vector

- **Pin 2** cell_types (type: ['vector<int32>']): Cell types property int vector

- **Pin 3** offsets (type: ['vector<int32>']): If vtk_updated=false, offsets int vector


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: vtk
- **scripting name**: None
- **full name**: None
- **internal name**: mesh_to_pyvista
- **license**: None