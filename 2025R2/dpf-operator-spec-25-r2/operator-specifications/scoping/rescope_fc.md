---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:rescope (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Rescopes a field on the given scoping. If an ID does not exist in the original field, the default value (in 2) is used when defined.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>) |  |
| <strong>Pin 2</strong>|  default_value |[`double`](./../../getting-started/using-data-containers.md#double), [`vector<double>`](./../../getting-started/using-data-containers.md#vector<double>) | If pin 2 is used, the IDs not found in the field are added with this default value. |


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

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: rescope_fc

 **Full name**: scoping.rescope_fc

 **Internal name**: Rescope_fc

 **License**: None
 
