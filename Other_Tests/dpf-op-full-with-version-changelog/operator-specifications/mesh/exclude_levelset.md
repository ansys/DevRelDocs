---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:exclude levelset

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Takes two level sets and excludes the second one from the first.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldA |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldB |[`field`](../../getting-started/using-data-containers.md#field) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: exclude_levelset

 **Full name**: mesh.exclude_levelset

 **Internal name**: levelset::exclude

 **License**: None
 
