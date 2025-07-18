---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics

**Version: 0.0.0**

## Description

Generate tessellation for input mesh

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 2</strong>|  node_normals |[`bool`](../../core-concepts/dpf-types.md#standard-types) | average element normals for node normals (default no, use element normals for node normals) |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| nodes |[`field`](../../core-concepts/dpf-types.md#field) | node coordinates |
|  **Pin 1**| normals |[`field`](../../core-concepts/dpf-types.md#field) | node normals |
|  **Pin 2**| connectivity |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_to_graphics

 **Full name**: mesh.mesh_to_graphics

 **Internal name**: mesh_to_graphics

 **License**: None


## Changelog

- Version 0.0.0: Initial release.