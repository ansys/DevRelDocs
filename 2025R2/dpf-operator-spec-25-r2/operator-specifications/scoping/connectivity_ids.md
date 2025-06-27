---
category: scoping
plugin: core
license: None
Version: 0.0.0
---

# scoping:connectivity ids

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_scoping |[`scoping`](./../../core-concepts/dpf-types#scoping) | Elemental scoping |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](./../../core-concepts/dpf-types#abstract-meshed-region) | the support of the scoping is expected if there is no mesh in input |
| <strong>Pin 10</strong>|  take_mid_nodes |[`bool`](./../../core-concepts/dpf-types#standard-types) | default is true |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](./../../core-concepts/dpf-types#scoping) |  |
|  **Pin 1**| elemental_scoping |[`scoping`](./../../core-concepts/dpf-types#scoping) | same as the input scoping but with ids duplicated to have the same size as nodal output scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: connectivity_ids

 **Full name**: scoping.connectivity_ids

 **Internal name**: scoping::connectivity_ids

 **License**: None
 
