---
category: mesh
plugin: core
license: None
---

# mesh:mesh to tetra

**Version: 0.0.0**

## Description

Converts 3D meshes of arbitrary 3D element types into a tetrahedral mesh, output at pin (0). Non 3D elements are ignored. Scopings providing the mapping from resulting nodes & elements to their original ID in the input mesh are provided, output pins (1) & (2) respectively.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh with arbitrary element types. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Tetrahedralized mesh. |
|  **Pin 1**| node_mapping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Node mapping. |
|  **Pin 2**| element_mapping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Element mapping. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_to_tetra

 **Full name**: mesh.mesh_to_tetra

 **Internal name**: mesh_to_tetra

 **License**: None


## Changelog

- Version 0.0.0: Initial release.