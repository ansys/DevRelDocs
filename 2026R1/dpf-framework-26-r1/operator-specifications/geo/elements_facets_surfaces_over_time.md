---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:elements facets surfaces over time

**Version: 0.0.0**

## Description

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 2</strong>|  displacement |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Displacement field's container. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Surfaces field. |
|  **Pin 1**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh made of surface elements only. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: elements_facets_surfaces_over_time

 **Full name**: geo.elements_facets_surfaces_over_time

 **Internal name**: surfaces_provider

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.