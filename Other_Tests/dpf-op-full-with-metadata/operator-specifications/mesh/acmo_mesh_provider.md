---
category: mesh
plugin: core
license: None
---

# mesh:acmo mesh provider

## Description

Converts an Assembly Mesh into a DPF Meshes container

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  assembly_mesh |[`ans_dispatch_holder`](../../getting-started/using-data-containers.md#ans-dispatch-holder), [`struct IAnsDispatch`](../../getting-started/using-data-containers.md#struct-iansdispatch) |  |
| <strong>Pin 1</strong>|  unit |[`string`](../../getting-started/using-data-containers.md#string) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | meshes_container |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: mesh
- Plugin: core
- Scripting name: None
- Full name: None
- Internal name: acmo_mesh_provider
- License: None
  