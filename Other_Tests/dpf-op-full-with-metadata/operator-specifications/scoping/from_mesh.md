---
category: scoping
plugin: core
license: None
---

# scoping:from mesh

## Description

Provides the entire mesh scoping based on the requested location

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong>|  requested_location |[`string`](../../getting-started/using-data-containers.md#string) | if nothing the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: scoping
- Plugin: core
- Scripting name: from_mesh
- Full name: scoping.from_mesh
- Internal name: MeshScopingProvider
- License: None
  