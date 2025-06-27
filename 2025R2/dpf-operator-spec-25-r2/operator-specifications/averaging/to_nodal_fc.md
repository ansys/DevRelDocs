---
category: averaging
plugin: core
license: None
Version: 0.0.0
---

# averaging:to nodal (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Transforms fields into Nodal fields using an averaging process. The result is computed on a given node's scoping.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../core-concepts/dpf-types#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](./../../core-concepts/dpf-types#abstract-meshed-region) |  |
| <strong>Pin 3</strong>|  mesh_scoping |[`scoping`](./../../core-concepts/dpf-types#scoping) |  |
| <strong>Pin 26</strong>|  merge_solid_shell |[`bool`](./../../core-concepts/dpf-types#standard-types) | For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default). |
| <strong>Pin 27</strong>|  shell_layer |[`int32`](./../../core-concepts/dpf-types#standard-types) | If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../core-concepts/dpf-types#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../core-concepts/dpf-types#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](./../../core-concepts/dpf-types#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: to_nodal_fc

 **Full name**: averaging.to_nodal_fc

 **Internal name**: to_nodal_fc

 **License**: None
 
