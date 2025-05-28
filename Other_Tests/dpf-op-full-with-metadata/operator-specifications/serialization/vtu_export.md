---
category: serialization
plugin: vtk
license: None
---

# serialization:vtu export

## Description

Export DPF data into vtu format.

### Plugin

vtk

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  directory |[`string`](../../getting-started/using-data-containers.md#string) | directory path |
| <strong>Pin 1</strong>|  base_name |[`string`](../../getting-started/using-data-containers.md#string) | vtu base file name, (default is file) |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | mesh |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`property_field`](../../getting-started/using-data-containers.md#property-field) | Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored. |
| <strong>Pin 100</strong>|  write_mode |[`string`](../../getting-started/using-data-containers.md#string) | Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed) |
| <strong>Pin 101</strong>|  as_point_cloud |[`bool`](../../getting-started/using-data-containers.md#bool) | Whether to export the mesh as a point cloud. Default is False. |
| <strong>Pin 102</strong>|  export_faces |[`bool`](../../getting-started/using-data-containers.md#bool) | Whether to also export faces as shell elements when the mesh contains cells. Default is False. |
| <strong>Pin 103</strong>|  mesh_properties |[`vector<string>`](../../getting-started/using-data-containers.md#vector<string>), [`string_field`](../../getting-started/using-data-containers.md#string-field) | List of names of mesh properties to export. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | path |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | list of output vtu file path |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

- Category: serialization
- Plugin: vtk
- Scripting name: None
- Full name: None
- Internal name: vtu_export
- License: None
  