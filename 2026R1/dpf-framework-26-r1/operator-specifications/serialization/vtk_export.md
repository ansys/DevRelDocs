---
category: serialization
plugin: vtk
license: None
---

# serialization:vtk export

**Version: 0.0.0**

## Description

Write the input field and fields container into a given vtk path

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -1</strong>|  export_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Either export volume elements in the mesh with their fields with value 0 or faces elements in the mesh with their fields with value 1 (default is 0) |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | path with vtk extension were the export occurs |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | necessary if the first field or fields container don't have a mesh in their support |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`field`](../../core-concepts/dpf-types.md#field) | fields exported |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: vtk_export

 **Full name**: serialization.vtk_export

 **Internal name**: vtk_export

 **License**: None


## Changelog

- Version 0.0.0: Initial release.