# serialization:vtu export

## Description

Export DPF data into vtu format.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | directory |[`string`](../../getting-started/using-data-containers.md#string) | Yes | directory path |
| **Pin 1** | base_name |[`string`](../../getting-started/using-data-containers.md#string) | No | vtu base file name, (default is file) |
| **Pin 2** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | mesh |
| **Pin 3** | fields |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes | Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored. |
| **Pin 100** | write_mode |[`string`](../../getting-started/using-data-containers.md#string) | No | Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed) |
| **Pin 101** | as_point_cloud |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Whether to export the mesh as a point cloud. Default is False. |
| **Pin 102** | export_faces |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Whether to also export faces as shell elements when the mesh contains cells. Default is False. |
| **Pin 103** | mesh_properties |[`vector<string>`](../../getting-started/using-data-containers.md#vector<string>), [`string_field`](../../getting-started/using-data-containers.md#string-field) | No | List of names of mesh properties to export. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | path |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes | list of output vtu file path |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | vtk | None | None | vtu_export | None |
