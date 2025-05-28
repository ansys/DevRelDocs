---
category: utility
plugin: core
license: None
---

# utility:change shell layers

## Description

Extract the expected shell layers from the input fields. If the fields contain only one layer and the permissive configuration input is set to true then it returns the input fields. If permissive configuration input is set to false, any change which should not be permitted won't be achieved and corresponding field in output will be empty. If permissive configuration input is set to true (default), carefully check the result.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  e_shell_layer |[`int32`](../../getting-started/using-data-containers.md#int32), [`enum dataProcessing::EShellLayers`](../../getting-started/using-data-containers.md#enum-dataprocessing::eshelllayers) | 0:Top, 1: Bottom, 2: BottomTop, 3:Mid, 4:BottomTopMid |
| <strong>Pin 2</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | Mesh support of the input fields_container, in case it does not have one defined. If the fields_container contains mixed shell/solid results, the mesh is required (either by connecting this pin or in the support). |
| <strong>Pin 26</strong>|  merge |[`bool`](../../getting-started/using-data-containers.md#bool) | If set to true, merge shells and solids regarding the shell layer set in s_shell_layer pin (false by default). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | If permissive is set to false, the operator run will ensure the 'change shell layers' operation is allowed (for example, if asking mid layer for a field defined on top and bottom layers, the computed field will be empty). If permissive is set to true, the operator run will be done in a permissive way (no check). Default is true. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: change_shell_layers
- Full name: utility.change_shell_layers
- Internal name: change_shellLayers
- License: None
  