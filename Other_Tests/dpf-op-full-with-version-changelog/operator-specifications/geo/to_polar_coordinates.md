---
category: geo
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# geo:to polar coordinates

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Finds r, theta (rad), and z coordinates of a coordinates (nodal) field in a cartesian coordinates system where the input coordinate system defines the rotation axis and the origin.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  coordinate_system |[`field`](../../getting-started/using-data-containers.md#field) | 3-3 rotation matrix and origin coordinates must be set here to define a coordinate system. By default, the rotation axis is the z axis and the origin is [0,0,0]. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: to_polar_coordinates

 **Full name**: geo.to_polar_coordinates

 **Internal name**: polar_coordinates

 **License**: any_dpf_supported_increments
 
