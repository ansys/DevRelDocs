---
category: result
plugin: mapdl
license: None
Version: 0.0.0
---

# result:global_to_nodal

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Rotate results from global coordinate system to local coordinate system.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldA |[`field`](../../getting-started/using-data-containers.md#field) | Vector or tensor field that must be rotated, expressed in global coordinate system. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldB |[`field`](../../getting-started/using-data-containers.md#field) | Nodal euler angles defined from an rst file. Those  must be the rotations from Nodal to Global. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) | Rotated field |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: mapdl.global_to_nodal

 **Full name**: result.mapdl.global_to_nodal

 **Internal name**: GlobalToNodal

 **License**: None
 
