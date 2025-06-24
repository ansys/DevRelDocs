---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:split on property type

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Splits a given scoping or the mesh scoping (nodal or elemental) on given properties (elshape and/or material) and returns a scopings container with those split scopings.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping) | Scoping |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region) | mesh region |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  requested_location |[`string`](./../../getting-started/using-data-containers.md#string) | location (default is elemental) |
| <strong>Pin 12</strong>|  skin_case |[`int32`](./../../getting-started/using-data-containers.md#int32) | set to 0: to have skin elements in their own group, 1: merge skin and solid elements, 2: merge skin and shell elements (default) |
| <strong>Pin 13</strong>|  label |[`string`](./../../getting-started/using-data-containers.md#string), [`vector<string>`](./../../getting-started/using-data-containers.md#vector<string>) | properties to apply the filtering 'mat' and/or 'elshape' (default is 'elshape') |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scopings_container`](./../../getting-started/using-data-containers.md#scopings-container) | Scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: split_on_property_type

 **Full name**: scoping.split_on_property_type

 **Internal name**: scoping::by_property

 **License**: None
 
