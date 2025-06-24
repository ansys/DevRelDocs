---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:reduce sampling scoping

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Take a scoping and remove half of it's content.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 1</strong>|  denominator |[`int32`](../../getting-started/using-data-containers.md#int32) | Set the number of time the scoping is reduced (default is 2). Must be integer value above 1. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: reduce_sampling

 **Full name**: scoping.reduce_sampling

 **Internal name**: scoping::reduce_sampling

 **License**: None
 
