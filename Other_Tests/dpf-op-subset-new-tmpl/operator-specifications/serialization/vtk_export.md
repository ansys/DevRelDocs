# serialization:vtk export

## Description

Write the input field and fields container into a given vtk path

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin -1** | export_type |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Either export volume elements in the mesh with their fields with value 0 or faces elements in the mesh with their fields with value 1 (default is 0) |
| **Pin 0** | file_path |[`string`](../../getting-started/using-data-containers.md#string) | Yes | path with vtk extension were the export occurs |
| **Pin 1** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No | necessary if the first field or fields container don't have a mesh in their support |
| **Pin 2** | fields |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | Yes | fields exported |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | vtk | vtk_export | serialization.vtk_export | vtk_export | None |
