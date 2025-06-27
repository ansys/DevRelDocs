---
category: geo
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# geo:spherical to cartesian coordinates (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Converts 3D field from spherical coordinates to cartesian coordinates.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: spherical_to_cartesian_fc

 **Full name**: geo.spherical_to_cartesian_fc

 **Internal name**: spherical_to_cartesian_fc

 **License**: any_dpf_supported_increments
 
