---
category: serialization
plugin: vtk
license: None
---

# serialization:vtk export

## Description

Write the input field and fields container into a given vtk path

## Inputs


- **Pin -1** export_type (type: ['int32']) (optional: True): Either export volume elements in the mesh with their fields with value 0 or faces elements in the mesh with their fields with value 1 (default is 0)

- **Pin 0** file_path (type: ['string']) (optional: False): path with vtk extension were the export occurs

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: True): necessary if the first field or fields container don't have a mesh in their support

- **Pin 2** fields (type: ['fields_container', 'field']) (optional: False): fields exported


## Outputs



## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: vtk
- **scripting name**: vtk_export
- **full name**: serialization.vtk_export
- **internal name**: vtk_export
- **license**: None