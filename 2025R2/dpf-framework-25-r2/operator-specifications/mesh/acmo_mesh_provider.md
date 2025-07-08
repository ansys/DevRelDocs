---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:acmo mesh provider

Version: 0.0.0


## Description

Converts an Assembly Mesh into a DPF Meshes container


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | assembly_mesh |[`ans_dispatch_holder`](../../core-concepts/dpf-types.md#ans-dispatch-holder), [`struct IAnsDispatch`](../../core-concepts/dpf-types.md#struct-iansdispatch) |  |
| <strong>Pin 1</strong> | unit |[`string`](../../core-concepts/dpf-types.md#string) |  |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | meshes_container |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: acmo_mesh_provider

 **License**: None
 

## Changelog

- Version 0.0.0: Initial release.