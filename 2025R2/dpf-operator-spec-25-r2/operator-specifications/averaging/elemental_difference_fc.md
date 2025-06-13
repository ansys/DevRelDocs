---
category: averaging
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# averaging:elemental difference (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the unaveraged or averaged (depending on the input fields) computed result for all nodes in this element. The result is computed on a given element scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](./../../getting-started/using-data-containers.md#meshes-container) | The mesh region in this pin is used to perform the averaging, used if there is no fields support. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping), [`scopings_container`](./../../getting-started/using-data-containers.md#scopings-container) | Average only on these elements. If it is scoping container, the label must correspond to the one of the fields container. |
| <strong>Pin 10</strong>|  collapse_shell_layers |[`bool`](./../../getting-started/using-data-containers.md#bool) | The maximum elemental difference is taken through the different shell layers if true (default is false). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](./../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_difference_fc

 **Full name**: averaging.elemental_difference_fc

 **Internal name**: elemental_difference_fc

 **License**: any_dpf_supported_increments
 
