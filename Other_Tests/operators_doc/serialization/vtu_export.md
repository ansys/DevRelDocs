# serialization:vtu export

## Description

Export DPF data into vtu format.

## Inputs


- **Pin 0** directory (type: ['string']) (optional: False): directory path

- **Pin 1** base_name (type: ['string']) (optional: True): vtu base file name, (default is file)

- **Pin 2** mesh (type: ['abstract_meshed_region']) (optional: False): mesh

- **Pin 3** fields (type: ['field', 'fields_container', 'property_field']) (optional: False): Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored.

- **Pin 100** write_mode (type: ['string']) (optional: True): Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed)

- **Pin 101** as_point_cloud (type: ['bool']) (optional: True): Whether to export the mesh as a point cloud. Default is False.

- **Pin 102** export_faces (type: ['bool']) (optional: True): Whether to also export faces as shell elements when the mesh contains cells. Default is False.

- **Pin 103** mesh_properties (type: ['vector<string>', 'string_field']) (optional: True): List of names of mesh properties to export.


## Outputs


- **Pin 0** path (type: ['data_sources']): list of output vtu file path


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: serialization
- **plugin**: vtk
- **scripting name**: None
- **full name**: None
- **internal name**: vtu_export
- **license**: None