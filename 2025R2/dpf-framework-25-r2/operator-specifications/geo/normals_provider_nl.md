---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:normals provider nl (nodes, faces, or elements)

**Version: 0.0.0**

## Description

Computes the normals on nodes/faces/elements based on integration points (more accurate for non-linear elements) on a skin mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Skin, face, or shell mesh region. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Elemental, ElementalNodal, or Nodal scoping. Location derived from this. |
| <strong>Pin 9</strong>|  requested_location |[`string`](../../core-concepts/dpf-types.md#standard-types) | If no scoping, specifies location. If scoping is Elemental or ElementalNodal this overrides scoping. Default is Elemental. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: normals_provider_nl

 **Full name**: geo.normals_provider_nl

 **Internal name**: normals_provider_nl

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.