---
category: scoping
plugin: core
license: None
---

# scoping:from mesh

**Version: 0.0.0**

## Description

Provides the entire mesh scoping based on the requested location

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | if nothing the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: from_mesh

 **Full name**: scoping.from_mesh

 **Internal name**: MeshScopingProvider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.