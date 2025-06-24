---
category: averaging
plugin: core
license: None
Version: 0.0.0
---

# averaging:elemental nodal to nodal elemental (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Transforms an Elemental Nodal field to Nodal Elemental. The result is computed on a given node's scoping.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](./../../getting-started/using-data-containers.md#field), [`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_nodal_to_nodal_elemental

 **Full name**: averaging.elemental_nodal_to_nodal_elemental

 **Internal name**: ElementalNodal_To_NodalElemental

 **License**: None
 
