---
category: geo
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# geo:rotate cylindrical coordinates

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Rotates a field to its corresponding values into the specified cylindrical coordinate system (corresponding to the field position). If a coordinate system is not set in the coordinate_system pin, the field is rotated on each node following the local polar coordinate system.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types#field), [`fields_container`](../../core-concepts/dpf-types#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  coordinate_system |[`field`](../../core-concepts/dpf-types#field) | 3-3 rotation matrix and origin coordinates must be set here to define a coordinate system. |
| <strong>Pin 2</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types#abstract-meshed-region) | Mesh support of the input field. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: rotate_in_cylindrical_cs

 **Full name**: geo.rotate_in_cylindrical_cs

 **Internal name**: transform_cylindricalCS

 **License**: any_dpf_supported_increments
 
