---
category: scoping
plugin: core
license: None
---

# scoping:connectivity ids

## Description

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Elemental scoping |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | the support of the scoping is expected if there is no mesh in input |
| <strong>Pin 10</strong>|  take_mid_nodes |[`bool`](../../getting-started/using-data-containers.md#bool) | default is true |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | elemental_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | same as the input scoping but with ids duplicated to have the same size as nodal output scoping |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: scoping
- Plugin: core
- Scripting name: connectivity_ids
- Full name: scoping.connectivity_ids
- Internal name: scoping::connectivity_ids
- License: None
  