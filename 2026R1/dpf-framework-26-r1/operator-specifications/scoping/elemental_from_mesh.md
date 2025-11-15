---
category: scoping
plugin: core
license: None
---

# scoping:elements in mesh

**Version: 0.0.0**

## Description

Retrieves the elemental scoping from a mesh, containing all element IDs with elemental location.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh from which to extract the elemental scoping |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping containing all element IDs in the mesh with 'Elemental' location |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: elemental_from_mesh

 **Full name**: scoping.elemental_from_mesh

 **Internal name**: GetElementScopingFromMesh

 **License**: None


## Changelog

- Version 0.0.0: Initial release.