---
category: serialization
plugin: vtk
license: None
---

# serialization:vtu export

**Version: 0.0.0**

## Description

Export DPF data into vtu format.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  directory |[`string`](../../core-concepts/dpf-types.md#standard-types) | directory path |
| <strong>Pin 1</strong>|  base_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | vtu base file name, (default is file) |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) | Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored. |
| <strong>Pin 100</strong>|  write_mode |[`string`](../../core-concepts/dpf-types.md#standard-types) | Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed) |
| <strong>Pin 101</strong>|  as_point_cloud |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Whether to export the mesh as a point cloud. Default is False. |
| <strong>Pin 102</strong>|  export_faces |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Whether to also export faces as shell elements when the mesh contains cells. Default is False. |
| <strong>Pin 103</strong>|  mesh_properties |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`string_field`](../../core-concepts/dpf-types.md#string-field) | List of names of mesh properties to export. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| path |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | list of output vtu file path |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: vtu_export

 **License**: None


## Changelog

- Version 0.0.0: Initial release.