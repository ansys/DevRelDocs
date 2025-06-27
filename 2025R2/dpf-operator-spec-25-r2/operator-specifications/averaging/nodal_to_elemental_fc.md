---
category: averaging
plugin: core
license: None
Version: 0.0.0
---

# averaging:nodal to elemental (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Transforms Nodal fields into Elemental fields using an averaging process. The result is computed on a given element's scoping. If the input fields are mixed shell/solid, and the shell's layers are not specified as collapsed, then the fields are split by element shape and the output fields container has an elshape label.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | The mesh region in this pin is used to perform the averaging. It is used if there is no fields support. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Average only on these elements. If it is a scoping container, the label must correspond to the one of the fields containers. |
| <strong>Pin 10</strong>|  collapse_shell_layers |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If true, shell layers are averaged as well (default is false). |
| <strong>Pin 26</strong>|  merge_solid_shell |[`bool`](../../core-concepts/dpf-types.md#standard-types) | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| <strong>Pin 27</strong>|  shell_layer |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: nodal_to_elemental_fc

 **Full name**: averaging.nodal_to_elemental_fc

 **Internal name**: nodal_to_elemental_fc

 **License**: None
 
