---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:elements facets surfaces over time

## Description

Calculates for a mesh, the surface of each element's facet over time for each specified time step. The output is a new mesh made with only surface elements.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
| <strong>Pin 2</strong>|  displacement |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Displacement field's container. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Surfaces field. |
| <strong>Pin 1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Mesh made of surface elements only. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: geo
- Plugin: core
- Scripting name: elements_facets_surfaces_over_time
- Full name: geo.elements_facets_surfaces_over_time
- Internal name: surfaces_provider
- License: any_dpf_supported_increments
  